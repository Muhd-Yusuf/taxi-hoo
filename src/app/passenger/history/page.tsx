"use client";

import {
  PiClockBold,
  PiNavigationArrowBold,
  PiStarFill,
  PiArrowCounterClockwiseBold,
  PiCarFill,
  PiCheckCircleFill,
  PiXCircleFill,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const statusMap = {
  completed: { label: "Completed", className: "bg-success-light text-success border-success/30", Icon: PiCheckCircleFill },
  in_progress: { label: "Active", className: "bg-warning-light text-warning border-warning/30", Icon: PiCarFill },
  cancelled: { label: "Cancelled", className: "bg-danger-light text-danger border-danger/30", Icon: PiXCircleFill },
};

export default function HistoryPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-2">
            Ride History
          </h1>
          <p className="text-[14px] text-text-secondary">{mockRides.length} total rides</p>
        </div>
      </div>

      <div className="space-y-4">
        {mockRides.map((ride) => {
          const status = statusMap[ride.status];
          return (
            <Card
              key={ride.id}
              className="hover:shadow-md transition-all"
            >
              <CardContent className="p-6">
                {/* Header: driver + status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                      <span className="text-[12px] font-bold text-primary">
                        {ride.driver.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-dark">{ride.driver}</p>
                      <p className="text-[12px] text-text-muted mt-0.5">
                        {ride.date} · {ride.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className={status.className}>
                    <status.Icon size={11} />
                    {status.label}
                  </Badge>
                </div>

                {/* Route */}
                <div className="flex items-center gap-2.5 text-[13px] text-text-secondary mb-4 px-1">
                  <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
                  <span className="truncate">{ride.pickup}</span>
                  <span className="text-text-muted mx-1">&rarr;</span>
                  <div className="w-2 h-2 rounded-sm bg-primary flex-shrink-0" />
                  <span className="truncate">{ride.destination}</span>
                </div>

                <Separator />

                {/* Footer: stats + fare + rebook */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-5 text-[12px] text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <PiNavigationArrowBold size={12} /> {ride.distance}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PiClockBold size={12} /> {ride.duration}
                    </span>
                    {ride.rating && (
                      <span className="flex items-center gap-1.5">
                        <PiStarFill size={12} className="text-primary fill-primary" /> {ride.rating}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[16px] font-bold text-dark">
                      ₦{ride.fare.toLocaleString()}
                    </span>
                    {ride.status === "completed" && (
                      <Button variant="ghost" size="sm" className="text-[12px] text-text-muted hover:text-dark font-semibold gap-1.5">
                        <PiArrowCounterClockwiseBold size={12} /> Rebook
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
