"use client";

import { MapPin, Navigation, Phone, MessageSquare, Star, Car, Clock, Shield } from "lucide-react";

export default function TrackingPage() {
  return (
    <div>
      <h1 className="text-[22px] font-bold text-dark mb-1">Live Tracking</h1>
      <p className="text-[13px] text-text-secondary mb-6">Track your driver in real-time</p>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-border overflow-hidden h-[500px] lg:h-[600px] relative">
            <div className="absolute inset-0 bg-[#E8F4E8]">
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }} />

              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-white/80" />
              <div className="absolute top-0 bottom-0 left-1/3 w-[3px] bg-white/80" />

              {/* Pickup */}
              <div className="absolute top-[35%] left-[25%] flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-dark flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-success" />
                </div>
                <div className="mt-1.5 bg-white rounded-md px-2.5 py-1 shadow-sm border border-border">
                  <p className="text-[10px] font-semibold text-dark">Lekki Phase 1</p>
                </div>
              </div>

              {/* Destination */}
              <div className="absolute bottom-[25%] right-[20%] flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-dark flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
                </div>
                <div className="mt-1.5 bg-white rounded-md px-2.5 py-1 shadow-sm border border-border">
                  <p className="text-[10px] font-semibold text-dark">Victoria Island</p>
                </div>
              </div>

              {/* Driver */}
              <div className="absolute top-[40%] left-[36%]">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-dark flex items-center justify-center shadow-xl">
                    <Car size={16} className="text-primary" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-success border-2 border-white" />
                </div>
              </div>

              {/* Route */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M 195 225 C 280 210, 350 300, 520 400" stroke="#0C0C0C" strokeWidth="2.5" strokeDasharray="6 4" fill="none" opacity="0.5" />
                <path d="M 195 225 C 230 220, 260 240, 280 260" stroke="#0D9B52" strokeWidth="2.5" fill="none" />
              </svg>
            </div>

            {/* Status bar */}
            <div className="absolute top-4 left-4 right-4 bg-dark rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <p className="text-[13px] font-medium text-white">Driver is on the way</p>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-lighter rounded-lg px-3 py-1.5">
                <Clock size={12} className="text-primary" />
                <p className="text-[13px] font-bold text-primary">3 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="space-y-4">
          {/* Driver */}
          <div className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center">
                <span className="text-[12px] font-bold text-primary">JO</span>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-dark">James Okafor</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Star size={12} className="text-primary fill-primary" />
                  <span className="text-[12px] text-text-secondary">4.8 · 1,247 trips</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 bg-surface-alt rounded-lg mb-4">
              <Car size={14} className="text-text-muted" />
              <div>
                <p className="text-[12px] font-medium text-dark">Toyota Camry 2020 · Silver</p>
                <p className="text-[11px] text-text-muted">ABC-123-KD</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 bg-dark text-white text-[12px] font-medium py-2.5 rounded-lg hover:bg-dark-light transition-colors">
                <Phone size={13} /> Call
              </button>
              <button className="flex items-center justify-center gap-1.5 bg-surface-alt text-dark text-[12px] font-medium py-2.5 rounded-lg border border-border hover:bg-surface-hover transition-colors">
                <MessageSquare size={13} /> Message
              </button>
            </div>
          </div>

          {/* Trip */}
          <div className="bg-white rounded-xl border border-border p-5">
            <p className="text-[13px] font-semibold text-dark mb-4">Trip details</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                <div>
                  <p className="text-[11px] text-text-muted">Pickup</p>
                  <p className="text-[13px] font-medium text-dark">Lekki Phase 1, Lagos</p>
                </div>
              </div>
              <div className="ml-2.5 border-l border-dashed border-border h-3" />
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-sm bg-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-text-muted">Drop-off</p>
                  <p className="text-[13px] font-medium text-dark">Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-border text-center">
              <div>
                <p className="text-[16px] font-bold text-dark">8.2</p>
                <p className="text-[11px] text-text-muted">km</p>
              </div>
              <div>
                <p className="text-[16px] font-bold text-dark">25</p>
                <p className="text-[11px] text-text-muted">min</p>
              </div>
              <div>
                <p className="text-[16px] font-bold text-dark">₦3,500</p>
                <p className="text-[11px] text-text-muted">fare</p>
              </div>
            </div>
          </div>

          {/* Safety */}
          <div className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={14} className="text-success" />
              <p className="text-[13px] font-semibold text-dark">Safety</p>
            </div>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-2.5 bg-surface-alt rounded-lg text-left hover:bg-surface-hover transition-colors">
                <span className="text-[12px] text-dark">Share trip status</span>
                <span className="text-[11px] text-text-muted">Share →</span>
              </button>
              <button className="w-full flex items-center justify-between p-2.5 bg-danger-light rounded-lg text-left">
                <span className="text-[12px] text-danger font-medium">Emergency SOS</span>
                <Phone size={12} className="text-danger" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
