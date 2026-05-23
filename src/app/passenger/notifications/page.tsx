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
    type: "ride",
    title: "Ride completed",
    desc: "Your trip to Victoria Island has been completed.",
    time: "2 min ago",
    read: false,
    icon: "car",
    color: "emerald",
  },
  {
    id: 2,
    type: "arriving",
    title: "Driver arriving",
    desc: "James Okafor is 3 minutes away.",
    time: "15 min ago",
    read: false,
    icon: "navigation",
    color: "blue",
  },
  {
    id: 3,
    type: "rate",
    title: "Rate your ride",
    desc: "How was your trip with Amina Bello?",
    time: "1 hour ago",
    read: false,
    icon: "star",
    color: "amber",
  },
  {
    id: 4,
    type: "promo",
    title: "Weekend special",
    desc: "Get 20% off your next 3 rides this weekend.",
    time: "3 hours ago",
    read: true,
    icon: "gift",
    color: "purple",
  },
  {
    id: 5,
    type: "safety",
    title: "Safety update",
    desc: "We've enhanced our driver verification process.",
    time: "Yesterday",
    read: true,
    icon: "shield",
    color: "emerald",
  },
  {
    id: 6,
    type: "ride",
    title: "Ride completed",
    desc: "Your trip to Ikeja has been completed.",
    time: "Yesterday",
    read: true,
    icon: "car",
    color: "emerald",
  },
];

const iconBgMap: Record<string, string> = {
  emerald: "bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-700 shadow-sm shadow-emerald-200/50",
  blue: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 shadow-sm shadow-blue-200/50",
  amber: "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 shadow-sm shadow-amber-200/50",
  purple: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 shadow-sm shadow-purple-200/50",
  red: "bg-gradient-to-br from-red-100 to-red-200 text-red-700 shadow-sm shadow-red-200/50",
};

const borderColorMap: Record<string, string> = {
  emerald: "border-l-emerald-500",
  blue: "border-l-blue-500",
  amber: "border-l-amber-500",
  purple: "border-l-purple-500",
  red: "border-l-red-500",
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
  // Group notifications by time category
  const todayNotifs = notifications.filter(n => !n.time.includes("Yesterday"));
  const yesterdayNotifs = notifications.filter(n => n.time.includes("Yesterday"));

  const renderNotification = (n: typeof notifications[0], i: number) => (
    <motion.div
      key={n.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
      className={`bg-white rounded-2xl border p-4 flex gap-3 active:scale-[0.98] transition-transform border-l-4 ${borderColorMap[n.color]} ${
        !n.read
          ? "border-t border-r border-b border-emerald-200/60 shadow-sm shadow-emerald-100/50"
          : "border-t border-r border-b border-zinc-100"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          iconBgMap[n.color]
        }`}
      >
        <NotificationIcon type={n.icon} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
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
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
          )}
        </div>
        <p className="text-xs text-zinc-500 mt-0.5 line-clamp-2">
          {n.desc}
        </p>
        <p className="text-[10px] text-zinc-400 mt-1.5 font-medium">{n.time}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col min-h-full bg-zinc-50">
      <AppHeader
        title="Notifications"
        rightAction={
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60">
            Mark all read
          </span>
        }
      />
      <div className="flex-1 px-5 py-5">
        {/* Today section */}
        {todayNotifs.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3 px-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Today</p>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
            <div className="space-y-2">
              {todayNotifs.map((n, i) => renderNotification(n, i))}
            </div>
          </div>
        )}

        {/* Yesterday section */}
        {yesterdayNotifs.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3 px-1">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Yesterday</p>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
            <div className="space-y-2">
              {yesterdayNotifs.map((n, i) => renderNotification(n, todayNotifs.length + i))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
