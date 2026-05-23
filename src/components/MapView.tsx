"use client";

import { cn } from "@/lib/utils";

interface MapMarker {
  type: "pickup" | "dropoff" | "driver";
  label?: string;
  x?: number; // percentage position 0-100
  y?: number;
}

interface MapViewProps {
  markers?: MapMarker[];
  showRoute?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function MapView({
  markers = [],
  showRoute = false,
  className,
  children,
}: MapViewProps) {
  const defaultMarkers: MapMarker[] =
    markers.length > 0
      ? markers
      : [
          { type: "pickup", label: "Pickup", x: 30, y: 55 },
          { type: "dropoff", label: "Drop-off", x: 70, y: 35 },
        ];

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden select-none", className)}
      style={{
        backgroundColor: "#e8e4dc",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.7) 2px, transparent 2px),
          linear-gradient(90deg, rgba(255,255,255,0.7) 2px, transparent 2px),
          linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
        `,
        backgroundSize: "160px 160px, 160px 160px, 32px 32px, 32px 32px",
      }}
    >
      {/* Water feature */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[25%] bg-[#b8d4e3]/40 rounded-tl-[80px]" />
      <div className="absolute top-[10%] left-0 w-[20%] h-[15%] bg-[#c5dca0]/30 rounded-br-[40px]" />

      {/* Major roads */}
      <div className="absolute top-0 bottom-0 left-[30%] w-[3px] bg-white/80" />
      <div className="absolute top-0 bottom-0 left-[65%] w-[3px] bg-white/80" />
      <div className="absolute left-0 right-0 top-[40%] h-[3px] bg-white/80" />
      <div className="absolute left-0 right-0 top-[70%] h-[3px] bg-white/80" />

      {/* Highway */}
      <div className="absolute left-0 right-0 top-[25%] h-[5px] bg-[#ffd080]/60" />

      {/* Building blocks */}
      <div className="absolute top-[45%] left-[35%] w-12 h-8 bg-zinc-300/30 rounded-sm" />
      <div className="absolute top-[50%] left-[42%] w-16 h-6 bg-zinc-300/25 rounded-sm" />
      <div className="absolute top-[30%] left-[50%] w-10 h-10 bg-zinc-300/20 rounded-sm" />
      <div className="absolute top-[60%] left-[20%] w-14 h-7 bg-zinc-300/25 rounded-sm" />
      <div className="absolute top-[15%] left-[45%] w-8 h-12 bg-zinc-300/20 rounded-sm" />

      {/* Route line (SVG) */}
      {showRoute && defaultMarkers.length >= 2 && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={`M ${defaultMarkers[0]?.x ?? 30} ${defaultMarkers[0]?.y ?? 55} C ${(defaultMarkers[0]?.x ?? 30) + 15} ${defaultMarkers[0]?.y ?? 55}, ${(defaultMarkers[1]?.x ?? 70) - 15} ${defaultMarkers[1]?.y ?? 35}, ${defaultMarkers[1]?.x ?? 70} ${defaultMarkers[1]?.y ?? 35}`}
            fill="none"
            stroke="#10B981"
            strokeWidth="0.6"
            strokeDasharray="1.5 1"
            opacity="0.8"
          />
        </svg>
      )}

      {/* Markers */}
      {defaultMarkers.map((marker, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${marker.x ?? 50}%`, top: `${marker.y ?? 50}%` }}
        >
          {marker.type === "pickup" && (
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-white shadow-lg shadow-emerald-500/30" />
              {marker.label && (
                <span className="mt-1.5 px-2.5 py-1 bg-white rounded-lg text-[10px] font-semibold text-zinc-900 shadow-md whitespace-nowrap">
                  {marker.label}
                </span>
              )}
            </div>
          )}
          {marker.type === "dropoff" && (
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-sm bg-zinc-900 border-[3px] border-white shadow-lg rotate-45" />
              {marker.label && (
                <span className="mt-1.5 px-2.5 py-1 bg-white rounded-lg text-[10px] font-semibold text-zinc-900 shadow-md whitespace-nowrap">
                  {marker.label}
                </span>
              )}
            </div>
          )}
          {marker.type === "driver" && (
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-zinc-900 border-[3px] border-white shadow-lg flex items-center justify-center">
                <span className="text-emerald-400 text-xs">🚗</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
            </div>
          )}
        </div>
      ))}

      {/* Children overlay */}
      {children}
    </div>
  );
}
