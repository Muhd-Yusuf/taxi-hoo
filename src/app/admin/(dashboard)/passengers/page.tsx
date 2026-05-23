"use client";

import {
  PiMagnifyingGlassBold,
  PiEyeBold,
  PiProhibitBold,
  PiEnvelopeSimpleBold,
  PiMapPinBold,
  PiCalendarBold,
} from "react-icons/pi";
import { mockPassengers } from "@/lib/mock-data";

export default function AdminPassengersPage() {
  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
          Passengers
        </h1>
        <p className="text-[14px] text-text-secondary">
          {mockPassengers.length} registered passengers
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <PiMagnifyingGlassBold
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            placeholder="Search passengers..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-border bg-white text-[13px] text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Passenger cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {mockPassengers.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6 hover:shadow-md transition-all"
          >
            {/* Header: avatar + name + status */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                  <span className="text-[11px] font-bold text-primary">
                    {p.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-dark">
                    {p.name}
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5">{p.id}</p>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                  p.status === "active"
                    ? "bg-success/10 text-success"
                    : "bg-surface-alt text-text-muted"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    p.status === "active" ? "bg-success" : "bg-text-muted"
                  }`}
                />
                {p.status}
              </span>
            </div>

            {/* Info rows */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2.5 text-[12px] text-text-secondary">
                <PiEnvelopeSimpleBold
                  size={13}
                  className="text-text-muted flex-shrink-0"
                />
                <span className="truncate">{p.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[12px] text-text-secondary">
                <PiMapPinBold
                  size={13}
                  className="text-text-muted flex-shrink-0"
                />
                <span>{p.totalTrips} trips completed</span>
              </div>
              <div className="flex items-center gap-2.5 text-[12px] text-text-secondary">
                <PiCalendarBold
                  size={13}
                  className="text-text-muted flex-shrink-0"
                />
                <span>Joined {p.joined}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-1.5 pt-4 border-t border-border">
              <button
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium text-text-muted hover:bg-info/10 hover:text-info transition-colors"
                title="View"
              >
                <PiEyeBold size={14} />
                <span>View</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium text-text-muted hover:bg-danger/10 hover:text-danger transition-colors"
                title="Ban"
              >
                <PiProhibitBold size={14} />
                <span>Ban</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
