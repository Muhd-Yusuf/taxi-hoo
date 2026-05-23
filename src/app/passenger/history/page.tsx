"use client";

import {
  PiClockBold,
  PiNavigationArrowBold,
  PiStarFill,
  PiArrowCounterClockwiseBold,
  PiCarFill,
  PiCheckCircleFill,
  PiXCircleFill,
} from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

const statusMap = {
  completed: { label: "Completed", style: "bg-success-light text-success", Icon: PiCheckCircleFill },
  in_progress: { label: "Active", style: "bg-warning-light text-warning", Icon: PiCarFill },
  cancelled: { label: "Cancelled", style: "bg-danger-light text-danger", Icon: PiXCircleFill },
};

export default function HistoryPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
            Ride History
          </h1>
          <p className="text-[14px] text-text-secondary">{mockRides.length} total rides</p>
        </div>
      </div>

      <div className="space-y-4">
        {mockRides.map((ride) => {
          const status = statusMap[ride.status];
          return (
            <div
              key={ride.id}
              className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6 hover:shadow-md transition-all"
            >
              {/* Header: driver + status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                    <span className="text-[12px] font-bold text-primary">
                      {ride.driver.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-dark">{ride.driver}</p>
                    <p className="text-[12px] text-text-muted mt-0.5">
                      {ride.date} · {ride.time}
                    </p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold ${status.style}`}>
                  <status.Icon size={11} />
                  {status.label}
                </span>
              </div>

              {/* Route */}
              <div className="flex items-center gap-2.5 text-[13px] text-text-secondary mb-4 px-1">
                <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
                <span className="truncate">{ride.pickup}</span>
                <span className="text-text-muted mx-1">→</span>
                <div className="w-2 h-2 rounded-sm bg-primary flex-shrink-0" />
                <span className="truncate">{ride.destination}</span>
              </div>

              {/* Footer: stats + fare + rebook */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-5 text-[12px] text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <PiNavigationArrowBold size={12} /> {ride.distance}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PiClockBold size={12} /> {ride.duration}
                  </span>
                  {ride.rating && (
                    <span className="flex items-center gap-1.5">
                      <PiStarFill size={12} className="text-primary fill-primary" /> {ride.rating}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[16px] font-bold text-dark">
                    ₦{ride.fare.toLocaleString()}
                  </span>
                  {ride.status === "completed" && (
                    <button className="text-[12px] text-text-muted hover:text-dark font-semibold flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-alt">
                      <PiArrowCounterClockwiseBold size={12} /> Rebook
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
