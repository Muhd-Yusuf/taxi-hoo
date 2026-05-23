"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiArrowUpRightBold,
  PiArrowDownRightBold,
  PiTrophyFill,
  PiCarFill,
  PiStarFill,
  PiDownloadSimpleBold,
} from "react-icons/pi";
import { mockEarnings } from "@/lib/mock-data";

const transactions = [
  { id: 1, type: "ride", desc: "Trip - Lesego Modise", amount: "+P3,500", time: "10:30 AM", positive: true },
  { id: 2, type: "ride", desc: "Trip - Oratile Pheto", amount: "+P2,200", time: "9:15 AM", positive: true },
  { id: 3, type: "bonus", desc: "Completion bonus", amount: "+P1,000", time: "9:00 AM", positive: true },
  { id: 4, type: "ride", desc: "Trip - Mpho Sebina", amount: "+P1,500", time: "8:00 AM", positive: true },
  { id: 5, type: "withdrawal", desc: "Bank transfer", amount: "-P50,000", time: "Yesterday", positive: false },
];

export default function EarningsPage() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <AppHeader
        title="Earnings"
        rightAction={
          <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-zinc-100 text-zinc-600 flex items-center justify-center active:scale-95 transition-transform">
            <PiDownloadSimpleBold size={18} />
          </button>
        }
      />

      <div className="px-5 pt-5">
        {/* Wallet card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500 rounded-2xl overflow-hidden shadow-xl relative"
        >
          <div className="p-5">
            <p className="text-xs text-white/70 font-medium">Available balance</p>
            <p className="text-3xl font-bold text-white mt-1.5">P452,000</p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                <PiArrowUpRightBold size={10} className="text-white" />
              </div>
              <span className="text-xs text-white font-medium">
                +P{mockEarnings.today.toLocaleString()} today
              </span>
            </div>
            <button className="w-full h-12 bg-white text-emerald-600 font-semibold rounded-xl mt-5 text-sm active:scale-[0.98] transition-transform">
              Cash Out to Bank
            </button>
          </div>
        </motion.div>

        {/* Period stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: "Today", value: `P${(mockEarnings.today / 1000).toFixed(1)}k`, textColor: "text-emerald-600" },
            { label: "This Week", value: `P${(mockEarnings.thisWeek / 1000).toFixed(1)}k`, textColor: "text-blue-600" },
            { label: "This Month", value: `P${(mockEarnings.thisMonth / 1000).toFixed(0)}k`, textColor: "text-purple-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-zinc-100 p-4 text-center shadow-sm">
              <p className={`text-lg font-bold ${stat.textColor}`}>{stat.value}</p>
              <p className="text-[11px] text-zinc-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Weekly chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-zinc-100 p-5 mt-5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-semibold text-zinc-900">Weekly Overview</h3>
            <span className="text-[11px] text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-full font-medium">
              May 2025
            </span>
          </div>
          <div className="flex items-end gap-2.5 h-32">
            {mockEarnings.weeklyData.map((d, i) => {
              const max = Math.max(...mockEarnings.weeklyData.map((w) => w.amount));
              const h = max > 0 ? (d.amount / max) * 100 : 0;
              const isToday = i === mockEarnings.weeklyData.length - 1;
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-lg ${
                      isToday
                        ? "bg-emerald-500"
                        : "bg-zinc-100"
                    }`}
                    style={{ height: `${Math.max(h, 8)}%` }}
                  />
                  <span className={`text-[11px] font-medium ${isToday ? "text-emerald-600" : "text-zinc-400"}`}>
                    {d.day.slice(0, 2)}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Daily bonus */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200/50 p-5 mt-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
              <PiTrophyFill size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-zinc-900">Daily Bonus</p>
              <p className="text-xs text-zinc-500 mt-0.5">Complete 5 rides to earn P5,000</p>
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2.5 py-1 rounded-full flex-shrink-0">
              3/5
            </span>
          </div>
          <div className="mt-3 bg-white/60 rounded-full h-2.5 overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: "60%" }} />
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-5 mt-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-zinc-900">Transactions</h3>
            <span className="text-[11px] text-emerald-600 font-medium">View all</span>
          </div>
          <div className="space-y-0">
            {transactions.map((tx, i) => (
              <div
                key={tx.id}
                className={`flex items-center gap-4 py-4 ${
                  i < transactions.length - 1 ? "border-b border-zinc-50" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    tx.type === "ride"
                      ? "bg-emerald-50 text-emerald-600"
                      : tx.type === "bonus"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-red-50 text-red-500"
                  }`}
                >
                  {tx.type === "ride" ? (
                    <PiCarFill size={18} />
                  ) : tx.type === "bonus" ? (
                    <PiStarFill size={18} />
                  ) : (
                    <PiArrowDownRightBold size={18} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-900">{tx.desc}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{tx.time}</p>
                </div>
                <p className={`text-sm font-bold flex-shrink-0 ${tx.positive ? "text-emerald-600" : "text-red-500"}`}>
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
