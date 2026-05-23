"use client";

import { motion } from "framer-motion";
import {
  PiCurrencyNgnFill,
  PiCarFill,
  PiUsersFill,
  PiSteeringWheelFill,
  PiTrendUpBold,
  PiWarningCircleFill,
  PiHeartbeatFill,
  PiStarFill,
} from "react-icons/pi";
import { mockAdminStats, mockRides, mockDrivers } from "@/lib/mock-data";
import Link from "next/link";

const revenueData = [
  { month: "Jan", amount: 8200000 },
  { month: "Feb", amount: 9100000 },
  { month: "Mar", amount: 10500000 },
  { month: "Apr", amount: 11200000 },
  { month: "May", amount: 12540000 },
  { month: "Jun", amount: 11800000 },
  { month: "Jul", amount: 13200000 },
];

const statCards = [
  {
    label: "Total Revenue",
    value: `₦${(mockAdminStats.revenue / 1000000).toFixed(1)}M`,
    trend: "+12.5%",
    icon: <PiCurrencyNgnFill size={22} />,
    borderColor: "border-l-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    trendColor: "text-emerald-600",
  },
  {
    label: "Total Rides",
    value: mockAdminStats.totalRides.toLocaleString(),
    trend: "+8.3%",
    icon: <PiCarFill size={22} />,
    borderColor: "border-l-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    trendColor: "text-blue-600",
  },
  {
    label: "Passengers",
    value: mockAdminStats.totalPassengers.toLocaleString(),
    trend: "+15.2%",
    icon: <PiUsersFill size={22} />,
    borderColor: "border-l-purple-500",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    trendColor: "text-purple-600",
  },
  {
    label: "Active Drivers",
    value: `${mockAdminStats.activeDrivers} / ${mockAdminStats.totalDrivers}`,
    trend: "57.9%",
    icon: <PiSteeringWheelFill size={22} />,
    borderColor: "border-l-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    trendColor: "text-amber-600",
  },
];

const platformHealth = [
  { label: "Avg Rating", value: "4.7", icon: <PiStarFill size={16} className="text-amber-500" />, color: "text-emerald-600" },
  { label: "Pending Approvals", value: "12", icon: <PiWarningCircleFill size={16} className="text-amber-500" />, color: "text-amber-600" },
  { label: "Complaints", value: "3", icon: <PiWarningCircleFill size={16} className="text-red-400" />, color: "text-red-500" },
  { label: "Uptime", value: "99.9%", icon: <PiHeartbeatFill size={16} className="text-emerald-500" />, color: "text-emerald-600" },
];

export default function AdminDashboardPage() {
  const maxRevenue = Math.max(...revenueData.map((d) => d.amount));
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-zinc-50 min-h-full px-6 lg:px-8 py-6">
      {/* Welcome header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-zinc-900">
          Welcome back, Admin
        </h1>
        <p className="text-sm text-zinc-500 mt-1">{today}</p>
      </motion.div>

      {/* 4 stat cards in a single row */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`bg-white rounded-xl border border-zinc-200 border-l-4 ${stat.borderColor} p-5 shadow-sm`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-semibold ${stat.trendColor} flex items-center gap-1`}>
                <PiTrendUpBold size={12} />
                {stat.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-zinc-900 tracking-tight">
              {stat.value}
            </p>
            <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Revenue chart - full width */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-zinc-200 p-6 mb-8 shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900">Revenue Overview</h3>
            <p className="text-sm text-zinc-500 mt-0.5">Monthly revenue for 2025</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-zinc-900">
              ₦{(mockAdminStats.revenue / 1000000).toFixed(1)}M
            </p>
            <p className="text-xs text-emerald-600 font-medium">+12.5% from last month</p>
          </div>
        </div>
        <div className="flex items-end gap-4 h-56">
          {revenueData.map((d) => {
            const h = (d.amount / maxRevenue) * 100;
            const isCurrent = d.month === "May";
            return (
              <div
                key={d.month}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <span className="text-xs font-semibold text-zinc-500">
                  ₦{(d.amount / 1000000).toFixed(1)}M
                </span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className={`w-full rounded-lg transition-all ${
                    isCurrent
                      ? "bg-emerald-500 shadow-lg shadow-emerald-500/20"
                      : "bg-zinc-200 hover:bg-zinc-300"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
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
      </motion.div>

      {/* Two-column layout: Recent Rides (wider) + Top Drivers (narrower) */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Recent Rides Table - 2/3 width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-2 bg-white rounded-xl border border-zinc-200 shadow-sm"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
            <h3 className="text-lg font-semibold text-zinc-900">Recent Rides</h3>
            <Link
              href="/admin/rides"
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3">Passenger</th>
                  <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3">Route</th>
                  <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3">Fare</th>
                  <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3">Status</th>
                  <th className="text-left text-xs font-semibold uppercase text-zinc-500 px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {mockRides.slice(0, 5).map((ride) => (
                  <tr key={ride.id} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-3.5">
                      <div>
                        <p className="text-sm font-medium text-zinc-900">{ride.passenger}</p>
                        <p className="text-xs text-zinc-400">Driver: {ride.driver}</p>
                      </div>
                    </td>
                    <td className="px-6 py-3.5">
                      <p className="text-sm text-zinc-600 max-w-[220px] truncate">
                        {ride.pickup} → {ride.destination}
                      </p>
                    </td>
                    <td className="px-6 py-3.5">
                      <p className="text-sm font-semibold text-zinc-900">₦{ride.fare.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full ${
                          ride.status === "completed"
                            ? "bg-emerald-50 text-emerald-600"
                            : ride.status === "in_progress"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {ride.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-3.5">
                      <p className="text-sm text-zinc-500">{ride.date}</p>
                      <p className="text-xs text-zinc-400">{ride.time}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Top Drivers - 1/3 width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border border-zinc-200 shadow-sm"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
            <h3 className="text-lg font-semibold text-zinc-900">Top Drivers</h3>
            <Link
              href="/admin/drivers"
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="p-4 space-y-1">
            {[...mockDrivers]
              .sort((a, b) => b.trips - a.trips)
              .slice(0, 5)
              .map((driver, i) => (
                <div
                  key={driver.id}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-sm font-bold text-zinc-300 w-6">
                    #{i + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {driver.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 truncate">
                      {driver.name}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {driver.trips.toLocaleString()} trips
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-semibold text-zinc-900 flex items-center gap-1">
                      <PiStarFill size={12} className="text-amber-400" />
                      {driver.rating}
                    </p>
                    <span
                      className={`text-[11px] font-medium ${
                        driver.status === "online"
                          ? "text-emerald-600"
                          : "text-zinc-400"
                      }`}
                    >
                      {driver.status}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Platform Health - horizontal inline stats */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl border border-zinc-200 shadow-sm"
      >
        <div className="px-6 py-4 border-b border-zinc-100">
          <h3 className="text-lg font-semibold text-zinc-900">Platform Health</h3>
        </div>
        <div className="grid grid-cols-4 divide-x divide-zinc-100">
          {platformHealth.map((item) => (
            <div key={item.label} className="px-6 py-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                {item.icon}
                <span className="text-sm text-zinc-500">{item.label}</span>
              </div>
              <p className={`text-2xl font-bold ${item.color}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
