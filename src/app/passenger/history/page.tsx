"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { mockRides } from "@/lib/mock-data";

type TabKey = "upcoming" | "completed" | "cancelled";

const tabs: { key: TabKey; label: string }[] = [
  { key: "upcoming", label: "Upcoming" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

const statusToTab: Record<string, TabKey> = {
  in_progress: "upcoming",
  completed: "completed",
  cancelled: "cancelled",
};

const statusLabel: Record<TabKey, { text: string; classes: string }> = {
  upcoming: { text: "Active", classes: "text-amber-600 bg-amber-50" },
  completed: { text: "Done", classes: "text-brand-600 bg-brand-50" },
  cancelled: { text: "Cancelled", classes: "text-red-600 bg-red-50" },
};

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("upcoming");

  const filteredRides = mockRides.filter(
    (ride) => statusToTab[ride.status] === activeTab
  );

  return (
    <div className="flex flex-col min-h-full bg-zinc-50">
      <AppHeader title="History" />

      <div className="max-w-2xl mx-auto">
      {/* Tab bar */}
      <div className="flex gap-2 px-5 pt-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === tab.key
                ? "bg-brand-500 text-white"
                : "bg-zinc-100 text-zinc-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Ride cards */}
      <div className="flex-1 px-5 pt-5 pb-6 space-y-3">
        {filteredRides.length === 0 ? (
          <div className="flex-1 flex items-center justify-center pt-20">
            <p className="text-zinc-400 text-sm">No rides found</p>
          </div>
        ) : (
          filteredRides.map((ride, index) => {
            const tab = statusToTab[ride.status];
            const label = statusLabel[tab];

            return (
              <motion.div
                key={ride.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="bg-white rounded-2xl border border-zinc-100 p-4"
              >
                <div className="flex items-start justify-between">
                  {/* Left side */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-zinc-900">
                      {ride.driver}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1 truncate">
                      {ride.pickup} &rarr; {ride.destination}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1">
                      {ride.date} &middot; {ride.time}
                    </p>
                  </div>

                  {/* Right side — status label */}
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ml-3 ${label.classes}`}
                  >
                    {label.text}
                  </span>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
      </div>
    </div>
  );
}
