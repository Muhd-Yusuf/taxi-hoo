"use client";
import MobileBottomNav from "@/components/MobileBottomNav";
import DesktopTopNav from "@/components/DesktopTopNav";

export default function PassengerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100dvh] flex flex-col bg-white">
      <DesktopTopNav role="passenger" />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">{children}</main>
      <MobileBottomNav role="passenger" />
    </div>
  );
}
