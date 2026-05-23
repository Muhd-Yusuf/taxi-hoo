"use client";

import {
  MapPin,
  Navigation,
  Phone,
  MessageSquare,
  Star,
  Car,
  Clock,
  Shield,
  User,
} from "lucide-react";

export default function TrackingPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-dark">Live Tracking</h1>
        <p className="text-text-secondary text-sm mt-1">
          Track your driver in real-time
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-border overflow-hidden h-[600px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Pickup */}
              <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shadow-lg">
                  <MapPin size={16} className="text-white" />
                </div>
                <div className="mt-1 bg-white rounded-lg px-2 py-1 shadow text-xs font-medium">
                  Lekki Phase 1
                </div>
              </div>

              {/* Destination */}
              <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Navigation size={16} className="text-dark" />
                </div>
                <div className="mt-1 bg-white rounded-lg px-2 py-1 shadow text-xs font-medium">
                  Victoria Island
                </div>
              </div>

              {/* Driver - animated */}
              <div className="absolute top-[38%] left-[35%]">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center shadow-xl animate-bounce">
                    <Car size={18} className="text-primary" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-success border-2 border-white" />
                </div>
              </div>

              {/* Route */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 200 200 C 280 190, 320 280, 450 400"
                  stroke="#F5B800"
                  strokeWidth="3"
                  strokeDasharray="8 4"
                  fill="none"
                />
                <path
                  d="M 200 200 C 240 195, 260 220, 280 240"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            {/* Status bar */}
            <div className="absolute top-4 left-4 right-4 bg-dark/90 backdrop-blur rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <p className="text-sm font-medium">Driver is on the way</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-primary" />
                  <p className="text-sm font-bold text-primary">3 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Info */}
        <div className="space-y-5">
          {/* Driver Card */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <User size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-dark">James Okafor</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <Star size={14} className="text-primary fill-primary" />
                  <span className="text-sm text-text-secondary">
                    4.8 · 1,247 trips
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-surface-alt rounded-xl mb-4">
              <Car size={18} className="text-text-muted" />
              <div>
                <p className="text-sm font-medium text-dark">
                  Toyota Camry 2020
                </p>
                <p className="text-xs text-text-muted">
                  Silver · ABC-123-KD
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-dark font-medium py-3 rounded-xl transition-all text-sm">
                <Phone size={16} />
                Call
              </button>
              <button className="flex items-center justify-center gap-2 bg-surface-alt hover:bg-border text-dark font-medium py-3 rounded-xl transition-all text-sm">
                <MessageSquare size={16} />
                Message
              </button>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-semibold text-dark mb-4">Trip Details</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Pickup</p>
                  <p className="text-sm font-medium text-dark">
                    Lekki Phase 1, Lagos
                  </p>
                </div>
              </div>

              <div className="ml-3 border-l-2 border-dashed border-border h-4" />

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Destination</p>
                  <p className="text-sm font-medium text-dark">
                    Victoria Island, Lagos
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-border grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-dark">8.2</p>
                <p className="text-xs text-text-muted">km</p>
              </div>
              <div>
                <p className="text-lg font-bold text-dark">25</p>
                <p className="text-xs text-text-muted">min</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary">₦3,500</p>
                <p className="text-xs text-text-muted">fare</p>
              </div>
            </div>
          </div>

          {/* Safety */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <Shield size={18} className="text-success" />
              <h3 className="font-semibold text-dark text-sm">
                Safety Features
              </h3>
            </div>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-surface-alt rounded-xl hover:bg-border-light transition-colors">
                <span className="text-sm text-dark">Share trip status</span>
                <span className="text-xs text-primary font-medium">
                  Share
                </span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-danger-light rounded-xl hover:bg-danger/10 transition-colors">
                <span className="text-sm text-danger font-medium">
                  Emergency SOS
                </span>
                <Phone size={14} className="text-danger" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
