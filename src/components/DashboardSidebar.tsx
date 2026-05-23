"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { PiMapPinBold, PiMapPinFill, PiNavigationArrowBold, PiNavigationArrowFill, PiClockBold, PiClockFill, PiSquaresFourBold, PiSquaresFourFill, PiCarBold, PiCarFill, PiWalletBold, PiWalletFill, PiUsersBold, PiUsersFill, PiChartBarBold, PiChartBarFill, PiGearSixBold, PiSignOutBold } from "react-icons/pi";
import type { IconType } from "react-icons";

interface NavItem { label: string; href: string; icon: IconType; activeIcon: IconType; }

const passengerNav: NavItem[] = [
  { label: "Book a Ride", href: "/passenger/book", icon: PiMapPinBold, activeIcon: PiMapPinFill },
  { label: "Live Tracking", href: "/passenger/tracking", icon: PiNavigationArrowBold, activeIcon: PiNavigationArrowFill },
  { label: "Ride History", href: "/passenger/history", icon: PiClockBold, activeIcon: PiClockFill },
];

const driverNav: NavItem[] = [
  { label: "Dashboard", href: "/driver/dashboard", icon: PiSquaresFourBold, activeIcon: PiSquaresFourFill },
  { label: "Ride Requests", href: "/driver/requests", icon: PiCarBold, activeIcon: PiCarFill },
  { label: "Earnings", href: "/driver/earnings", icon: PiWalletBold, activeIcon: PiWalletFill },
];

const adminNav: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: PiSquaresFourBold, activeIcon: PiSquaresFourFill },
  { label: "Drivers", href: "/admin/drivers", icon: PiCarBold, activeIcon: PiCarFill },
  { label: "Passengers", href: "/admin/passengers", icon: PiUsersBold, activeIcon: PiUsersFill },
  { label: "Rides", href: "/admin/rides", icon: PiChartBarBold, activeIcon: PiChartBarFill },
];

export default function DashboardSidebar({ role, userName }: { role: "passenger" | "driver" | "admin"; userName: string }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = role === "passenger" ? passengerNav : role === "driver" ? driverNav : adminNav;
  const roleLabel = role === "passenger" ? "Rider" : role === "driver" ? "Driver" : "Admin";
  const initials = userName.split(" ").map((n) => n[0]).join("");

  const sidebar = (
    <div className="flex flex-col h-full bg-white border-r border-border">
      <div className="h-[60px] flex items-center px-5 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="Taxi-Hoo" width={28} height={28} className="rounded-md" />
          <span className="text-[15px] font-bold text-dark tracking-tight">Taxi-<span className="text-primary">Hoo</span></span>
        </Link>
      </div>
      <div className="px-4 py-3.5 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
            <span className="text-[10px] font-bold text-primary">{initials}</span>
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-dark truncate">{userName}</p>
            <p className="text-[10px] text-text-muted">{roleLabel}</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-2.5 py-2.5 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                isActive ? "bg-dark text-white" : "text-text-secondary hover:bg-surface-alt hover:text-dark"
              }`}>
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-2.5 py-2.5 border-t border-border space-y-0.5">
        <Link href="#" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium text-text-secondary hover:bg-surface-alt hover:text-dark transition-all">
          <PiGearSixBold size={17} /> Settings
        </Link>
        <Link href="/" className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium text-danger hover:bg-danger-light transition-all">
          <PiSignOutBold size={17} /> Log out
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button className="lg:hidden fixed top-3 left-3 z-50 bg-white shadow-md rounded-lg p-2 border border-border" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <HiOutlineX size={18} /> : <HiOutlineMenu size={18} />}
      </button>
      {mobileOpen && <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setMobileOpen(false)} />}
      <aside className={`fixed top-0 left-0 h-full w-[230px] z-40 transition-transform lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {sidebar}
      </aside>
    </>
  );
}
