"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiCarFill,
  PiStarFill,
  PiCalendarBold,
  PiPhoneBold,
  PiEnvelopeBold,
  PiIdentificationCardBold,
  PiGearSixBold,
  PiQuestionBold,
  PiShieldCheckBold,
  PiSignOutBold,
  PiCameraFill,
  PiCaretRightBold,
} from "react-icons/pi";

const menuItems = [
  { icon: PiIdentificationCardBold, label: "Vehicle Documents", color: "emerald" },
  { icon: PiShieldCheckBold, label: "Safety & Verification", color: "blue" },
  { icon: PiGearSixBold, label: "Preferences", color: "purple" },
  { icon: PiQuestionBold, label: "Help & Support", color: "amber" },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  blue: { bg: "bg-blue-50", text: "text-blue-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-600" },
  amber: { bg: "bg-amber-50", text: "text-amber-600" },
};

export default function DriverProfilePage() {
  return (
    <div className="min-h-full bg-zinc-50 pb-4">
      <AppHeader title="Profile" />

      {/* Profile hero */}
      <div className="relative">
        <div className="h-28 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600" />
        <div className="px-5 -mt-12">
          <div className="flex items-end gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-emerald-400 flex items-center justify-center text-2xl font-bold ring-4 ring-white shadow-lg">
                JO
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white shadow-sm">
                <PiCameraFill size={14} />
              </button>
            </div>
            <div className="pb-1.5">
              <h2 className="text-lg font-bold text-zinc-900">James Okafor</h2>
              <p className="text-xs text-zinc-500">Toyota Camry · ABC-123-KD</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-5">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl border border-zinc-100 p-4 text-center shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-2">
              <PiCarFill size={16} className="text-blue-600" />
            </div>
            <p className="text-lg font-bold text-zinc-900">2,847</p>
            <p className="text-[11px] text-zinc-400 font-medium">Trips</p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-4 text-center shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-2">
              <PiStarFill size={16} className="text-amber-500" />
            </div>
            <p className="text-lg font-bold text-zinc-900">4.9</p>
            <p className="text-[11px] text-zinc-400 font-medium">Rating</p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-4 text-center shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center mx-auto mb-2">
              <PiCalendarBold size={16} className="text-purple-600" />
            </div>
            <p className="text-lg font-bold text-zinc-900">2023</p>
            <p className="text-[11px] text-zinc-400 font-medium">Joined</p>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-white rounded-2xl border border-zinc-100 p-5 mt-5 shadow-sm">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
            Contact Info
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-500">
                <PiPhoneBold size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900">+234 801 234 5678</p>
                <p className="text-[11px] text-zinc-400">Phone number</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-500">
                <PiEnvelopeBold size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900">james.okafor@email.com</p>
                <p className="text-[11px] text-zinc-400">Email address</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div className="bg-white rounded-2xl border border-zinc-100 mt-5 shadow-sm overflow-hidden">
          {menuItems.map((item, i) => {
            const colors = colorMap[item.color];
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-zinc-50 transition-colors ${
                  i < menuItems.length - 1 ? "border-b border-zinc-50" : ""
                }`}
              >
                <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={16} className={colors.text} />
                </div>
                <span className="flex-1 text-sm font-medium text-zinc-900">{item.label}</span>
                <PiCaretRightBold size={14} className="text-zinc-300" />
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <button className="w-full h-12 bg-red-50 border border-red-100 text-red-600 font-semibold rounded-2xl text-sm mt-5 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <PiSignOutBold size={16} />
          Log Out
        </button>
      </div>
    </div>
  );
}
