"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  PiMapPinBold, PiMapPinFill,
  PiNavigationArrowBold, PiNavigationArrowFill,
  PiClockBold, PiClockFill,
  PiSquaresFourBold, PiSquaresFourFill,
  PiCarBold, PiCarFill,
  PiWalletBold, PiWalletFill,
  PiUsersBold, PiUsersFill,
  PiChartBarBold, PiChartBarFill,
  PiGearSixBold, PiSignOutBold,
} from "react-icons/pi";
import type { IconType } from "react-icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: IconType;
  activeIcon: IconType;
}

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

export default function DashboardSidebar({
  role,
  userName,
}: {
  role: "passenger" | "driver" | "admin";
  userName: string;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = role === "passenger" ? passengerNav : role === "driver" ? driverNav : adminNav;
  const roleLabel = role === "passenger" ? "Rider" : role === "driver" ? "Driver" : "Admin";
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("");

  const sidebar = (
    <div className="flex flex-col h-full bg-white border-r border-border">
      {/* Logo */}
      <div className="h-16 flex items-center px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpeg"
            alt="Taxi-Hoo"
            width={30}
            height={30}
            className="rounded-lg"
          />
          <span className="text-[15px] font-bold text-dark tracking-tight">
            Taxi-<span className="text-primary">Hoo</span>
          </span>
        </Link>
      </div>

      <Separator />

      {/* User Section */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-3">
          <Avatar size="lg" className="bg-primary/10">
            <AvatarFallback className="bg-primary/10 text-primary text-[11px] font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-dark truncate">{userName}</p>
            <Badge variant="secondary" className="mt-0.5 bg-primary/10 text-primary text-[10px] font-medium border-0">
              {roleLabel}
            </Badge>
          </div>
        </div>
      </div>

      <Separator />

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <Separator />
      <div className="px-3 py-3 space-y-1">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full justify-start gap-3 px-3 py-2.5 h-auto text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-xl"
          )}
        >
          <PiGearSixBold size={18} />
          Settings
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "w-full justify-start gap-3 px-3 py-2.5 h-auto text-[13px] font-medium text-danger hover:text-danger hover:bg-danger-light rounded-xl"
          )}
        >
          <PiSignOutBold size={18} />
          Log out
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-md rounded-xl border border-border"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
      </Button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] z-40 transition-transform duration-300 ease-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </aside>
    </>
  );
}
