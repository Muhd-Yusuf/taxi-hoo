"use client";

import { PiUsersBold, PiCarFill, PiCurrencyNgnBold, PiTrendUpBold, PiStarFill, PiWarningFill, PiArrowUpRightBold } from "react-icons/pi";
import { mockAdminStats, mockRides, mockDrivers } from "@/lib/mock-data";

const stats = [
  { label: "Revenue", value: `₦${(mockAdminStats.revenue / 1000000).toFixed(1)}M`, sub: `₦${mockAdminStats.todayRevenue.toLocaleString()} today`, icon: PiCurrencyNgnBold, color: "text-primary" },
  { label: "Total rides", value: mockAdminStats.totalRides.toLocaleString(), sub: `${mockAdminStats.todayRides} today`, icon: PiCarFill, color: "text-success" },
  { label: "Passengers", value: mockAdminStats.totalPassengers.toLocaleString(), sub: "+124 this week", icon: PiUsersBold, color: "text-info" },
  { label: "Drivers", value: `${mockAdminStats.activeDrivers}/${mockAdminStats.totalDrivers}`, sub: `${mockAdminStats.pendingApprovals} pending`, icon: PiTrendUpBold, color: "text-warning" },
];

const revenue = [
  { month: "Jan", value: 8.2 }, { month: "Feb", value: 9.1 }, { month: "Mar", value: 10.5 },
  { month: "Apr", value: 11.2 }, { month: "May", value: 12.5 },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-dark mb-1">Overview</h1>
          <p className="text-[13px] text-text-secondary">Platform performance</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-2">
              <s.icon size={14} className={s.color} />
              <PiArrowUpRightBold size={12} className="text-success" />
            </div>
            <p className="text-[20px] font-bold text-dark">{s.value}</p>
            <p className="text-[11px] text-text-muted mt-0.5">{s.label}</p>
            <p className="text-[10px] text-success mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mb-5">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-border p-5">
          <p className="text-[13px] font-semibold text-dark mb-5">Revenue</p>
          <div className="flex items-end gap-5 h-48">
            {revenue.map((d) => {
              const max = Math.max(...revenue.map((r) => r.value));
              const h = (d.value / max) * 100;
              const isCurrent = d.month === "May";
              return (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1.5">
                  <span className="text-[10px] text-text-muted">₦{d.value}M</span>
                  <div className={`w-full rounded-lg ${isCurrent ? "bg-dark" : "bg-surface-alt"}`} style={{ height: `${h}%` }} />
                  <span className={`text-[10px] ${isCurrent ? "text-dark font-semibold" : "text-text-muted"}`}>{d.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Health + Alert */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-border p-5">
            <p className="text-[13px] font-semibold text-dark mb-3">Platform health</p>
            <div className="space-y-3">
              {[
                { label: "Avg rating", value: mockAdminStats.avgRating, color: "text-dark" },
                { label: "Pending approvals", value: mockAdminStats.pendingApprovals, color: "text-warning" },
                { label: "Complaints", value: mockAdminStats.complaints, color: "text-danger" },
                { label: "Uptime", value: "99.9%", color: "text-success" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-[12px] text-text-secondary">{item.label}</span>
                  <span className={`text-[12px] font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark rounded-xl p-5">
            <PiWarningFill size={16} className="text-warning mb-2" />
            <p className="text-[13px] font-semibold text-white mb-1">Action needed</p>
            <p className="text-[11px] text-gray-400 mb-3">{mockAdminStats.pendingApprovals} drivers pending, {mockAdminStats.complaints} complaints open</p>
            <a href="/admin/drivers" className="text-[12px] text-primary font-medium hover:underline">Review →</a>
          </div>
        </div>
      </div>

      {/* Recent + Top drivers */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[13px] font-semibold text-dark">Recent rides</p>
            <a href="/admin/rides" className="text-[12px] text-text-muted hover:text-dark transition-colors">View all →</a>
          </div>
          {mockRides.slice(0, 4).map((ride, i) => (
            <div key={ride.id} className={`flex items-center justify-between py-3 ${i < 3 ? "border-b border-border" : ""}`}>
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                  ride.status === "completed" ? "bg-success-light" : ride.status === "in_progress" ? "bg-warning-light" : "bg-danger-light"
                }`}>
                  <PiCarFill size={12} className={ride.status === "completed" ? "text-success" : ride.status === "in_progress" ? "text-warning" : "text-danger"} />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-dark">{ride.passenger}</p>
                  <p className="text-[10px] text-text-muted">{ride.pickup.split(",")[0]}</p>
                </div>
              </div>
              <p className="text-[12px] font-bold text-dark">₦{ride.fare.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[13px] font-semibold text-dark">Top drivers</p>
            <a href="/admin/drivers" className="text-[12px] text-text-muted hover:text-dark transition-colors">View all →</a>
          </div>
          {mockDrivers.sort((a, b) => b.trips - a.trips).slice(0, 4).map((driver, i) => (
            <div key={driver.id} className={`flex items-center justify-between py-3 ${i < 3 ? "border-b border-border" : ""}`}>
              <div className="flex items-center gap-2.5">
                <span className="w-5 text-center text-[11px] font-bold text-text-muted">#{i + 1}</span>
                <div className="w-7 h-7 rounded-full bg-dark flex items-center justify-center">
                  <span className="text-[9px] font-bold text-primary">{driver.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-dark">{driver.name}</p>
                  <p className="text-[10px] text-text-muted">{driver.trips.toLocaleString()} trips · <PiStarFill size={8} className="inline text-primary fill-primary" /> {driver.rating}</p>
                </div>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${driver.status === "online" ? "bg-success-light text-success" : "bg-surface-alt text-text-muted"}`}>
                {driver.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
