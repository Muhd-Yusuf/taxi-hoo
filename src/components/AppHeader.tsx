"use client";

import { useRouter } from "next/navigation";
import { PiArrowLeftBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  transparent?: boolean;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  className?: string;
}

export default function AppHeader({
  title,
  subtitle,
  transparent = false,
  showBack = false,
  onBack,
  rightAction,
  className,
}: AppHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex items-center justify-between h-16 px-5 safe-top",
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-zinc-100",
        className
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-3 min-w-[48px]">
        {showBack && (
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm border border-zinc-100 text-zinc-700 hover:bg-zinc-50 active:scale-95 transition-all"
          >
            <PiArrowLeftBold size={18} />
          </button>
        )}
      </div>

      {/* Center */}
      {title && (
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-[15px] font-semibold text-zinc-900">{title}</h1>
          {subtitle && (
            <p className="text-[11px] text-zinc-400 -mt-0.5">{subtitle}</p>
          )}
        </div>
      )}

      {/* Right */}
      <div className="flex items-center gap-2 min-w-[48px] justify-end">
        {rightAction}
      </div>
    </header>
  );
}
