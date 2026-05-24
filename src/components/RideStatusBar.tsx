"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RideStatusBarProps {
  status: "searching" | "arriving" | "in_progress" | "completed";
  driverName?: string;
  eta?: string;
  className?: string;
}

const statusConfig = {
  searching: {
    label: "Finding your driver...",
    color: "bg-amber-500",
    textColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  arriving: {
    label: "Driver is on the way",
    color: "bg-brand-500",
    textColor: "text-brand-600",
    bgColor: "bg-brand-50",
  },
  in_progress: {
    label: "Trip in progress",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  completed: {
    label: "Trip completed",
    color: "bg-zinc-500",
    textColor: "text-zinc-600",
    bgColor: "bg-zinc-50",
  },
};

export default function RideStatusBar({
  status,
  driverName,
  eta,
  className,
}: RideStatusBarProps) {
  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-2xl",
        config.bgColor,
        className
      )}
    >
      <div className="relative flex-shrink-0">
        <div className={cn("w-2.5 h-2.5 rounded-full", config.color)} />
        {(status === "searching" || status === "arriving") && (
          <div className={cn("absolute inset-0 w-2.5 h-2.5 rounded-full animate-ping", config.color, "opacity-50")} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-semibold", config.textColor)}>
          {config.label}
        </p>
        {driverName && (
          <p className="text-xs text-zinc-500 mt-0.5">{driverName}</p>
        )}
      </div>
      {eta && (
        <span className={cn("text-sm font-bold", config.textColor)}>{eta}</span>
      )}
    </motion.div>
  );
}
