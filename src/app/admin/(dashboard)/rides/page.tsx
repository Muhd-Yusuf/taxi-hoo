"use client";

import {
  PiMagnifyingGlassBold,
  PiCarFill,
  PiCheckCircleFill,
  PiXCircleFill,
  PiClockBold,
  PiEyeBold,
  PiCurrencyNgnBold,
  PiChartBarBold,
  PiLightningBold,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

const statusMap: Record<
  string,
  { label: string; style: string; Icon: typeof PiCheckCircleFill }
> = {
  completed: {
    label: "Completed",
    style: "bg-success/10 text-success",
    Icon: PiCheckCircleFill,
  },
  in_progress: {
    label: "Active",
    style: "bg-warning/10 text-warning",
    Icon: PiClockBold,
  },
  cancelled: {
    label: "Cancelled",
    style: "bg-danger/10 text-danger",
    Icon: PiXCircleFill,
  },
};

export default function AdminRidesPage() {
  const completed = mockRides.filter((r) => r.status === "completed").length;
  const active = mockRides.filter((r) => r.status === "in_progress").length;
  const totalRev = mockRides
    .filter((r) => r.status === "completed")
    .reduce((s, r) => s + r.fare, 0);

  const summaryStats = [
    {
      label: "Total",
      value: mockRides.length,
      color: "text-dark",
      icon: PiChartBarBold,
      iconBg: "bg-dark/5",
      iconColor: "text-dark",
    },
    {
      label: "Completed",
      value: completed,
      color: "text-success",
      icon: PiCheckCircleFill,
      iconBg: "bg-success/10",
      iconColor: "text-success",
    },
    {
      label: "Active",
      value: active,
      color: "text-warning",
      icon: PiLightningBold,
      iconBg: "bg-warning/10",
      iconColor: "text-warning",
    },
    {
      label: "Revenue",
      value: `\u20A6${totalRev.toLocaleString()}`,
      color: "text-dark",
      icon: PiCurrencyNgnBold,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
          Rides
        </h1>
        <p className="text-[14px] text-text-secondary">All ride activity</p>
      </div>

      {/* Summary stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        {summaryStats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl border border-border shadow-sm p-4 sm:p-5"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className={`w-8 h-8 rounded-lg ${s.iconBg} flex items-center justify-center`}
              >
                <s.icon size={14} className={s.iconColor} />
              </div>
              <span className="text-[12px] text-text-muted font-medium">
                {s.label}
              </span>
            </div>
            <p
              className={`text-[20px] sm:text-[22px] font-bold ${s.color} tracking-tight`}
            >
              {s.value}
            </p>
          </div>
        ))}
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
            placeholder="Search rides..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
        <select className="px-4 py-3 rounded-xl border border-border bg-white text-[13px] text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          <option>All status</option>
          <option>Completed</option>
          <option>Active</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Data table */}
      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-alt/80">
                {[
                  "ID",
                  "Passenger",
                  "Driver",
                  "Route",
                  "Fare",
                  "Status",
                  "Date",
                  "",
                ].map((h) => (
                  <th
                    key={h}
                    className={`py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider ${
                      h === "" ? "text-right" : "text-left"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockRides.map((ride, i) => {
                const status = statusMap[ride.status];
                return (
                  <tr
                    key={ride.id}
                    className={`hover:bg-surface-alt/50 transition-colors ${
                      i < mockRides.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    {/* ID */}
                    <td className="py-4 px-5 text-[12px] font-mono text-text-muted">
                      {ride.id}
                    </td>

                    {/* Passenger */}
                    <td className="py-4 px-5">
                      <p className="text-[13px] font-medium text-dark">
                        {ride.passenger}
                      </p>
                    </td>

                    {/* Driver */}
                    <td className="py-4 px-5">
                      <p className="text-[13px] text-dark">{ride.driver}</p>
                    </td>

                    {/* Route */}
                    <td className="py-4 px-5">
                      <p className="text-[12px] text-text-secondary truncate max-w-[180px]">
                        {ride.pickup.split(",")[0]} &rarr;{" "}
                        {ride.destination.split(",")[0]}
                      </p>
                    </td>

                    {/* Fare */}
                    <td className="py-4 px-5 text-[13px] font-bold text-dark">
                      \u20A6{ride.fare.toLocaleString()}
                    </td>

                    {/* Status */}
                    <td className="py-4 px-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${status.style}`}
                      >
                        <status.Icon size={11} />
                        {status.label}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-5">
                      <p className="text-[12px] text-dark">{ride.date}</p>
                      <p className="text-[11px] text-text-muted mt-0.5">
                        {ride.time}
                      </p>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-5 text-right">
                      <button
                        className="p-2 rounded-lg hover:bg-info/10 text-text-muted hover:text-info transition-colors"
                        title="View ride"
                      >
                        <PiEyeBold size={15} />
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
