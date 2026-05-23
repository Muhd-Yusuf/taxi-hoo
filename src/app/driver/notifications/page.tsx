"use client";

import { PiBellFill, PiCarFill, PiCheckCircleFill, PiCurrencyNgnBold, PiMapPinBold, PiClockBold, PiWarningCircleBold, PiStarFill } from "react-icons/pi";

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
                  <p className={`text-[13px] text-dark ${!n.read ? "font-semibold" : "font-medium"}`}>
                    {n.title}
                  </p>
                  {!n.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />}
                </div>
                <p className="text-[12px] text-text-secondary mt-0.5 leading-relaxed">{n.desc}</p>
                <p className="text-[10px] text-text-muted mt-1.5 flex items-center gap-1">
                  <PiClockBold size={9} /> {n.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
