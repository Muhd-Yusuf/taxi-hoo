"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Navigation, Clock, Bell, User, type LucideIcon, LayoutDashboard, Car, DollarSign, Users, BarChart3 } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const passengerNav: NavItem[] = [
  { label: "Book", href: "/passenger/book", icon: MapPin },
  { label: "Tracking", href: "/passenger/tracking", icon: Navigation },
  { label: "History", href: "/passenger/history", icon: Clock },
  { label: "Alerts", href: "/passenger/notifications", icon: Bell },
];

const driverNav: NavItem[] = [
  { label: "Home", href: "/driver/dashboard", icon: LayoutDashboard },
  { label: "Requests", href: "/driver/requests", icon: Car },
  { label: "Earnings", href: "/driver/earnings", icon: DollarSign },
  { label: "Alerts", href: "/driver/notifications", icon: Bell },
];

const adminNav: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Drivers", href: "/admin/drivers", icon: Car },
  { label: "Riders", href: "/admin/passengers", icon: Users },
  { label: "Rides", href: "/admin/rides", icon: BarChart3 },
];

export default function MobileBottomNav({ role }: { role: "passenger" | "driver" | "admin" }) {
  const pathname = usePathname();
  const items = role === "passenger" ? passengerNav : role === "driver" ? driverNav : adminNav;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors min-w-[60px] ${
                isActive ? "text-dark" : "text-text-muted"
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              <span className={`text-[10px] ${isActive ? "font-semibold" : "font-medium"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
