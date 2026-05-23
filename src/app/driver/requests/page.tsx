"use client";

import {
  MapPin,
  Navigation,
  Clock,
  DollarSign,
  User,
  CheckCircle2,
  XCircle,
  Phone,
} from "lucide-react";

const pendingRequests = [
  {
    id: "RQ001",
    passenger: "Grace Adekunle",
    pickup: "Maryland, Lagos",
    destination: "Yaba, Lagos",
    distance: "4.2 km",
    duration: "15 min",
    fare: 2500,
    time: "Just now",
  },
  {
    id: "RQ002",
    passenger: "David Obi",
    pickup: "Ikeja GRA, Lagos",
    destination: "Allen Avenue, Lagos",
    distance: "2.8 km",
    duration: "10 min",
    fare: 1800,
    time: "2 min ago",
  },
  {
    id: "RQ003",
    passenger: "Ngozi Eze",
    pickup: "Ajah, Lagos",
    destination: "Lekki Phase 1, Lagos",
    distance: "6.5 km",
    duration: "22 min",
    fare: 3800,
    time: "5 min ago",
  },
];

const completedToday = [
  {
    id: "C001",
    passenger: "Sarah Johnson",
    route: "Lekki → Victoria Island",
    fare: 3500,
    time: "09:30 AM",
    rating: 5,
  },
  {
    id: "C002",
    passenger: "Mohammed Sani",
    route: "Surulere → Yaba",
    fare: 2200,
    time: "11:00 AM",
    rating: 4,
  },
  {
    id: "C003",
    passenger: "Fatima Ali",
    route: "Ikeja → Oshodi",
    fare: 1500,
    time: "12:45 PM",
    rating: 5,
  },
];

export default function RequestsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-dark">Ride Requests</h1>
        <p className="text-text-secondary text-sm mt-1">
          Accept or decline incoming ride requests
        </p>
      </div>

      {/* Pending Requests */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <h2 className="text-lg font-semibold text-dark">
            Pending Requests
          </h2>
          <span className="bg-primary text-dark text-xs font-bold px-2 py-0.5 rounded-full ml-1">
            {pendingRequests.length}
          </span>
        </div>

        <div className="space-y-4">
          {pendingRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-2xl border border-border p-5 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
                    <User size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{req.passenger}</p>
                    <p className="text-xs text-text-muted">{req.time}</p>
                  </div>
                </div>
                <span className="text-xl font-bold text-primary">
                  ₦{req.fare.toLocaleString()}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-success" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Pickup</p>
                    <p className="text-sm font-medium text-dark">
                      {req.pickup}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Destination</p>
                    <p className="text-sm font-medium text-dark">
                      {req.destination}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1">
                  <Navigation size={12} />
                  {req.distance}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {req.duration}
                </span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-dark font-bold py-3 rounded-xl transition-all">
                  <CheckCircle2 size={18} />
                  Accept
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-surface-alt hover:bg-danger-light text-text-secondary hover:text-danger font-medium py-3 rounded-xl transition-all border border-border">
                  <XCircle size={18} />
                  Decline
                </button>
                <button className="flex items-center justify-center gap-2 bg-surface-alt hover:bg-info-light text-text-secondary hover:text-info px-4 py-3 rounded-xl transition-all border border-border">
                  <Phone size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Today */}
      <div>
        <h2 className="text-lg font-semibold text-dark mb-4">
          Completed Today
        </h2>
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="divide-y divide-border">
            {completedToday.map((ride) => (
              <div
                key={ride.id}
                className="flex items-center justify-between p-4 hover:bg-surface-alt transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-success-light flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-dark text-sm">
                      {ride.passenger}
                    </p>
                    <p className="text-xs text-text-muted">{ride.route}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: ride.rating }).map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full bg-primary"
                      />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-dark text-sm">
                      ₦{ride.fare.toLocaleString()}
                    </p>
                    <p className="text-xs text-text-muted">{ride.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
