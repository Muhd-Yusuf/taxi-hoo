"use client";

import MapView from "@/components/MapView";
import DriverCard from "@/components/DriverCard";
import RideStatusBar from "@/components/RideStatusBar";
import {
  PiNavigationArrowFill,
  PiClockFill,
  PiCurrencyNgnFill,
  PiShareFill,
  PiWarningFill,
  PiPhoneBold,
  PiChatCircleBold,
} from "react-icons/pi";

export default function TrackingPage() {
  return (
    <div className="h-full relative flex flex-col">
      {/* Map fills everything */}
      <div className="absolute inset-0">
        <MapView
          markers={[
            { type: "pickup", label: "Lekki Phase 1", x: 30, y: 60 },
            { type: "dropoff", label: "Victoria Island", x: 72, y: 30 },
            { type: "driver", x: 40, y: 50 },
          ]}
          showRoute
        />
      </div>

      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-zinc-900/50 via-zinc-900/20 to-transparent z-10 pointer-events-none" />

      {/* Top overlay - Status bar */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <RideStatusBar status="arriving" driverName="James Okafor" eta="3 min" />
      </div>

      {/* Bottom sheet - always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-5 pt-2 pb-6">
          {/* Drag handle */}
          <div className="flex justify-center pt-2 pb-3">
            <div className="w-10 h-1 rounded-full bg-zinc-300" />
          </div>

          {/* Countdown timer banner */}
          <div className="bg-zinc-50 rounded-xl px-4 py-3 mb-4">
            <p className="text-sm text-zinc-700">
              Your driver is coming in{" "}
              <span className="font-semibold text-emerald-600">3:35</span>
            </p>
          </div>

          {/* Driver info with colored border */}
          <div className="border border-emerald-100 rounded-2xl p-0.5 bg-gradient-to-r from-emerald-50/50 to-transparent">
            <div className="bg-white rounded-[14px] overflow-hidden">
              <DriverCard
                name="James Okafor"
                vehicle="Toyota Camry"
                plate="APP-234-KJ"
                rating={4.9}
                trips={2847}
                eta="3 min"
              />
            </div>
          </div>

          {/* Trip route */}
          <div className="mt-4 pt-4 border-t border-zinc-100">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center gap-1 pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                <div className="w-px h-8 bg-gradient-to-b from-emerald-300 to-blue-300" />
                <div className="w-2.5 h-2.5 rounded-sm bg-blue-500 shadow-sm shadow-blue-500/50" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-xs text-emerald-500 font-medium">Pickup</p>
                  <p className="text-sm font-medium text-zinc-900">Lekki Phase 1</p>
                </div>
                <div>
                  <p className="text-xs text-blue-500 font-medium">Drop-off</p>
                  <p className="text-sm font-medium text-zinc-900">Victoria Island</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trip stats - colored */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-center">
              <PiNavigationArrowFill size={14} className="text-blue-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-blue-700">8.2 km</p>
              <p className="text-[10px] text-blue-400 font-medium">Distance</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-center">
              <PiClockFill size={14} className="text-amber-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-amber-700">25 min</p>
              <p className="text-[10px] text-amber-400 font-medium">Duration</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-center">
              <PiCurrencyNgnFill size={14} className="text-emerald-500 mx-auto mb-1" />
              <p className="text-sm font-bold text-emerald-700">{"\u20A6"}3,500</p>
              <p className="text-[10px] text-emerald-400 font-medium">Fare</p>
            </div>
          </div>

          {/* Safety actions */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 h-12 bg-blue-50 border border-blue-100 hover:bg-blue-100 active:bg-blue-200 text-blue-700 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors">
              <PiShareFill size={16} />
              Share trip
            </button>
            <button className="flex-1 h-12 bg-red-100 border border-red-200 hover:bg-red-200 active:bg-red-300 text-red-700 text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm shadow-red-500/10">
              <PiWarningFill size={16} />
              Emergency SOS
            </button>
          </div>

          {/* Payment method display */}
          <div className="border border-zinc-200 rounded-xl px-4 py-3 flex items-center justify-between mt-4">
            <p className="text-xs text-zinc-400">Payment method</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-[8px] font-bold flex items-center justify-center">
                VISA
              </div>
              <p className="text-sm font-medium text-zinc-900">&bull;&bull;&bull;&bull; 8970</p>
            </div>
          </div>

          {/* Call + Message action buttons */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 h-12 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-700 flex items-center justify-center gap-2">
              <PiPhoneBold size={18} />
              Call
            </button>
            <button className="flex-1 h-12 bg-emerald-500 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2">
              <PiChatCircleBold size={18} />
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
