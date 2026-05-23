"use client";

import { useState } from "react";
import {
  PiMapPinBold,
  PiClockBold,
  PiStarFill,
  PiPhoneBold,
  PiChatCircleBold,
  PiCarFill,
  PiMagnifyingGlassBold,
  PiArrowRightBold,
  PiNavigationArrowBold,
  PiCurrencyNgnBold,
  PiCheckCircleFill,
} from "react-icons/pi";

const nearbyDrivers = [
  { name: "James Okafor", vehicle: "Toyota Camry · Silver", plate: "ABC-123-KD", rating: 4.8, trips: 1247, eta: "3 min", price: 3500 },
  { name: "Amina Bello", vehicle: "Honda Accord · Black", plate: "DEF-456-LA", rating: 4.9, trips: 2103, eta: "5 min", price: 3200 },
  { name: "Fatima Yusuf", vehicle: "Kia Rio · White", plate: "JKL-012-KN", rating: 4.7, trips: 1532, eta: "7 min", price: 2800 },
];

const recentLocations = [
  { name: "Victoria Island", address: "Adeola Odeku St, VI, Lagos" },
  { name: "Ikeja City Mall", address: "Alausa, Ikeja, Lagos" },
  { name: "Lekki Phase 1", address: "Admiralty Way, Lekki" },
];

export default function BookRidePage() {
  const [step, setStep] = useState<"location" | "drivers" | "confirmed">("location");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
        Book a Ride
      </h1>
      <p className="text-[14px] text-text-secondary mb-8">
        Enter your destination to find available drivers nearby
      </p>

      <div className="grid lg:grid-cols-5 gap-5 sm:gap-6">
        {/* Left panel */}
        <div className="lg:col-span-2 space-y-5 sm:space-y-6">
          {/* Location card */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
            <p className="text-[15px] font-semibold text-dark mb-5">Where are you going?</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3.5 bg-surface-alt rounded-xl px-4 py-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-success flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="bg-transparent text-[14px] text-dark placeholder:text-text-muted outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-3.5 bg-surface-alt rounded-xl px-4 py-3.5">
                <div className="w-2.5 h-2.5 rounded-sm bg-primary flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-[14px] text-dark placeholder:text-text-muted outline-none w-full"
                />
              </div>
            </div>

            {/* Recent locations */}
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-3">
                Recent locations
              </p>
              <div className="space-y-1">
                {recentLocations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setDestination(loc.name)}
                    className="w-full flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-surface-alt transition-colors text-left group"
                  >
                    <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center flex-shrink-0 group-hover:bg-surface-hover transition-colors">
                      <PiClockBold size={14} className="text-text-muted" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[14px] font-medium text-dark truncate">{loc.name}</p>
                      <p className="text-[12px] text-text-muted truncate">{loc.address}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep("drivers")}
              className="w-full mt-5 bg-dark hover:bg-dark-light text-white text-[14px] font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2.5"
            >
              Find drivers
              <PiArrowRightBold size={15} />
            </button>
          </div>

          {/* Available Drivers */}
          {step !== "location" && (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[15px] font-semibold text-dark">Available drivers</p>
                <span className="text-[12px] text-text-muted font-medium">{nearbyDrivers.length} nearby</span>
              </div>
              <div className="space-y-3">
                {nearbyDrivers.map((driver, idx) => (
                  <button
                    key={driver.name}
                    onClick={() => { setSelectedDriver(idx); setStep("confirmed"); }}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition-all ${
                      selectedDriver === idx
                        ? "border-primary/40 bg-primary/5 shadow-sm ring-1 ring-primary/10"
                        : "border-border hover:border-text-muted/40 hover:shadow-sm"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                      <PiCarFill size={18} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <p className="text-[14px] font-semibold text-dark truncate">{driver.name}</p>
                        <span className="text-[16px] font-bold text-dark flex-shrink-0">
                          ₦{driver.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[12px] text-text-muted mb-1.5">{driver.vehicle}</p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-[12px] text-text-secondary">
                          <PiStarFill size={11} className="text-primary fill-primary" />
                          {driver.rating}
                        </span>
                        <span className="text-[12px] text-text-muted">{driver.trips.toLocaleString()} trips</span>
                        <span className="text-[12px] text-success font-semibold ml-auto">{driver.eta}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirmed */}
          {step === "confirmed" && selectedDriver !== null && (
            <div className="bg-success-light border border-success/20 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <PiCheckCircleFill size={20} className="text-success" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-dark">Ride confirmed</p>
                  <p className="text-[13px] text-text-secondary">{nearbyDrivers[selectedDriver].name} is on the way</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-border rounded-xl py-3 text-[13px] font-semibold text-dark hover:bg-surface-alt transition-colors shadow-sm">
                  <PiPhoneBold size={14} /> Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-border rounded-xl py-3 text-[13px] font-semibold text-dark hover:bg-surface-alt transition-colors shadow-sm">
                  <PiChatCircleBold size={14} /> Message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-[420px] sm:h-[500px] lg:h-[600px] relative">
            <div
              className="absolute inset-0 bg-[#f0f4f0]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.04) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            >
              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-white/80" />
              <div className="absolute top-0 bottom-0 left-1/3 w-[3px] bg-white/80" />
              <div className="absolute top-0 bottom-0 right-1/4 w-[2px] bg-white/60" />
              <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-white/60" />
              <div className="absolute bottom-[20%] left-[10%] right-[40%] h-[2px] bg-white/50 rotate-[25deg]" />
              <div className="absolute top-[15%] left-[50%] right-[5%] h-[2px] bg-white/50 -rotate-[15deg]" />

              {/* Pickup marker */}
              <div className="absolute top-[35%] left-[28%] flex flex-col items-center z-10">
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center shadow-lg ring-4 ring-dark/10">
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <div className="mt-2 bg-white rounded-lg px-3 py-1.5 shadow-md border border-border">
                  <p className="text-[11px] font-semibold text-dark">Pickup</p>
                </div>
              </div>

              {/* Destination marker */}
              <div className="absolute bottom-[28%] right-[22%] flex flex-col items-center z-10">
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center shadow-lg ring-4 ring-dark/10">
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                </div>
                <div className="mt-2 bg-white rounded-lg px-3 py-1.5 shadow-md border border-border">
                  <p className="text-[11px] font-semibold text-dark">Drop-off</p>
                </div>
              </div>

              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 210 220 C 300 200, 380 320, 520 390"
                  stroke="#09090B"
                  strokeWidth="2.5"
                  strokeDasharray="8 5"
                  fill="none"
                  opacity="0.4"
                />
              </svg>

              {/* Car icons when drivers shown */}
              {step !== "location" && (
                <>
                  <div className="absolute top-[30%] left-[38%] z-10">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse ring-3 ring-primary/20">
                      <PiCarFill size={13} className="text-dark" />
                    </div>
                  </div>
                  <div className="absolute top-[50%] right-[35%] z-10">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse ring-3 ring-primary/20">
                      <PiCarFill size={13} className="text-dark" />
                    </div>
                  </div>
                  <div className="absolute top-[60%] left-[45%] z-10">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse ring-3 ring-primary/20">
                      <PiCarFill size={13} className="text-dark" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Fare overlay */}
            {step !== "location" && (
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-border p-5 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] text-text-muted font-medium">Estimated fare</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1.5 text-[12px] text-text-secondary">
                        <PiNavigationArrowBold size={11} className="text-text-muted" />
                        8.2 km
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-text-secondary">
                        <PiClockBold size={11} className="text-text-muted" />
                        ~25 min
                      </span>
                    </div>
                  </div>
                  <p className="text-[28px] font-bold text-dark tracking-tight">₦3,500</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
