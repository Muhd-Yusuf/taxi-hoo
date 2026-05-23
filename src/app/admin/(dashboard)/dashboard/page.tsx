"use client";

import {
  PiUsersBold,
  PiCarFill,
  PiCurrencyNgnBold,
  PiTrendUpBold,
  PiStarFill,
  PiWarningFill,
  PiArrowUpRightBold,
  PiChartBarBold,
  PiShieldCheckBold,
  PiClockBold,
  PiLightningBold,
} from "react-icons/pi";
import { mockAdminStats, mockRides, mockDrivers } from "@/lib/mock-data";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  {
    label: "Revenue",
    value: `\u20A6${(mockAdminStats.revenue / 1000000).toFixed(1)}M`,
    sub: `\u20A6${mockAdminStats.todayRevenue.toLocaleString()} today`,
    icon: PiCurrencyNgnBold,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "Total rides",
    value: mockAdminStats.totalRides.toLocaleString(),
    sub: `${mockAdminStats.todayRides} today`,
    icon: PiCarFill,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    label: "Passengers",
    value: mockAdminStats.totalPassengers.toLocaleString(),
    sub: "+124 this week",
    icon: PiUsersBold,
    iconBg: "bg-info/10",
    iconColor: "text-info",
  },
  {
    label: "Drivers",
    value: `${mockAdminStats.activeDrivers}/${mockAdminStats.totalDrivers}`,
    sub: `${mockAdminStats.pendingApprovals} pending`,
    icon: PiTrendUpBold,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
];

const revenue = [
  { month: "Jan", value: 8.2 },
  { month: "Feb", value: 9.1 },
  { month: "Mar", value: 10.5 },
  { month: "Apr", value: 11.2 },
  { month: "May", value: 12.5 },
];

export default function AdminDashboardPage() {
  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
          Overview
        </h1>
        <p className="text-[14px] text-text-secondary">
          Platform performance
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center`}
                >
                  <s.icon size={18} className={s.iconColor} />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-success/10 text-success border-none gap-1"
                >
                  <PiArrowUpRightBold size={11} />
                  12%
                </Badge>
              </div>
              <p className="text-[22px] sm:text-[26px] font-bold text-dark tracking-tight leading-none">
                {s.value}
              </p>
              <p className="text-[12px] text-text-muted mt-1.5">{s.label}</p>
              <p className="text-[11px] text-success font-medium mt-1">
                {s.sub}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue chart + Platform health + Action alert */}
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
        {/* Revenue chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <PiChartBarBold size={14} className="text-primary" />
                </div>
                <div>
                  <CardTitle className="text-[14px]">Revenue</CardTitle>
                  <CardDescription className="text-[11px]">
                    Monthly overview
                  </CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="text-[11px] text-text-muted">
                2025
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-5 sm:gap-6 h-52">
              {revenue.map((d) => {
                const max = Math.max(...revenue.map((r) => r.value));
                const h = (d.value / max) * 100;
                const isCurrent = d.month === "May";
                return (
                  <div
                    key={d.month}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <span className="text-[11px] font-semibold text-text-secondary">
                      {"\u20A6"}{d.value}M
                    </span>
                    <div
                      className={`w-full rounded-xl transition-all ${
                        isCurrent
                          ? "bg-primary shadow-[0_4px_12px_rgba(16,185,129,0.25)]"
                          : "bg-surface-alt hover:bg-border"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                    <span
                      className={`text-[11px] font-medium ${
                        isCurrent ? "text-primary font-bold" : "text-text-muted"
                      }`}
                    >
                      {d.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Health + Alert stacked */}
        <div className="flex flex-col gap-5">
          {/* Platform health */}
          <Card className="flex-1">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-info/10 flex items-center justify-center">
                  <PiShieldCheckBold size={13} className="text-info" />
                </div>
                <CardTitle className="text-[14px]">Platform health</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    label: "Avg rating",
                    value: mockAdminStats.avgRating,
                    icon: PiStarFill,
                    color: "text-dark",
                  },
                  {
                    label: "Pending approvals",
                    value: mockAdminStats.pendingApprovals,
                    icon: PiClockBold,
                    color: "text-warning",
                  },
                  {
                    label: "Complaints",
                    value: mockAdminStats.complaints,
                    icon: PiWarningFill,
                    color: "text-danger",
                  },
                  {
                    label: "Uptime",
                    value: "99.9%",
                    icon: PiLightningBold,
                    color: "text-success",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon size={12} className="text-text-muted" />
                      <span className="text-[13px] text-text-secondary">
                        {item.label}
                      </span>
                    </div>
                    <span
                      className={`text-[13px] font-bold ${item.color}`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action alert */}
          <Card className="bg-dark border-none">
            <CardContent className="pt-2">
              <div className="w-9 h-9 rounded-xl bg-warning/15 flex items-center justify-center mb-4">
                <PiWarningFill size={16} className="text-warning" />
              </div>
              <p className="text-[15px] font-semibold text-white mb-1.5">
                Action needed
              </p>
              <p className="text-[13px] text-gray-400 leading-relaxed mb-4">
                {mockAdminStats.pendingApprovals} drivers pending approval,{" "}
                {mockAdminStats.complaints} complaints open
              </p>
              <a
                href="/admin/drivers"
                className="inline-flex items-center gap-1.5 text-[13px] text-primary font-semibold hover:underline"
              >
                Review
                <PiArrowUpRightBold size={12} />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent rides + Top drivers */}
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {/* Recent rides */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-success/10 flex items-center justify-center">
                  <PiCarFill size={13} className="text-success" />
                </div>
                <CardTitle className="text-[14px]">Recent rides</CardTitle>
              </div>
              <a
                href="/admin/rides"
                className="text-[12px] text-text-muted hover:text-primary transition-colors font-medium"
              >
                View all &rarr;
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {mockRides.slice(0, 4).map((ride, i) => (
                <div
                  key={ride.id}
                  className={`flex items-center justify-between py-3.5 ${
                    i < 3 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        ride.status === "completed"
                          ? "bg-success/10"
                          : ride.status === "in_progress"
                          ? "bg-warning/10"
                          : "bg-danger/10"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          ride.status === "completed"
                            ? "bg-success"
                            : ride.status === "in_progress"
                            ? "bg-warning"
                            : "bg-danger"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-dark">
                        {ride.passenger}
                      </p>
                      <p className="text-[11px] text-text-muted mt-0.5">
                        {ride.pickup.split(",")[0]} &rarr;{" "}
                        {ride.destination.split(",")[0]}
                      </p>
                    </div>
                  </div>
                  <p className="text-[13px] font-bold text-dark">
                    {"\u20A6"}{ride.fare.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top drivers */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <PiTrendUpBold size={13} className="text-primary" />
                </div>
                <CardTitle className="text-[14px]">Top drivers</CardTitle>
              </div>
              <a
                href="/admin/drivers"
                className="text-[12px] text-text-muted hover:text-primary transition-colors font-medium"
              >
                View all &rarr;
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {[...mockDrivers]
                .sort((a, b) => b.trips - a.trips)
                .slice(0, 4)
                .map((driver, i) => (
                  <div
                    key={driver.id}
                    className={`flex items-center justify-between py-3.5 ${
                      i < 3 ? "border-b border-border" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center text-[12px] font-bold text-text-muted">
                        #{i + 1}
                      </span>
                      <Avatar size="default" className="bg-dark">
                        <AvatarFallback className="bg-dark text-primary text-[10px] font-bold">
                          {driver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-[13px] font-medium text-dark">
                          {driver.name}
                        </p>
                        <p className="text-[11px] text-text-muted mt-0.5">
                          {driver.trips.toLocaleString()} trips{" "}
                          <span className="mx-0.5">&middot;</span>{" "}
                          <PiStarFill
                            size={9}
                            className="inline text-primary fill-primary"
                          />{" "}
                          {driver.rating}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        driver.status === "online"
                          ? "bg-success/10 text-success border-none"
                          : "bg-surface-alt text-text-muted border-none"
                      }
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          driver.status === "online"
                            ? "bg-success"
                            : "bg-text-muted"
                        }`}
                      />
                      {driver.status}
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
