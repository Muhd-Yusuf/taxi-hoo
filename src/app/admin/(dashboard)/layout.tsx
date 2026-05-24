"use client";

import { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { PiListBold } from "react-icons/pi";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="h-[100dvh] flex bg-zinc-50">
      <DashboardSidebar
        role="admin"
        userName="Admin User"
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* Mobile header with hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-zinc-100 z-30 flex items-center px-4 gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          aria-label="Open sidebar"
        >
          <PiListBold size={22} />
        </button>
        <span className="text-[15px] font-bold text-zinc-900 tracking-tight">
          Taxi-<span className="text-brand-500">Hoo</span>
        </span>
      </div>

      <main
        className={`flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300 pt-14 lg:pt-0 ${
          collapsed ? "lg:ml-[72px]" : "lg:ml-[260px]"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
