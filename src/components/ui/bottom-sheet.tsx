"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BottomSheetProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function BottomSheet({
  isOpen = true,
  onClose,
  children,
  className,
}: BottomSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {onClose && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={onClose}
            />
          )}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 && onClose) onClose();
            }}
            className={cn(
              "fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50",
              "shadow-[0_-4px_25px_rgba(0,0,0,0.1)]",
              "max-h-[90dvh] overflow-y-auto",
              className
            )}
          >
            {/* Drag Handle */}
            <div className="sticky top-0 flex justify-center pt-3 pb-2 bg-white rounded-t-3xl z-10">
              <div className="w-10 h-1 rounded-full bg-zinc-300" />
            </div>
            <div className="px-5 pb-8">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function SheetHandle() {
  return (
    <div className="flex justify-center pt-3 pb-2">
      <div className="w-10 h-1 rounded-full bg-zinc-300" />
    </div>
  );
}
