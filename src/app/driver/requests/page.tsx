"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiStarFill, PiCheckCircleFill, PiNavigationArrowFill } from "react-icons/pi";

const pendingRequests = [
  {
    id: 1,
    name: "Boitumelo Ramotswe",
    rating: 4.8,
    pickup: "Broadhurst, Gaborone",
    destination: "Fairgrounds, Gaborone",
    distance: "4.2 km",
    duration: "15 min",
    fare: "P2,500",
    time: "Just now",
  },
  {
    id: 2,
    name: "Neo Gabankitse",
    rating: 4.6,
    pickup: "Phakalane, Gaborone",
    destination: "Block 3, Gaborone",
    distance: "2.8 km",
    duration: "10 min",
    fare: "P1,800",
    time: "2 min ago",
  },
];

const completedToday = [
  { id: 3, name: "Lesego Modise", fare: "P3,500", time: "10:30 AM", rating: 5 },
  { id: 4, name: "Oratile Pheto", fare: "P2,200", time: "9:15 AM", rating: 4 },
  { id: 5, name: "Mpho Sebina", fare: "P1,500", time: "8:00 AM", rating: 5 },
];

export default function RequestsPage() {
  const [requests, setRequests] = useState(pendingRequests);

  const handleAccept = (id: number) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const handleDecline = (id: number) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-full bg-zinc-50 pb-6">
      <AppHeader title="Ride Requests" />

      <div className="px-5 py-5 max-w-3xl mx-auto">
        {/* Pending header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Pending Requests
          </h3>
          <span className="bg-brand-100 text-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
            {requests.length}
          </span>
        </div>

        {/* Request cards */}
        <AnimatePresence mode="popLayout">
          {requests.map((req) => {
            const initials = req.name.split(" ").map((n) => n[0]).join("");
            return (
              <motion.div
                key={req.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -200 }}
                className="bg-white rounded-2xl shadow-sm border border-zinc-100 mb-4 overflow-hidden"
              >
                <div className="p-5">
                  {/* Timer bar */}
                  <div className="h-1.5 bg-zinc-100 rounded-full mb-4 overflow-hidden">
                    <div
                      className="h-full bg-brand-500 rounded-full"
                      style={{ animation: "shrink 30s linear forwards" }}
                    />
                  </div>

                  {/* Passenger + fare */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 text-brand-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-semibold text-zinc-900">{req.name}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <PiStarFill size={12} className="text-amber-400" />
                        <span className="text-xs text-zinc-500">{req.rating}</span>
                        <span className="text-zinc-300 mx-1">·</span>
                        <span className="text-xs text-zinc-400">{req.time}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xl font-bold text-brand-600">{req.fare}</p>
                      <div className="flex items-center gap-1 justify-end mt-0.5">
                        <PiNavigationArrowFill size={9} className="text-zinc-400" />
                        <span className="text-[11px] text-zinc-400">{req.distance}</span>
                      </div>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="bg-zinc-50 rounded-xl p-4 mb-5">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center gap-1 pt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                        <div className="w-px h-7 bg-gradient-to-b from-brand-300 to-red-300" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-red-500" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <p className="text-[10px] text-brand-600 font-semibold uppercase tracking-wider">Pickup</p>
                          <p className="text-sm text-zinc-800 font-medium mt-0.5">{req.pickup}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-red-500 font-semibold uppercase tracking-wider">Drop-off</p>
                          <p className="text-sm text-zinc-800 font-medium mt-0.5">{req.destination}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAccept(req.id)}
                      className="flex-1 h-12 bg-brand-500 text-white font-semibold rounded-xl text-sm active:scale-[0.98] transition-all"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(req.id)}
                      className="flex-1 h-12 bg-white text-zinc-500 font-semibold rounded-xl text-sm active:scale-[0.98] transition-all border border-zinc-200 hover:border-red-200 hover:text-red-500 hover:bg-red-50"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Completed today */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <PiCheckCircleFill size={14} className="text-brand-500" />
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Completed Today
            </h3>
            <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
              {completedToday.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            {completedToday.map((ride, i) => (
              <div
                key={ride.id}
                className={`flex items-center gap-4 px-5 py-4 ${
                  i < completedToday.length - 1 ? "border-b border-zinc-50" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <PiCheckCircleFill size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-900">{ride.name}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: ride.rating }).map((_, j) => (
                      <PiStarFill key={j} size={10} className="text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-bold text-brand-600">{ride.fare}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{ride.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes shrink { from { width: 100%; } to { width: 0%; } }`}</style>
    </div>
  );
}
