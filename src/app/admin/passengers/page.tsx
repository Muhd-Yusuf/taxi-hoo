"use client";

import {
  Search,
  Filter,
  Eye,
  Ban,
  Mail,
  User,
} from "lucide-react";
import { mockPassengers } from "@/lib/mock-data";

export default function AdminPassengersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Manage Passengers</h1>
          <p className="text-text-secondary text-sm mt-1">
            {mockPassengers.length} registered passengers
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
            placeholder="Search passengers..."
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
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Passengers Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockPassengers.map((passenger) => (
          <div
            key={passenger.id}
            className="bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {passenger.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-dark">{passenger.name}</p>
                  <p className="text-xs text-text-muted">{passenger.id}</p>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  passenger.status === "active"
                    ? "bg-success-light text-success"
                    : "bg-surface-alt text-text-muted"
                }`}
              >
                {passenger.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail size={14} className="text-text-muted" />
                {passenger.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <User size={14} className="text-text-muted" />
                {passenger.totalTrips} total trips
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-text-muted">
                Joined {passenger.joined}
              </span>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg hover:bg-surface-alt transition-colors text-text-muted hover:text-info">
                  <Eye size={14} />
                </button>
                <button className="p-2 rounded-lg hover:bg-danger-light transition-colors text-text-muted hover:text-danger">
                  <Ban size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
