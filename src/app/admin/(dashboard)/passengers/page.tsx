"use client";

import {
  PiMagnifyingGlassBold,
  PiEyeBold,
  PiProhibitBold,
  PiEnvelopeSimpleBold,
  PiMapPinBold,
  PiCalendarBold,
} from "react-icons/pi";
import { mockPassengers } from "@/lib/mock-data";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminPassengersPage() {
  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
          Passengers
        </h1>
        <p className="text-[14px] text-text-secondary">
          {mockPassengers.length} registered passengers
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
            placeholder="Search passengers..."
            className="w-full pl-10 pr-4 h-10 rounded-xl text-[13px]"
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="h-10 rounded-xl px-4 min-w-[100px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Passenger cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {mockPassengers.map((p) => (
          <Card
            key={p.id}
            className="hover:shadow-md transition-all"
          >
            <CardContent className="pt-2">
              {/* Header: avatar + name + status */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <Avatar size="lg" className="bg-dark">
                    <AvatarFallback className="bg-dark text-primary text-[11px] font-bold">
                      {p.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-[14px] font-semibold text-dark">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-text-muted mt-0.5">{p.id}</p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className={
                    p.status === "active"
                      ? "bg-success/10 text-success border-none"
                      : "bg-surface-alt text-text-muted border-none"
                  }
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      p.status === "active" ? "bg-success" : "bg-text-muted"
                    }`}
                  />
                  {p.status}
                </Badge>
              </div>

              {/* Info rows */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[12px] text-text-secondary">
                  <PiEnvelopeSimpleBold
                    size={13}
                    className="text-text-muted flex-shrink-0"
                  />
                  <span className="truncate">{p.email}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[12px] text-text-secondary">
                  <PiMapPinBold
                    size={13}
                    className="text-text-muted flex-shrink-0"
                  />
                  <span>{p.totalTrips} trips completed</span>
                </div>
                <div className="flex items-center gap-2.5 text-[12px] text-text-secondary">
                  <PiCalendarBold
                    size={13}
                    className="text-text-muted flex-shrink-0"
                  />
                  <span>Joined {p.joined}</span>
                </div>
              </div>
            </CardContent>

            {/* Actions */}
            <CardFooter className="flex items-center justify-end gap-1.5">
              <Button
                size="sm"
                variant="ghost"
                className="text-text-muted hover:bg-info/10 hover:text-info gap-1.5"
              >
                <PiEyeBold size={14} />
                View
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-text-muted hover:bg-danger/10 hover:text-danger gap-1.5"
              >
                <PiProhibitBold size={14} />
                Ban
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
