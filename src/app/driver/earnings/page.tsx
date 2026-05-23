"use client";

import {
  DollarSign,
  TrendingUp,
  Car,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { mockEarnings } from "@/lib/mock-data";

const transactions = [
  {
    id: "T001",
    type: "ride",
    passenger: "Sarah Johnson",
    route: "Lekki → VI",
    amount: 3500,
    time: "09:30 AM",
    date: "Today",
  },
  {
    id: "T002",
    type: "ride",
    passenger: "Mohammed Sani",
    route: "Surulere → Yaba",
    amount: 2200,
    time: "11:00 AM",
    date: "Today",
  },
  {
    id: "T003",
    type: "ride",
    passenger: "Fatima Ali",
    route: "Ikeja → Oshodi",
    amount: 1500,
    time: "12:45 PM",
    date: "Today",
  },
  {
    id: "T004",
    type: "bonus",
    passenger: "Daily Bonus",
    route: "5 rides completed",
    amount: 2000,
    time: "01:00 PM",
    date: "Today",
  },
  {
    id: "T005",
    type: "ride",
    passenger: "Grace Adekunle",
    route: "Ajah → Ikoyi",
    amount: 5200,
    time: "02:30 PM",
    date: "Yesterday",
  },
  {
    id: "T006",
    type: "withdrawal",
    passenger: "Bank Transfer",
    route: "GTBank ****4532",
    amount: -50000,
    time: "04:00 PM",
    date: "Yesterday",
  },
];

export default function EarningsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Earnings</h1>
          <p className="text-text-secondary text-sm mt-1">
            Track your income and manage withdrawals
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2.5 text-sm font-medium text-dark hover:bg-surface-alt transition-colors">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-primary rounded-2xl p-5 text-dark">
          <DollarSign size={20} className="mb-2 opacity-70" />
          <p className="text-2xl font-bold">
            ₦{mockEarnings.today.toLocaleString()}
          </p>
          <p className="text-sm opacity-70">Today</p>
        </div>
        <div className="bg-white rounded-2xl border border-border p-5">
          <TrendingUp size={20} className="text-success mb-2" />
          <p className="text-2xl font-bold text-dark">
            ₦{mockEarnings.thisWeek.toLocaleString()}
          </p>
          <p className="text-sm text-text-muted">This Week</p>
        </div>
        <div className="bg-white rounded-2xl border border-border p-5">
          <Calendar size={20} className="text-info mb-2" />
          <p className="text-2xl font-bold text-dark">
            ₦{mockEarnings.thisMonth.toLocaleString()}
          </p>
          <p className="text-sm text-text-muted">This Month</p>
        </div>
        <div className="bg-white rounded-2xl border border-border p-5">
          <Car size={20} className="text-primary mb-2" />
          <p className="text-2xl font-bold text-dark">
            {mockEarnings.totalTrips.toLocaleString()}
          </p>
          <p className="text-sm text-text-muted">Total Trips</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-dark">Weekly Overview</h3>
            <div className="flex items-center gap-2 bg-surface-alt rounded-lg p-1">
              <button className="px-3 py-1.5 text-xs font-medium bg-primary text-dark rounded-md">
                Week
              </button>
              <button className="px-3 py-1.5 text-xs font-medium text-text-secondary rounded-md hover:text-dark">
                Month
              </button>
            </div>
          </div>

          <div className="flex items-end gap-4 h-56">
            {mockEarnings.weeklyData.map((day) => {
              const maxAmount = Math.max(
                ...mockEarnings.weeklyData.map((d) => d.amount)
              );
              const height =
                maxAmount > 0 ? (day.amount / maxAmount) * 100 : 0;
              const isToday = day.day === "Wed";
              return (
                <div
                  key={day.day}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <span className="text-xs font-medium text-text-secondary">
                    ₦{(day.amount / 1000).toFixed(0)}k
                  </span>
                  <div
                    className={`w-full rounded-xl transition-all ${
                      isToday ? "bg-primary" : "bg-primary/20"
                    }`}
                    style={{ height: `${Math.max(height, 4)}%` }}
                  />
                  <span
                    className={`text-xs ${
                      isToday
                        ? "text-primary font-bold"
                        : "text-text-muted"
                    }`}
                  >
                    {day.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-semibold text-dark mb-4">Wallet Balance</h3>
            <p className="text-3xl font-bold text-dark mb-1">₦452,000</p>
            <p className="text-sm text-success flex items-center gap-1">
              <ArrowUpRight size={14} />
              +₦15,600 today
            </p>
            <button className="w-full mt-4 bg-primary hover:bg-primary-hover text-dark font-bold py-3 rounded-xl transition-all">
              Withdraw to Bank
            </button>
          </div>

          <div className="bg-dark rounded-2xl p-5 text-white">
            <h3 className="font-semibold mb-3">Performance Bonus</h3>
            <p className="text-sm text-gray-400 mb-3">
              Complete 5 more rides today to earn a ₦2,000 bonus!
            </p>
            <div className="w-full bg-dark-lighter rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: "60%" }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">3 of 5 completed</p>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="mt-6 bg-white rounded-2xl border border-border p-5">
        <h3 className="font-semibold text-dark mb-5">Recent Transactions</h3>
        <div className="divide-y divide-border">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.type === "ride"
                      ? "bg-success-light"
                      : tx.type === "bonus"
                      ? "bg-primary-light"
                      : "bg-danger-light"
                  }`}
                >
                  {tx.type === "ride" ? (
                    <Car
                      size={18}
                      className="text-success"
                    />
                  ) : tx.type === "bonus" ? (
                    <TrendingUp size={18} className="text-primary" />
                  ) : (
                    <ArrowDownRight size={18} className="text-danger" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-dark text-sm">
                    {tx.passenger}
                  </p>
                  <p className="text-xs text-text-muted">{tx.route}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-bold text-sm ${
                    tx.amount >= 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {tx.amount >= 0 ? "+" : ""}₦
                  {Math.abs(tx.amount).toLocaleString()}
                </p>
                <p className="text-xs text-text-muted">
                  {tx.date} · {tx.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
