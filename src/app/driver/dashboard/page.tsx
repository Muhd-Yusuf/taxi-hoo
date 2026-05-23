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
        className={`px-5 pt-4 pb-6 ${
          isOnline ? "bg-emerald-500" : "bg-zinc-900"
        } transition-colors duration-300`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/80 text-xs font-medium">Welcome back</p>
            <p className="text-white text-lg font-bold">James Okafor</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <PiBellFill size={18} className="text-white" />
          </button>
        </div>

        {/* Online toggle */}
        <button
          onClick={() => setIsOnline(!isOnline)}
          className="w-full h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center gap-3 text-white font-semibold text-sm active:scale-[0.98] transition-all"
        >
          <div
            className={`w-3 h-3 rounded-full ${
              isOnline ? "bg-white animate-pulse" : "bg-zinc-400"
            }`}
          />
          {isOnline ? "You're Online" : "You're Offline — Go Online"}
        </button>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 px-4 -mt-3">
        <StatCard
          icon={<PiCurrencyNgnFill size={18} className="text-emerald-500" />}
          label="Today"
          value={`₦${mockEarnings.today.toLocaleString()}`}
          trend="+12%"
          variant="default"
        />
        <StatCard
          icon={<PiCarFill size={18} className="text-blue-500" />}
          label="Rides today"
          value="8"
          variant="default"
        />
        <StatCard
          icon={<PiStarFill size={18} className="text-amber-500" />}
          label="Rating"
          value="4.8"
          variant="default"
        />
        <StatCard
          icon={<PiClockFill size={18} className="text-purple-500" />}
          label="Hours online"
          value="6.5h"
          variant="default"
        />
      </div>

      {/* Active ride card */}
      {isOnline && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-4 bg-zinc-900 rounded-2xl p-4 border border-zinc-800"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-400">
              Active Ride
            </span>
          </div>
          {/* Route */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div className="w-px h-6 bg-zinc-700" />
              <div className="w-2 h-2 rounded-sm bg-white" />
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
          <button className="w-full h-12 bg-emerald-500 text-white font-semibold rounded-xl mt-4 text-sm active:scale-[0.98] transition-transform">
            Complete Ride
          </button>
        </motion.div>
      )}

      {/* Weekly earnings chart */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-zinc-100 p-4">
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
                <span className="text-[9px] text-zinc-400 font-medium">
                  ₦{(d.amount / 1000).toFixed(0)}k
                </span>
                <div
                  className={`w-full rounded-lg ${
                    isToday ? "bg-emerald-500" : "bg-zinc-200"
                  }`}
                  style={{ height: `${Math.max(height, 4)}%` }}
                />
                <span className="text-[10px] text-zinc-400">
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
