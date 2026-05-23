"use client";

import {
  Search,
  Filter,
  MoreVertical,
  Star,
  Car,
  CheckCircle2,
  XCircle,
  Eye,
  Ban,
  User,
} from "lucide-react";
import { mockDrivers } from "@/lib/mock-data";

export default function AdminDriversPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Manage Drivers</h1>
          <p className="text-text-secondary text-sm mt-1">
            {mockDrivers.length} registered drivers
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            placeholder="Search drivers..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-white text-sm font-medium text-dark hover:bg-surface-alt transition-colors">
            <Filter size={14} />
            Filter
          </button>
          <select className="px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark focus:outline-none focus:border-primary">
            <option>All Status</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
      </div>

      {/* Drivers Table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Driver
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Rating
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Trips
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Earnings
                </th>
                <th className="text-left py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Status
                </th>
                <th className="text-right py-4 px-5 text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockDrivers.map((driver) => (
                <tr
                  key={driver.id}
                  className="hover:bg-surface-alt transition-colors"
                >
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {driver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-dark text-sm">
                          {driver.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {driver.phone}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <p className="text-sm text-dark">{driver.vehicle}</p>
                    <p className="text-xs text-text-muted">{driver.plate}</p>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-primary fill-primary"
                      />
                      <span className="text-sm font-medium text-dark">
                        {driver.rating}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-sm text-dark">
                      {driver.trips.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-sm font-medium text-dark">
                      ₦{driver.earnings.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        driver.status === "online"
                          ? "bg-success-light text-success"
                          : "bg-surface-alt text-text-muted"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          driver.status === "online"
                            ? "bg-success"
                            : "bg-text-muted"
                        }`}
                      />
                      {driver.status}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 rounded-lg hover:bg-surface-alt transition-colors text-text-muted hover:text-info">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-success-light transition-colors text-text-muted hover:text-success">
                        <CheckCircle2 size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-danger-light transition-colors text-text-muted hover:text-danger">
                        <Ban size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
