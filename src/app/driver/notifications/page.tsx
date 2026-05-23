"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiCarFill,
  PiCheckCircleFill,
  PiStarFill,
  PiCurrencyNgnFill,
  PiGiftBold,
  PiWarningCircleFill,
} from "react-icons/pi";

const notifications = [
  { id: 1, title: "New ride request", desc: "Grace Adekunle needs a ride from Maryland to Yaba.", time: "Just now", read: false, color: "emerald" },
  { id: 2, title: "Ride completed", desc: "Trip with Sarah Johnson completed. ₦3,500 earned.", time: "30 min ago", read: false, color: "emerald" },
  { id: 3, title: "New rating received", desc: "You received a 5-star rating from Mohammed Sani.", time: "1 hour ago", read: false, color: "amber" },
  { id: 4, title: "Payout processed", desc: "₦50,000 has been transferred to your bank account.", time: "Yesterday", read: true, color: "blue" },
  { id: 5, title: "Weekly bonus", desc: "Complete 5 more rides to earn a ₦5,000 bonus.", time: "Yesterday", read: true, color: "purple" },
  { id: 6, title: "Document expiring", desc: "Your driver's license expires in 30 days. Please renew.", time: "2 days ago", read: true, color: "red" },
];

const iconBgMap: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
  amber: "bg-amber-50 text-amber-600",
  purple: "bg-purple-50 text-purple-600",
  red: "bg-red-50 text-red-600",
};

function NotificationIcon({ color }: { color: string }) {
  switch (color) {
    case "emerald": return <PiCheckCircleFill size={18} />;
    case "amber": return <PiStarFill size={18} />;
    case "blue": return <PiCurrencyNgnFill size={18} />;
    case "purple": return <PiGiftBold size={18} />;
    case "red": return <PiWarningCircleFill size={18} />;
    default: return <PiCarFill size={18} />;
  }
}

export default function DriverNotificationsPage() {
  const todayNotifs = notifications.filter(n => !n.time.includes("Yesterday") && !n.time.includes("days ago"));
  const olderNotifs = notifications.filter(n => n.time.includes("Yesterday") || n.time.includes("days ago"));

  return (
    <div className="flex flex-col min-h-full bg-zinc-50">
      <AppHeader
        title="Notifications"
        rightAction={
          <span className="text-xs text-emerald-600 font-semibold">Mark all read</span>
        }
      />
      <div className="flex-1 px-5 py-5">
        {/* Today */}
        {todayNotifs.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4 px-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Today</p>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
            <div className="space-y-3">
              {todayNotifs.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-white rounded-2xl p-5 flex gap-4 active:scale-[0.98] transition-transform ${
                    !n.read ? "border border-emerald-200/50 shadow-sm" : "border border-zinc-100"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBgMap[n.color]}`}>
                    <NotificationIcon color={n.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-sm ${!n.read ? "font-semibold text-zinc-900" : "font-medium text-zinc-600"}`}>{n.title}</p>
                      {!n.read && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />}
                    </div>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{n.desc}</p>
                    <p className="text-[11px] text-zinc-400 mt-2 font-medium">{n.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Earlier */}
        {olderNotifs.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4 px-1">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Earlier</p>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
            <div className="space-y-3">
              {olderNotifs.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (todayNotifs.length + i) * 0.05 }}
                  className="bg-white rounded-2xl border border-zinc-100 p-5 flex gap-4 active:scale-[0.98] transition-transform"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBgMap[n.color]}`}>
                    <NotificationIcon color={n.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-600">{n.title}</p>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{n.desc}</p>
                    <p className="text-[11px] text-zinc-400 mt-2 font-medium">{n.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
