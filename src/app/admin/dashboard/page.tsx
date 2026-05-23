"use client";

import {
  Users,
  Car,
  DollarSign,
  TrendingUp,
  BarChart3,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { mockAdminStats, mockRides, mockDrivers } from "@/lib/mock-data";

const statCards = [
  {
    label: "Total Revenue",
    value: `₦${(mockAdminStats.revenue / 1000000).toFixed(1)}M`,
    subValue: `₦${mockAdminStats.todayRevenue.toLocaleString()} today`,
    icon: DollarSign,
    color: "bg-primary",
    textColor: "text-dark",
  },
  {
    label: "Total Rides",
    value: mockAdminStats.totalRides.toLocaleString(),
    subValue: `${mockAdminStats.todayRides} today`,
    icon: Car,
    color: "bg-success-light",
    textColor: "text-success",
  },
  {
    label: "Total Passengers",
    value: mockAdminStats.totalPassengers.toLocaleString(),
    subValue: "+124 this week",
    icon: Users,
    color: "bg-info-light",
    textColor: "text-info",
  },
  {
    label: "Active Drivers",
    value: `${mockAdminStats.activeDrivers}/${mockAdminStats.totalDrivers}`,
    subValue: `${mockAdminStats.pendingApprovals} pending`,
    icon: TrendingUp,
    color: "bg-warning-light",
    textColor: "text-warning",
  },
];

const revenueData = [
  { month: "Jan", value: 8.2 },
  { month: "Feb", value: 9.1 },
  { month: "Mar", value: 10.5 },
  { month: "Apr", value: 11.2 },
  { month: "May", value: 12.5 },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Admin Dashboard</h1>
          <p className="text-text-secondary text-sm mt-1">
            Overview of your platform performance
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2.5 text-sm">
          <Clock size={14} className="text-text-muted" />
          <span className="text-text-secondary">Last updated: Just now</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-2xl border border-border p-5 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center`}
              >
                <card.icon size={18} className={card.textColor} />
              </div>
              <ArrowUpRight size={16} className="text-success" />
            </div>
            <p className="text-2xl font-bold text-dark">{card.value}</p>
            <p className="text-xs text-text-muted mt-1">{card.label}</p>
            <p className="text-xs text-success mt-1">{card.subValue}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-dark">Revenue Overview</h3>
            <div className="flex items-center gap-2 bg-surface-alt rounded-lg p-1">
              <button className="px-3 py-1.5 text-xs font-medium bg-primary text-dark rounded-md">
                Monthly
              </button>
              <button className="px-3 py-1.5 text-xs font-medium text-text-secondary rounded-md">
                Yearly
              </button>
            </div>
          </div>

          <div className="flex items-end gap-6 h-52">
            {revenueData.map((d) => {
              const maxVal = Math.max(...revenueData.map((r) => r.value));
              const height = (d.value / maxVal) * 100;
              const isCurrent = d.month === "May";
              return (
                <div
                  key={d.month}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <span className="text-xs font-medium text-text-secondary">
                    ₦{d.value}M
                  </span>
                  <div
                    className={`w-full rounded-xl ${
                      isCurrent ? "bg-primary" : "bg-primary/20"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <span
                    className={`text-xs ${
                      isCurrent
                        ? "text-primary font-bold"
                        : "text-text-muted"
                    }`}
                  >
                    {d.month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-semibold text-dark mb-4">Platform Health</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Avg Rating
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-primary fill-primary" />
                  <span className="text-sm font-bold text-dark">
                    {mockAdminStats.avgRating}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Pending Approvals
                </span>
                <span className="text-sm font-bold text-warning">
                  {mockAdminStats.pendingApprovals}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Open Complaints
                </span>
                <span className="text-sm font-bold text-danger">
                  {mockAdminStats.complaints}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Uptime
                </span>
                <span className="text-sm font-bold text-success">99.9%</span>
              </div>
            </div>
          </div>

          <div className="bg-dark rounded-2xl p-5 text-white">
            <AlertTriangle size={20} className="text-warning mb-3" />
            <h3 className="font-semibold mb-1">Action Required</h3>
            <p className="text-sm text-gray-400 mb-3">
              {mockAdminStats.pendingApprovals} drivers awaiting approval and{" "}
              {mockAdminStats.complaints} unresolved complaints.
            </p>
            <a
              href="/admin/drivers"
              className="text-primary text-sm font-medium hover:text-primary-hover"
            >
              Review Now →
            </a>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Rides */}
        <div className="bg-white rounded-2xl border border-border p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-dark">Recent Rides</h3>
            <a
              href="/admin/rides"
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              View All
            </a>
          </div>
          <div className="divide-y divide-border">
            {mockRides.slice(0, 4).map((ride) => (
              <div
                key={ride.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      ride.status === "completed"
                        ? "bg-success-light"
                        : ride.status === "in_progress"
                        ? "bg-primary-light"
                        : "bg-danger-light"
                    }`}
                  >
                    <Car
                      size={14}
                      className={
                        ride.status === "completed"
                          ? "text-success"
                          : ride.status === "in_progress"
                          ? "text-primary"
                          : "text-danger"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">
                      {ride.passenger}
                    </p>
                    <p className="text-xs text-text-muted">{ride.pickup}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-dark">
                  ₦{ride.fare.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Drivers */}
        <div className="bg-white rounded-2xl border border-border p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-dark">Top Drivers</h3>
            <a
              href="/admin/drivers"
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              View All
            </a>
          </div>
          <div className="divide-y divide-border">
            {mockDrivers
              .sort((a, b) => b.trips - a.trips)
              .slice(0, 4)
              .map((driver, idx) => (
                <div
                  key={driver.id}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 text-center text-sm font-bold text-primary">
                      #{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {driver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark">
                        {driver.name}
                      </p>
                      <p className="text-xs text-text-muted">
                        {driver.trips.toLocaleString()} trips ·{" "}
                        <Star
                          size={10}
                          className="inline text-primary fill-primary"
                        />{" "}
                        {driver.rating}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      driver.status === "online"
                        ? "bg-success-light text-success"
                        : "bg-surface-alt text-text-muted"
                    }`}
                  >
                    {driver.status}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
