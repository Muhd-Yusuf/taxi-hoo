"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PiSquaresFourBold, PiSquaresFourFill,
  PiCarBold, PiCarFill,
  PiUsersBold, PiUsersFill,
  PiChartBarBold, PiChartBarFill,
  PiGearSixBold, PiSignOutBold,
  PiCaretLeftBold,
  PiListBold,
} from "react-icons/pi";
import type { IconType } from "react-icons";

interface NavItem {
  label: string;
  href: string;
  icon: IconType;
  activeIcon: IconType;
}

const adminNav: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: PiSquaresFourBold, activeIcon: PiSquaresFourFill },
  { label: "Drivers", href: "/admin/drivers", icon: PiCarBold, activeIcon: PiCarFill },
  { label: "Passengers", href: "/admin/passengers", icon: PiUsersBold, activeIcon: PiUsersFill },
  { label: "Rides", href: "/admin/rides", icon: PiChartBarBold, activeIcon: PiChartBarFill },
];

export default function DashboardSidebar({
  userName,
  collapsed,
  onToggle,
}: {
  role: "admin";
  userName: string;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white border-r border-zinc-200 z-40 flex flex-col transition-all duration-300 ease-in-out ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      {/* Logo + collapse toggle */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-100 flex-shrink-0">
        <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
          <Image
            src="/logo.jpeg"
            alt="Taxi-Hoo"
            width={32}
            height={32}
            className="rounded-lg flex-shrink-0"
          />
          {!collapsed && (
            <span className="text-[15px] font-bold text-zinc-900 tracking-tight whitespace-nowrap">
              Taxi-<span className="text-emerald-500">Hoo</span>
            </span>
          )}
        </Link>
        <button
          onClick={onToggle}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors flex-shrink-0"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PiListBold size={18} />
          ) : (
            <PiCaretLeftBold size={16} />
          )}
        </button>
      </div>

      {/* User section */}
      <div className={`px-4 py-4 border-b border-zinc-100 flex-shrink-0 ${collapsed ? "flex justify-center" : ""}`}>
        <div className={`flex items-center ${collapsed ? "" : "gap-3"}`}>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
            {initials}
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900 truncate">{userName}</p>
              <p className="text-[11px] text-emerald-600 font-medium">Admin</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {adminNav.map((item) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 rounded-xl transition-all ${
                collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2.5"
              } ${
                isActive
                  ? "bg-emerald-50 text-emerald-600 font-semibold"
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!collapsed && (
                <span className="text-[13px] font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-3 border-t border-zinc-100 space-y-1 flex-shrink-0">
        <Link
          href="#"
          title={collapsed ? "Settings" : undefined}
          className={`flex items-center gap-3 rounded-xl text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors ${
            collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2.5"
          }`}
        >
          <PiGearSixBold size={20} className="flex-shrink-0" />
          {!collapsed && <span className="text-[13px] font-medium">Settings</span>}
        </Link>
        <Link
          href="/"
          title={collapsed ? "Log out" : undefined}
          className={`flex items-center gap-3 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors ${
            collapsed ? "justify-center px-0 py-2.5" : "px-3 py-2.5"
          }`}
        >
          <PiSignOutBold size={20} className="flex-shrink-0" />
          {!collapsed && <span className="text-[13px] font-medium">Log out</span>}
        </Link>
      </div>
    </aside>
  );
}
