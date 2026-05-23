"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiCarFill,
  PiNavigationArrowFill,
  PiStarFill,
  PiGiftBold,
  PiShieldCheckFill,
} from "react-icons/pi";

const notifications = [
  {
    id: 1,
    title: "Ride completed",
    desc: "Your trip to Victoria Island has been completed.",
    time: "2 min ago",
    read: false,
    icon: "car",
    color: "emerald",
  },
  {
    id: 2,
    title: "Driver arriving",
    desc: "James Okafor is 3 minutes away.",
    time: "15 min ago",
    read: false,
    icon: "navigation",
    color: "blue",
  },
  {
    id: 3,
    title: "Rate your ride",
    desc: "How was your trip with Amina Bello?",
    time: "1 hour ago",
    read: false,
    icon: "star",
    color: "amber",
  },
  {
    id: 4,
    title: "Weekend special",
    desc: "Get 20% off your next 3 rides this weekend.",
    time: "3 hours ago",
    read: true,
    icon: "gift",
    color: "purple",
  },
  {
    id: 5,
    title: "Safety update",
    desc: "We've enhanced our driver verification process.",
    time: "Yesterday",
    read: true,
    icon: "shield",
    color: "emerald",
  },
  {
    id: 6,
    title: "Ride completed",
    desc: "Your trip to Ikeja has been completed.",
    time: "Yesterday",
    read: true,
    icon: "car",
    color: "emerald",
  },
];

const iconBgMap: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
  amber: "bg-amber-50 text-amber-600",
  purple: "bg-purple-50 text-purple-600",
};

function NotificationIcon({ type }: { type: string }) {
  switch (type) {
    case "car":
      return <PiCarFill size={18} />;
    case "navigation":
      return <PiNavigationArrowFill size={18} />;
    case "star":
      return <PiStarFill size={18} />;
    case "gift":
      return <PiGiftBold size={18} />;
    case "shield":
      return <PiShieldCheckFill size={18} />;
    default:
      return <PiCarFill size={18} />;
  }
}

export default function NotificationsPage() {
  const todayNotifs = notifications.filter(n => !n.time.includes("Yesterday"));
  const yesterdayNotifs = notifications.filter(n => n.time.includes("Yesterday"));

  const renderNotification = (n: typeof notifications[0], i: number) => (
    <motion.div
      key={n.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
      className={`bg-white rounded-2xl p-5 flex gap-4 active:scale-[0.98] transition-transform ${
        !n.read
          ? "border border-emerald-200/50 shadow-sm"
          : "border border-zinc-100"
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
          iconBgMap[n.color]
        }`}
      >
        <NotificationIcon type={n.icon} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p
            className={`text-sm ${
              !n.read
                ? "font-semibold text-zinc-900"
                : "font-medium text-zinc-600"
            }`}
          >
            {n.title}
          </p>
          {!n.read && (
            <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
          )}
        </div>
        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
          {n.desc}
        </p>
        <p className="text-[11px] text-zinc-400 mt-2 font-medium">{n.time}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col min-h-full bg-zinc-50">
      <AppHeader
        title="Notifications"
        rightAction={
          <span className="text-xs text-emerald-600 font-semibold">
            Mark all read
          </span>
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
              {todayNotifs.map((n, i) => renderNotification(n, i))}
            </div>
          </div>
        )}

        {/* Yesterday */}
        {yesterdayNotifs.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4 px-1">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Yesterday</p>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
            <div className="space-y-3">
              {yesterdayNotifs.map((n, i) => renderNotification(n, todayNotifs.length + i))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
