"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiMapPinBold, PiMapPinFill, PiNavigationArrowBold, PiNavigationArrowFill, PiClockBold, PiClockFill, PiBellBold, PiBellFill, PiSquaresFourBold, PiSquaresFourFill, PiCarBold, PiCarFill, PiWalletBold, PiWalletFill, PiUsersBold, PiUsersFill, PiChartBarBold, PiChartBarFill } from "react-icons/pi";
import type { IconType } from "react-icons";

interface NavItem { label: string; href: string; icon: IconType; activeIcon: IconType; }

const passengerNav: NavItem[] = [
  { label: "Book", href: "/passenger/book", icon: PiMapPinBold, activeIcon: PiMapPinFill },
  { label: "Tracking", href: "/passenger/tracking", icon: PiNavigationArrowBold, activeIcon: PiNavigationArrowFill },
  { label: "History", href: "/passenger/history", icon: PiClockBold, activeIcon: PiClockFill },
  { label: "Alerts", href: "/passenger/notifications", icon: PiBellBold, activeIcon: PiBellFill },
];

const driverNav: NavItem[] = [
  { label: "Home", href: "/driver/dashboard", icon: PiSquaresFourBold, activeIcon: PiSquaresFourFill },
  { label: "Requests", href: "/driver/requests", icon: PiCarBold, activeIcon: PiCarFill },
  { label: "Earnings", href: "/driver/earnings", icon: PiWalletBold, activeIcon: PiWalletFill },
  { label: "Alerts", href: "/driver/notifications", icon: PiBellBold, activeIcon: PiBellFill },
];

const adminNav: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: PiSquaresFourBold, activeIcon: PiSquaresFourFill },
  { label: "Drivers", href: "/admin/drivers", icon: PiCarBold, activeIcon: PiCarFill },
  { label: "Riders", href: "/admin/passengers", icon: PiUsersBold, activeIcon: PiUsersFill },
  { label: "Rides", href: "/admin/rides", icon: PiChartBarBold, activeIcon: PiChartBarFill },
];

export default function MobileBottomNav({ role }: { role: "passenger" | "driver" | "admin" }) {
  const pathname = usePathname();
  const items = role === "passenger" ? passengerNav : role === "driver" ? driverNav : adminNav;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-[60px] px-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <Link key={item.href} href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors min-w-[56px] ${isActive ? "text-dark" : "text-text-muted"}`}>
              <Icon size={20} />
              <span className={`text-[10px] ${isActive ? "font-semibold" : "font-medium"}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
