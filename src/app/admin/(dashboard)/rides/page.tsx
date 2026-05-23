"use client";

import { motion } from "framer-motion";
import {
  PiMagnifyingGlassBold,
  PiCarFill,
  PiCheckCircleFill,
  PiCurrencyNgnFill,
  PiLightningFill,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

export default function AdminRidesPage() {
  const completed = mockRides.filter((r) => r.status === "completed").length;
  const active = mockRides.filter((r) => r.status === "in_progress").length;
  const totalRev = mockRides
    .filter((r) => r.status === "completed")
    .reduce((s, r) => s + r.fare, 0);

  const summaryStats = [
    {
      label: "Total Rides",
      value: mockRides.length.toString(),
      icon: <PiCarFill size={16} className="text-blue-500" />,
    },
    {
      label: "Completed",
      value: completed.toString(),
      icon: <PiCheckCircleFill size={16} className="text-emerald-500" />,
    },
    {
      label: "Active",
      value: active.toString(),
      icon: <PiLightningFill size={16} className="text-amber-500" />,
    },
    {
      label: "Revenue",
      value: `₦${totalRev.toLocaleString()}`,
      icon: <PiCurrencyNgnFill size={16} className="text-emerald-500" />,
    },
  ];

  return (
    <div className="bg-zinc-50 min-h-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-zinc-900">Rides</h1>
        <p className="text-sm text-zinc-500 mt-0.5">All ride activity</p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {summaryStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-zinc-100 p-3"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <p className="text-lg font-bold text-zinc-900">{stat.value}</p>
            <p className="text-[11px] text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <PiMagnifyingGlassBold
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            placeholder="Search rides..."
            className="w-full h-11 bg-white border border-zinc-200 rounded-xl pl-10 pr-4 text-sm outline-none focus:border-emerald-500"
          />
        </div>
        <select className="h-11 bg-white border border-zinc-200 rounded-xl px-3 text-sm outline-none appearance-none">
          <option>All</option>
          <option>Completed</option>
          <option>Active</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Rides list */}
      <div className="space-y-3">
        {mockRides.map((ride, i) => (
          <motion.div
            key={ride.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-zinc-100 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-400">
                #{ride.id}
              </span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  ride.status === "completed"
                    ? "bg-emerald-50 text-emerald-600"
                    : ride.status === "in_progress"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {ride.status.replace("_", " ")}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-900">
                  {ride.passenger}
                </p>
                <p className="text-[11px] text-zinc-400">
                  Driver: {ride.driver}
                </p>
              </div>
              <p className="text-base font-bold text-zinc-900">
                ₦{ride.fare.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <span>{ride.pickup}</span>
              <span>→</span>
              <span>{ride.destination}</span>
            </div>
            <div className="flex items-center gap-3 mt-2 text-[10px] text-zinc-400">
              <span>{ride.distance}</span>
              <span>·</span>
              <span>{ride.duration}</span>
              <span>·</span>
              <span>
                {ride.date} {ride.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
