"use client";

import { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-[100dvh] flex bg-zinc-50">
      <DashboardSidebar
        role="admin"
        userName="Admin User"
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />
      <main
        className="flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300"
        style={{ marginLeft: collapsed ? 72 : 260 }}
      >
        {children}
      </main>
    </div>
  );
}
