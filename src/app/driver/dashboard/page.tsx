"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  PiCurrencyDollarFill,
  PiCarFill,
  PiStarFill,
  PiClockFill,
  PiBellFill,
  PiNavigationArrowFill,
} from "react-icons/pi";
import { mockEarnings } from "@/lib/mock-data";

export default function DriverDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);

  const stats = [
    { icon: PiCurrencyDollarFill, label: "Today", value: `P${mockEarnings.today.toLocaleString()}`, color: "emerald" },
    { icon: PiCarFill, label: "Rides", value: "8", color: "blue" },
    { icon: PiStarFill, label: "Rating", value: "4.8", color: "amber" },
    { icon: PiClockFill, label: "Online", value: "6.5h", color: "purple" },
  ];

  const colorMap: Record<string, { iconText: string }> = {
    emerald: { iconText: "text-emerald-600" },
    blue: { iconText: "text-blue-600" },
    amber: { iconText: "text-amber-600" },
    purple: { iconText: "text-purple-600" },
  };

  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      {/* Header */}
      <div className="px-5 pt-5 pb-5 bg-white">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-zinc-400 font-medium">Welcome back</p>
            <p className="text-xl font-bold text-zinc-900 mt-0.5">Thabo Mokobi</p>
          </div>
          <button className="w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center active:scale-95 transition-transform">
            <PiBellFill size={18} className="text-zinc-600" />
          </button>
        </div>

        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-semibold text-[15px] active:scale-[0.98] transition-all ${
            isOnline
              ? "bg-emerald-500 text-white"
              : "bg-zinc-200 text-zinc-600"
          }`}
        >
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${isOnline ? "bg-white" : "bg-zinc-400"}`} />
            {isOnline && (
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-white/50 animate-ping" />
            )}
          </div>
          {isOnline ? "You're Online" : "Go Online"}
        </button>
      </div>

      {/* Stats grid */}
      <div className="px-5 mt-5">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, i) => {
            const colors = colorMap[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-zinc-100 p-4"
              >
                <div className="mb-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                    <stat.icon size={18} className={colors.iconText} />
                  </div>
                </div>
                <p className="text-xl font-bold text-zinc-900">{stat.value}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active ride */}
      {isOnline && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-5 mt-5"
        >
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm">
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500/50 animate-ping" />
                </div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Active Ride
                </span>
              </div>

              <div className="flex gap-4">
                {/* Route */}
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center gap-1 pt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <div className="w-px h-8 bg-gradient-to-b from-emerald-300 to-red-300" />
                      <div className="w-2.5 h-2.5 rounded-sm bg-red-400" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Pickup</p>
                        <p className="text-sm font-medium text-zinc-900 mt-0.5">Village, Gaborone</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Drop-off</p>
                        <p className="text-sm font-medium text-zinc-900 mt-0.5">Fairgrounds, Gaborone</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fare */}
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-bold text-zinc-900">P2,200</p>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    <PiNavigationArrowFill size={10} className="text-zinc-500" />
                    <span className="text-xs text-zinc-500">3.5 km</span>
                  </div>
                </div>
              </div>

              <button className="w-full h-12 bg-emerald-500 text-white font-semibold rounded-xl mt-5 text-sm active:scale-[0.98] transition-transform">
                Complete Ride
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Weekly earnings chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-5 mt-5"
      >
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-semibold text-zinc-900">This Week</h3>
            <span className="text-[11px] text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-full font-medium">
              May 2025
            </span>
          </div>

          <div className="flex items-end gap-2.5 h-36">
            {mockEarnings.weeklyData.map((d, i) => {
              const max = Math.max(...mockEarnings.weeklyData.map((w) => w.amount));
              const h = max > 0 ? (d.amount / max) * 100 : 0;
              const isToday = i === mockEarnings.weeklyData.length - 1;
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <span className={`text-[10px] font-medium ${isToday ? "text-emerald-600" : "text-zinc-400"}`}>
                    P{(d.amount / 1000).toFixed(0)}k
                  </span>
                  <div
                    className={`w-full rounded-lg ${
                      isToday
                        ? "bg-emerald-500"
                        : "bg-zinc-100"
                    }`}
                    style={{ height: `${Math.max(h, 8)}%` }}
                  />
                  <span className={`text-[11px] font-medium ${isToday ? "text-emerald-600 font-semibold" : "text-zinc-400"}`}>
                    {d.day.slice(0, 2)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
