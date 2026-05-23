"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiStarFill,
  PiNavigationArrowBold,
  PiClockBold,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

const statusStyles: Record<string, { label: string; className: string; borderColor: string }> = {
  completed: { label: "Completed", className: "bg-emerald-100 text-emerald-700 border border-emerald-200/60", borderColor: "border-l-emerald-500" },
  in_progress: { label: "In Progress", className: "bg-amber-100 text-amber-700 border border-amber-200/60", borderColor: "border-l-amber-500" },
  cancelled: { label: "Cancelled", className: "bg-red-100 text-red-700 border border-red-200/60", borderColor: "border-l-red-400" },
};

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-full bg-zinc-50">
      <AppHeader title="Your Rides" />

      {/* Gradient banner with ride count */}
      <div className="mx-5 mt-5 mb-3 rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 p-4 shadow-lg shadow-emerald-500/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-100 text-xs font-medium">Total Rides</p>
            <p className="text-white text-2xl font-bold">{mockRides.length}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <PiNavigationArrowBold size={22} className="text-white" />
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 py-5 space-y-3">
        {mockRides.map((ride, index) => {
          const status = statusStyles[ride.status];
          const initials = ride.driver
            .split(" ")
            .map((n) => n[0])
            .join("");

          return (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`bg-white rounded-2xl border border-zinc-100 shadow-sm p-4 active:scale-[0.98] transition-transform border-l-4 ${status.borderColor}`}
            >
              {/* Top row: driver + status */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 text-emerald-400 text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {ride.driver}
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      {ride.date} &middot; {ride.time}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${status.className}`}
                >
                  {status.label}
                </span>
              </div>

              {/* Route */}
              <div className="flex items-start gap-2.5 ml-1 mb-3">
                <div className="flex flex-col items-center gap-0.5 mt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                  <div className="w-px h-5 bg-gradient-to-b from-emerald-300 to-blue-300" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-500 shadow-sm shadow-blue-500/50" />
                </div>
                <div className="flex flex-col gap-3.5 min-w-0">
                  <p className="text-xs text-emerald-700 font-medium truncate">{ride.pickup}</p>
                  <p className="text-xs text-blue-700 font-medium truncate">
                    {ride.destination}
                  </p>
                </div>
              </div>

              {/* Bottom: fare, distance, duration, rating */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                    <PiNavigationArrowBold size={12} />
                    {ride.distance}
                  </span>
                  <span className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium">
                    <PiClockBold size={12} />
                    {ride.duration}
                  </span>
                  {ride.rating && (
                    <span className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium">
                      <PiStarFill size={12} className="text-amber-500" />
                      {ride.rating}
                    </span>
                  )}
                </div>
                <span className="text-[15px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg">
                  {"\u20A6"}{ride.fare.toLocaleString()}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
