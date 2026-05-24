"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  variant?: "default" | "primary" | "dark";
  className?: string;
  iconBg?: string;
}

export default function StatCard({
  icon,
  label,
  value,
  trend,
  variant = "default",
  className,
  iconBg,
}: StatCardProps) {
  const variants = {
    default: "bg-white border border-zinc-100",
    primary: "bg-brand-500 border-brand-500 text-white",
    dark: "bg-zinc-900 border-zinc-800 text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl p-4 shadow-sm",
        variants[variant],
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className={cn(
            "w-9 h-9 rounded-xl flex items-center justify-center",
            iconBg
              ? iconBg
              : variant === "default"
              ? "bg-zinc-100"
              : variant === "primary"
              ? "bg-white/20"
              : "bg-white/10"
          )}
        >
          {icon}
        </div>
        {trend && (
          <span
            className={cn(
              "text-[11px] font-semibold px-2 py-0.5 rounded-full",
              variant === "default"
                ? "bg-brand-50 text-brand-600"
                : "bg-white/20 text-white"
            )}
          >
            {trend}
          </span>
        )}
      </div>
      <p
        className={cn(
          "text-xl font-bold tracking-tight",
          variant === "default" ? "text-zinc-900" : "text-white"
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "text-[12px] mt-0.5",
          variant === "default" ? "text-zinc-400" : "text-white/70"
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}
