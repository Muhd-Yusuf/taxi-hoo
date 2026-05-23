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
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Drivers", href: "/admin/drivers", icon: Car },
  { label: "Passengers", href: "/admin/passengers", icon: Users },
  { label: "Rides", href: "/admin/rides", icon: BarChart3 },
];

interface DashboardSidebarProps {
  role: "passenger" | "driver" | "admin";
  userName: string;
}

export default function DashboardSidebar({
  role,
  userName,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems =
    role === "passenger"
      ? passengerNav
      : role === "driver"
      ? driverNav
      : adminNav;

  const roleLabel =
    role === "passenger"
      ? "Passenger"
      : role === "driver"
      ? "Driver"
      : "Admin";

  const sidebar = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Taxi-Hoo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-dark">
            TAXI-<span className="text-primary">HOO</span>
          </span>
        </Link>
      </div>

      {/* User Info */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="font-semibold text-sm text-dark">{userName}</p>
            <p className="text-xs text-text-muted">{roleLabel}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-dark shadow-md shadow-primary/25"
                  : "text-text-secondary hover:bg-surface-alt hover:text-dark"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-border space-y-1">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-text-secondary hover:bg-surface-alt hover:text-dark transition-all"
        >
          <Settings size={18} />
          Settings
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-danger hover:bg-danger-light transition-all"
        >
          <LogOut size={18} />
          Sign Out
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-lg rounded-xl p-2.5 border border-border"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-border z-40 transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </aside>
    </>
  );
}
