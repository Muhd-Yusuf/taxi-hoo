"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiCaretRightBold } from "react-icons/pi";

const settingsItems = [
  { label: "Change Password", danger: false },
  { label: "Change Language", danger: false },
  { label: "Privacy Policy", danger: false },
  { label: "Contact Us", danger: false },
  { label: "Delete Account", danger: true },
];

export default function SettingsPage() {
  return (
    <div className="min-h-full bg-zinc-50">
      <AppHeader showBack title="Settings" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-zinc-100 shadow-sm mx-5 mt-5 overflow-hidden"
      >
        {settingsItems.map((item, i) => (
          <button
            key={item.label}
            className={`w-full flex items-center justify-between px-5 py-4.5 text-left hover:bg-zinc-50 active:bg-zinc-100 transition-colors ${
              i < settingsItems.length - 1 ? "border-b border-zinc-50" : ""
            }`}
          >
            <span
              className={`text-sm font-medium ${
                item.danger ? "text-red-500" : "text-zinc-900"
              }`}
            >
              {item.label}
            </span>
            <PiCaretRightBold size={14} className="text-zinc-300" />
          </button>
        ))}
      </motion.div>
    </div>
  );
}
