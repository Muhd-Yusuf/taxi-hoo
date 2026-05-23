"use client";

import { PiCurrencyNgnBold, PiTrendUpBold, PiCarFill, PiCalendarBold, PiDownloadSimpleBold, PiArrowUpRightBold, PiArrowDownRightBold } from "react-icons/pi";
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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-dark mb-1">Earnings</h1>
          <p className="text-[13px] text-text-secondary">Track income and withdrawals</p>
        </div>
        <button className="flex items-center gap-1.5 bg-white border border-border rounded-lg px-3.5 py-2 text-[12px] font-medium text-dark hover:bg-surface-alt transition-colors">
          <PiDownloadSimpleBold size={13} /> Export
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-dark rounded-xl p-4 text-white">
          <PiCurrencyNgnBold size={14} className="text-primary mb-2" />
          <p className="text-[20px] font-bold">₦{mockEarnings.today.toLocaleString()}</p>
          <p className="text-[11px] text-gray-400">Today</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-4">
          <PiTrendUpBold size={14} className="text-success mb-2" />
          <p className="text-[20px] font-bold text-dark">₦{mockEarnings.thisWeek.toLocaleString()}</p>
          <p className="text-[11px] text-text-muted">This week</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-4">
          <PiCalendarBold size={14} className="text-info mb-2" />
          <p className="text-[20px] font-bold text-dark">₦{mockEarnings.thisMonth.toLocaleString()}</p>
          <p className="text-[11px] text-text-muted">This month</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-4">
          <PiCarFill size={14} className="text-primary mb-2" />
          <p className="text-[20px] font-bold text-dark">{mockEarnings.totalTrips.toLocaleString()}</p>
          <p className="text-[11px] text-text-muted">Total trips</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-border p-5">
          <p className="text-[13px] font-semibold text-dark mb-5">Weekly overview</p>
          <div className="flex items-end gap-4 h-48">
            {mockEarnings.weeklyData.map((day) => {
              const max = Math.max(...mockEarnings.weeklyData.map((d) => d.amount));
              const h = max > 0 ? (day.amount / max) * 100 : 0;
              return (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-1.5">
                  <span className="text-[10px] text-text-muted">₦{(day.amount / 1000).toFixed(0)}k</span>
                  <div className="w-full bg-surface-alt rounded-lg" style={{ height: `${Math.max(h, 4)}%` }}>
                    <div className="w-full h-full bg-dark rounded-lg" />
                  </div>
                  <span className="text-[10px] text-text-muted">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wallet */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-border p-5">
            <p className="text-[13px] font-semibold text-dark mb-3">Wallet</p>
            <p className="text-[28px] font-bold text-dark">₦452,000</p>
            <p className="text-[12px] text-success flex items-center gap-1 mt-1">
              <PiArrowUpRightBold size={12} /> +₦15,600 today
            </p>
            <button className="w-full mt-4 bg-dark text-white text-[13px] font-semibold py-3 rounded-lg hover:bg-dark-light transition-colors">
              Withdraw to bank
            </button>
          </div>

          <div className="bg-dark rounded-xl p-5">
            <p className="text-[13px] font-semibold text-white mb-2">Bonus</p>
            <p className="text-[12px] text-gray-400 mb-3">Complete 2 more rides for ₦2,000 bonus</p>
            <div className="w-full bg-dark-lighter rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }} />
            </div>
            <p className="text-[10px] text-gray-500 mt-1.5">3 / 5 rides</p>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="mt-5 bg-white rounded-xl border border-border p-5">
        <p className="text-[13px] font-semibold text-dark mb-4">Transactions</p>
        <div className="space-y-0">
          {transactions.map((tx, i) => (
            <div key={tx.id} className={`flex items-center justify-between py-3.5 ${i < transactions.length - 1 ? "border-b border-border" : ""}`}>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  tx.type === "ride" ? "bg-success-light" : tx.type === "bonus" ? "bg-warning-light" : "bg-danger-light"
                }`}>
                  {tx.type === "withdrawal" ? <PiArrowDownRightBold size={14} className="text-danger" /> : <PiArrowUpRightBold size={14} className={tx.type === "ride" ? "text-success" : "text-warning"} />}
                </div>
                <div>
                  <p className="text-[12px] font-medium text-dark">{tx.desc}</p>
                  <p className="text-[10px] text-text-muted">{tx.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[12px] font-bold ${tx.amount >= 0 ? "text-success" : "text-danger"}`}>
                  {tx.amount >= 0 ? "+" : ""}₦{Math.abs(tx.amount).toLocaleString()}
                </p>
                <p className="text-[10px] text-text-muted">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
