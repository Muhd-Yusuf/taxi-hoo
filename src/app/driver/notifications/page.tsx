"use client";

import {
  PiBellFill,
  PiCarFill,
  PiCheckCircleFill,
  PiCurrencyNgnBold,
  PiClockBold,
  PiWarningCircleBold,
  PiStarFill,
} from "react-icons/pi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const notifications = [
  { id: 1, type: "new_request", title: "New ride request", desc: "Grace Adekunle needs a ride from Maryland to Yaba", time: "Just now", read: false, icon: PiCarFill, color: "bg-primary/10 text-primary-dark" },
  { id: 2, type: "ride_completed", title: "Ride completed", desc: "Trip to Victoria Island completed. You earned ₦3,500", time: "30 min ago", read: false, icon: PiCheckCircleFill, color: "bg-success-light text-success" },
  { id: 3, type: "new_rating", title: "New rating received", desc: "Sarah Johnson rated you 5 stars! Great job!", time: "1 hour ago", read: false, icon: PiStarFill, color: "bg-warning-light text-warning" },
  { id: 4, type: "payout", title: "Payout processed", desc: "₦50,000 has been sent to your GTBank account", time: "3 hours ago", read: true, icon: PiCurrencyNgnBold, color: "bg-success-light text-success" },
  { id: 5, type: "bonus", title: "Bonus earned!", desc: "You completed 5 rides today! ₦2,000 bonus added.", time: "Yesterday", read: true, icon: PiBellFill, color: "bg-primary/10 text-primary-dark" },
  { id: 6, type: "system", title: "Document expiring", desc: "Your driver's license expires in 30 days. Update now.", time: "2 days ago", read: true, icon: PiWarningCircleBold, color: "bg-danger-light text-danger" },
];

export default function DriverNotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-[28px] font-bold text-dark tracking-tight mb-1">
            Notifications
          </h1>
          <p className="text-sm text-text-secondary">{unread} unread</p>
        </div>
        <Button variant="ghost" className="text-text-muted rounded-xl">
          Mark all read
        </Button>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {notifications.map((n) => (
          <Card
            key={n.id}
            className={`shadow-sm transition-all ${
              !n.read ? "border-primary/20 bg-primary/5" : ""
            }`}
          >
            <CardContent className="pt-2">
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full ${n.color} flex items-center justify-center flex-shrink-0`}>
                  <n.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className={`text-sm text-dark ${!n.read ? "font-semibold" : "font-medium"}`}>
                      {n.title}
                    </p>
                    {!n.read && (
                      <Badge className="bg-primary text-white border-0 h-auto px-1.5 py-0 text-[10px] flex-shrink-0">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-[13px] text-text-secondary mt-1 leading-relaxed">{n.desc}</p>
                  <p className="text-[11px] text-text-muted mt-2.5 flex items-center gap-1.5">
                    <PiClockBold size={10} /> {n.time}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
