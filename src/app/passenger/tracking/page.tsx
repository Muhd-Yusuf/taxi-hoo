"use client";

import MapView from "@/components/MapView";
import DriverCard from "@/components/DriverCard";
import RideStatusBar from "@/components/RideStatusBar";

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

      {/* Top overlay - Status bar */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <RideStatusBar
          status="arriving"
          driverName="James Okafor"
          eta="3 min"
        />
      </div>

      {/* Bottom sheet - always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-white rounded-t-3xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-5 pt-2 pb-6">
          {/* Drag handle */}
          <div className="flex justify-center pt-2 pb-3">
            <div className="w-10 h-1 rounded-full bg-zinc-300" />
          </div>

          {/* Driver info */}
          <DriverCard
            name="James Okafor"
            vehicle="Toyota Camry"
            plate="APP-234-KJ"
            rating={4.9}
            trips={2847}
            eta="3 min"
          />

          {/* Trip route */}
          <div className="mt-4 pt-4 border-t border-zinc-100">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center gap-1 pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <div className="w-px h-8 bg-zinc-200" />
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-xs text-zinc-400">Pickup</p>
                  <p className="text-sm font-medium text-zinc-900">Lekki Phase 1</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Drop-off</p>
                  <p className="text-sm font-medium text-zinc-900">Victoria Island</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trip stats */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-zinc-50 rounded-xl p-3 text-center">
              <p className="text-sm font-bold text-zinc-900">8.2 km</p>
              <p className="text-[10px] text-zinc-400">Distance</p>
            </div>
            <div className="bg-zinc-50 rounded-xl p-3 text-center">
              <p className="text-sm font-bold text-zinc-900">25 min</p>
              <p className="text-[10px] text-zinc-400">Duration</p>
            </div>
            <div className="bg-zinc-50 rounded-xl p-3 text-center">
              <p className="text-sm font-bold text-zinc-900">{"\u20A6"}3,500</p>
              <p className="text-[10px] text-zinc-400">Fare</p>
            </div>
          </div>

          {/* Safety actions */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 h-12 bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-zinc-700 text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-colors">
              Share trip
            </button>
            <button className="flex-1 h-12 bg-red-50 hover:bg-red-100 active:bg-red-200 text-red-600 text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition-colors">
              Emergency SOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
