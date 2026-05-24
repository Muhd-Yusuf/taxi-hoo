"use client";

import { motion } from "framer-motion";
import { PiStarFill, PiPhoneFill, PiChatCircleFill } from "react-icons/pi";
import { cn } from "@/lib/utils";

interface DriverCardProps {
  name: string;
  vehicle: string;
  plate: string;
  rating: number;
  trips: number;
  eta?: string;
  avatar?: string;
  compact?: boolean;
  showActions?: boolean;
  className?: string;
}

export default function DriverCard({
  name,
  vehicle,
  plate,
  rating,
  trips,
  eta,
  compact = false,
  showActions = true,
  className,
}: DriverCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "bg-white rounded-2xl border border-zinc-100 shadow-sm",
        compact ? "p-3.5" : "p-4",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div
            className={cn(
              "rounded-full bg-zinc-900 text-brand-400 flex items-center justify-center font-bold",
              compact ? "w-10 h-10 text-sm" : "w-12 h-12 text-base"
            )}
          >
            {initials}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-brand-400 border-2 border-white" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={cn("font-semibold text-zinc-900", compact ? "text-sm" : "text-[15px]")}>
              {name}
            </h3>
            <div className="flex items-center gap-0.5">
              <PiStarFill size={12} className="text-amber-400" />
              <span className="text-xs font-semibold text-zinc-700">{rating}</span>
            </div>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            {vehicle} · {plate}
          </p>
          {!compact && (
            <p className="text-[11px] text-zinc-400 mt-0.5">
              {trips.toLocaleString()} trips
            </p>
          )}
        </div>

        {/* ETA */}
        {eta && (
          <div className="text-right flex-shrink-0">
            <p className="text-lg font-bold text-zinc-900">{eta}</p>
            <p className="text-[10px] text-zinc-400">away</p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {showActions && (
        <div className="flex gap-2 mt-3 pt-3 border-t border-zinc-100">
          <button className="flex-1 flex items-center justify-center gap-2 h-11 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-xl transition-colors active:scale-[0.98]">
            <PiPhoneFill size={16} />
            Call
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 h-11 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm font-medium rounded-xl transition-colors active:scale-[0.98]">
            <PiChatCircleFill size={16} />
            Message
          </button>
        </div>
      )}
    </motion.div>
  );
}
