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
                className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-4 mb-3"
              >
                {/* Timer bar at top */}
                <div className="h-1 bg-zinc-100 rounded-full mb-3 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ animation: "shrink 30s linear forwards" }}
                  />
                </div>

                {/* Passenger info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 text-emerald-400 flex items-center justify-center text-sm font-bold">
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
                  <p className="text-xl font-bold text-zinc-900">{req.fare}</p>
                </div>

                {/* Route */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex flex-col items-center gap-0.5 pt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div className="w-px h-6 bg-zinc-200" />
                    <div className="w-2 h-2 rounded-sm bg-zinc-900" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <p className="text-xs text-zinc-600">{req.pickup}</p>
                    <p className="text-xs text-zinc-600">{req.destination}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-[11px] text-zinc-400 mb-4">
                  <span>{req.distance}</span>
                  <span>&middot;</span>
                  <span>{req.duration}</span>
                  <span>&middot;</span>
                  <span>{req.time}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAccept(req.id)}
                    className="flex-1 h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm active:scale-[0.98] transition-all"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDecline(req.id)}
                    className="flex-1 h-12 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 font-medium rounded-xl text-sm active:scale-[0.98] transition-all"
                  >
                    Decline
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Completed today section */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 px-1">
            Completed Today
          </h3>
          <div className="bg-white rounded-2xl border border-zinc-100 divide-y divide-zinc-100">
            {completedToday.map((ride) => (
              <div key={ride.id} className="flex items-center gap-3 px-4 py-3.5">
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
                  <p className="text-sm font-semibold text-zinc-900">
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
