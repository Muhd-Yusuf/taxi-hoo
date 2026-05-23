"use client";

import { PiMagnifyingGlassBold, PiEyeBold, PiProhibitBold, PiEnvelopeSimpleBold } from "react-icons/pi";
import { mockPassengers } from "@/lib/mock-data";

export default function AdminPassengersPage() {
  return (
    <div>
      <h1 className="text-[22px] font-bold text-dark mb-1">Passengers</h1>
      <p className="text-[13px] text-text-secondary mb-6">{mockPassengers.length} registered</p>

      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <PiMagnifyingGlassBold size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search passengers..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark transition-all"
          />
        </div>
        <select className="px-3.5 py-2.5 rounded-lg border border-border bg-white text-[13px] text-dark focus:outline-none focus:border-dark">
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {mockPassengers.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-border p-4 hover:border-text-muted/30 transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">{p.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-dark">{p.name}</p>
                  <p className="text-[10px] text-text-muted">{p.id}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                p.status === "active" ? "bg-success-light text-success" : "bg-surface-alt text-text-muted"
              }`}>
                {p.status}
              </span>
            </div>

            <div className="space-y-1.5 mb-3 text-[11px] text-text-secondary">
              <div className="flex items-center gap-1.5"><PiEnvelopeSimpleBold size={11} className="text-text-muted" /> {p.email}</div>
              <p>{p.totalTrips} trips · Joined {p.joined}</p>
            </div>

            <div className="flex items-center justify-end gap-0.5 pt-3 border-t border-border">
              <button className="p-1.5 rounded-md hover:bg-surface-alt text-text-muted hover:text-info transition-colors"><PiEyeBold size={14} /></button>
              <button className="p-1.5 rounded-md hover:bg-danger-light text-text-muted hover:text-danger transition-colors"><PiProhibitBold size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
