"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PiHouseBold, PiHouseFill,
  PiHeartBold, PiHeartFill,
  PiWalletBold, PiWalletFill,
  PiTagBold, PiTagFill,
  PiCarBold, PiCarFill,
  PiCurrencyDollarBold, PiCurrencyDollarFill,
  PiUserBold, PiUserFill,
  PiBellBold,
} from "react-icons/pi";

const navItems: Record<string, { label: string; href: string; icon: React.ReactNode; activeIcon: React.ReactNode }[]> = {
  passenger: [
    { label: "Home", href: "/passenger/book", icon: <PiHouseBold size={18} />, activeIcon: <PiHouseFill size={18} /> },
    { label: "Favourite", href: "/passenger/favourites", icon: <PiHeartBold size={18} />, activeIcon: <PiHeartFill size={18} /> },
    { label: "Wallet", href: "/passenger/payment", icon: <PiWalletBold size={18} />, activeIcon: <PiWalletFill size={18} /> },
    { label: "History", href: "/passenger/history", icon: <PiTagBold size={18} />, activeIcon: <PiTagFill size={18} /> },
    { label: "Profile", href: "/passenger/profile", icon: <PiUserBold size={18} />, activeIcon: <PiUserFill size={18} /> },
  ],
  driver: [
    { label: "Dashboard", href: "/driver/dashboard", icon: <PiHouseBold size={18} />, activeIcon: <PiHouseFill size={18} /> },
    { label: "Rides", href: "/driver/requests", icon: <PiCarBold size={18} />, activeIcon: <PiCarFill size={18} /> },
    { label: "Earnings", href: "/driver/earnings", icon: <PiCurrencyDollarBold size={18} />, activeIcon: <PiCurrencyDollarFill size={18} /> },
    { label: "Profile", href: "/driver/profile", icon: <PiUserBold size={18} />, activeIcon: <PiUserFill size={18} /> },
  ],
};

export default function DesktopTopNav({ role }: { role: "passenger" | "driver" }) {
  const pathname = usePathname();
  const items = navItems[role];

  return (
    <header className="hidden lg:flex items-center justify-between h-16 px-8 bg-white border-b border-zinc-100 flex-shrink-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.jpeg" alt="Taxi-Hoo" width={32} height={32} className="rounded-lg" />
        <span className="text-[15px] font-bold text-zinc-900 tracking-tight">
          Taxi-<span className="text-brand-500">Hoo</span>
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-1">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-50 text-brand-600"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              {isActive ? item.activeIcon : item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Right: Notifications + Avatar */}
      <div className="flex items-center gap-3">
        <Link
          href={role === "passenger" ? "/passenger/notifications" : "/driver/notifications"}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
        >
          <PiBellBold size={18} />
        </Link>
        <Link
          href={role === "passenger" ? "/passenger/profile" : "/driver/profile"}
          className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold"
        >
          LM
        </Link>
      </div>
    </header>
  );
}
