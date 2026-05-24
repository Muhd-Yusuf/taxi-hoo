"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiCameraFill, PiSignOutBold } from "react-icons/pi";

const profileFields = [
  { label: "Email", value: "lesego.m@email.com" },
  { label: "Phone", value: "+267 72 345 678" },
  { label: "Gender", value: "Female" },
  { label: "Address", value: "Main Mall, Gaborone" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <AppHeader title="Profile" />

      <div className="max-w-lg mx-auto">
      {/* Avatar section — centered */}
      <div className="flex flex-col items-center pt-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-brand-400 flex items-center justify-center text-2xl font-bold ring-4 ring-white shadow-lg">
            SJ
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center ring-2 ring-white shadow-sm">
            <PiCameraFill size={14} />
          </button>
        </div>
        <h2 className="text-lg font-bold text-zinc-900 mt-3">Lesego Modise</h2>
      </div>

      {/* Editable fields */}
      <div className="px-5 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {profileFields.map((field) => (
            <div
              key={field.label}
              className="border border-zinc-200 rounded-xl px-4 py-3.5"
            >
              <p className="text-[11px] text-zinc-400">{field.label}</p>
              <p className="text-sm text-zinc-900 mt-0.5">{field.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Logout button */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full h-14 bg-brand-500 text-white font-semibold rounded-2xl text-sm mt-8 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <PiSignOutBold size={16} />
          Log Out
        </motion.button>

        <p className="text-center text-[11px] text-zinc-300 mt-4">
          Taxi-Hoo v1.0.0
        </p>
      </div>
      </div>
    </div>
  );
}
