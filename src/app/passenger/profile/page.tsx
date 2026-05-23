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
} from "react-icons/pi";

const menuItems = [
  { icon: PiCreditCardBold, label: "Payment Methods", trailing: null },
  { icon: PiMapPinBold, label: "Saved Places", trailing: null },
  { icon: PiGlobeBold, label: "Language", trailing: "English" },
  { icon: PiBellBold, label: "Notifications", trailing: "toggle" },
  { icon: PiQuestionBold, label: "Help & Support", trailing: null },
  { icon: PiInfoBold, label: "About", trailing: null },
];

export default function ProfilePage() {
  return (
    <div className="bg-zinc-50 min-h-full">
      <AppHeader title="Profile" />

      <div className="px-4 py-4 space-y-4">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-zinc-100 p-5 text-center"
        >
          <div className="relative w-20 h-20 mx-auto mb-3">
            <div className="w-20 h-20 rounded-full bg-zinc-900 text-emerald-400 text-2xl font-bold flex items-center justify-center">
              SJ
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-sm">
              <PiCameraBold size={13} className="text-zinc-500" />
            </div>
          </div>
          <h2 className="text-lg font-bold text-zinc-900">Sarah Johnson</h2>
          <p className="text-sm text-zinc-500 mt-0.5">+234 812 345 6789</p>
          <p className="text-xs text-zinc-400 mt-0.5">
            sarah.johnson@email.com
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-white rounded-2xl border border-zinc-100 p-3 text-center">
            <p className="text-lg font-bold text-zinc-900">24</p>
            <p className="text-[11px] text-zinc-400">Rides</p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <p className="text-lg font-bold text-zinc-900">4.9</p>
              <PiStarFill size={13} className="text-amber-400" />
            </div>
            <p className="text-[11px] text-zinc-400">Rating</p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-3 text-center">
            <p className="text-lg font-bold text-zinc-900">2024</p>
            <p className="text-[11px] text-zinc-400">Joined</p>
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
              className="h-14 px-4 flex items-center gap-3 w-full text-left active:bg-zinc-50 transition-colors"
            >
              <item.icon size={20} className="text-zinc-500 flex-shrink-0" />
              <span className="text-sm text-zinc-900 flex-1">
                {item.label}
              </span>
              {item.trailing === "toggle" ? (
                <div className="w-10 h-6 rounded-full bg-emerald-500 relative flex-shrink-0">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-sm" />
                </div>
              ) : item.trailing ? (
                <span className="text-xs text-zinc-400 mr-1">
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
          className="mt-4 h-14 w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-2xl text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
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
