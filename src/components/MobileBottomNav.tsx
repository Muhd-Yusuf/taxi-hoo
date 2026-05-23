"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiMapPinBold,
  PiMapPinFill,
  PiClockBold,
  PiClockFill,
  PiBellBold,
  PiBellFill,
  PiHouseBold,
  PiHouseFill,
  PiCarBold,
  PiCarFill,
  PiCurrencyNgnBold,
  PiCurrencyNgnFill,
  PiUsersBold,
  PiUsersFill,
  PiChartBarBold,
  PiChartBarFill,
  PiUserBold,
  PiUserFill,
  PiNavigationArrowBold,
  PiNavigationArrowFill,
} from "react-icons/pi";

type Role = "passenger" | "driver" | "admin";

const navItems: Record<Role, { label: string; href: string; icon: React.ReactNode; activeIcon: React.ReactNode }[]> = {
  passenger: [
    { label: "Home", href: "/passenger/book", icon: <PiMapPinBold size={22} />, activeIcon: <PiMapPinFill size={22} /> },
    { label: "Activity", href: "/passenger/history", icon: <PiClockBold size={22} />, activeIcon: <PiClockFill size={22} /> },
    { label: "Alerts", href: "/passenger/notifications", icon: <PiBellBold size={22} />, activeIcon: <PiBellFill size={22} /> },
    { label: "Profile", href: "/passenger/profile", icon: <PiUserBold size={22} />, activeIcon: <PiUserFill size={22} /> },
  ],
  driver: [
    { label: "Home", href: "/driver/dashboard", icon: <PiHouseBold size={22} />, activeIcon: <PiHouseFill size={22} /> },
    { label: "Rides", href: "/driver/requests", icon: <PiCarBold size={22} />, activeIcon: <PiCarFill size={22} /> },
    { label: "Earnings", href: "/driver/earnings", icon: <PiCurrencyNgnBold size={22} />, activeIcon: <PiCurrencyNgnFill size={22} /> },
    { label: "Alerts", href: "/driver/notifications", icon: <PiBellBold size={22} />, activeIcon: <PiBellFill size={22} /> },
  ],
  admin: [
    { label: "Home", href: "/admin/dashboard", icon: <PiChartBarBold size={22} />, activeIcon: <PiChartBarFill size={22} /> },
    { label: "Drivers", href: "/admin/drivers", icon: <PiCarBold size={22} />, activeIcon: <PiCarFill size={22} /> },
    { label: "Riders", href: "/admin/passengers", icon: <PiUsersBold size={22} />, activeIcon: <PiUsersFill size={22} /> },
    { label: "Rides", href: "/admin/rides", icon: <PiNavigationArrowBold size={22} />, activeIcon: <PiNavigationArrowFill size={22} /> },
  ],
};

export default function MobileBottomNav({ role }: { role: Role }) {
  const pathname = usePathname();
  const items = navItems[role];

  return (
    <nav className="flex-shrink-0 bg-white/95 backdrop-blur-md border-t border-zinc-100 safe-bottom z-40">
      <div className="flex items-stretch h-16">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center justify-center gap-0.5 relative active:bg-zinc-50 transition-colors"
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-emerald-500" />
              )}
              <span className={isActive ? "text-emerald-600" : "text-zinc-400"}>
                {isActive ? item.activeIcon : item.icon}
              </span>
              <span
                className={`text-[10px] font-medium ${
                  isActive ? "text-emerald-600" : "text-zinc-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
