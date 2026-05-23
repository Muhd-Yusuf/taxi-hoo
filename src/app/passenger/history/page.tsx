"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiStarFill,
  PiNavigationArrowBold,
  PiClockBold,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

const statusStyles: Record<string, { label: string; className: string }> = {
  completed: { label: "Completed", className: "bg-emerald-50 text-emerald-600" },
  in_progress: { label: "In Progress", className: "bg-amber-50 text-amber-600" },
  cancelled: { label: "Cancelled", className: "bg-red-50 text-red-600" },
};

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-full bg-zinc-50">
      <AppHeader title="Your Rides" />
      <div className="flex-1 px-4 py-4 space-y-3">
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
              className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-4 active:scale-[0.98] transition-transform"
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
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <div className="w-px h-5 border-l border-dashed border-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
                </div>
                <div className="flex flex-col gap-3.5 min-w-0">
                  <p className="text-xs text-zinc-600 truncate">{ride.pickup}</p>
                  <p className="text-xs text-zinc-900 font-medium truncate">
                    {ride.destination}
                  </p>
                </div>
              </div>

              {/* Bottom: fare, distance, duration, rating */}
              <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                <div className="flex items-center gap-4 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1">
                    <PiNavigationArrowBold size={12} />
                    {ride.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <PiClockBold size={12} />
                    {ride.duration}
                  </span>
                  {ride.rating && (
                    <span className="flex items-center gap-1">
                      <PiStarFill size={12} className="text-amber-400" />
                      {ride.rating}
                    </span>
                  )}
                </div>
                <span className="text-[15px] font-bold text-zinc-900">
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
