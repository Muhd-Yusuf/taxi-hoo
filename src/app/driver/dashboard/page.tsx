"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import StatCard from "@/components/StatCard";
import {
  PiCurrencyNgnFill,
  PiCarFill,
  PiStarFill,
  PiClockFill,
  PiBellFill,
} from "react-icons/pi";
import { mockEarnings, mockRides } from "@/lib/mock-data";

export default function DriverDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="bg-zinc-50 min-h-full">
      {/* Top section — Online toggle */}
      <div
        className={`px-5 pt-4 pb-6 transition-all duration-500 ${
          isOnline
            ? "bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500"
            : "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/70 text-xs font-medium tracking-wide">Welcome back</p>
            <p className="text-white text-lg font-bold">James Okafor</p>
          </div>
          <button className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/10 active:scale-95 transition-transform">
            <PiBellFill size={18} className="text-white" />
          </button>
        </div>

        {/* Online toggle */}
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`w-full h-14 rounded-2xl backdrop-blur-sm flex items-center justify-center gap-3 text-white font-semibold text-sm active:scale-[0.98] transition-all border ${
            isOnline
              ? "bg-white/20 border-white/20 shadow-lg shadow-emerald-900/30"
              : "bg-white/10 border-white/5"
          }`}
        >
          <div className="relative">
            <div
              className={`w-3 h-3 rounded-full ${
                isOnline ? "bg-white animate-pulse" : "bg-zinc-400"
              }`}
            />
            {isOnline && (
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-white/50 animate-ping" />
            )}
          </div>
          {isOnline ? "You're Online" : "You're Offline — Go Online"}
        </button>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 px-4 -mt-3">
        <StatCard
          icon={<PiCurrencyNgnFill size={18} className="text-emerald-600" />}
          iconBg="bg-emerald-100"
          label="Today"
          value={`₦${mockEarnings.today.toLocaleString()}`}
          trend="+12%"
          variant="default"
          className="shadow-sm shadow-emerald-100"
        />
        <StatCard
          icon={<PiCarFill size={18} className="text-blue-600" />}
          iconBg="bg-blue-100"
          label="Rides today"
          value="8"
          variant="default"
          className="shadow-sm shadow-blue-100"
        />
        <StatCard
          icon={<PiStarFill size={18} className="text-amber-600" />}
          iconBg="bg-amber-100"
          label="Rating"
          value="4.8"
          variant="default"
          className="shadow-sm shadow-amber-100"
        />
        <StatCard
          icon={<PiClockFill size={18} className="text-purple-600" />}
          iconBg="bg-purple-100"
          label="Hours online"
          value="6.5h"
          variant="default"
          className="shadow-sm shadow-purple-100"
        />
      </div>

      {/* Active ride card */}
      {isOnline && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl p-4 border border-zinc-700/50 shadow-lg shadow-black/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400/50 animate-ping" />
            </div>
            <span className="text-xs font-semibold text-emerald-400">
              Active Ride
            </span>
          </div>
          {/* Route */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1 pt-1">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
              <div className="w-px h-6 bg-gradient-to-b from-emerald-400/50 to-red-400/50" />
              <div className="w-2.5 h-2.5 rounded-sm bg-red-400 shadow-sm shadow-red-400/50" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-[11px] text-zinc-500">Pickup</p>
                <p className="text-sm font-medium text-white">
                  Surulere, Lagos
                </p>
              </div>
              <div>
                <p className="text-[11px] text-zinc-500">Drop-off</p>
                <p className="text-sm font-medium text-white">Yaba, Lagos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-white">₦2,200</p>
              <p className="text-[11px] text-zinc-500">3.5 km</p>
            </div>
          </div>
          <button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl mt-4 text-sm active:scale-[0.98] transition-transform shadow-md shadow-emerald-500/25">
            Complete Ride
          </button>
        </motion.div>
      )}

      {/* Weekly earnings chart */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-zinc-100 p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-zinc-900 mb-4">This Week</h3>
        <div className="flex items-end justify-between gap-2 h-32">
          {mockEarnings.weeklyData.map((d, i) => {
            const maxAmount = Math.max(
              ...mockEarnings.weeklyData.map((w) => w.amount)
            );
            const height = maxAmount > 0 ? (d.amount / maxAmount) * 100 : 0;
            const isToday = i === mockEarnings.weeklyData.length - 1;
            return (
              <div
                key={d.day}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <span className={`text-[9px] font-medium ${isToday ? "text-emerald-600" : "text-zinc-400"}`}>
                  ₦{(d.amount / 1000).toFixed(0)}k
                </span>
                <div
                  className="w-full rounded-lg overflow-hidden"
                  style={{ height: `${Math.max(height, 4)}%` }}
                >
                  <div
                    className={`w-full h-full rounded-lg ${
                      isToday
                        ? "bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-sm shadow-emerald-200"
                        : "bg-gradient-to-t from-zinc-300 to-zinc-200"
                    }`}
                  />
                </div>
                <span className={`text-[10px] ${isToday ? "text-emerald-600 font-semibold" : "text-zinc-400"}`}>
                  {d.day.slice(0, 2)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom spacer for nav */}
      <div className="h-6" />
    </div>
  );
}
