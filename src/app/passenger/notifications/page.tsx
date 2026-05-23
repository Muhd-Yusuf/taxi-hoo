"use client";

import {
  PiBellFill,
  PiCarFill,
  PiCheckCircleFill,
  PiStarFill,
  PiMapPinBold,
  PiClockBold,
  PiWarningCircleBold,
} from "react-icons/pi";

const notifications = [
  { id: 1, type: "ride_confirmed", title: "Ride confirmed", desc: "James Okafor accepted your ride request", time: "2 min ago", read: false, icon: PiCheckCircleFill, color: "bg-success-light text-success" },
  { id: 2, type: "driver_arriving", title: "Driver arriving", desc: "Your driver is 3 minutes away from pickup", time: "5 min ago", read: false, icon: PiCarFill, color: "bg-info-light text-info" },
  { id: 3, type: "trip_completed", title: "Trip completed", desc: "Your ride to Victoria Island has ended. Rate your experience!", time: "1 hour ago", read: false, icon: PiMapPinBold, color: "bg-primary/10 text-primary-dark" },
  { id: 4, type: "rate_reminder", title: "Rate your driver", desc: "How was your ride with Amina Bello? Leave a review.", time: "3 hours ago", read: true, icon: PiStarFill, color: "bg-warning-light text-warning" },
  { id: 5, type: "promo", title: "Weekend special!", desc: "Get 20% off your next 3 rides this weekend. Code: HOOWKND", time: "Yesterday", read: true, icon: PiBellFill, color: "bg-primary/10 text-primary-dark" },
  { id: 6, type: "trip_completed", title: "Trip completed", desc: "Your ride to Ikeja City Mall has ended successfully.", time: "2 days ago", read: true, icon: PiCheckCircleFill, color: "bg-success-light text-success" },
  { id: 7, type: "safety", title: "Safety update", desc: "We've added new safety features. Tap to learn more.", time: "3 days ago", read: true, icon: PiWarningCircleBold, color: "bg-info-light text-info" },
];

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
            Notifications
          </h1>
          <p className="text-[14px] text-text-secondary">{unread} unread</p>
        </div>
        <button className="text-[13px] text-text-muted hover:text-dark font-medium transition-colors px-4 py-2 rounded-xl hover:bg-surface-alt">
          Mark all read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all ${
              n.read
                ? "border-border hover:shadow-sm"
                : "border-primary/20 bg-primary/5 shadow-sm"
            }`}
          >
            <div className="flex gap-4">
              <div className={`w-10 h-10 rounded-full ${n.color} flex items-center justify-center flex-shrink-0`}>
                <n.icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <p className={`text-[14px] text-dark ${!n.read ? "font-semibold" : "font-medium"}`}>
                    {n.title}
                  </p>
                  {!n.read && (
                    <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  )}
                </div>
                <p className="text-[13px] text-text-secondary mt-1 leading-relaxed">{n.desc}</p>
                <p className="text-[11px] text-text-muted mt-2.5 flex items-center gap-1.5">
                  <PiClockBold size={10} /> {n.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
