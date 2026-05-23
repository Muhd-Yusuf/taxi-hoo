"use client";

import { Bell, Car, CheckCircle2, Star, MapPin, Clock, AlertCircle } from "lucide-react";

const notifications = [
  { id: 1, type: "ride_confirmed", title: "Ride confirmed", desc: "James Okafor accepted your ride request", time: "2 min ago", read: false, icon: CheckCircle2, color: "bg-success-light text-success" },
  { id: 2, type: "driver_arriving", title: "Driver arriving", desc: "Your driver is 3 minutes away from pickup", time: "5 min ago", read: false, icon: Car, color: "bg-info-light text-info" },
  { id: 3, type: "trip_completed", title: "Trip completed", desc: "Your ride to Victoria Island has ended. Rate your experience!", time: "1 hour ago", read: false, icon: MapPin, color: "bg-primary/10 text-primary-dark" },
  { id: 4, type: "rate_reminder", title: "Rate your driver", desc: "How was your ride with Amina Bello? Leave a review.", time: "3 hours ago", read: true, icon: Star, color: "bg-warning-light text-warning" },
  { id: 5, type: "promo", title: "Weekend special!", desc: "Get 20% off your next 3 rides this weekend. Code: HOOWKND", time: "Yesterday", read: true, icon: Bell, color: "bg-primary/10 text-primary-dark" },
  { id: 6, type: "trip_completed", title: "Trip completed", desc: "Your ride to Ikeja City Mall has ended successfully.", time: "2 days ago", read: true, icon: CheckCircle2, color: "bg-success-light text-success" },
  { id: 7, type: "safety", title: "Safety update", desc: "We've added new safety features. Tap to learn more.", time: "3 days ago", read: true, icon: AlertCircle, color: "bg-info-light text-info" },
];

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-dark mb-1">Notifications</h1>
          <p className="text-[13px] text-text-secondary">{unread} unread</p>
        </div>
        <button className="text-[12px] text-text-muted hover:text-dark font-medium transition-colors">
          Mark all read
        </button>
      </div>

      <div className="space-y-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`bg-white rounded-xl border p-4 transition-all ${
              n.read ? "border-border" : "border-dark/10 shadow-sm"
            }`}
          >
            <div className="flex gap-3">
              <div className={`w-9 h-9 rounded-lg ${n.color} flex items-center justify-center flex-shrink-0`}>
                <n.icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-[13px] font-semibold text-dark ${!n.read ? "" : "font-medium"}`}>
                    {n.title}
                  </p>
                  {!n.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />}
                </div>
                <p className="text-[12px] text-text-secondary mt-0.5 leading-relaxed">{n.desc}</p>
                <p className="text-[10px] text-text-muted mt-1.5 flex items-center gap-1">
                  <Clock size={9} /> {n.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
