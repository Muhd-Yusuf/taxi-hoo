"use client";

import {
  PiNavigationArrowBold,
  PiClockBold,
  PiCheckCircleFill,
  PiXCircleFill,
  PiPhoneBold,
  PiStarFill,
} from "react-icons/pi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pendingRequests = [
  { id: "RQ001", passenger: "Grace Adekunle", pickup: "Maryland, Lagos", destination: "Yaba, Lagos", distance: "4.2 km", duration: "15 min", fare: 2500, time: "Just now" },
  { id: "RQ002", passenger: "David Obi", pickup: "Ikeja GRA, Lagos", destination: "Allen Avenue, Lagos", distance: "2.8 km", duration: "10 min", fare: 1800, time: "2 min ago" },
  { id: "RQ003", passenger: "Ngozi Eze", pickup: "Ajah, Lagos", destination: "Lekki Phase 1", distance: "6.5 km", duration: "22 min", fare: 3800, time: "5 min ago" },
];

const completedToday = [
  { id: "C001", passenger: "Sarah Johnson", route: "Lekki → Victoria Island", fare: 3500, time: "09:30 AM", rating: 5 },
  { id: "C002", passenger: "Mohammed Sani", route: "Surulere → Yaba", fare: 2200, time: "11:00 AM", rating: 4 },
  { id: "C003", passenger: "Fatima Ali", route: "Ikeja → Oshodi", fare: 1500, time: "12:45 PM", rating: 5 },
];

export default function RequestsPage() {
  return (
    <div>
      <h1 className="text-2xl sm:text-[28px] font-bold text-dark tracking-tight mb-1">
        Ride Requests
      </h1>
      <p className="text-sm text-text-secondary mb-6 sm:mb-8">
        Accept or decline incoming ride requests
      </p>

      {/* Pending */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <p className="text-base font-semibold text-dark">Pending</p>
          <Badge className="bg-primary/10 text-primary border-0 font-bold">
            {pendingRequests.length}
          </Badge>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {pendingRequests.map((req) => (
            <Card key={req.id} className="shadow-sm">
              <CardContent className="pt-2">
                {/* Header: name + fare */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">
                        {req.passenger.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-dark">{req.passenger}</p>
                      <p className="text-xs text-text-muted mt-0.5">{req.time}</p>
                    </div>
                  </div>
                  <p className="text-[22px] font-bold text-dark tracking-tight">₦{req.fare.toLocaleString()}</p>
                </div>

                {/* Route */}
                <div className="flex items-center gap-2.5 text-[13px] text-text-secondary mb-4 px-1">
                  <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
                  <span className="truncate">{req.pickup}</span>
                  <span className="text-text-muted mx-1">→</span>
                  <div className="w-2 h-2 rounded-sm bg-primary flex-shrink-0" />
                  <span className="truncate">{req.destination}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-5 mb-5 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <PiNavigationArrowBold size={12} /> {req.distance}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PiClockBold size={12} /> {req.duration}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button className="flex-1 gap-2 rounded-xl" size="lg">
                    <PiCheckCircleFill size={15} /> Accept
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2 rounded-xl" size="lg">
                    <PiXCircleFill size={15} /> Decline
                  </Button>
                  <Button variant="ghost" size="icon-lg" className="rounded-xl border border-border">
                    <PiPhoneBold size={15} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Completed today */}
      <div>
        <p className="text-base font-semibold text-dark mb-5">Completed today</p>
        <Card className="shadow-sm overflow-hidden">
          <CardContent className="p-0">
            {completedToday.map((ride, i) => (
              <div key={ride.id}>
                <div className="flex items-center justify-between p-5 sm:p-6 hover:bg-surface-alt/50 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-success-light flex items-center justify-center flex-shrink-0">
                      <PiCheckCircleFill size={16} className="text-success" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-dark">{ride.passenger}</p>
                        {ride.rating && (
                          <Badge variant="secondary" className="gap-0.5 text-[11px] h-auto py-0 px-1.5 bg-transparent border-0">
                            <PiStarFill size={10} className="text-primary fill-primary" />
                            {ride.rating}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">{ride.route}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[15px] font-bold text-dark">₦{ride.fare.toLocaleString()}</p>
                    <p className="text-[11px] text-text-muted mt-0.5">{ride.time}</p>
                  </div>
                </div>
                {i < completedToday.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
