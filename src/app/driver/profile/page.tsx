"use client";

import AppHeader from "@/components/AppHeader";
import {
  PiCameraFill,
  PiSignOutBold,
} from "react-icons/pi";

const fields = [
  { label: "Email", value: "james.okafor@email.com" },
  { label: "Phone", value: "+267 71 234 567" },
  { label: "Vehicle", value: "Toyota Camry 2020" },
  { label: "License Plate", value: "B 123 ABC" },
];

export default function DriverProfilePage() {
  return (
    <div className="min-h-full bg-white pb-6">
      <div className="max-w-lg mx-auto">
      <AppHeader title="Profile" />

      {/* Avatar */}
      <div className="flex justify-center pt-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-zinc-900 text-brand-400 flex items-center justify-center text-2xl font-bold">
            JO
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center ring-2 ring-white shadow-sm">
            <PiCameraFill size={14} />
          </button>
        </div>
      </div>

      {/* Name */}
      <div className="text-center mt-3">
        <h2 className="text-lg font-bold text-zinc-900">Thabo Mokobi</h2>
        <p className="text-xs text-zinc-500 mt-0.5">Toyota Camry &middot; B 123 ABC</p>
      </div>

      <div className="px-5 mt-8">
        {/* Display fields */}
        <div className="space-y-3">
          {fields.map((field) => (
            <div
              key={field.label}
              className="border border-zinc-200 rounded-xl px-4 py-3.5"
            >
              <p className="text-[11px] text-zinc-400">{field.label}</p>
              <p className="text-sm text-zinc-900 mt-0.5">{field.value}</p>
            </div>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full h-14 bg-brand-500 text-white font-semibold rounded-2xl text-sm mt-8 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          <PiSignOutBold size={16} />
          Log Out
        </button>

        {/* Version */}
        <p className="text-[11px] text-zinc-300 text-center mt-4">Taxi-Hoo v1.0.0</p>
      </div>
      </div>
    </div>
  );
}
