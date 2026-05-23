"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiStarFill, PiCheckCircleFill } from "react-icons/pi";

const shrinkKeyframes = `
@keyframes shrink {
  from { width: 100%; }
  to { width: 0%; }
}
@keyframes timerGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
  50% { box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15); }
}
@keyframes cardEntrance {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.3); }
  50% { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
`;

const pendingRequests = [
  {
    id: 1,
    name: "Grace Adekunle",
    rating: 4.8,
    pickup: "Maryland, Lagos",
    destination: "Yaba, Lagos",
    distance: "4.2 km",
    duration: "15 min",
    fare: "₦2,500",
    time: "Just now",
  },
  {
    id: 2,
    name: "David Obi",
    rating: 4.6,
    pickup: "Ikeja GRA, Lagos",
    destination: "Allen Avenue",
    distance: "2.8 km",
    duration: "10 min",
    fare: "₦1,800",
    time: "2 min ago",
  },
];

const completedToday = [
  { id: 3, name: "Sarah Johnson", fare: "₦3,500", time: "10:30 AM", rating: 5 },
  { id: 4, name: "Mohammed Sani", fare: "₦2,200", time: "9:15 AM", rating: 4 },
  { id: 5, name: "Fatima Ali", fare: "₦1,500", time: "8:00 AM", rating: 5 },
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
    <div className="bg-zinc-50 min-h-full">
      <style>{shrinkKeyframes}</style>
      <AppHeader title="Ride Requests" />

      <div className="px-4 py-4">
        {/* Pending section */}
        <div className="flex items-center gap-2 mb-4 px-1">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Pending
          </h3>
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
            {requests.length}
          </span>
        </div>

        <AnimatePresence mode="popLayout">
          {requests.map((req) => {
            const initials = req.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <motion.div
                key={req.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -200 }}
                className="bg-white rounded-2xl border border-zinc-100 shadow-sm mb-3 overflow-hidden"
                style={{ animation: "cardEntrance 2s ease-out" }}
              >
                {/* Colored top accent */}
                <div className="h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500" />

                <div className="p-4">
                  {/* Timer bar */}
                  <div className="h-1.5 bg-zinc-100 rounded-full mb-3 overflow-hidden" style={{ animation: "timerGlow 2s ease-in-out infinite" }}>
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500 rounded-full"
                      style={{ animation: "shrink 30s linear forwards" }}
                    />
                  </div>

                  {/* Passenger info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-emerald-400 flex items-center justify-center text-sm font-bold shadow-sm">
                      {initials}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-zinc-900">
                        {req.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <PiStarFill size={12} className="text-amber-400" />
                        <span className="text-xs text-zinc-500">
                          {req.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-emerald-600">{req.fare}</p>
                  </div>

                  {/* Route */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex flex-col items-center gap-0.5 pt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-300" />
                      <div className="w-px h-6 bg-gradient-to-b from-emerald-300 to-red-300" />
                      <div className="w-2.5 h-2.5 rounded-sm bg-red-500 shadow-sm shadow-red-300" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider">Pickup</p>
                        <p className="text-xs text-zinc-700 font-medium">{req.pickup}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-red-500 font-medium uppercase tracking-wider">Destination</p>
                        <p className="text-xs text-zinc-700 font-medium">{req.destination}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-[11px] text-zinc-400 mb-4 bg-zinc-50 rounded-lg px-3 py-2">
                    <span className="font-medium">{req.distance}</span>
                    <span className="text-zinc-300">&middot;</span>
                    <span className="font-medium">{req.duration}</span>
                    <span className="text-zinc-300">&middot;</span>
                    <span className="font-medium">{req.time}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAccept(req.id)}
                      className="flex-1 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl text-sm active:scale-[0.98] transition-all shadow-md shadow-emerald-200"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(req.id)}
                      className="flex-1 h-12 bg-zinc-50 hover:bg-red-50 text-red-500 font-semibold rounded-xl text-sm active:scale-[0.98] transition-all border border-zinc-200 hover:border-red-200"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Completed today section */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <PiCheckCircleFill size={14} className="text-emerald-500" />
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Completed Today
            </h3>
            <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
              {completedToday.length}
            </span>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm divide-y divide-zinc-50 overflow-hidden">
            {completedToday.map((ride) => (
              <div key={ride.id} className="flex items-center gap-3 px-4 py-3.5 border-l-[3px] border-l-emerald-400">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <PiCheckCircleFill size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-900">
                    {ride.name}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {Array.from({ length: ride.rating }).map((_, i) => (
                      <PiStarFill
                        key={i}
                        size={10}
                        className="text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-emerald-600">
                    {ride.fare}
                  </p>
                  <p className="text-[10px] text-zinc-400">{ride.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-6" />
    </div>
  );
}
