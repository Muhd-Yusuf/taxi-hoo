"use client";

import {
  Clock,
  MapPin,
  Navigation,
  Star,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Car,
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
    icon: Car,
  },
  cancelled: {
    label: "Cancelled",
    color: "bg-danger-light text-danger",
    icon: XCircle,
  },
};

export default function HistoryPage() {
  const passengerRides = mockRides.filter(
    (r) => r.passenger === "Sarah Johnson"
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Ride History</h1>
          <p className="text-text-secondary text-sm mt-1">
            View all your previous trips
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Clock size={14} />
          {passengerRides.length} rides
        </div>
      </div>

      <div className="space-y-4">
        {passengerRides.map((ride) => {
          const status = statusConfig[ride.status];
          const StatusIcon = status.icon;

          return (
            <div
              key={ride.id}
              className="bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center">
                    <Car size={18} className="text-text-muted" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">
                      {ride.driver}
                    </p>
                    <p className="text-xs text-text-muted">
                      {ride.date} · {ride.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
                  >
                    <StatusIcon size={12} />
                    {status.label}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-success" />
                  </div>
                  <p className="text-sm text-dark">{ride.pickup}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-sm text-dark">{ride.destination}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-text-secondary flex items-center gap-1">
                    <Navigation size={12} />
                    {ride.distance}
                  </span>
                  <span className="text-sm text-text-secondary flex items-center gap-1">
                    <Clock size={12} />
                    {ride.duration}
                  </span>
                  {ride.rating && (
                    <span className="text-sm text-text-secondary flex items-center gap-1">
                      <Star
                        size={12}
                        className="text-primary fill-primary"
                      />
                      {ride.rating}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-dark">
                    ₦{ride.fare.toLocaleString()}
                  </span>
                  {ride.status === "completed" && (
                    <button className="flex items-center gap-1 text-xs text-primary hover:text-primary-hover font-medium">
                      <RefreshCw size={12} />
                      Rebook
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* All rides */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-dark mb-4">All Rides</h2>
        <div className="space-y-4">
          {mockRides.map((ride) => {
            const status = statusConfig[ride.status];
            const StatusIcon = status.icon;

            return (
              <div
                key={ride.id}
                className="bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center">
                      <Car size={18} className="text-text-muted" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm">
                        {ride.pickup}
                      </p>
                      <p className="text-xs text-text-muted">
                        to {ride.destination}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <p className="font-bold text-dark">
                        ₦{ride.fare.toLocaleString()}
                      </p>
                      <p className="text-xs text-text-muted">{ride.date}</p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}
                    >
                      <StatusIcon size={10} />
                      {status.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
