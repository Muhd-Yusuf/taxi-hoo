"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Car,
  Clock,
  DollarSign,
  MapPin,
  Navigation,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const passengerNav: NavItem[] = [
  { label: "Book a Ride", href: "/passenger/book", icon: MapPin },
  { label: "Live Tracking", href: "/passenger/tracking", icon: Navigation },
  { label: "Ride History", href: "/passenger/history", icon: Clock },
];

const driverNav: NavItem[] = [
  { label: "Dashboard", href: "/driver/dashboard", icon: LayoutDashboard },
  { label: "Ride Requests", href: "/driver/requests", icon: Car },
  { label: "Earnings", href: "/driver/earnings", icon: DollarSign },
];

const adminNav: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Drivers", href: "/admin/drivers", icon: Car },
  { label: "Passengers", href: "/admin/passengers", icon: Users },
  { label: "Rides", href: "/admin/rides", icon: BarChart3 },
];

interface DashboardSidebarProps {
  role: "passenger" | "driver" | "admin";
  userName: string;
}

export default function DashboardSidebar({ role, userName }: DashboardSidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = role === "passenger" ? passengerNav : role === "driver" ? driverNav : adminNav;
  const roleLabel = role === "passenger" ? "Rider" : role === "driver" ? "Driver" : "Admin";
  const initials = userName.split(" ").map((n) => n[0]).join("");

  const sidebar = (
    <div className="flex flex-col h-full bg-white border-r border-border">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="Taxi-Hoo" width={30} height={30} className="rounded-md" />
          <span className="text-[15px] font-bold text-dark tracking-tight">
            Taxi-<span className="text-primary">Hoo</span>
          </span>
        </Link>
      </div>

      {/* User */}
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
            <span className="text-[12px] font-bold text-primary">{initials}</span>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-dark truncate">{userName}</p>
            <p className="text-[11px] text-text-muted">{roleLabel}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                isActive
                  ? "bg-dark text-white"
                  : "text-text-secondary hover:bg-surface-alt hover:text-dark"
              }`}
            >
              <item.icon size={16} strokeWidth={isActive ? 2 : 1.5} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-3 border-t border-border space-y-0.5">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-text-secondary hover:bg-surface-alt hover:text-dark transition-all"
        >
          <Settings size={16} strokeWidth={1.5} />
          Settings
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium text-danger hover:bg-danger-light transition-all"
        >
          <LogOut size={16} strokeWidth={1.5} />
          Log out
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-md rounded-lg p-2 border border-border"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[240px] z-40 transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </aside>
    </>
  );
}
