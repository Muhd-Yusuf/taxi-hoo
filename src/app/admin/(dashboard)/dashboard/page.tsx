"use client";

import { motion } from "framer-motion";
import {
  PiCurrencyDollarFill,
  PiCarFill,
  PiUsersFill,
  PiSteeringWheelFill,
  PiTrendUpBold,
  PiStarFill,
  PiWarningCircleFill,
  PiHeartbeatFill,
  PiClockFill,
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
    value: `P${(mockAdminStats.revenue / 1000000).toFixed(1)}M`,
    trend: "+12.5%",
    icon: PiCurrencyDollarFill,
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    label: "Total Rides",
    value: mockAdminStats.totalRides.toLocaleString(),
    trend: "+8.3%",
    icon: PiCarFill,
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    label: "Passengers",
    value: mockAdminStats.totalPassengers.toLocaleString(),
    trend: "+15.2%",
    icon: PiUsersFill,
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    label: "Active Drivers",
    value: `${mockAdminStats.activeDrivers}/${mockAdminStats.totalDrivers}`,
    trend: "57.9%",
    icon: PiSteeringWheelFill,
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
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
    <div className="min-h-full p-8 lg:p-10">
      {/* Welcome header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-2xl font-bold text-zinc-900">
          Welcome back, Admin
        </h1>
        <p className="text-sm text-zinc-500 mt-1.5">{today}</p>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-sm`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-xs font-semibold ${stat.color} flex items-center gap-1 ${stat.bg} px-2 py-0.5 rounded-full`}>
                <PiTrendUpBold size={10} />
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

      {/* Revenue chart */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-zinc-200 p-8 mb-10 shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-semibold text-zinc-900">Revenue Overview</h3>
            <p className="text-sm text-zinc-500 mt-0.5">Monthly revenue for 2025</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-zinc-900">
              P{(mockAdminStats.revenue / 1000000).toFixed(1)}M
            </p>
            <p className="text-xs text-emerald-600 font-medium flex items-center gap-1 justify-end">
              <PiTrendUpBold size={10} />
              +12.5% from last month
            </p>
          </div>
        </div>
        <div className="flex items-end gap-4 h-52">
          {revenueData.map((d, idx) => {
            const h = (d.amount / maxRevenue) * 100;
            const isCurrent = d.month === "Jul";
            return (
              <div
                key={d.month}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <span className="text-[11px] font-medium text-zinc-400">
                  P{(d.amount / 1000000).toFixed(1)}M
                </span>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.4 + idx * 0.05, duration: 0.5, ease: "easeOut" }}
                  className={`w-full rounded-lg ${
                    isCurrent
                      ? "bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-md shadow-emerald-500/20"
                      : "bg-zinc-100 hover:bg-zinc-200 transition-colors"
                  }`}
                />
                <span
                  className={`text-xs font-medium ${
                    isCurrent ? "text-emerald-600 font-semibold" : "text-zinc-400"
                  }`}
                >
                  {d.month}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Platform Health */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-10"
      >
        {[
          { label: "Avg Rating", value: "4.7", icon: PiStarFill, color: "text-amber-500", bg: "bg-amber-50" },
          { label: "Pending Approvals", value: "12", icon: PiClockFill, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Complaints", value: "3", icon: PiWarningCircleFill, color: "text-red-500", bg: "bg-red-50" },
          { label: "Uptime", value: "99.9%", icon: PiHeartbeatFill, color: "text-emerald-500", bg: "bg-emerald-50" },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm flex items-center gap-4">
            <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
              <item.icon size={20} className={item.color} />
            </div>
            <div>
              <p className="text-lg font-bold text-zinc-900">{item.value}</p>
              <p className="text-xs text-zinc-500">{item.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Two-column: Recent Rides + Top Drivers */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Rides */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="xl:col-span-2 bg-white rounded-2xl border border-zinc-200 shadow-sm"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
            <h3 className="text-base font-semibold text-zinc-900">Recent Rides</h3>
            <Link
              href="/admin/rides"
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/50">
                  <th className="text-left text-[11px] font-semibold uppercase text-zinc-500 px-6 py-3.5">Passenger</th>
                  <th className="text-left text-[11px] font-semibold uppercase text-zinc-500 px-6 py-3.5">Route</th>
                  <th className="text-left text-[11px] font-semibold uppercase text-zinc-500 px-6 py-3.5">Fare</th>
                  <th className="text-left text-[11px] font-semibold uppercase text-zinc-500 px-6 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockRides.slice(0, 5).map((ride) => (
                  <tr key={ride.id} className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-zinc-900">{ride.passenger}</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">{ride.driver}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-zinc-600 truncate max-w-[200px]">
                        {ride.pickup} → {ride.destination}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-zinc-900">P{ride.fare.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        ride.status === "completed"
                          ? "bg-emerald-50 text-emerald-600"
                          : ride.status === "in_progress"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-red-50 text-red-600"
                      }`}>
                        {ride.status.replace("_", " ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Top Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-zinc-200 shadow-sm"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
            <h3 className="text-base font-semibold text-zinc-900">Top Drivers</h3>
            <Link
              href="/admin/drivers"
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
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
                  className="flex items-center gap-3.5 px-3 py-3.5 rounded-xl hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-sm font-bold text-zinc-300 w-5">
                    {i + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {driver.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 truncate">{driver.name}</p>
                    <p className="text-[11px] text-zinc-400">{driver.trips.toLocaleString()} trips</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-medium text-zinc-900 flex items-center gap-1">
                      <PiStarFill size={12} className="text-amber-400" />
                      {driver.rating}
                    </p>
                    <span className={`text-[11px] font-medium ${
                      driver.status === "online" ? "text-emerald-500" : "text-zinc-400"
                    }`}>
                      {driver.status}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
