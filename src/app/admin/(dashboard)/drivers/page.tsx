"use client";

import { motion } from "framer-motion";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { mockDrivers } from "@/lib/mock-data";

export default function AdminDriversPage() {
  return (
    <div className="bg-zinc-50 min-h-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-zinc-900">Drivers</h1>
        <p className="text-sm text-zinc-500 mt-0.5">
          {mockDrivers.length} registered drivers
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <PiMagnifyingGlassBold
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            placeholder="Search drivers..."
            className="w-full h-11 bg-white border border-zinc-200 rounded-xl pl-10 pr-4 text-sm outline-none focus:border-emerald-500"
          />
        </div>
        <select className="h-11 bg-white border border-zinc-200 rounded-xl px-3 text-sm outline-none appearance-none">
          <option>All</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </div>

      {/* Driver cards */}
      <div className="space-y-3">
        {mockDrivers.map((driver, i) => (
          <motion.div
            key={driver.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-zinc-100 p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center text-sm font-bold">
                {driver.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-zinc-900">
                  {driver.name}
                </p>
                <p className="text-xs text-zinc-400">{driver.phone}</p>
              </div>
              <span
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                  driver.status === "online"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {driver.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-zinc-50 rounded-lg p-2 text-center">
                <p className="text-sm font-bold text-zinc-900">
                  {driver.vehicle.split(" ")[0]}
                </p>
                <p className="text-[10px] text-zinc-400">{driver.plate}</p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-2 text-center">
                <p className="text-sm font-bold text-zinc-900">
                  ⭐ {driver.rating}
                </p>
                <p className="text-[10px] text-zinc-400">Rating</p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-2 text-center">
                <p className="text-sm font-bold text-zinc-900">
                  {driver.trips.toLocaleString()}
                </p>
                <p className="text-[10px] text-zinc-400">Trips</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 h-10 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium rounded-xl transition-colors">
                View
              </button>
              <button className="flex-1 h-10 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 text-xs font-medium rounded-xl transition-colors">
                Approve
              </button>
              <button className="flex-1 h-10 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium rounded-xl transition-colors">
                Ban
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
