"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiCreditCardBold,
  PiMapPinBold,
  PiGlobeBold,
  PiBellBold,
  PiQuestionBold,
  PiInfoBold,
  PiCaretRightBold,
  PiStarFill,
  PiCameraFill,
  PiSignOutBold,
  PiCarFill,
  PiCalendarBold,
} from "react-icons/pi";

const menuItems = [
  { icon: PiCreditCardBold, label: "Payment Methods", trailing: null, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
  { icon: PiMapPinBold, label: "Saved Places", trailing: null, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { icon: PiGlobeBold, label: "Language", trailing: "English", bgColor: "bg-purple-50", iconColor: "text-purple-600" },
  { icon: PiBellBold, label: "Notifications", trailing: "toggle", bgColor: "bg-amber-50", iconColor: "text-amber-600" },
  { icon: PiQuestionBold, label: "Help & Support", trailing: null, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
  { icon: PiInfoBold, label: "About", trailing: null, bgColor: "bg-zinc-100", iconColor: "text-zinc-500" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <AppHeader title="Profile" />

      {/* Profile hero */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600" />
        <div className="px-5 -mt-14">
          <div className="flex items-end gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-emerald-400 flex items-center justify-center text-2xl font-bold ring-4 ring-white shadow-lg">
                SJ
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white shadow-sm">
                <PiCameraFill size={14} />
              </button>
            </div>
            <div className="pb-2">
              <h2 className="text-lg font-bold text-zinc-900">Sarah Johnson</h2>
              <p className="text-xs text-zinc-500 mt-0.5">+234 812 345 6789</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-white rounded-2xl border border-zinc-100 p-4 text-center shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-2">
              <PiCarFill size={18} className="text-blue-600" />
            </div>
            <p className="text-xl font-bold text-zinc-900">24</p>
            <p className="text-[11px] text-zinc-400 font-medium mt-0.5">Rides</p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-4 text-center shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-2">
              <PiStarFill size={18} className="text-amber-500" />
            </div>
            <p className="text-xl font-bold text-zinc-900">4.9</p>
            <p className="text-[11px] text-zinc-400 font-medium mt-0.5">Rating</p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-4 text-center shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mx-auto mb-2">
              <PiCalendarBold size={18} className="text-purple-600" />
            </div>
            <p className="text-xl font-bold text-zinc-900">2024</p>
            <p className="text-[11px] text-zinc-400 font-medium mt-0.5">Joined</p>
          </div>
        </motion.div>

        {/* Settings list */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden mt-6"
        >
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3.5 px-5 py-4 text-left hover:bg-zinc-50 active:bg-zinc-100 transition-colors ${
                i < menuItems.length - 1 ? "border-b border-zinc-50" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                <item.icon size={18} className={item.iconColor} />
              </div>
              <span className="text-sm font-medium text-zinc-900 flex-1">
                {item.label}
              </span>
              {item.trailing === "toggle" ? (
                <div className="w-11 h-6 rounded-full bg-emerald-500 relative flex-shrink-0">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-sm" />
                </div>
              ) : item.trailing ? (
                <span className="text-xs text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full mr-1">
                  {item.trailing}
                </span>
              ) : null}
              <PiCaretRightBold size={14} className="text-zinc-300 flex-shrink-0" />
            </button>
          ))}
        </motion.div>

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full h-14 bg-red-50 border border-red-100 text-red-600 font-semibold rounded-2xl text-sm mt-6 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <PiSignOutBold size={16} />
          Log Out
        </motion.button>

        <p className="text-center text-[11px] text-zinc-300 mt-6">
          Taxi-Hoo v1.0.0
        </p>
      </div>
    </div>
  );
}
