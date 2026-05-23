"use client";

import {
  PiMapPinBold,
  PiNavigationArrowBold,
  PiPhoneBold,
  PiChatCircleBold,
  PiStarFill,
  PiCarFill,
  PiClockBold,
  PiShieldCheckBold,
  PiShareNetworkBold,
  PiWarningOctagonBold,
} from "react-icons/pi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function TrackingPage() {
  return (
    <div>
      <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-2">
        Live Tracking
      </h1>
      <p className="text-[14px] text-text-secondary mb-8">
        Track your driver in real-time
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden h-[420px] sm:h-[500px] lg:h-[600px] relative p-0">
            <div
              className="absolute inset-0 bg-[#f0f4f0]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.04) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            >
              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-white/80" />
              <div className="absolute top-0 bottom-0 left-1/3 w-[3px] bg-white/80" />
              <div className="absolute top-[20%] left-[10%] right-[30%] h-[2px] bg-white/60 rotate-[15deg]" />
              <div className="absolute bottom-[30%] left-[40%] right-[10%] h-[2px] bg-white/50 -rotate-[10deg]" />

              {/* Pickup marker */}
              <div className="absolute top-[35%] left-[25%] flex flex-col items-center z-10">
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center shadow-lg ring-4 ring-dark/10">
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <div className="mt-2 bg-white rounded-lg px-3 py-1.5 shadow-md border border-border">
                  <p className="text-[11px] font-semibold text-dark">Lekki Phase 1</p>
                </div>
              </div>

              {/* Destination marker */}
              <div className="absolute bottom-[25%] right-[20%] flex flex-col items-center z-10">
                <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center shadow-lg ring-4 ring-dark/10">
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                </div>
                <div className="mt-2 bg-white rounded-lg px-3 py-1.5 shadow-md border border-border">
                  <p className="text-[11px] font-semibold text-dark">Victoria Island</p>
                </div>
              </div>

              {/* Driver car */}
              <div className="absolute top-[40%] left-[36%] z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center shadow-xl ring-4 ring-dark/10">
                    <PiCarFill size={18} className="text-primary" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-success border-2 border-white animate-pulse" />
                </div>
              </div>

              {/* Route lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Remaining route (dashed) */}
                <path
                  d="M 280 260 C 350 300, 400 340, 520 400"
                  stroke="#09090B"
                  strokeWidth="2.5"
                  strokeDasharray="8 5"
                  fill="none"
                  opacity="0.35"
                />
                {/* Completed route (solid green) */}
                <path
                  d="M 195 225 C 230 220, 255 240, 280 260"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Status bar overlay */}
            <Card className="absolute top-4 left-4 right-4 z-20 bg-dark/95 backdrop-blur-sm shadow-lg p-0 ring-0">
              <CardContent className="flex items-center justify-between px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                  <p className="text-[14px] font-medium text-white">Driver is on the way</p>
                </div>
                <Badge className="bg-dark-lighter text-primary border-0 gap-2 px-4 py-2 rounded-full">
                  <PiClockBold size={13} />
                  <span className="font-bold">3 min</span>
                </Badge>
              </CardContent>
            </Card>
          </Card>
        </div>

        {/* Info panel */}
        <div className="space-y-6">
          {/* Driver card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                  <span className="text-[14px] font-bold text-primary">JO</span>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] font-semibold text-dark">James Okafor</p>
                  <div className="flex items-center gap-2 mt-1">
                    <PiStarFill size={13} className="text-primary fill-primary" />
                    <span className="text-[13px] text-text-secondary">4.8</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-[13px] text-text-muted">1,247 trips</span>
                  </div>
                </div>
              </div>

              <Card className="bg-surface-alt ring-0 border-0 mb-5">
                <CardContent className="flex items-center gap-3 p-3.5">
                  <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center flex-shrink-0">
                    <PiCarFill size={14} className="text-text-muted" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-dark">Toyota Camry 2020 · Silver</p>
                    <p className="text-[12px] text-text-muted">ABC-123-KD</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" className="bg-dark hover:bg-dark-light text-white h-10 rounded-xl gap-2 text-[13px] font-medium">
                  <PiPhoneBold size={14} /> Call
                </Button>
                <Button variant="outline" size="lg" className="h-10 rounded-xl gap-2 text-[13px] font-medium">
                  <PiChatCircleBold size={14} /> Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Trip details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] font-semibold text-dark">Trip details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  </div>
                  <div>
                    <p className="text-[12px] text-text-muted font-medium">Pickup</p>
                    <p className="text-[14px] font-medium text-dark mt-0.5">Lekki Phase 1, Lagos</p>
                  </div>
                </div>
                <div className="ml-3 border-l-2 border-dashed border-border h-5" />
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-primary" />
                  </div>
                  <div>
                    <p className="text-[12px] text-text-muted font-medium">Drop-off</p>
                    <p className="text-[14px] font-medium text-dark mt-0.5">Victoria Island, Lagos</p>
                  </div>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="grid grid-cols-3 gap-4 text-center">
                <Card className="ring-0 border-0 bg-surface-alt p-0">
                  <CardContent className="py-3 px-2">
                    <p className="text-[20px] font-bold text-dark">8.2</p>
                    <p className="text-[12px] text-text-muted mt-0.5">km</p>
                  </CardContent>
                </Card>
                <Card className="ring-0 border-0 bg-surface-alt p-0">
                  <CardContent className="py-3 px-2">
                    <p className="text-[20px] font-bold text-dark">25</p>
                    <p className="text-[12px] text-text-muted mt-0.5">min</p>
                  </CardContent>
                </Card>
                <Card className="ring-0 border-0 bg-surface-alt p-0">
                  <CardContent className="py-3 px-2">
                    <p className="text-[20px] font-bold text-dark">₦3,500</p>
                    <p className="text-[12px] text-text-muted mt-0.5">fare</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Safety */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2.5 text-[15px] font-semibold text-dark">
                <PiShieldCheckBold size={16} className="text-success" />
                Safety
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-between h-auto p-3.5 bg-surface-alt rounded-xl hover:bg-surface-hover"
              >
                <div className="flex items-center gap-2.5">
                  <PiShareNetworkBold size={14} className="text-text-muted" />
                  <span className="text-[13px] font-medium text-dark">Share trip status</span>
                </div>
                <span className="text-[12px] text-text-muted">Share &rarr;</span>
              </Button>
              <Button
                variant="destructive"
                className="w-full justify-between h-auto p-3.5 rounded-xl"
              >
                <div className="flex items-center gap-2.5">
                  <PiWarningOctagonBold size={14} />
                  <span className="text-[13px] font-semibold">Emergency SOS</span>
                </div>
                <PiPhoneBold size={14} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
