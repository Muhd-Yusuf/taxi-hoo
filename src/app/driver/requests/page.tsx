"use client";

import { Navigation, Clock, CheckCircle2, XCircle, Phone } from "lucide-react";

const pendingRequests = [
  { id: "RQ001", passenger: "Grace Adekunle", pickup: "Maryland, Lagos", destination: "Yaba, Lagos", distance: "4.2 km", duration: "15 min", fare: 2500, time: "Just now" },
  { id: "RQ002", passenger: "David Obi", pickup: "Ikeja GRA, Lagos", destination: "Allen Avenue, Lagos", distance: "2.8 km", duration: "10 min", fare: 1800, time: "2 min ago" },
  { id: "RQ003", passenger: "Ngozi Eze", pickup: "Ajah, Lagos", destination: "Lekki Phase 1", distance: "6.5 km", duration: "22 min", fare: 3800, time: "5 min ago" },
];

const completedToday = [
  { id: "C001", passenger: "Sarah Johnson", route: "Lekki → Victoria Island", fare: 3500, time: "09:30 AM", rating: 5 },
  { id: "C002", passenger: "Mohammed Sani", route: "Surulere → Yaba", fare: 2200, time: "11:00 AM", rating: 4 },
  { id: "C003", passenger: "Fatima Ali", route: "Ikeja → Oshodi", fare: 1500, time: "12:45 PM", rating: 5 },
];

export default function RequestsPage() {
  return (
    <div>
      <h1 className="text-[22px] font-bold text-dark mb-1">Ride Requests</h1>
      <p className="text-[13px] text-text-secondary mb-6">Accept or decline incoming requests</p>

      {/* Pending */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <p className="text-[14px] font-semibold text-dark">Pending</p>
          <span className="text-[11px] font-bold text-dark bg-primary/20 px-1.5 py-0.5 rounded">
            {pendingRequests.length}
          </span>
        </div>

        <div className="space-y-3">
          {pendingRequests.map((req) => (
            <div key={req.id} className="bg-white rounded-xl border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[14px] font-semibold text-dark">{req.passenger}</p>
                  <p className="text-[11px] text-text-muted">{req.time}</p>
                </div>
                <p className="text-[18px] font-bold text-dark">₦{req.fare.toLocaleString()}</p>
              </div>

              <div className="flex items-center gap-2 text-[12px] text-text-secondary mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                <span className="truncate">{req.pickup}</span>
                <span className="text-text-muted">→</span>
                <div className="w-1.5 h-1.5 rounded-sm bg-primary" />
                <span className="truncate">{req.destination}</span>
              </div>

              <div className="flex items-center gap-3 mb-4 text-[11px] text-text-muted">
                <span className="flex items-center gap-1"><Navigation size={10} /> {req.distance}</span>
                <span className="flex items-center gap-1"><Clock size={10} /> {req.duration}</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-dark text-white text-[12px] font-semibold py-2.5 rounded-lg hover:bg-dark-light transition-colors">
                  <CheckCircle2 size={14} /> Accept
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-surface-alt text-text-secondary text-[12px] font-medium py-2.5 rounded-lg border border-border hover:bg-danger-light hover:text-danger hover:border-danger/20 transition-colors">
                  <XCircle size={14} /> Decline
                </button>
                <button className="flex items-center justify-center bg-surface-alt text-text-muted px-3 py-2.5 rounded-lg border border-border hover:bg-info-light hover:text-info hover:border-info/20 transition-colors">
                  <Phone size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed today */}
      <div>
        <p className="text-[14px] font-semibold text-dark mb-4">Completed today</p>
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          {completedToday.map((ride, i) => (
            <div key={ride.id} className={`flex items-center justify-between p-4 ${i < completedToday.length - 1 ? "border-b border-border" : ""}`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-success-light flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-success" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-dark">{ride.passenger}</p>
                  <p className="text-[11px] text-text-muted">{ride.route}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[13px] font-bold text-dark">₦{ride.fare.toLocaleString()}</p>
                <p className="text-[10px] text-text-muted">{ride.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
