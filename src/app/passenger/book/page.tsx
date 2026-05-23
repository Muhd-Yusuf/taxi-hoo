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
    name: "James Okafor",
    vehicle: "Toyota Camry",
    plate: "APP-234-KJ",
    rating: 4.9,
    trips: 2847,
    eta: "3 min",
    price: "\u20A63,500",
  },
  {
    name: "Amina Bello",
    vehicle: "Honda Accord",
    plate: "LSD-891-AB",
    rating: 4.8,
    trips: 1923,
    eta: "5 min",
    price: "\u20A63,200",
  },
  {
    name: "Fatima Yusuf",
    vehicle: "Kia Rio",
    plate: "KTU-112-FY",
    rating: 4.7,
    trips: 956,
    eta: "7 min",
    price: "\u20A62,800",
  },
];

const recentLocations = [
  { name: "Lekki Phase 1", address: "Lekki, Lagos" },
  { name: "Victoria Island", address: "VI, Lagos" },
  { name: "Ikeja City Mall", address: "Ikeja, Lagos" },
];

type Step = "idle" | "searching" | "drivers" | "finding" | "confirmed";

export default function BookRidePage() {
  const [step, setStep] = useState<Step>("idle");
  const [pickup, setPickup] = useState("Lekki Phase 1");
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
    { type: "pickup" as const, label: "Lekki Phase 1", x: 35, y: 55 },
    ...(step !== "idle" && step !== "searching"
      ? [{ type: "dropoff" as const, label: destination || "Victoria Island", x: 68, y: 35 }]
      : []),
    ...(step === "drivers" || step === "confirmed" || step === "finding"
      ? [
          { type: "driver" as const, x: 42, y: 48 },
          { type: "driver" as const, x: 55, y: 60 },
          { type: "driver" as const, x: 60, y: 42 },
        ]
      : []),
  ];

  return (
    <div className="h-full relative flex flex-col">
      {/* Map fills everything */}
      <div className="absolute inset-0">
        <MapView
          markers={mapMarkers}
          showRoute={step !== "idle" && step !== "searching"}
        />
      </div>

      {/* Top bar - user greeting + notification */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-400 text-sm font-bold shadow-lg">
            SJ
          </div>
          <div>
            <p className="text-[13px] font-semibold text-zinc-900">Good morning</p>
            <p className="text-[11px] text-zinc-500">Sarah Johnson</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center">
          <PiBellFill size={18} className="text-zinc-700" />
        </button>
      </div>

      {/* Floating ETA card */}
      <AnimatePresence>
        {(step === "drivers" || step === "confirmed" || step === "finding") && (
          <FloatingCard position="top-right" className="mt-16">
            <div className="flex items-center gap-2">
              <PiCarFill size={16} className="text-emerald-500" />
              <div>
                <p className="text-xs font-bold text-zinc-900">{"\u20A6"}3,500</p>
                <p className="text-[10px] text-zinc-400">8.2 km · 25 min</p>
              </div>
            </div>
          </FloatingCard>
        )}
      </AnimatePresence>

      {/* ============ STEP: IDLE - Where to? ============ */}
      <AnimatePresence mode="wait">
        {step === "idle" && (
          <motion.div
            key="idle"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute bottom-0 left-0 right-0 z-20"
          >
            <div className="bg-white rounded-t-3xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-5 pt-5 pb-6">
              {/* Search bar */}
              <button
                onClick={() => setStep("searching")}
                className="w-full flex items-center gap-3 bg-zinc-100 rounded-2xl px-4 h-14 mb-4 active:bg-zinc-200 transition-colors"
              >
                <PiMagnifyingGlassBold size={18} className="text-zinc-400" />
                <span className="text-sm text-zinc-400">Where to?</span>
              </button>

              {/* Recent locations */}
              <div className="space-y-1">
                {recentLocations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => handleSelectLocation(loc.name)}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                      <PiClockFill size={16} className="text-zinc-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-zinc-900">{loc.name}</p>
                      <p className="text-[11px] text-zinc-400">{loc.address}</p>
                    </div>
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
            className="fixed inset-0 z-30 bg-white flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 pt-4 pb-3">
              <button
                onClick={() => setStep("idle")}
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center active:bg-zinc-200 transition-colors"
              >
                <PiArrowLeftBold size={18} className="text-zinc-700" />
              </button>
              <p className="text-[15px] font-semibold text-zinc-900">Set destination</p>
            </div>

            {/* Location inputs */}
            <div className="px-4 pb-4">
              <div className="bg-zinc-50 rounded-2xl p-4 space-y-3">
                {/* Pickup */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0" />
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
                    className="flex-1 bg-white rounded-xl px-3 h-11 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-2 ring-emerald-500/30 focus:ring-emerald-500/60 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-100 mx-4" />

            {/* Search results / Recent locations */}
            <div className="flex-1 overflow-y-auto px-4 pt-3">
              <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-1">
                Recent locations
              </p>
              <div className="space-y-1">
                {recentLocations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => handleSelectLocation(loc.name)}
                    className="w-full flex items-center gap-3 px-3 py-3.5 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                      <PiClockFill size={16} className="text-zinc-400" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-900">{loc.name}</p>
                      <p className="text-[12px] text-zinc-400">{loc.address}</p>
                    </div>
                    <PiNavigationArrowFill size={14} className="text-zinc-300 rotate-45 flex-shrink-0" />
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
            className="absolute bottom-0 left-0 right-0 z-20"
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
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <p className="text-xs text-zinc-500 truncate">{pickup}</p>
                  <div className="w-4 h-px bg-zinc-300 flex-shrink-0" />
                  <div className="w-2 h-2 rounded-sm bg-zinc-900 flex-shrink-0" />
                  <p className="text-xs text-zinc-500 truncate">{destination}</p>
                </div>
                <p className="text-[11px] text-zinc-400 flex-shrink-0">8.2 km · 25 min</p>
              </div>

              {/* Car type tabs */}
              <div className="flex gap-2 mb-4">
                {(["economy", "comfort", "premium"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedCarType(type)}
                    className={`flex-1 h-10 rounded-xl text-xs font-semibold capitalize transition-all ${
                      selectedCarType === type
                        ? "bg-zinc-900 text-white shadow-sm"
                        : "bg-zinc-100 text-zinc-500 active:bg-zinc-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
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
                      className="w-full flex items-center gap-3 p-3.5 rounded-2xl border border-zinc-100 hover:border-zinc-200 active:bg-zinc-50 transition-all text-left"
                    >
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">
                        {initials}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-zinc-900 truncate">{driver.name}</p>
                          <div className="flex items-center gap-0.5 flex-shrink-0">
                            <PiStarFill size={11} className="text-amber-400" />
                            <span className="text-[11px] font-semibold text-zinc-600">{driver.rating}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-0.5">{driver.vehicle}</p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-semibold text-emerald-600 mt-1">
                          {driver.eta} away
                        </span>
                      </div>

                      {/* Price */}
                      <div className="text-right flex-shrink-0">
                        <p className="text-base font-bold text-zinc-900">{driver.price}</p>
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
            className="absolute inset-0 z-30 flex items-center justify-center"
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

            <div className="relative flex flex-col items-center z-10">
              {/* Pulsing circles */}
              <div className="relative w-40 h-40">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-emerald-400/40"
                    initial={{ scale: 0.3, opacity: 0.8 }}
                    animate={{ scale: 1.2, opacity: 0 }}
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
                  <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center shadow-xl">
                    <PiCarFill size={28} className="text-emerald-400" />
                  </div>
                </div>
              </div>

              <motion.p
                className="text-base font-semibold text-zinc-900 mt-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Finding your driver...
              </motion.p>
              <p className="text-xs text-zinc-400 mt-1">This will only take a moment</p>
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
            className="absolute bottom-0 left-0 right-0 z-20"
          >
            <div className="bg-white rounded-t-3xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-5 pt-2 pb-6">
              {/* Drag handle */}
              <div className="flex justify-center pt-2 pb-3">
                <div className="w-10 h-1 rounded-full bg-zinc-300" />
              </div>

              {/* Confirmed status */}
              <div className="flex items-center gap-2.5 mb-4 px-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-semibold text-emerald-600">
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
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
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
                  <div className="text-right">
                    <p className="text-lg font-bold text-zinc-900">
                      {nearbyDrivers[selectedDriver].price}
                    </p>
                    <p className="text-[10px] text-zinc-400">8.2 km · 25 min</p>
                  </div>
                </div>
              </div>

              {/* Cancel ride */}
              <button
                onClick={handleCancelRide}
                className="w-full mt-4 h-12 text-red-500 text-sm font-semibold rounded-xl hover:bg-red-50 active:bg-red-100 transition-colors"
              >
                Cancel ride
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
