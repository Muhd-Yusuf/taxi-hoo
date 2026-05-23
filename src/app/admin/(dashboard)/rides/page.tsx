"use client";

import {
  PiMagnifyingGlassBold,
  PiCarFill,
  PiCheckCircleFill,
  PiXCircleFill,
  PiClockBold,
  PiEyeBold,
  PiCurrencyNgnBold,
  PiChartBarBold,
  PiLightningBold,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const statusMap: Record<
  string,
  { label: string; className: string; Icon: typeof PiCheckCircleFill }
> = {
  completed: {
    label: "Completed",
    className: "bg-success/10 text-success border-none",
    Icon: PiCheckCircleFill,
  },
  in_progress: {
    label: "Active",
    className: "bg-warning/10 text-warning border-none",
    Icon: PiClockBold,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-danger/10 text-danger border-none",
    Icon: PiXCircleFill,
  },
};

export default function AdminRidesPage() {
  const completed = mockRides.filter((r) => r.status === "completed").length;
  const active = mockRides.filter((r) => r.status === "in_progress").length;
  const totalRev = mockRides
    .filter((r) => r.status === "completed")
    .reduce((s, r) => s + r.fare, 0);

  const summaryStats = [
    {
      label: "Total",
      value: mockRides.length,
      color: "text-dark",
      icon: PiChartBarBold,
      iconBg: "bg-dark/5",
      iconColor: "text-dark",
    },
    {
      label: "Completed",
      value: completed,
      color: "text-success",
      icon: PiCheckCircleFill,
      iconBg: "bg-success/10",
      iconColor: "text-success",
    },
    {
      label: "Active",
      value: active,
      color: "text-warning",
      icon: PiLightningBold,
      iconBg: "bg-warning/10",
      iconColor: "text-warning",
    },
    {
      label: "Revenue",
      value: `\u20A6${totalRev.toLocaleString()}`,
      color: "text-dark",
      icon: PiCurrencyNgnBold,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
          Rides
        </h1>
        <p className="text-[14px] text-text-secondary">All ride activity</p>
      </div>

      {/* Summary stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-8">
        {summaryStats.map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-2">
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center`}
                >
                  <s.icon size={18} className={s.iconColor} />
                </div>
                <span className="text-[12px] text-text-muted font-medium">
                  {s.label}
                </span>
              </div>
              <p
                className={`text-[22px] sm:text-[26px] font-bold ${s.color} tracking-tight`}
              >
                {s.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <PiMagnifyingGlassBold
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted z-10"
          />
          <Input
            type="text"
            placeholder="Search rides..."
            className="w-full pl-10 pr-4 h-10 rounded-xl text-[13px]"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="h-10 rounded-xl px-4 min-w-[120px]">
            <SelectValue placeholder="All status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Data table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-surface-alt hover:bg-surface-alt">
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  ID
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Passenger
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Driver
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Route
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Fare
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Date
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider text-right">
                  &nbsp;
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRides.map((ride) => {
                const status = statusMap[ride.status];
                return (
                  <TableRow key={ride.id}>
                    {/* ID */}
                    <TableCell className="py-4 px-5 text-[12px] font-mono text-text-muted">
                      {ride.id}
                    </TableCell>

                    {/* Passenger */}
                    <TableCell className="py-4 px-5">
                      <p className="text-[13px] font-medium text-dark">
                        {ride.passenger}
                      </p>
                    </TableCell>

                    {/* Driver */}
                    <TableCell className="py-4 px-5">
                      <p className="text-[13px] text-dark">{ride.driver}</p>
                    </TableCell>

                    {/* Route */}
                    <TableCell className="py-4 px-5">
                      <p className="text-[12px] text-text-secondary truncate max-w-[180px]">
                        {ride.pickup.split(",")[0]} &rarr;{" "}
                        {ride.destination.split(",")[0]}
                      </p>
                    </TableCell>

                    {/* Fare */}
                    <TableCell className="py-4 px-5 text-[13px] font-bold text-dark">
                      {"\u20A6"}{ride.fare.toLocaleString()}
                    </TableCell>

                    {/* Status */}
                    <TableCell className="py-4 px-5">
                      <Badge
                        variant="secondary"
                        className={status.className}
                      >
                        <status.Icon size={11} />
                        {status.label}
                      </Badge>
                    </TableCell>

                    {/* Date */}
                    <TableCell className="py-4 px-5">
                      <p className="text-[12px] text-dark">{ride.date}</p>
                      <p className="text-[11px] text-text-muted mt-0.5">
                        {ride.time}
                      </p>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="py-4 px-5 text-right">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-info/10 text-text-muted hover:text-info"
                        title="View ride"
                      >
                        <PiEyeBold size={15} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
