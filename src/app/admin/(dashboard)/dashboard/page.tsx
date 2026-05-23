"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import {
  PiCurrencyNgnFill,
  PiCarFill,
  PiUsersFill,
  PiSteeringWheelFill,
} from "react-icons/pi";
import { mockAdminStats, mockRides, mockDrivers } from "@/lib/mock-data";
import Link from "next/link";

const revenueData = [
  { month: "Jan", amount: 8200000 },
  { month: "Feb", amount: 9100000 },
  { month: "Mar", amount: 10500000 },
  { month: "Apr", amount: 11200000 },
  { month: "May", amount: 12540000 },
];

export default function AdminDashboardPage() {
  const maxRevenue = Math.max(...revenueData.map((d) => d.amount));

  return (
    <div className="bg-zinc-50 min-h-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-zinc-900">Dashboard</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Welcome back, Admin</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <StatCard
          icon={<PiCurrencyNgnFill size={18} className="text-emerald-500" />}
          label="Total Revenue"
          value={`₦${(mockAdminStats.revenue / 1000000).toFixed(1)}M`}
          trend="+12%"
          variant="dark"
        />
        <StatCard
          icon={<PiCarFill size={18} className="text-blue-500" />}
          label="Total Rides"
          value={mockAdminStats.totalRides.toLocaleString()}
          trend="+8%"
          variant="default"
        />
        <StatCard
          icon={<PiUsersFill size={18} className="text-purple-500" />}
          label="Passengers"
          value={mockAdminStats.totalPassengers.toLocaleString()}
          trend="+15%"
          variant="default"
        />
        <StatCard
          icon={
            <PiSteeringWheelFill size={18} className="text-amber-500" />
          }
          label="Drivers"
          value={`${mockAdminStats.activeDrivers}/${mockAdminStats.totalDrivers}`}
          variant="default"
        />
      </div>

      {/* Revenue chart */}
      <div className="bg-white rounded-2xl border border-zinc-100 p-4 mb-4">
        <h3 className="text-sm font-semibold text-zinc-900 mb-4">
          Revenue Overview
        </h3>
        <div className="flex items-end gap-3 h-40">
          {revenueData.map((d) => {
            const h = (d.amount / maxRevenue) * 100;
            const isCurrent = d.month === "May";
            return (
              <div
                key={d.month}
                className="flex-1 flex flex-col items-center gap-1.5"
              >
                <span className="text-[10px] font-semibold text-zinc-500">
                  ₦{(d.amount / 1000000).toFixed(1)}M
                </span>
                <div
                  className={`w-full rounded-lg transition-all ${
                    isCurrent
                      ? "bg-emerald-500"
                      : "bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  style={{ height: `${h}%` }}
                />
                <span
                  className={`text-[11px] font-medium ${
                    isCurrent
                      ? "text-emerald-600 font-bold"
                      : "text-zinc-400"
                  }`}
                >
                  {d.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Platform Health */}
      <div className="bg-white rounded-2xl border border-zinc-100 p-4 mb-4">
        <h3 className="text-sm font-semibold text-zinc-900 mb-3">
          Platform Health
        </h3>
        <div className="space-y-3">
          {[
            { label: "Avg Rating", value: "4.7", color: "text-emerald-600" },
            {
              label: "Pending Approvals",
              value: "12",
              color: "text-amber-600",
            },
            { label: "Complaints", value: "3", color: "text-red-500" },
            { label: "Uptime", value: "99.9%", color: "text-emerald-600" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-zinc-500">{item.label}</span>
              <span className={`text-sm font-semibold ${item.color}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Rides */}
      <div className="bg-white rounded-2xl border border-zinc-100 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-zinc-900">
            Recent Rides
          </h3>
          <Link
            href="/admin/rides"
            className="text-xs text-emerald-600 font-medium"
          >
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {mockRides.slice(0, 4).map((ride) => (
            <div key={ride.id} className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  ride.status === "completed"
                    ? "bg-emerald-500"
                    : ride.status === "in_progress"
                    ? "bg-amber-500"
                    : "bg-red-500"
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-900 truncate">
                  {ride.passenger}
                </p>
                <p className="text-[11px] text-zinc-400 truncate">
                  {ride.pickup} → {ride.destination}
                </p>
              </div>
              <p className="text-sm font-semibold text-zinc-900">
                ₦{ride.fare.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Drivers */}
      <div className="bg-white rounded-2xl border border-zinc-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-zinc-900">Top Drivers</h3>
          <Link
            href="/admin/drivers"
            className="text-xs text-emerald-600 font-medium"
          >
            View all
          </Link>
        </div>
        <div className="space-y-3">
          {[...mockDrivers]
            .sort((a, b) => b.trips - a.trips)
            .slice(0, 4)
            .map((driver, i) => (
              <div key={driver.id} className="flex items-center gap-3">
                <span className="text-xs font-bold text-zinc-300 w-5">
                  #{i + 1}
                </span>
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center text-xs font-bold">
                  {driver.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-900">
                    {driver.name}
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    {driver.trips.toLocaleString()} trips · ⭐ {driver.rating}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    driver.status === "online"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {driver.status}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
