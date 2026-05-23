"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiMapPinFill, PiTrashBold } from "react-icons/pi";

const initialLocations = [
  { id: 1, name: "Office", address: "Plot 123, CBD, Gaborone" },
  { id: 2, name: "Home", address: "Block 8, Extension 12, Gaborone" },
  { id: 3, name: "Gym", address: "Virgin Active, Game City, Gaborone" },
  { id: 4, name: "Mall", address: "Riverwalk Mall, Riverwalk, Gaborone" },
];

export default function FavouritesPage() {
  const [locations, setLocations] = useState(initialLocations);

  const handleDelete = (id: number) => {
    setLocations((prev) => prev.filter((loc) => loc.id !== id));
  };

  return (
    <div className="min-h-full bg-zinc-50">
      <AppHeader showBack title="Favourite" />

      <div className="px-5 pt-5 space-y-3">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-4 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <PiMapPinFill size={18} className="text-emerald-500" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-zinc-900">{loc.name}</p>
              <p className="text-xs text-zinc-400 mt-0.5 truncate">
                {loc.address}
              </p>
            </div>

            <button
              onClick={() => handleDelete(loc.id)}
              className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 active:scale-90 transition-transform"
            >
              <PiTrashBold size={14} className="text-red-500" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
