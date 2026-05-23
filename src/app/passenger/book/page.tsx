"use client";

import { useState } from "react";
import {
  MapPin,
  Navigation,
  Clock,
  DollarSign,
  Star,
  Phone,
  MessageSquare,
  Car,
  User,
  Search,
  ChevronRight,
} from "lucide-react";

const nearbyDrivers = [
  {
    name: "James Okafor",
    vehicle: "Toyota Camry",
    plate: "ABC-123-KD",
    rating: 4.8,
    trips: 1247,
    eta: "3 min",
    price: 3500,
  },
  {
    name: "Amina Bello",
    vehicle: "Honda Accord",
    plate: "DEF-456-LA",
    rating: 4.9,
    trips: 2103,
    eta: "5 min",
    price: 3200,
  },
  {
    name: "Fatima Yusuf",
    vehicle: "Kia Rio",
    plate: "JKL-012-KN",
    rating: 4.7,
    trips: 1532,
    eta: "7 min",
    price: 2800,
  },
];

const recentLocations = [
  { name: "Victoria Island, Lagos", address: "Adeola Odeku St, VI" },
  { name: "Ikeja City Mall", address: "Alausa, Ikeja" },
  { name: "Lekki Phase 1", address: "Admiralty Way, Lekki" },
];

export default function BookRidePage() {
  const [step, setStep] = useState<"location" | "drivers" | "confirmed">(
    "location"
  );
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-dark">Book a Ride</h1>
        <p className="text-text-secondary text-sm mt-1">
          Enter your pickup and destination to find available drivers
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Left - Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Location Input */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-semibold text-dark mb-4">Trip Details</h3>

            <div className="space-y-3">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-success border-2 border-white shadow" />
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-10 pr-10 py-3.5 rounded-xl border border-border bg-surface-alt text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
                <MapPin
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white shadow" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-10 pr-10 py-3.5 rounded-xl border border-border bg-surface-alt text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
                <Search
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                />
              </div>
            </div>

            {/* Recent locations */}
            <div className="mt-5">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                Recent
              </p>
              <div className="space-y-1">
                {recentLocations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => setDestination(loc.name)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-alt transition-colors text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-surface-alt flex items-center justify-center flex-shrink-0">
                      <Clock size={14} className="text-text-muted" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-dark truncate">
                        {loc.name}
                      </p>
                      <p className="text-xs text-text-muted truncate">
                        {loc.address}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep("drivers")}
              className="w-full mt-5 bg-primary hover:bg-primary-hover text-dark font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
            >
              Find Drivers
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Available Drivers */}
          {step !== "location" && (
            <div className="bg-white rounded-2xl border border-border p-5">
              <h3 className="font-semibold text-dark mb-4">
                Available Drivers
              </h3>
              <div className="space-y-3">
                {nearbyDrivers.map((driver, idx) => (
                  <button
                    key={driver.name}
                    onClick={() => {
                      setSelectedDriver(idx);
                      setStep("confirmed");
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                      selectedDriver === idx
                        ? "border-primary bg-primary-light"
                        : "border-border hover:border-primary/30 hover:bg-surface-alt"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <User size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm text-dark">
                          {driver.name}
                        </p>
                        <span className="text-primary font-bold text-sm">
                          ₦{driver.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mt-0.5">
                        {driver.vehicle} · {driver.plate}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="flex items-center gap-1 text-xs text-text-secondary">
                          <Star
                            size={12}
                            className="text-primary fill-primary"
                          />
                          {driver.rating}
                        </span>
                        <span className="text-xs text-text-muted">
                          {driver.trips} trips
                        </span>
                        <span className="text-xs text-success font-medium">
                          {driver.eta} away
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirmed State */}
          {step === "confirmed" && selectedDriver !== null && (
            <div className="bg-success-light border border-success/20 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <Car size={20} className="text-success" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Ride Confirmed!</p>
                  <p className="text-xs text-text-secondary">
                    {nearbyDrivers[selectedDriver].name} is on the way
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-border rounded-xl py-2.5 text-sm font-medium text-dark hover:bg-surface-alt transition-colors">
                  <Phone size={14} />
                  Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-border rounded-xl py-2.5 text-sm font-medium text-dark hover:bg-surface-alt transition-colors">
                  <MessageSquare size={14} />
                  Message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right - Map placeholder */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-border overflow-hidden h-[600px] relative">
            {/* Simulated map */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Map elements */}
              <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shadow-lg shadow-success/30">
                  <MapPin size={16} className="text-white" />
                </div>
                <div className="mt-1 bg-white rounded-lg px-2 py-1 shadow text-xs font-medium">
                  Pickup
                </div>
              </div>

              <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Navigation size={16} className="text-dark" />
                </div>
                <div className="mt-1 bg-white rounded-lg px-2 py-1 shadow text-xs font-medium">
                  Destination
                </div>
              </div>

              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 200 200 C 300 180, 350 300, 450 400"
                  stroke="#F5B800"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  fill="none"
                />
              </svg>

              {/* Driver markers */}
              {step !== "location" && (
                <>
                  <div className="absolute top-1/4 left-1/3 animate-pulse">
                    <div className="w-6 h-6 rounded-full bg-dark flex items-center justify-center shadow-lg">
                      <Car size={12} className="text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-2/5 right-1/3 animate-pulse">
                    <div className="w-6 h-6 rounded-full bg-dark flex items-center justify-center shadow-lg">
                      <Car size={12} className="text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-2/5 animate-pulse">
                    <div className="w-6 h-6 rounded-full bg-dark flex items-center justify-center shadow-lg">
                      <Car size={12} className="text-primary" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Fare estimate overlay */}
            {step !== "location" && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl shadow-lg border border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <DollarSign size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">
                        Estimated Fare
                      </p>
                      <p className="text-xs text-text-muted">
                        8.2 km · ~25 min
                      </p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    ₦3,500
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
