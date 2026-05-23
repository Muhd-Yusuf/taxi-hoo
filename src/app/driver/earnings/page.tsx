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
  { id: 1, type: "ride", desc: "Trip - Sarah Johnson", amount: "+₦3,500", time: "10:30 AM", positive: true },
  { id: 2, type: "ride", desc: "Trip - Mohammed Sani", amount: "+₦2,200", time: "9:15 AM", positive: true },
  { id: 3, type: "bonus", desc: "Completion bonus", amount: "+₦1,000", time: "9:00 AM", positive: true },
  { id: 4, type: "ride", desc: "Trip - Fatima Ali", amount: "+₦1,500", time: "8:00 AM", positive: true },
  { id: 5, type: "withdrawal", desc: "Bank transfer", amount: "-₦50,000", time: "Yesterday", positive: false },
];

export default function EarningsPage() {
  return (
    <div className="bg-zinc-50 min-h-full">
      <AppHeader
        title="Earnings"
        rightAction={
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm border border-zinc-100 text-zinc-700 hover:bg-zinc-50 active:scale-95 transition-all">
            <PiDownloadSimpleBold size={18} />
          </button>
        }
      />

      {/* Wallet card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-4 mt-4 bg-zinc-900 rounded-2xl p-5 border border-zinc-800"
      >
        <p className="text-xs text-zinc-500 font-medium">Available balance</p>
        <p className="text-3xl font-bold text-white mt-1">₦452,000</p>
        <div className="flex items-center gap-1.5 mt-1">
          <PiArrowUpRightBold size={12} className="text-emerald-400" />
          <span className="text-xs text-emerald-400 font-medium">
            +₦{mockEarnings.today.toLocaleString()} today
          </span>
        </div>
        <button className="w-full h-12 bg-white text-zinc-900 font-semibold rounded-xl mt-4 text-sm active:scale-[0.98] transition-transform">
          Cash Out to Bank
        </button>
      </motion.div>

      {/* Period stats */}
      <div className="grid grid-cols-3 gap-3 px-4 mt-4">
        <div className="bg-white rounded-2xl border border-zinc-100 p-3 text-center">
          <p className="text-lg font-bold text-zinc-900">
            ₦{(mockEarnings.today / 1000).toFixed(1)}k
          </p>
          <p className="text-[10px] text-zinc-400 mt-0.5">Today</p>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-3 text-center">
          <p className="text-lg font-bold text-zinc-900">
            ₦{(mockEarnings.thisWeek / 1000).toFixed(1)}k
          </p>
          <p className="text-[10px] text-zinc-400 mt-0.5">This Week</p>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-3 text-center">
          <p className="text-lg font-bold text-zinc-900">
            ₦{(mockEarnings.thisMonth / 1000).toFixed(0)}k
          </p>
          <p className="text-[10px] text-zinc-400 mt-0.5">This Month</p>
        </div>
      </div>

      {/* Weekly chart */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-zinc-100 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-zinc-900">Weekly Overview</h3>
          <span className="text-xs text-zinc-400">May 2025</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-28">
          {mockEarnings.weeklyData.map((d, i) => {
            const max = Math.max(...mockEarnings.weeklyData.map((w) => w.amount));
            const h = max > 0 ? (d.amount / max) * 100 : 0;
            const isToday = i === mockEarnings.weeklyData.length - 1;
            return (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-lg transition-all ${
                    isToday ? "bg-emerald-500" : "bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  style={{ height: `${h}%`, minHeight: "4px" }}
                />
                <span className="text-[10px] text-zinc-400">{d.day.slice(0, 2)}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily bonus card */}
      <div className="mx-4 mt-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <PiTrophyFill size={20} className="text-amber-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-zinc-900">Daily Bonus</p>
            <p className="text-xs text-zinc-500">Complete 5 rides to earn ₦5,000</p>
          </div>
        </div>
        <div className="mt-3 bg-white/60 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-amber-500 rounded-full" style={{ width: "60%" }} />
        </div>
        <p className="text-[11px] text-zinc-500 mt-1.5">3 of 5 rides completed</p>
      </div>

      {/* Transactions */}
      <div className="mx-4 mt-4 bg-white rounded-2xl border border-zinc-100 p-4 mb-4">
        <h3 className="text-sm font-semibold text-zinc-900 mb-3">Transactions</h3>
        <div className="divide-y divide-zinc-100">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center gap-3 py-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  tx.type === "ride"
                    ? "bg-emerald-50"
                    : tx.type === "bonus"
                    ? "bg-amber-50"
                    : "bg-red-50"
                }`}
              >
                {tx.type === "ride" ? (
                  <PiCarFill size={16} className="text-emerald-600" />
                ) : tx.type === "bonus" ? (
                  <PiStarFill size={16} className="text-amber-600" />
                ) : (
                  <PiArrowDownRightBold size={16} className="text-red-500" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-900">{tx.desc}</p>
                <p className="text-[11px] text-zinc-400">{tx.time}</p>
              </div>
              <p
                className={`text-sm font-semibold ${
                  tx.positive ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
