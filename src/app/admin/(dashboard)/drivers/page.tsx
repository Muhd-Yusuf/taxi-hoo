"use client";

import {
  PiMagnifyingGlassBold,
  PiStarFill,
  PiCheckCircleFill,
  PiEyeBold,
  PiProhibitBold,
} from "react-icons/pi";
import { mockDrivers } from "@/lib/mock-data";

export default function AdminDriversPage() {
  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
          Drivers
        </h1>
        <p className="text-[14px] text-text-secondary">
          {mockDrivers.length} registered drivers
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
            placeholder="Search drivers..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-border bg-white text-[13px] text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          <option>All</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </div>

      {/* Data table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-alt/80">
                {[
                  "Driver",
                  "Vehicle",
                  "Rating",
                  "Trips",
                  "Earnings",
                  "Status",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className={`py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider ${
                      h === "Actions" ? "text-right" : "text-left"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockDrivers.map((driver, i) => (
                <tr
                  key={driver.id}
                  className={`hover:bg-surface-alt/50 transition-colors ${
                    i < mockDrivers.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  {/* Driver */}
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] font-bold text-primary">
                          {driver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-dark">
                          {driver.name}
                        </p>
                        <p className="text-[11px] text-text-muted mt-0.5">
                          {driver.phone}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Vehicle */}
                  <td className="py-4 px-5">
                    <p className="text-[13px] text-dark">{driver.vehicle}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      {driver.plate}
                    </p>
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-5">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-dark">
                      <PiStarFill
                        size={12}
                        className="text-primary fill-primary"
                      />{" "}
                      {driver.rating}
                    </span>
                  </td>

                  {/* Trips */}
                  <td className="py-4 px-5 text-[13px] font-medium text-dark">
                    {driver.trips.toLocaleString()}
                  </td>

                  {/* Earnings */}
                  <td className="py-4 px-5 text-[13px] font-semibold text-dark">
                    \u20A6{driver.earnings.toLocaleString()}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                        driver.status === "online"
                          ? "bg-success/10 text-success"
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

                  {/* Actions */}
                  <td className="py-4 px-5">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        className="p-2 rounded-lg hover:bg-info/10 text-text-muted hover:text-info transition-colors"
                        title="View"
                      >
                        <PiEyeBold size={15} />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-success/10 text-text-muted hover:text-success transition-colors"
                        title="Approve"
                      >
                        <PiCheckCircleFill size={15} />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-danger/10 text-text-muted hover:text-danger transition-colors"
                        title="Ban"
                      >
                        <PiProhibitBold size={15} />
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
