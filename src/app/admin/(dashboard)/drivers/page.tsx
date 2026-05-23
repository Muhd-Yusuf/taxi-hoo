"use client";

import {
  PiMagnifyingGlassBold,
  PiStarFill,
  PiCheckCircleFill,
  PiEyeBold,
  PiProhibitBold,
} from "react-icons/pi";
import { mockDrivers } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminDriversPage() {
  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
          Drivers
        </h1>
        <p className="text-[14px] text-text-secondary">
          {mockDrivers.length} registered drivers
        </p>
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
            placeholder="Search drivers..."
            className="w-full pl-10 pr-4 h-10 rounded-xl text-[13px]"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="h-10 rounded-xl px-4 min-w-[100px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="offline">Offline</SelectItem>
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
                  Driver
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Vehicle
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Rating
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Trips
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Earnings
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="py-3.5 px-5 text-[11px] font-semibold text-text-muted uppercase tracking-wider text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  {/* Driver */}
                  <TableCell className="py-4 px-5">
                    <div className="flex items-center gap-3">
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
                          {driver.phone}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Vehicle */}
                  <TableCell className="py-4 px-5">
                    <p className="text-[13px] text-dark">{driver.vehicle}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      {driver.plate}
                    </p>
                  </TableCell>

                  {/* Rating */}
                  <TableCell className="py-4 px-5">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-dark">
                      <PiStarFill
                        size={12}
                        className="text-primary fill-primary"
                      />{" "}
                      {driver.rating}
                    </span>
                  </TableCell>

                  {/* Trips */}
                  <TableCell className="py-4 px-5 text-[13px] font-medium text-dark">
                    {driver.trips.toLocaleString()}
                  </TableCell>

                  {/* Earnings */}
                  <TableCell className="py-4 px-5 text-[13px] font-semibold text-dark">
                    {"\u20A6"}{driver.earnings.toLocaleString()}
                  </TableCell>

                  {/* Status */}
                  <TableCell className="py-4 px-5">
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
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="py-4 px-5">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-info/10 text-text-muted hover:text-info"
                        title="View"
                      >
                        <PiEyeBold size={15} />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-success/10 text-text-muted hover:text-success"
                        title="Approve"
                      >
                        <PiCheckCircleFill size={15} />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-danger/10 text-text-muted hover:text-danger"
                        title="Ban"
                      >
                        <PiProhibitBold size={15} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
