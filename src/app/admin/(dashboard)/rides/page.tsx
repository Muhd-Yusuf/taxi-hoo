"use client";

import { motion } from "framer-motion";
import {
  PiMagnifyingGlassBold,
  PiCarFill,
  PiCheckCircleFill,
  PiCurrencyDollarFill,
  PiLightningFill,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

export default function AdminRidesPage() {
  const completed = mockRides.filter((r) => r.status === "completed").length;
  const active = mockRides.filter((r) => r.status === "in_progress").length;
  const cancelled = mockRides.filter((r) => r.status === "cancelled").length;
  const totalRev = mockRides
    .filter((r) => r.status === "completed")
    .reduce((s, r) => s + r.fare, 0);

  const summaryStats = [
    {
      label: "Total Rides",
      value: mockRides.length.toString(),
      icon: <PiCarFill size={20} className="text-blue-500" />,
      iconBg: "bg-blue-50",
      borderColor: "border-l-blue-500",
    },
    {
      label: "Completed",
      value: completed.toString(),
      icon: <PiCheckCircleFill size={20} className="text-emerald-500" />,
      iconBg: "bg-emerald-50",
      borderColor: "border-l-emerald-500",
    },
    {
      label: "In Progress",
      value: active.toString(),
      icon: <PiLightningFill size={20} className="text-amber-500" />,
      iconBg: "bg-amber-50",
      borderColor: "border-l-amber-500",
    },
    {
      label: "Total Revenue",
      value: `P${totalRev.toLocaleString()}`,
      icon: <PiCurrencyDollarFill size={20} className="text-emerald-500" />,
      iconBg: "bg-emerald-50",
      borderColor: "border-l-emerald-500",
    },
  ];

  return (
    <div className="bg-zinc-50 min-h-full px-8 lg:px-10 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-zinc-900">Rides</h1>
        <p className="text-sm text-zinc-500 mt-1.5">
          All ride activity &middot; {completed} completed, {active} active, {cancelled} cancelled
        </p>
      </motion.div>

      {/* Summary stats - single row */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {summaryStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`bg-white rounded-2xl border border-zinc-200 border-l-4 ${stat.borderColor} p-6 shadow-sm`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-2xl font-bold text-zinc-900 tracking-tight">
              {stat.value}
            </p>
            <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="flex-1 relative max-w-md">
          <PiMagnifyingGlassBold
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            placeholder="Search by passenger, driver, or ride ID..."
            className="w-full h-11 bg-white border border-zinc-200 rounded-xl pl-11 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
          />
        </div>
        <select className="h-11 bg-white border border-zinc-200 rounded-xl px-4 text-sm outline-none focus:border-emerald-500 appearance-none cursor-pointer min-w-[140px]">
          <option>All Status</option>
          <option>Completed</option>
          <option>In Progress</option>
          <option>Cancelled</option>
        </select>
      </motion.div>

      {/* Rides Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/50">
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  ID
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Passenger
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Driver
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Route
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Fare
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Distance
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Duration
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Date
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {mockRides.map((ride, i) => (
                <motion.tr
                  key={ride.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.04 }}
                  className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/70 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-zinc-500">
                      #{ride.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-zinc-900">
                      {ride.passenger}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-700">{ride.driver}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-600 max-w-[240px]">
                      <span className="text-zinc-800 font-medium">{ride.pickup}</span>
                      <span className="text-zinc-400 mx-1.5">&rarr;</span>
                      <span className="text-zinc-600">{ride.destination}</span>
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-zinc-900">
                      P{ride.fare.toLocaleString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-600">{ride.distance}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-600">{ride.duration}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-zinc-700">{ride.date}</p>
                      <p className="text-xs text-zinc-400">{ride.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                        ride.status === "completed"
                          ? "bg-emerald-50 text-emerald-600"
                          : ride.status === "in_progress"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {ride.status.replace("_", " ")}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
