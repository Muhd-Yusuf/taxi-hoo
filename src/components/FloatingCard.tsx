"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode;
  position?: "top" | "bottom" | "top-right" | "top-left";
  className?: string;
}

export default function FloatingCard({
  children,
  position = "top-right",
  className,
}: FloatingCardProps) {
  const positionClasses = {
    top: "top-4 left-4 right-4",
    bottom: "bottom-4 left-4 right-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: position.includes("top") ? -10 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: "spring", damping: 25 }}
      className={cn(
        "absolute z-20",
        positionClasses[position],
        "bg-white rounded-2xl shadow-lg shadow-black/8 border border-zinc-100",
        "p-3.5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
