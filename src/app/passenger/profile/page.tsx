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
  PiCameraBold,
  PiSignOutBold,
  PiCarFill,
  PiCalendarBold,
} from "react-icons/pi";

const menuItems = [
  { icon: PiCreditCardBold, label: "Payment Methods", trailing: null, bgColor: "bg-emerald-50", iconColor: "text-emerald-500" },
  { icon: PiMapPinBold, label: "Saved Places", trailing: null, bgColor: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: PiGlobeBold, label: "Language", trailing: "English", bgColor: "bg-purple-50", iconColor: "text-purple-500" },
  { icon: PiBellBold, label: "Notifications", trailing: "toggle", bgColor: "bg-amber-50", iconColor: "text-amber-500" },
  { icon: PiQuestionBold, label: "Help & Support", trailing: null, bgColor: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: PiInfoBold, label: "About", trailing: null, bgColor: "bg-zinc-100", iconColor: "text-zinc-500" },
];

export default function ProfilePage() {
  return (
    <div className="bg-zinc-50 min-h-full">
      <AppHeader title="Profile" />

      <div className="px-4 py-4 space-y-4">
        {/* Profile card with gradient hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm"
        >
          {/* Gradient hero banner */}
          <div className="h-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent)]" />
          </div>

          <div className="px-5 pb-5 -mt-12 text-center">
            <div className="relative w-24 h-24 mx-auto mb-3">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-emerald-400 text-2xl font-bold flex items-center justify-center ring-4 ring-white shadow-lg">
                SJ
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-md">
                <PiCameraBold size={14} className="text-white" />
              </div>
            </div>
            <h2 className="text-lg font-bold text-zinc-900">Sarah Johnson</h2>
            <p className="text-sm text-zinc-500 mt-0.5">+234 812 345 6789</p>
            <p className="text-xs text-zinc-400 mt-0.5">
              sarah.johnson@email.com
            </p>
          </div>
        </motion.div>

        {/* Stats row - colored */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-white rounded-2xl border border-blue-100 p-3 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-1.5">
              <PiCarFill size={16} className="text-blue-500" />
            </div>
            <p className="text-lg font-bold text-blue-700">24</p>
            <p className="text-[11px] text-blue-400 font-medium">Rides</p>
          </div>
          <div className="bg-white rounded-2xl border border-amber-100 p-3 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-1.5">
              <PiStarFill size={16} className="text-amber-500" />
            </div>
            <p className="text-lg font-bold text-amber-700">4.9</p>
            <p className="text-[11px] text-amber-400 font-medium">Rating</p>
          </div>
          <div className="bg-white rounded-2xl border border-purple-100 p-3 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-1.5">
              <PiCalendarBold size={16} className="text-purple-500" />
            </div>
            <p className="text-lg font-bold text-purple-700">2024</p>
            <p className="text-[11px] text-purple-400 font-medium">Joined</p>
          </div>
        </motion.div>

        {/* Settings list */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="bg-white rounded-2xl border border-zinc-100 divide-y divide-zinc-100"
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="h-14 px-4 flex items-center gap-3 w-full text-left active:bg-zinc-50 transition-colors border-l-4 border-l-transparent hover:border-l-emerald-200"
            >
              <div className={`w-8 h-8 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                <item.icon size={18} className={item.iconColor} />
              </div>
              <span className="text-sm font-medium text-zinc-900 flex-1">
                {item.label}
              </span>
              {item.trailing === "toggle" ? (
                <div className="w-10 h-6 rounded-full bg-emerald-500 relative flex-shrink-0 shadow-sm shadow-emerald-500/30">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-sm" />
                </div>
              ) : item.trailing ? (
                <span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full mr-1">
                  {item.trailing}
                </span>
              ) : null}
              <PiCaretRightBold size={14} className="text-zinc-300 flex-shrink-0" />
            </button>
          ))}
        </motion.div>

        {/* Logout button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="mt-4 h-14 w-full bg-red-100 hover:bg-red-200 border border-red-200 text-red-700 font-semibold rounded-2xl text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm shadow-red-100/50"
        >
          <PiSignOutBold size={18} />
          Log Out
        </motion.button>

        {/* Version */}
        <p className="text-center text-[11px] text-zinc-300 mt-4 pb-4">
          Taxi-Hoo v1.0.0
        </p>
      </div>
    </div>
  );
}
