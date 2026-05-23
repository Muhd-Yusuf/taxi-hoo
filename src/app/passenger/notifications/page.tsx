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
  emerald: "bg-emerald-100 text-emerald-600",
  blue: "bg-blue-100 text-blue-600",
  amber: "bg-amber-100 text-amber-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600",
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
      <div className="flex-1 px-4 py-4 space-y-2">
        {notifications.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`bg-white rounded-2xl border p-4 flex gap-3 active:scale-[0.98] transition-transform ${
              !n.read
                ? "border-emerald-200 bg-emerald-50/30"
                : "border-zinc-100"
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
                      : "font-medium text-zinc-700"
                  }`}
                >
                  {n.title}
                </p>
                {!n.read && (
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                )}
              </div>
              <p className="text-xs text-zinc-500 mt-0.5 line-clamp-2">
                {n.desc}
              </p>
              <p className="text-[10px] text-zinc-400 mt-1">{n.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
