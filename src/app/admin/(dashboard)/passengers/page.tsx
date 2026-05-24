"use client";

import { motion } from "framer-motion";
import {
  PiMagnifyingGlassBold,
  PiEyeBold,
  PiProhibitBold,
} from "react-icons/pi";
import { mockPassengers } from "@/lib/mock-data";

export default function AdminPassengersPage() {
  const activeCount = mockPassengers.filter((p) => p.status === "active").length;

  return (
    <div className="bg-zinc-50 min-h-full px-8 lg:px-10 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Passengers</h1>
          <p className="text-sm text-zinc-500 mt-1.5">
            {mockPassengers.length} registered passengers &middot;{" "}
            <span className="text-brand-600 font-medium">{activeCount} active</span>
          </p>
        </div>
      </motion.div>

      {/* Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="flex-1 relative max-w-md">
          <PiMagnifyingGlassBold
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            placeholder="Search by name, email, or phone..."
            className="w-full h-11 bg-white border border-zinc-200 rounded-xl pl-11 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-all"
          />
        </div>
        <select className="h-11 bg-white border border-zinc-200 rounded-xl px-4 text-sm outline-none focus:border-brand-500 appearance-none cursor-pointer min-w-[130px]">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </motion.div>

      {/* Passengers Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/50">
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Passenger
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Email
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Phone
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Total Trips
                </th>
                <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3.5">
                  Joined
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
              {mockPassengers.map((passenger, i) => (
                <motion.tr
                  key={passenger.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.04 }}
                  className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/70 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 text-brand-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {passenger.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <p className="text-sm font-medium text-zinc-900">
                        {passenger.name}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-600">{passenger.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-600">{passenger.phone}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-zinc-900">
                      {passenger.totalTrips}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-zinc-500">{passenger.joined}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full ${
                        passenger.status === "active"
                          ? "bg-brand-50 text-brand-600"
                          : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {passenger.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="View"
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
                      >
                        <PiEyeBold size={16} />
                      </button>
                      <button
                        title="Ban"
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                      >
                        <PiProhibitBold size={16} />
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
