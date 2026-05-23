"use client";

import { PiMagnifyingGlassBold, PiStarFill, PiCheckCircleFill, PiEyeBold, PiProhibitBold } from "react-icons/pi";
import { mockDrivers } from "@/lib/mock-data";

export default function AdminDriversPage() {
  return (
    <div>
      <h1 className="text-[22px] font-bold text-dark mb-1">Drivers</h1>
      <p className="text-[13px] text-text-secondary mb-6">{mockDrivers.length} registered drivers</p>

      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <PiMagnifyingGlassBold size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search drivers..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark transition-all"
          />
        </div>
        <select className="px-3.5 py-2.5 rounded-lg border border-border bg-white text-[13px] text-dark focus:outline-none focus:border-dark">
          <option>All</option>
          <option>Online</option>
          <option>Offline</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                {["Driver", "Vehicle", "Rating", "Trips", "Earnings", "Status", ""].map((h) => (
                  <th key={h} className={`py-3 px-4 text-[11px] font-semibold text-text-muted uppercase tracking-wider ${h === "" ? "text-right" : "text-left"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockDrivers.map((driver, i) => (
                <tr key={driver.id} className={`hover:bg-surface-alt transition-colors ${i < mockDrivers.length - 1 ? "border-b border-border" : ""}`}>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] font-bold text-primary">{driver.name.split(" ").map((n) => n[0]).join("")}</span>
                      </div>
                      <div>
                        <p className="text-[12px] font-medium text-dark">{driver.name}</p>
                        <p className="text-[10px] text-text-muted">{driver.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="text-[12px] text-dark">{driver.vehicle}</p>
                    <p className="text-[10px] text-text-muted">{driver.plate}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center gap-1 text-[12px] font-medium text-dark">
                      <PiStarFill size={10} className="text-primary fill-primary" /> {driver.rating}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-[12px] text-dark">{driver.trips.toLocaleString()}</td>
                  <td className="py-3.5 px-4 text-[12px] font-medium text-dark">₦{driver.earnings.toLocaleString()}</td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium ${
                      driver.status === "online" ? "bg-success-light text-success" : "bg-surface-alt text-text-muted"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${driver.status === "online" ? "bg-success" : "bg-text-muted"}`} />
                      {driver.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center justify-end gap-0.5">
                      <button className="p-1.5 rounded-md hover:bg-surface-alt text-text-muted hover:text-info transition-colors"><PiEyeBold size={14} /></button>
                      <button className="p-1.5 rounded-md hover:bg-success-light text-text-muted hover:text-success transition-colors"><PiCheckCircleFill size={14} /></button>
                      <button className="p-1.5 rounded-md hover:bg-danger-light text-text-muted hover:text-danger transition-colors"><PiProhibitBold size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
