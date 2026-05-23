"use client";

import { useState } from "react";
import {
  PiCurrencyNgnBold,
  PiCarFill,
  PiStarFill,
  PiTrendUpBold,
  PiPowerBold,
} from "react-icons/pi";
import { mockEarnings, mockRides } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DriverDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);
  const recentRides = mockRides.filter((r) => r.driver === "James Okafor").slice(0, 3);

  const stats = [
    { label: "Today", value: `₦${mockEarnings.today.toLocaleString()}`, icon: PiCurrencyNgnBold, color: "text-primary", bg: "bg-primary/10" },
    { label: "Rides today", value: mockEarnings.completedToday, icon: PiCarFill, color: "text-success", bg: "bg-success-light" },
    { label: "Rating", value: mockEarnings.averageRating, icon: PiStarFill, color: "text-warning", bg: "bg-warning-light" },
    { label: "This week", value: `₦${mockEarnings.thisWeek.toLocaleString()}`, icon: PiTrendUpBold, color: "text-info", bg: "bg-info-light" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-dark tracking-tight mb-1">
            Dashboard
          </h1>
          <p className="text-sm text-text-secondary">Welcome back, James</p>
        </div>
        <Button
          variant={isOnline ? "default" : "outline"}
          size="lg"
          onClick={() => setIsOnline(!isOnline)}
          className={
            isOnline
              ? "bg-success text-white hover:bg-success/90 rounded-full gap-2.5 px-5"
              : "rounded-full gap-2.5 px-5"
          }
        >
          {isOnline && (
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          )}
          <PiPowerBold size={15} />
          {isOnline ? "Online" : "Offline"}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        {stats.map((s) => (
          <Card key={s.label} className="shadow-sm">
            <CardContent className="pt-2">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                <s.icon size={18} className={s.color} />
              </div>
              <p className="text-[22px] sm:text-2xl font-bold text-dark tracking-tight">{s.value}</p>
              <p className="text-xs text-text-muted mt-1 font-medium">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart + Recent rides */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly earnings chart */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-[15px] font-semibold text-dark">Weekly earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-3 sm:gap-4 h-44 sm:h-52">
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
          </CardContent>
        </Card>

        {/* Recent rides */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-[15px] font-semibold text-dark">Recent rides</CardTitle>
            <a href="/driver/requests" className="text-[13px] text-text-muted hover:text-dark font-medium transition-colors">
              View all →
            </a>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentRides.map((ride) => (
                <div
                  key={ride.id}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-surface-alt transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center flex-shrink-0">
                    <span className="text-[11px] font-bold text-text-secondary">
                      {ride.passenger.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-dark truncate">{ride.passenger}</p>
                    <p className="text-[11px] text-text-muted truncate mt-0.5">
                      {ride.pickup} → {ride.destination}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-dark">₦{ride.fare.toLocaleString()}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">{ride.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active ride */}
      <Card className="mt-6 bg-zinc-900 text-white border-zinc-800 shadow-sm">
        <CardContent className="pt-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
            <p className="text-[15px] font-semibold text-white">Active ride</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Pickup</p>
                <p className="text-sm font-medium text-white mt-0.5">Surulere, Lagos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-sm bg-primary flex-shrink-0" />
              <div>
                <p className="text-[11px] text-gray-500 font-medium">Drop-off</p>
                <p className="text-sm font-medium text-white mt-0.5">Yaba, Lagos</p>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-5">
              <p className="text-[22px] font-bold text-primary tracking-tight">₦2,200</p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-dark font-bold px-6 rounded-xl"
              >
                Complete
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
