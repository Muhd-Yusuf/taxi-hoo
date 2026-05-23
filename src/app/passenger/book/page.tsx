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
      <h1 className="text-[22px] font-bold text-dark mb-1">Book a Ride</h1>
      <p className="text-[13px] text-text-secondary mb-6">
        Enter your destination to find available drivers
      </p>

      <div className="grid lg:grid-cols-5 gap-5">
        {/* Left panel */}
        <div className="lg:col-span-2 space-y-5">
          {/* Location */}
          <div className="bg-white rounded-xl border border-border p-5">
            <p className="text-[13px] font-semibold text-dark mb-4">Where are you going?</p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-3 bg-surface-alt rounded-lg px-3.5 py-3">
                <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="bg-transparent text-[13px] text-dark placeholder:text-text-muted outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-3 bg-surface-alt rounded-lg px-3.5 py-3">
                <div className="w-2 h-2 rounded-sm bg-primary flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-[13px] text-dark placeholder:text-text-muted outline-none w-full"
                />
              </div>
            </div>

            {/* Recent */}
            <div className="mt-5 pt-4 border-t border-border">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-3">Recent</p>
              {recentLocations.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => setDestination(loc.name)}
                  className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-surface-alt transition-colors text-left"
                >
                  <PiClockBold size={14} className="text-text-muted flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-dark truncate">{loc.name}</p>
                    <p className="text-[11px] text-text-muted truncate">{loc.address}</p>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep("drivers")}
              className="w-full mt-4 bg-dark hover:bg-dark-light text-white text-[13px] font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Find drivers
              <PiArrowRightBold size={14} />
            </button>
          </div>

          {/* Available Drivers */}
          {step !== "location" && (
            <div className="bg-white rounded-xl border border-border p-5">
              <p className="text-[13px] font-semibold text-dark mb-4">Available drivers</p>
              <div className="space-y-2">
                {nearbyDrivers.map((driver, idx) => (
                  <button
                    key={driver.name}
                    onClick={() => { setSelectedDriver(idx); setStep("confirmed"); }}
                    className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                      selectedDriver === idx ? "border-dark bg-surface-alt" : "border-border hover:border-text-muted"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                      <PiCarFill size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[13px] font-semibold text-dark truncate">{driver.name}</p>
                        <span className="text-[13px] font-bold text-dark flex-shrink-0">₦{driver.price.toLocaleString()}</span>
                      </div>
                      <p className="text-[11px] text-text-muted">{driver.vehicle}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-[11px] text-text-secondary">
                          <PiStarFill size={10} className="text-primary fill-primary" /> {driver.rating}
                        </span>
                        <span className="text-[11px] text-success font-medium">{driver.eta}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirmed */}
          {step === "confirmed" && selectedDriver !== null && (
            <div className="bg-success-light border border-success/20 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                  <PiCarFill size={14} className="text-success" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-dark">Ride confirmed</p>
                  <p className="text-[11px] text-text-secondary">{nearbyDrivers[selectedDriver].name} is on the way</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-border rounded-lg py-2 text-[12px] font-medium text-dark hover:bg-surface-alt transition-colors">
                  <PiPhoneBold size={12} /> Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-border rounded-lg py-2 text-[12px] font-medium text-dark hover:bg-surface-alt transition-colors">
                  <PiChatCircleBold size={12} /> Message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-border overflow-hidden h-[500px] lg:h-[620px] relative">
            <div className="absolute inset-0 bg-[#E8F4E8]">
              {/* Grid lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }} />

              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-white/80" />
              <div className="absolute top-0 bottom-0 left-1/3 w-[3px] bg-white/80" />
              <div className="absolute top-0 bottom-0 right-1/4 w-[2px] bg-white/60" />
              <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-white/60" />

              {/* Pickup marker */}
              <div className="absolute top-[35%] left-[28%] flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-dark flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                </div>
                <div className="mt-1.5 bg-white rounded-md px-2.5 py-1 shadow-sm border border-border">
                  <p className="text-[10px] font-semibold text-dark">Pickup</p>
                </div>
              </div>

              {/* Destination marker */}
              <div className="absolute bottom-[28%] right-[22%] flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-dark flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
                </div>
                <div className="mt-1.5 bg-white rounded-md px-2.5 py-1 shadow-sm border border-border">
                  <p className="text-[10px] font-semibold text-dark">Drop-off</p>
                </div>
              </div>

              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M 210 220 C 300 200, 380 320, 520 390" stroke="#0C0C0C" strokeWidth="2.5" strokeDasharray="6 4" fill="none" opacity="0.5" />
              </svg>

              {/* Cars */}
              {step !== "location" && (
                <>
                  <div className="absolute top-[30%] left-[38%]">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow animate-pulse">
                      <PiCarFill size={10} className="text-dark" />
                    </div>
                  </div>
                  <div className="absolute top-[50%] right-[35%]">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow animate-pulse">
                      <PiCarFill size={10} className="text-dark" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Fare overlay */}
            {step !== "location" && (
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[12px] text-text-muted">Estimated fare</p>
                    <p className="text-[11px] text-text-secondary mt-0.5">8.2 km · ~25 min</p>
                  </div>
                  <p className="text-[24px] font-bold text-dark">₦3,500</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
