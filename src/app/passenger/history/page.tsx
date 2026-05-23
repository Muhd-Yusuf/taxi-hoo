"use client";

import { PiClockBold, PiNavigationArrowBold, PiStarFill, PiArrowCounterClockwiseBold, PiCarFill, PiCheckCircleFill, PiXCircleFill } from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

const statusMap = {
  completed: { label: "Completed", style: "bg-success-light text-success", Icon: PiCheckCircleFill },
  in_progress: { label: "Active", style: "bg-warning-light text-warning", Icon: PiCarFill },
  cancelled: { label: "Cancelled", style: "bg-danger-light text-danger", Icon: PiXCircleFill },
};

export default function HistoryPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-dark mb-1">Ride History</h1>
          <p className="text-[13px] text-text-secondary">{mockRides.length} total rides</p>
        </div>
      </div>

      <div className="space-y-3">
        {mockRides.map((ride) => {
          const status = statusMap[ride.status];
          return (
            <div key={ride.id} className="bg-white rounded-xl border border-border p-4 hover:border-text-muted/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-alt flex items-center justify-center">
                    <PiCarFill size={16} className="text-text-muted" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-dark">{ride.driver}</p>
                    <p className="text-[11px] text-text-muted">{ride.date} · {ride.time}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium ${status.style}`}>
                  <status.Icon size={10} />
                  {status.label}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[12px] text-text-secondary mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                <span className="truncate">{ride.pickup}</span>
                <span className="text-text-muted">→</span>
                <div className="w-1.5 h-1.5 rounded-sm bg-primary" />
                <span className="truncate">{ride.destination}</span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-4 text-[11px] text-text-muted">
                  <span className="flex items-center gap-1"><PiNavigationArrowBold size={10} /> {ride.distance}</span>
                  <span className="flex items-center gap-1"><PiClockBold size={10} /> {ride.duration}</span>
                  {ride.rating && (
                    <span className="flex items-center gap-1">
                      <PiStarFill size={10} className="text-primary fill-primary" /> {ride.rating}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-bold text-dark">₦{ride.fare.toLocaleString()}</span>
                  {ride.status === "completed" && (
                    <button className="text-[11px] text-text-muted hover:text-dark font-medium flex items-center gap-1 transition-colors">
                      <PiArrowCounterClockwiseBold size={10} /> Rebook
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
