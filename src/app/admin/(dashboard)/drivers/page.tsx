"use client";

import { motion } from "framer-motion";
import {
  PiMagnifyingGlassBold,
  PiPlusBold,
  PiStarFill,
  PiEyeBold,
  PiCheckCircleBold,
  PiProhibitBold,
} from "react-icons/pi";
import { mockDrivers } from "@/lib/mock-data";

export default function AdminDriversPage() {
  const onlineCount = mockDrivers.filter((d) => d.status === "online").length;

  return (
    <div className="bg-zinc-50 min-h-full px-6 lg:px-8 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Drivers</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {mockDrivers.length} registered drivers &middot;{" "}
            <span className="text-emerald-600 font-medium">{onlineCount} online</span>
          </p>
        </div>
        <button className="flex items-center gap-2 h-10 px-5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          <PiPlusBold size={16} />
          Add Driver
        </button>
      </motion.div>

      {/* Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="flex-1 relative max-w-md">
          <PiMagnifyingGlassBold
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            placeholder="Search by name, phone, or plate..."
            className="w-full h-10 bg-white border border-zinc-200 rounded-lg pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
          />
        </div>
        <select className="h-10 bg-white border border-zinc-200 rounded-lg px-4 text-sm outline-none focus:border-emerald-500 appearance-none cursor-pointer min-w-[120px]">
          <option>All Status</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </motion.div>

      {/* Drivers Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/50">
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Driver
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Vehicle
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Plate
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Rating
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Trips
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Status
                </th>
                <th className="text-right text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockDrivers.map((driver, i) => (
                <motion.tr
                  key={driver.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.04 }}
                  className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/70 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {driver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-900">
                          {driver.name}
                        </p>
                        <p className="text-xs text-zinc-400">{driver.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-700">{driver.vehicle}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-700 font-mono">
                      {driver.plate}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <PiStarFill size={14} className="text-amber-400" />
                      <span className="text-sm font-medium text-zinc-900">
                        {driver.rating}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-zinc-900">
                      {driver.trips.toLocaleString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full ${
                        driver.status === "online"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {driver.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="View"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
                      >
                        <PiEyeBold size={15} />
                      </button>
                      <button
                        title="Approve"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-colors"
                      >
                        <PiCheckCircleBold size={15} />
                      </button>
                      <button
                        title="Ban"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                      >
                        <PiProhibitBold size={15} />
                      </button>
                    </div>
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
