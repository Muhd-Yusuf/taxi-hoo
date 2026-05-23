"use client";

import { useState } from "react";
import {
  DollarSign,
  Car,
  Star,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  Power,
  MapPin,
  Navigation,
} from "lucide-react";
import { mockEarnings, mockRides } from "@/lib/mock-data";

const statCards = [
  {
    label: "Today's Earnings",
    value: `₦${mockEarnings.today.toLocaleString()}`,
    icon: DollarSign,
    color: "bg-primary-light text-primary",
    trend: "+12%",
  },
  {
    label: "Completed Rides",
    value: mockEarnings.completedToday.toString(),
    icon: CheckCircle2,
    color: "bg-success-light text-success",
    trend: "+3",
  },
  {
    label: "Average Rating",
    value: mockEarnings.averageRating.toString(),
    icon: Star,
    color: "bg-warning-light text-warning",
    trend: "Excellent",
  },
  {
    label: "This Week",
    value: `₦${mockEarnings.thisWeek.toLocaleString()}`,
    icon: TrendingUp,
    color: "bg-info-light text-info",
    trend: "+18%",
  },
];

export default function DriverDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);

  const recentRides = mockRides
    .filter((r) => r.driver === "James Okafor")
    .slice(0, 3);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark">Driver Dashboard</h1>
          <p className="text-text-secondary text-sm mt-1">
            Welcome back, James!
          </p>
        </div>
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
            isOnline
              ? "bg-success text-white shadow-lg shadow-success/25"
              : "bg-text-muted text-white"
          }`}
        >
          <Power size={16} />
          {isOnline ? "Online" : "Offline"}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-2xl border border-border p-5 hover:border-primary/20 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center`}
              >
                <card.icon size={18} />
              </div>
              <span className="text-xs font-medium text-success bg-success-light px-2 py-0.5 rounded-full">
                {card.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-dark">{card.value}</p>
            <p className="text-xs text-text-muted mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Earnings Chart */}
        <div className="bg-white rounded-2xl border border-border p-5">
          <h3 className="font-semibold text-dark mb-5">Weekly Earnings</h3>
          <div className="flex items-end gap-3 h-48">
            {mockEarnings.weeklyData.map((day) => {
              const maxAmount = Math.max(
                ...mockEarnings.weeklyData.map((d) => d.amount)
              );
              const height =
                maxAmount > 0 ? (day.amount / maxAmount) * 100 : 0;
              return (
                <div
                  key={day.day}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <span className="text-xs font-medium text-text-secondary">
                    ₦{(day.amount / 1000).toFixed(0)}k
                  </span>
                  <div
                    className="w-full rounded-t-lg bg-primary/20 hover:bg-primary/40 transition-colors relative overflow-hidden"
                    style={{ height: `${Math.max(height, 4)}%` }}
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-xs text-text-muted">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Rides */}
        <div className="bg-white rounded-2xl border border-border p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-dark">Recent Rides</h3>
            <a
              href="/driver/requests"
              className="text-sm text-primary hover:text-primary-hover font-medium"
            >
              View All
            </a>
          </div>

          <div className="space-y-4">
            {recentRides.map((ride) => (
              <div
                key={ride.id}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-alt transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center flex-shrink-0">
                  <Car size={18} className="text-text-muted" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark truncate">
                    {ride.passenger}
                  </p>
                  <p className="text-xs text-text-muted truncate">
                    {ride.pickup} → {ride.destination}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-dark">
                    ₦{ride.fare.toLocaleString()}
                  </p>
                  <p className="text-xs text-text-muted">{ride.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Ride */}
      <div className="mt-6 bg-dark rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <h3 className="font-semibold">Current Ride in Progress</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-success mt-0.5" />
            <div>
              <p className="text-xs text-gray-400">Pickup</p>
              <p className="text-sm font-medium">Surulere, Lagos</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Navigation size={16} className="text-primary mt-0.5" />
            <div>
              <p className="text-xs text-gray-400">Destination</p>
              <p className="text-sm font-medium">Yaba, Lagos</p>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <div>
              <p className="text-xs text-gray-400">Fare</p>
              <p className="text-lg font-bold text-primary">₦2,200</p>
            </div>
            <button className="bg-primary hover:bg-primary-hover text-dark font-bold px-5 py-2 rounded-xl transition-all text-sm">
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
