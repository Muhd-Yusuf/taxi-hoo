"use client";

import {
  PiCurrencyNgnBold,
  PiTrendUpBold,
  PiCarFill,
  PiCalendarBold,
  PiDownloadSimpleBold,
  PiArrowUpRightBold,
  PiArrowDownRightBold,
  PiWalletBold,
  PiTrophyBold,
} from "react-icons/pi";
import { mockEarnings } from "@/lib/mock-data";

const transactions = [
  { id: "T001", type: "ride" as const, desc: "Sarah Johnson", sub: "Lekki → VI", amount: 3500, time: "09:30 AM", date: "Today" },
  { id: "T002", type: "ride" as const, desc: "Mohammed Sani", sub: "Surulere → Yaba", amount: 2200, time: "11:00 AM", date: "Today" },
  { id: "T003", type: "ride" as const, desc: "Fatima Ali", sub: "Ikeja → Oshodi", amount: 1500, time: "12:45 PM", date: "Today" },
  { id: "T004", type: "bonus" as const, desc: "Daily Bonus", sub: "5 rides completed", amount: 2000, time: "01:00 PM", date: "Today" },
  { id: "T005", type: "ride" as const, desc: "Grace Adekunle", sub: "Ajah → Ikoyi", amount: 5200, time: "02:30 PM", date: "Yesterday" },
  { id: "T006", type: "withdrawal" as const, desc: "Bank Transfer", sub: "GTBank ****4532", amount: -50000, time: "04:00 PM", date: "Yesterday" },
];

export default function EarningsPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
            Earnings
          </h1>
          <p className="text-[14px] text-text-secondary">Track income and withdrawals</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2.5 text-[13px] font-medium text-dark hover:bg-surface-alt transition-colors shadow-sm">
          <PiDownloadSimpleBold size={14} /> Export
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
        {/* Today - dark accent */}
        <div className="bg-dark rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-dark-lighter flex items-center justify-center mb-4">
            <PiCurrencyNgnBold size={18} className="text-primary" />
          </div>
          <p className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight">
            ₦{mockEarnings.today.toLocaleString()}
          </p>
          <p className="text-[12px] text-gray-400 mt-1 font-medium">Today</p>
        </div>

        {/* This week */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
          <div className="w-10 h-10 rounded-xl bg-success-light flex items-center justify-center mb-4">
            <PiTrendUpBold size={18} className="text-success" />
          </div>
          <p className="text-[22px] sm:text-[24px] font-bold text-dark tracking-tight">
            ₦{mockEarnings.thisWeek.toLocaleString()}
          </p>
          <p className="text-[12px] text-text-muted mt-1 font-medium">This week</p>
        </div>

        {/* This month */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
          <div className="w-10 h-10 rounded-xl bg-info-light flex items-center justify-center mb-4">
            <PiCalendarBold size={18} className="text-info" />
          </div>
          <p className="text-[22px] sm:text-[24px] font-bold text-dark tracking-tight">
            ₦{mockEarnings.thisMonth.toLocaleString()}
          </p>
          <p className="text-[12px] text-text-muted mt-1 font-medium">This month</p>
        </div>

        {/* Total trips */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <PiCarFill size={18} className="text-primary" />
          </div>
          <p className="text-[22px] sm:text-[24px] font-bold text-dark tracking-tight">
            {mockEarnings.totalTrips.toLocaleString()}
          </p>
          <p className="text-[12px] text-text-muted mt-1 font-medium">Total trips</p>
        </div>
      </div>

      {/* Chart + Wallet + Bonus */}
      <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
        {/* Weekly chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
          <p className="text-[15px] font-semibold text-dark mb-6">Weekly overview</p>
          <div className="flex items-end gap-3 sm:gap-5 h-52">
            {mockEarnings.weeklyData.map((day) => {
              const max = Math.max(...mockEarnings.weeklyData.map((d) => d.amount));
              const h = max > 0 ? (day.amount / max) * 100 : 0;
              return (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-[10px] text-text-muted font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    ₦{(day.amount / 1000).toFixed(0)}k
                  </span>
                  <div
                    className="w-full rounded-xl overflow-hidden transition-all group-hover:shadow-sm"
                    style={{ height: `${Math.max(h, 6)}%` }}
                  >
                    <div className="w-full h-full bg-dark group-hover:bg-primary rounded-xl transition-colors" />
                  </div>
                  <span className="text-[11px] text-text-muted font-medium">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wallet + Bonus */}
        <div className="space-y-5 sm:space-y-6">
          {/* Wallet */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <PiWalletBold size={16} className="text-text-muted" />
              <p className="text-[15px] font-semibold text-dark">Wallet</p>
            </div>
            <p className="text-[32px] font-bold text-dark tracking-tight">₦452,000</p>
            <p className="text-[13px] text-success flex items-center gap-1.5 mt-1.5 font-medium">
              <PiArrowUpRightBold size={13} /> +₦15,600 today
            </p>
            <button className="w-full mt-5 bg-dark text-white text-[14px] font-semibold py-3.5 rounded-xl hover:bg-dark-light transition-colors">
              Withdraw to bank
            </button>
          </div>

          {/* Bonus */}
          <div className="bg-dark rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <PiTrophyBold size={16} className="text-primary" />
              <p className="text-[15px] font-semibold text-white">Daily Bonus</p>
            </div>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">
              Complete 2 more rides for ₦2,000 bonus
            </p>
            <div className="w-full bg-dark-lighter rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full transition-all" style={{ width: "60%" }} />
            </div>
            <p className="text-[11px] text-gray-500 mt-2 font-medium">3 / 5 rides</p>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="mt-6 bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
        <p className="text-[15px] font-semibold text-dark mb-5">Transactions</p>
        <div>
          {transactions.map((tx, i) => (
            <div
              key={tx.id}
              className={`flex items-center justify-between py-4 ${
                i < transactions.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === "ride"
                      ? "bg-success-light"
                      : tx.type === "bonus"
                      ? "bg-warning-light"
                      : "bg-danger-light"
                  }`}
                >
                  {tx.type === "withdrawal" ? (
                    <PiArrowDownRightBold size={16} className="text-danger" />
                  ) : (
                    <PiArrowUpRightBold
                      size={16}
                      className={tx.type === "ride" ? "text-success" : "text-warning"}
                    />
                  )}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-dark">{tx.desc}</p>
                  <p className="text-[11px] text-text-muted mt-0.5">{tx.sub}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p
                  className={`text-[14px] font-bold ${
                    tx.amount >= 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {tx.amount >= 0 ? "+" : ""}₦{Math.abs(tx.amount).toLocaleString()}
                </p>
                <p className="text-[11px] text-text-muted mt-0.5">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
