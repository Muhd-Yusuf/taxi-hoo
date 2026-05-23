"use client";

import {
  Search,
  Filter,
  Car,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  Star,
  MapPin,
  Navigation,
} from "lucide-react";
import { mockRides } from "@/lib/mock-data";

const statusConfig = {
  completed: {
    label: "Completed",
    color: "bg-success-light text-success",
    icon: CheckCircle2,
  },
  in_progress: {
    label: "In Progress",
    color: "bg-primary-light text-primary-dark",
    icon: Clock,
  },
  cancelled: {
    label: "Cancelled",
    color: "bg-danger-light text-danger",
    icon: XCircle,
  },
};

export default function AdminRidesPage() {
  const completedRides = mockRides.filter(
    (r) => r.status === "completed"
  ).length;
  const activeRides = mockRides.filter(
    (r) => r.status === "in_progress"
  ).length;
  const cancelledRides = mockRides.filter(
    (r) => r.status === "cancelled"
  ).length;
  const totalRevenue = mockRides
    .filter((r) => r.status === "completed")
    .reduce((sum, r) => sum + r.fare, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">All Rides</h1>
          <p className="text-text-secondary text-sm mt-1">
            Monitor and manage all ride activities
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-border p-4">
          <p className="text-sm text-text-muted">Total Rides</p>
          <p className="text-xl font-bold text-dark">{mockRides.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-4">
          <p className="text-sm text-text-muted">Completed</p>
          <p className="text-xl font-bold text-success">{completedRides}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-4">
          <p className="text-sm text-text-muted">Active</p>
          <p className="text-xl font-bold text-primary">{activeRides}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-4">
          <p className="text-sm text-text-muted">Revenue</p>
          <p className="text-xl font-bold text-dark">
            ₦{totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            placeholder="Search rides..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark focus:outline-none focus:border-primary">
          <option>All Status</option>
          <option>Completed</option>
          <option>In Progress</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Rides Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Ride ID
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Passenger
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Driver
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Route
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Fare
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Date
                </th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockRides.map((ride) => {
                const status = statusConfig[ride.status];
                const StatusIcon = status.icon;
                return (
                  <tr
                    key={ride.id}
                    className="hover:bg-surface-alt transition-colors"
                  >
                    <td className="py-4 px-5">
                      <span className="text-sm font-mono text-text-secondary">
                        {ride.id}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm font-medium text-dark">
                        {ride.passenger}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm text-dark">{ride.driver}</span>
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-1 text-xs text-text-secondary">
                        <MapPin size={10} className="text-success" />
                        <span className="truncate max-w-[80px]">
                          {ride.pickup.split(",")[0]}
                        </span>
                        <span>→</span>
                        <Navigation size={10} className="text-primary" />
                        <span className="truncate max-w-[80px]">
                          {ride.destination.split(",")[0]}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-sm font-bold text-dark">
                        ₦{ride.fare.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}
                      >
                        <StatusIcon size={10} />
                        {status.label}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <div>
                        <p className="text-sm text-dark">{ride.date}</p>
                        <p className="text-xs text-text-muted">{ride.time}</p>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button className="p-2 rounded-lg hover:bg-surface-alt transition-colors text-text-muted hover:text-info">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
