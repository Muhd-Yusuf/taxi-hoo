"use client";

import { motion } from "framer-motion";
import {
  PiMagnifyingGlassBold,
  PiEnvelopeBold,
  PiMapPinBold,
  PiCalendarBold,
} from "react-icons/pi";
import { mockPassengers } from "@/lib/mock-data";

export default function AdminPassengersPage() {
  return (
    <div className="bg-zinc-50 min-h-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-zinc-900">Passengers</h1>
        <p className="text-sm text-zinc-500 mt-0.5">
          {mockPassengers.length} registered passengers
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
            placeholder="Search passengers..."
            className="w-full h-11 bg-white border border-zinc-200 rounded-xl pl-10 pr-4 text-sm outline-none focus:border-emerald-500"
          />
        </div>
        <select className="h-11 bg-white border border-zinc-200 rounded-xl px-3 text-sm outline-none appearance-none">
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Passenger cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {mockPassengers.map((passenger, i) => (
          <motion.div
            key={passenger.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-zinc-100 p-4"
          >
            {/* Avatar + Name + Status */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center text-sm font-bold">
                {passenger.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-zinc-900">
                  {passenger.name}
                </p>
                <p className="text-xs text-zinc-400">{passenger.phone}</p>
              </div>
              <span
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                  passenger.status === "active"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-zinc-100 text-zinc-500"
                }`}
              >
                {passenger.status}
              </span>
            </div>

            {/* Info rows */}
            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2.5 text-xs text-zinc-500">
                <PiEnvelopeBold
                  size={13}
                  className="text-zinc-400 flex-shrink-0"
                />
                <span className="truncate">{passenger.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-500">
                <PiMapPinBold
                  size={13}
                  className="text-zinc-400 flex-shrink-0"
                />
                <span>{passenger.totalTrips} trips completed</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-500">
                <PiCalendarBold
                  size={13}
                  className="text-zinc-400 flex-shrink-0"
                />
                <span>Joined {passenger.joined}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button className="flex-1 h-10 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium rounded-xl transition-colors">
                View
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
