"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiStarFill,
  PiNavigationArrowBold,
  PiClockBold,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

const statusStyles: Record<string, { label: string; badge: string }> = {
  completed: { label: "Completed", badge: "bg-emerald-50 text-emerald-700 border border-emerald-200/50" },
  in_progress: { label: "In Progress", badge: "bg-amber-50 text-amber-700 border border-amber-200/50" },
  cancelled: { label: "Cancelled", badge: "bg-red-50 text-red-600 border border-red-200/50" },
};

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-full bg-zinc-50">
      <AppHeader title="Your Rides" />

      {/* Stats banner */}
      <div className="px-5 pt-5">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-xs font-medium">Total Rides</p>
              <p className="text-white text-3xl font-bold mt-1">{mockRides.length}</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
              <PiNavigationArrowBold size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Ride cards */}
      <div className="flex-1 px-5 pt-5 pb-6 space-y-4">
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
              transition={{ delay: index * 0.06 }}
              className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden"
            >
              <div className="p-5">
                {/* Driver + status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-zinc-900 text-emerald-400 text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-zinc-900">
                        {ride.driver}
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {ride.date} &middot; {ride.time}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${status.badge}`}>
                    {status.label}
                  </span>
                </div>

                {/* Route */}
                <div className="bg-zinc-50 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center gap-1 pt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <div className="w-px h-6 bg-zinc-300" />
                      <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
                    </div>
                    <div className="flex-1 space-y-3 min-w-0">
                      <div>
                        <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">Pickup</p>
                        <p className="text-sm text-zinc-800 font-medium mt-0.5 truncate">{ride.pickup}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Drop-off</p>
                        <p className="text-sm text-zinc-800 font-medium mt-0.5 truncate">{ride.destination}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom: fare + details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-[11px] text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full font-medium">
                      <PiNavigationArrowBold size={11} />
                      {ride.distance}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full font-medium">
                      <PiClockBold size={11} />
                      {ride.duration}
                    </span>
                    {ride.rating && (
                      <span className="flex items-center gap-1 text-[11px] text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full font-medium">
                        <PiStarFill size={11} />
                        {ride.rating}
                      </span>
                    )}
                  </div>
                  <span className="text-base font-bold text-emerald-700">
                    {"\u20A6"}{ride.fare.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
