"use client";

import { PiMagnifyingGlassBold, PiCarFill, PiCheckCircleFill, PiXCircleFill, PiClockBold, PiEyeBold, PiMapPinBold, PiNavigationArrowBold } from "react-icons/pi";
import { mockRides } from "@/lib/mock-data";

const statusMap = {
  completed: { label: "Completed", style: "bg-success-light text-success", Icon: PiCheckCircleFill },
  in_progress: { label: "Active", style: "bg-warning-light text-warning", Icon: PiClockBold },
  cancelled: { label: "Cancelled", style: "bg-danger-light text-danger", Icon: PiXCircleFill },
};

export default function AdminRidesPage() {
  const completed = mockRides.filter((r) => r.status === "completed").length;
  const totalRev = mockRides.filter((r) => r.status === "completed").reduce((s, r) => s + r.fare, 0);

  return (
    <div>
      <h1 className="text-[22px] font-bold text-dark mb-1">Rides</h1>
      <p className="text-[13px] text-text-secondary mb-6">All ride activity</p>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <div className="bg-white rounded-xl border border-border p-3.5">
          <p className="text-[11px] text-text-muted">Total</p>
          <p className="text-[18px] font-bold text-dark">{mockRides.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-3.5">
          <p className="text-[11px] text-text-muted">Completed</p>
          <p className="text-[18px] font-bold text-success">{completed}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-3.5">
          <p className="text-[11px] text-text-muted">Active</p>
          <p className="text-[18px] font-bold text-warning">{mockRides.filter((r) => r.status === "in_progress").length}</p>
        </div>
        <div className="bg-white rounded-xl border border-border p-3.5">
          <p className="text-[11px] text-text-muted">Revenue</p>
          <p className="text-[18px] font-bold text-dark">₦{totalRev.toLocaleString()}</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <PiMagnifyingGlassBold size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input type="text" placeholder="Search rides..." className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark transition-all" />
        </div>
        <select className="px-3.5 py-2.5 rounded-lg border border-border bg-white text-[13px] text-dark focus:outline-none focus:border-dark">
          <option>All status</option>
          <option>Completed</option>
          <option>Active</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                {["ID", "Passenger", "Driver", "Route", "Fare", "Status", "Date", ""].map((h) => (
                  <th key={h} className={`py-3 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider ${h === "" ? "text-right" : "text-left"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockRides.map((ride, i) => {
                const status = statusMap[ride.status];
                return (
                  <tr key={ride.id} className={`hover:bg-surface-alt transition-colors ${i < mockRides.length - 1 ? "border-b border-border" : ""}`}>
                    <td className="py-3 px-4 text-[11px] font-mono text-text-muted">{ride.id}</td>
                    <td className="py-3 px-4 text-[12px] font-medium text-dark">{ride.passenger}</td>
                    <td className="py-3 px-4 text-[12px] text-dark">{ride.driver}</td>
                    <td className="py-3 px-4">
                      <p className="text-[11px] text-text-secondary truncate max-w-[160px]">
                        {ride.pickup.split(",")[0]} → {ride.destination.split(",")[0]}
                      </p>
                    </td>
                    <td className="py-3 px-4 text-[12px] font-bold text-dark">₦{ride.fare.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium ${status.style}`}>
                        <status.Icon size={9} /> {status.label}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-[11px] text-dark">{ride.date}</p>
                      <p className="text-[10px] text-text-muted">{ride.time}</p>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="p-1.5 rounded-md hover:bg-surface-alt text-text-muted hover:text-info transition-colors"><PiEyeBold size={14} /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
