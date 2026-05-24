"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MapView from "@/components/MapView";
import FloatingCard from "@/components/FloatingCard";
import DriverCard from "@/components/DriverCard";
import RideStatusBar from "@/components/RideStatusBar";
import {
  PiClockFill,
  PiMagnifyingGlassBold,
  PiNavigationArrowFill,
  PiCarFill,
  PiStarFill,
  PiBellFill,
  PiArrowLeftBold,
} from "react-icons/pi";

const nearbyDrivers = [
  {
    name: "Thabo Mokobi",
    vehicle: "Toyota Camry",
    plate: "B 234 APP",
    rating: 4.9,
    trips: 2847,
    eta: "3 min",
    price: "P3,500",
  },
  {
    name: "Keabetswe Molefe",
    vehicle: "Honda Accord",
    plate: "B 891 LSD",
    rating: 4.8,
    trips: 1923,
    eta: "5 min",
    price: "P3,200",
  },
  {
    name: "Mpho Sebina",
    vehicle: "Kia Rio",
    plate: "B 112 KTU",
    rating: 4.7,
    trips: 956,
    eta: "7 min",
    price: "P2,800",
  },
];

const recentLocations = [
  { name: "Main Mall", address: "CBD, Gaborone", distance: "2.7 km" },
  { name: "Riverwalk", address: "Riverwalk, Gaborone", distance: "5.1 km" },
  { name: "Game City Mall", address: "Gaborone West, Gaborone", distance: "12.3 km" },
];

type Step = "idle" | "searching" | "drivers" | "finding" | "confirmed";

export default function BookRidePage() {
  const [step, setStep] = useState<Step>("idle");
  const [rideMode, setRideMode] = useState<"transport" | "package">("transport");
  const [pickup, setPickup] = useState("Main Mall");
  const [destination, setDestination] = useState("");
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);
  const [selectedCarType, setSelectedCarType] = useState<"economy" | "comfort" | "premium">("economy");
  const destinationInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus destination input when searching
  useEffect(() => {
    if (step === "searching" && destinationInputRef.current) {
      destinationInputRef.current.focus();
    }
  }, [step]);

  // Auto-transition from finding to confirmed
  useEffect(() => {
    if (step === "finding") {
      const timer = setTimeout(() => {
        setStep("confirmed");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleSelectLocation = (name: string) => {
    setDestination(name);
    setStep("drivers");
  };

  const handleSelectDriver = (index: number) => {
    setSelectedDriver(index);
    setStep("finding");
  };

  const handleCancelRide = () => {
    setStep("idle");
    setSelectedDriver(null);
    setDestination("");
  };

  const mapMarkers = [
    { type: "pickup" as const, label: "Main Mall", x: 35, y: 55 },
    ...(step !== "idle" && step !== "searching"
      ? [{ type: "dropoff" as const, label: destination || "Riverwalk", x: 68, y: 35 }]
      : []),
    ...(step === "drivers" || step === "confirmed" || step === "finding"
      ? [
          { type: "driver" as const, x: 42, y: 48 },
          { type: "driver" as const, x: 55, y: 60 },
          { type: "driver" as const, x: 60, y: 42 },
        ]
      : []),
  ];

  // ---- Shared side panel content (used on desktop) ----
  const renderSidePanelContent = () => {
    // IDLE: search bar + recent locations
    if (step === "idle") {
      return (
        <>
          {/* Ride / Delivery toggle */}
          <div className="bg-zinc-100 rounded-xl p-1 flex mb-4">
            <button
              onClick={() => setRideMode("transport")}
              className={`flex-1 py-2.5 text-sm rounded-lg transition-all ${
                rideMode === "transport"
                  ? "bg-white shadow-sm text-zinc-900 font-semibold"
                  : "text-zinc-400"
              }`}
            >
              Transport
            </button>
            <button
              onClick={() => setRideMode("package")}
              className={`flex-1 py-2.5 text-sm rounded-lg transition-all ${
                rideMode === "package"
                  ? "bg-white shadow-sm text-zinc-900 font-semibold"
                  : "text-zinc-400"
              }`}
            >
              Package
            </button>
          </div>

          {/* Search bar */}
          <button
            onClick={() => setStep("searching")}
            className="w-full flex items-center gap-3 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-2xl px-4 h-14 mb-4 active:bg-zinc-200 transition-colors shadow-sm border border-zinc-200/60 group"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-sm">
              <PiMagnifyingGlassBold size={15} className="text-white" />
            </div>
            <span className="text-sm font-medium text-zinc-400">Where would you like to go?</span>
          </button>

          {/* Recent locations */}
          <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-1">Recent</p>
          <div className="space-y-1">
            {recentLocations.map((loc, i) => (
              <button
                key={loc.name}
                onClick={() => handleSelectLocation(loc.name)}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                  i === 0 ? "bg-amber-50" : "bg-brand-50"
                }`}>
                  <PiClockFill size={16} className={i === 0 ? "text-amber-500" : "text-brand-500"} />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-900">{loc.name}</p>
                  <p className="text-[11px] text-zinc-400">{loc.address}</p>
                </div>
                <span className="text-xs text-zinc-400 flex-shrink-0">{loc.distance}</span>
              </button>
            ))}
          </div>
        </>
      );
    }

    // SEARCHING: location inputs + results
    if (step === "searching") {
      return (
        <>
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setStep("idle")}
              className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center active:bg-zinc-200 transition-colors"
            >
              <PiArrowLeftBold size={18} className="text-zinc-700" />
            </button>
            <p className="text-[15px] font-semibold text-zinc-900">Set destination</p>
          </div>

          {/* Location inputs */}
          <div className="bg-zinc-50 rounded-2xl p-4 space-y-3 mb-4">
            {/* Pickup */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-500 flex-shrink-0" />
              <div className="flex-1 bg-white rounded-xl px-3 h-11 flex items-center">
                <p className="text-sm text-zinc-900">{pickup}</p>
              </div>
            </div>

            {/* Connector line */}
            <div className="flex items-center gap-3">
              <div className="w-3 flex justify-center">
                <div className="w-px h-4 bg-zinc-300" />
              </div>
              <div className="flex-1" />
            </div>

            {/* Destination */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-zinc-900 flex-shrink-0" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="flex-1 bg-white rounded-xl px-3 h-11 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-2 ring-brand-500/30 focus:ring-brand-500/60 transition-all"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-100 mb-3" />

          {/* Recent locations */}
          <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-1">
            Recent locations
          </p>
          <div className="space-y-1">
            {recentLocations.map((loc, i) => (
              <button
                key={loc.name}
                onClick={() => handleSelectLocation(loc.name)}
                className="w-full flex items-center gap-3 px-3 py-3.5 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  i === 0 ? "bg-amber-50" : "bg-brand-50"
                }`}>
                  <PiClockFill size={16} className={i === 0 ? "text-amber-500" : "text-brand-500"} />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-900">{loc.name}</p>
                  <p className="text-[12px] text-zinc-400">{loc.address}</p>
                </div>
                <span className="text-xs text-zinc-400 flex-shrink-0 mr-1">{loc.distance}</span>
                <PiNavigationArrowFill size={14} className="text-brand-300 rotate-45 flex-shrink-0" />
              </button>
            ))}
          </div>
        </>
      );
    }

    // DRIVERS: car type tabs + driver list
    if (step === "drivers") {
      return (
        <>
          {/* Status bar */}
          <RideStatusBar status="arriving" eta="3 min" />

          {/* Ride summary */}
          <div className="flex items-center gap-2 mt-3 mb-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
              <p className="text-xs text-zinc-500 truncate">{pickup}</p>
              <div className="w-4 h-px bg-zinc-300 flex-shrink-0" />
              <div className="w-2 h-2 rounded-sm bg-zinc-900 flex-shrink-0" />
              <p className="text-xs text-zinc-500 truncate">{destination}</p>
            </div>
            <p className="text-[11px] text-zinc-400 flex-shrink-0">8.2 km · 25 min</p>
          </div>

          {/* Car type tabs */}
          <div className="flex gap-2 mb-4">
            {(["economy", "comfort", "premium"] as const).map((type) => {
              const tabColors = {
                economy: "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/25",
                comfort: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25",
                premium: "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md shadow-purple-500/25",
              };
              return (
                <button
                  key={type}
                  onClick={() => setSelectedCarType(type)}
                  className={`flex-1 h-11 rounded-xl text-xs font-semibold capitalize transition-all ${
                    selectedCarType === type
                      ? tabColors[type]
                      : "bg-zinc-100 text-zinc-500 active:bg-zinc-200"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>

          {/* Driver list */}
          <div className="space-y-2">
            {nearbyDrivers.map((driver, idx) => {
              const initials = driver.name
                .split(" ")
                .map((n) => n[0])
                .join("");

              return (
                <button
                  key={driver.name}
                  onClick={() => handleSelectDriver(idx)}
                  className="w-full flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-100 hover:border-brand-200 active:bg-brand-50/30 transition-all text-left bg-gradient-to-r from-white to-brand-50/40 shadow-sm"
                >
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-brand-400 text-sm font-bold flex-shrink-0 ring-2 ring-brand-500/20">
                    {initials}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-semibold text-zinc-900 truncate">{driver.name}</p>
                      <div className="flex items-center gap-0.5 bg-amber-50 rounded-full px-1.5 py-0.5 flex-shrink-0">
                        <PiStarFill size={11} className="text-amber-400" />
                        <span className="text-[11px] font-semibold text-amber-700">{driver.rating}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-0.5">{driver.vehicle}</p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700 mt-1">
                      {driver.eta} away
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-base font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">{driver.price}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </>
      );
    }

    // FINDING: pulsing search
    if (step === "finding") {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          {/* Pulsing circles */}
          <div className="relative w-40 h-40">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-brand-500/50"
                style={{ background: `radial-gradient(circle, transparent 60%, rgba(0, 200, 83, ${0.08 - i * 0.02}) 100%)` }}
                initial={{ scale: 0.3, opacity: 0.9 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-18 h-18 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-xl shadow-brand-500/30"
                style={{ width: 72, height: 72 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <PiCarFill size={30} className="text-white" />
              </motion.div>
            </div>
          </div>

          <motion.p
            className="text-base font-bold text-brand-700 mt-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Finding your driver...
          </motion.p>
          <p className="text-xs text-zinc-500 mt-1">This will only take a moment</p>
        </div>
      );
    }

    // CONFIRMED: ride confirmed + driver card
    if (step === "confirmed" && selectedDriver !== null) {
      return (
        <>
          {/* Confirmed status */}
          <div className="flex items-center gap-2.5 mb-4 px-3 py-2.5 rounded-xl bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/60">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse shadow-sm shadow-brand-500/50" />
            <p className="text-sm font-semibold text-brand-700">
              Ride confirmed - driver is on the way
            </p>
          </div>

          {/* Driver card */}
          <DriverCard
            name={nearbyDrivers[selectedDriver].name}
            vehicle={nearbyDrivers[selectedDriver].vehicle}
            plate={nearbyDrivers[selectedDriver].plate}
            rating={nearbyDrivers[selectedDriver].rating}
            trips={nearbyDrivers[selectedDriver].trips}
            eta={nearbyDrivers[selectedDriver].eta}
          />

          {/* Route summary */}
          <div className="mt-4 pt-4 border-t border-zinc-100">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center gap-1 pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                <div className="w-px h-8 bg-zinc-200" />
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-xs text-zinc-400">Pickup</p>
                  <p className="text-sm font-medium text-zinc-900">{pickup}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Drop-off</p>
                  <p className="text-sm font-medium text-zinc-900">{destination}</p>
                </div>
              </div>
              <div className="text-right bg-brand-50 rounded-xl px-3 py-2 border border-brand-100">
                <p className="text-lg font-bold text-brand-700">
                  {nearbyDrivers[selectedDriver].price}
                </p>
                <p className="text-[10px] text-brand-500">8.2 km · 25 min</p>
              </div>
            </div>
          </div>

          {/* Cancel ride */}
          <button
            onClick={handleCancelRide}
            className="w-full mt-4 h-12 bg-red-50 border border-red-200/60 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-100 active:bg-red-200 transition-colors"
          >
            Cancel ride
          </button>
        </>
      );
    }

    return null;
  };

  return (
    <div className="h-full relative flex flex-col lg:flex-row">
      {/* ===== DESKTOP SIDE PANEL (lg+) ===== */}
      <div className="hidden lg:flex lg:flex-col lg:w-[400px] lg:border-r lg:border-zinc-200 lg:bg-white lg:overflow-y-auto lg:p-6">
        {/* User greeting */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-brand-500/30 ring-2 ring-white/80">
            SJ
          </div>
          <div>
            <p className="text-[13px] font-semibold text-zinc-900">Good morning</p>
            <p className="text-[11px] text-zinc-500">Lesego Modise</p>
          </div>
        </div>
        {renderSidePanelContent()}
      </div>

      {/* ===== MAP SECTION ===== */}
      <div className="relative flex-1 h-full">
        {/* Map fills everything */}
        <div className="absolute inset-0">
          <MapView
            markers={mapMarkers}
            showRoute={step !== "idle" && step !== "searching"}
          />
        </div>

        {/* Gradient overlay at top for contrast (mobile only) */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900/60 via-zinc-900/20 to-transparent z-10 pointer-events-none lg:hidden" />

        {/* Top bar - user greeting + notification (mobile only) */}
        <div className="relative z-10 flex items-center justify-between px-5 pt-5 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-brand-500/30 ring-2 ring-white/80">
              SJ
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white drop-shadow-sm">Good morning</p>
              <p className="text-[11px] text-white/70">Lesego Modise</p>
            </div>
          </div>
          <button className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/50 flex items-center justify-center active:scale-95 transition-transform">
            <PiBellFill size={18} className="text-brand-600" />
          </button>
        </div>

        {/* Floating ETA card */}
        <AnimatePresence>
          {(step === "drivers" || step === "confirmed" || step === "finding") && (
            <FloatingCard position="top-right" className="mt-16 lg:mt-4">
              <div className="flex items-center gap-2.5 bg-gradient-to-r from-brand-50 to-white rounded-xl p-0.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-sm">
                  <PiCarFill size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-700">P3,500</p>
                  <p className="text-[10px] text-zinc-400">8.2 km · 25 min</p>
                </div>
              </div>
            </FloatingCard>
          )}
        </AnimatePresence>

        {/* ============ MOBILE BOTTOM SHEETS (hidden on lg+) ============ */}
        <AnimatePresence mode="wait">
          {/* ============ STEP: IDLE - Where to? ============ */}
          {step === "idle" && (
            <motion.div
              key="idle"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 z-20 lg:hidden"
            >
              <div className="bg-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-5 pt-5 pb-6">
                {/* Ride / Delivery toggle */}
                <div className="bg-zinc-100 rounded-xl p-1 flex mb-4">
                  <button
                    onClick={() => setRideMode("transport")}
                    className={`flex-1 py-2.5 text-sm rounded-lg transition-all ${
                      rideMode === "transport"
                        ? "bg-white shadow-sm text-zinc-900 font-semibold"
                        : "text-zinc-400"
                    }`}
                  >
                    Transport
                  </button>
                  <button
                    onClick={() => setRideMode("package")}
                    className={`flex-1 py-2.5 text-sm rounded-lg transition-all ${
                      rideMode === "package"
                        ? "bg-white shadow-sm text-zinc-900 font-semibold"
                        : "text-zinc-400"
                    }`}
                  >
                    Package
                  </button>
                </div>

                {/* Search bar */}
                <button
                  onClick={() => setStep("searching")}
                  className="w-full flex items-center gap-3 bg-gradient-to-r from-zinc-50 to-zinc-100 rounded-2xl px-4 h-14 mb-4 active:bg-zinc-200 transition-colors shadow-sm border border-zinc-200/60 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-sm">
                    <PiMagnifyingGlassBold size={15} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-zinc-400">Where would you like to go?</span>
                </button>

                {/* Recent locations */}
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-1">Recent</p>
                <div className="space-y-1">
                  {recentLocations.map((loc, i) => (
                    <button
                      key={loc.name}
                      onClick={() => handleSelectLocation(loc.name)}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                        i === 0 ? "bg-amber-50" : "bg-brand-50"
                      }`}>
                        <PiClockFill size={16} className={i === 0 ? "text-amber-500" : "text-brand-500"} />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-sm font-medium text-zinc-900">{loc.name}</p>
                        <p className="text-[11px] text-zinc-400">{loc.address}</p>
                      </div>
                      <span className="text-xs text-zinc-400 flex-shrink-0">{loc.distance}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ STEP: SEARCHING - Full screen search ============ */}
          {step === "searching" && (
            <motion.div
              key="searching"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 z-30 bg-white flex flex-col lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                <button
                  onClick={() => setStep("idle")}
                  className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center active:bg-zinc-200 transition-colors"
                >
                  <PiArrowLeftBold size={18} className="text-zinc-700" />
                </button>
                <p className="text-[15px] font-semibold text-zinc-900">Set destination</p>
              </div>

              {/* Location inputs */}
              <div className="px-5 pb-5">
                <div className="bg-zinc-50 rounded-2xl p-4 space-y-3">
                  {/* Pickup */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-brand-500 flex-shrink-0" />
                    <div className="flex-1 bg-white rounded-xl px-3 h-11 flex items-center">
                      <p className="text-sm text-zinc-900">{pickup}</p>
                    </div>
                  </div>

                  {/* Connector line */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 flex justify-center">
                      <div className="w-px h-4 bg-zinc-300" />
                    </div>
                    <div className="flex-1" />
                  </div>

                  {/* Destination */}
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-sm bg-zinc-900 flex-shrink-0" />
                    <input
                      ref={destinationInputRef}
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Where to?"
                      className="flex-1 bg-white rounded-xl px-3 h-11 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-2 ring-brand-500/30 focus:ring-brand-500/60 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-100 mx-5" />

              {/* Search results / Recent locations */}
              <div className="flex-1 overflow-y-auto px-5 pt-3">
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-1">
                  Recent locations
                </p>
                <div className="space-y-1">
                  {recentLocations.map((loc, i) => (
                    <button
                      key={loc.name}
                      onClick={() => handleSelectLocation(loc.name)}
                      className="w-full flex items-center gap-3 px-3 py-3.5 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        i === 0 ? "bg-amber-50" : "bg-brand-50"
                      }`}>
                        <PiClockFill size={16} className={i === 0 ? "text-amber-500" : "text-brand-500"} />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-sm font-medium text-zinc-900">{loc.name}</p>
                        <p className="text-[12px] text-zinc-400">{loc.address}</p>
                      </div>
                      <span className="text-xs text-zinc-400 flex-shrink-0 mr-1">{loc.distance}</span>
                      <PiNavigationArrowFill size={14} className="text-brand-300 rotate-45 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ STEP: DRIVERS - Available drivers ============ */}
          {step === "drivers" && (
            <motion.div
              key="drivers"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 z-20 lg:hidden"
            >
              <div className="bg-white rounded-t-3xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-5 pt-2 pb-6">
                {/* Drag handle */}
                <div className="flex justify-center pt-2 pb-3">
                  <div className="w-10 h-1 rounded-full bg-zinc-300" />
                </div>

                {/* Status bar */}
                <RideStatusBar status="arriving" eta="3 min" />

                {/* Ride summary */}
                <div className="flex items-center gap-2 mt-3 mb-3">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                    <p className="text-xs text-zinc-500 truncate">{pickup}</p>
                    <div className="w-4 h-px bg-zinc-300 flex-shrink-0" />
                    <div className="w-2 h-2 rounded-sm bg-zinc-900 flex-shrink-0" />
                    <p className="text-xs text-zinc-500 truncate">{destination}</p>
                  </div>
                  <p className="text-[11px] text-zinc-400 flex-shrink-0">8.2 km · 25 min</p>
                </div>

                {/* Car type tabs */}
                <div className="flex gap-2 mb-4">
                  {(["economy", "comfort", "premium"] as const).map((type) => {
                    const tabColors = {
                      economy: "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/25",
                      comfort: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25",
                      premium: "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md shadow-purple-500/25",
                    };
                    return (
                      <button
                        key={type}
                        onClick={() => setSelectedCarType(type)}
                        className={`flex-1 h-11 rounded-xl text-xs font-semibold capitalize transition-all ${
                          selectedCarType === type
                            ? tabColors[type]
                            : "bg-zinc-100 text-zinc-500 active:bg-zinc-200"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>

                {/* Driver list */}
                <div className="space-y-2 max-h-[40dvh] overflow-y-auto">
                  {nearbyDrivers.map((driver, idx) => {
                    const initials = driver.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("");

                    return (
                      <motion.button
                        key={driver.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => handleSelectDriver(idx)}
                        className="w-full flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-100 hover:border-brand-200 active:bg-brand-50/30 transition-all text-left bg-gradient-to-r from-white to-brand-50/40 shadow-sm"
                      >
                        {/* Avatar */}
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-brand-400 text-sm font-bold flex-shrink-0 ring-2 ring-brand-500/20">
                          {initials}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-semibold text-zinc-900 truncate">{driver.name}</p>
                            <div className="flex items-center gap-0.5 bg-amber-50 rounded-full px-1.5 py-0.5 flex-shrink-0">
                              <PiStarFill size={11} className="text-amber-400" />
                              <span className="text-[11px] font-semibold text-amber-700">{driver.rating}</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">{driver.vehicle}</p>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700 mt-1">
                            {driver.eta} away
                          </span>
                        </div>

                        {/* Price */}
                        <div className="text-right flex-shrink-0">
                          <p className="text-base font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">{driver.price}</p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ STEP: FINDING - Pulsing search animation ============ */}
          {step === "finding" && (
            <motion.div
              key="finding"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 flex items-center justify-center lg:hidden"
            >
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-50/80 via-white/70 to-brand-50/80 backdrop-blur-sm" />

              <div className="relative flex flex-col items-center z-10">
                {/* Pulsing circles */}
                <div className="relative w-40 h-40">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-2 border-brand-500/50"
                      style={{ background: `radial-gradient(circle, transparent 60%, rgba(0, 200, 83, ${0.08 - i * 0.02}) 100%)` }}
                      initial={{ scale: 0.3, opacity: 0.9 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-18 h-18 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-xl shadow-brand-500/30"
                      style={{ width: 72, height: 72 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <PiCarFill size={30} className="text-white" />
                    </motion.div>
                  </div>
                </div>

                <motion.p
                  className="text-base font-bold text-brand-700 mt-6"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Finding your driver...
                </motion.p>
                <p className="text-xs text-zinc-500 mt-1">This will only take a moment</p>
              </div>
            </motion.div>
          )}

          {/* ============ STEP: CONFIRMED - Ride confirmed ============ */}
          {step === "confirmed" && selectedDriver !== null && (
            <motion.div
              key="confirmed"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 z-20 lg:hidden"
            >
              <div className="bg-white rounded-t-3xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-5 pt-2 pb-6">
                {/* Drag handle */}
                <div className="flex justify-center pt-2 pb-3">
                  <div className="w-10 h-1 rounded-full bg-zinc-300" />
                </div>

                {/* Confirmed status */}
                <div className="flex items-center gap-2.5 mb-4 px-3 py-2.5 rounded-xl bg-gradient-to-r from-brand-50 to-brand-100/50 border border-brand-200/60">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse shadow-sm shadow-brand-500/50" />
                  <p className="text-sm font-semibold text-brand-700">
                    Ride confirmed - driver is on the way
                  </p>
                </div>

                {/* Driver card */}
                <DriverCard
                  name={nearbyDrivers[selectedDriver].name}
                  vehicle={nearbyDrivers[selectedDriver].vehicle}
                  plate={nearbyDrivers[selectedDriver].plate}
                  rating={nearbyDrivers[selectedDriver].rating}
                  trips={nearbyDrivers[selectedDriver].trips}
                  eta={nearbyDrivers[selectedDriver].eta}
                />

                {/* Route summary */}
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                      <div className="w-px h-8 bg-zinc-200" />
                      <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="text-xs text-zinc-400">Pickup</p>
                        <p className="text-sm font-medium text-zinc-900">{pickup}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">Drop-off</p>
                        <p className="text-sm font-medium text-zinc-900">{destination}</p>
                      </div>
                    </div>
                    <div className="text-right bg-brand-50 rounded-xl px-3 py-2 border border-brand-100">
                      <p className="text-lg font-bold text-brand-700">
                        {nearbyDrivers[selectedDriver].price}
                      </p>
                      <p className="text-[10px] text-brand-500">8.2 km · 25 min</p>
                    </div>
                  </div>
                </div>

                {/* Cancel ride */}
                <button
                  onClick={handleCancelRide}
                  className="w-full mt-4 h-12 bg-red-50 border border-red-200/60 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-100 active:bg-red-200 transition-colors"
                >
                  Cancel ride
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
