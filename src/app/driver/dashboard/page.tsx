"use client";

import { useState } from "react";
import { PiCurrencyNgnBold, PiCarFill, PiStarFill, PiTrendUpBold, PiPowerBold, PiMapPinBold, PiNavigationArrowBold } from "react-icons/pi";
import { mockEarnings, mockRides } from "@/lib/mock-data";

export default function DriverDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);
  const recentRides = mockRides.filter((r) => r.driver === "James Okafor").slice(0, 3);

  const stats = [
    { label: "Today", value: `₦${mockEarnings.today.toLocaleString()}`, icon: PiCurrencyNgnBold, color: "text-primary" },
    { label: "Rides today", value: mockEarnings.completedToday, icon: PiCarFill, color: "text-success" },
    { label: "Rating", value: mockEarnings.averageRating, icon: PiStarFill, color: "text-warning" },
    { label: "This week", value: `₦${mockEarnings.thisWeek.toLocaleString()}`, icon: PiTrendUpBold, color: "text-info" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-dark mb-1">Dashboard</h1>
          <p className="text-[13px] text-text-secondary">Welcome back, James</p>
        </div>
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
            isOnline ? "bg-success text-white" : "bg-surface-alt text-text-muted border border-border"
          }`}
        >
          <PiPowerBold size={14} />
          {isOnline ? "Online" : "Offline"}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-border p-4">
            <s.icon size={16} className={`${s.color} mb-2`} />
            <p className="text-[20px] font-bold text-dark">{s.value}</p>
            <p className="text-[11px] text-text-muted mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Chart */}
        <div className="bg-white rounded-xl border border-border p-5">
          <p className="text-[13px] font-semibold text-dark mb-5">Weekly earnings</p>
          <div className="flex items-end gap-3 h-44">
            {mockEarnings.weeklyData.map((day) => {
              const max = Math.max(...mockEarnings.weeklyData.map((d) => d.amount));
              const h = max > 0 ? (day.amount / max) * 100 : 0;
              return (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-1.5">
                  <span className="text-[10px] text-text-muted">₦{(day.amount / 1000).toFixed(0)}k</span>
                  <div className="w-full bg-surface-alt rounded-lg overflow-hidden" style={{ height: `${Math.max(h, 4)}%` }}>
                    <div className="w-full h-full bg-dark rounded-lg" />
                  </div>
                  <span className="text-[10px] text-text-muted">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent rides */}
        <div className="bg-white rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[13px] font-semibold text-dark">Recent rides</p>
            <a href="/driver/requests" className="text-[12px] text-text-muted hover:text-dark transition-colors">View all →</a>
          </div>
          <div className="space-y-3">
            {recentRides.map((ride) => (
              <div key={ride.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-alt transition-colors">
                <div className="w-9 h-9 rounded-lg bg-surface-alt flex items-center justify-center flex-shrink-0">
                  <PiCarFill size={14} className="text-text-muted" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-dark truncate">{ride.passenger}</p>
                  <p className="text-[10px] text-text-muted truncate">{ride.pickup} → {ride.destination}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[12px] font-bold text-dark">₦{ride.fare.toLocaleString()}</p>
                  <p className="text-[10px] text-text-muted">{ride.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active ride */}
      <div className="mt-5 bg-dark rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <p className="text-[13px] font-semibold text-white">Active ride</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-success" />
            <div>
              <p className="text-[10px] text-gray-500">Pickup</p>
              <p className="text-[13px] font-medium text-white">Surulere, Lagos</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-sm bg-primary" />
            <div>
              <p className="text-[10px] text-gray-500">Drop-off</p>
              <p className="text-[13px] font-medium text-white">Yaba, Lagos</p>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <p className="text-[18px] font-bold text-primary">₦2,200</p>
            <button className="bg-primary hover:bg-primary-hover text-dark text-[12px] font-bold px-4 py-2 rounded-lg transition-colors">
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
