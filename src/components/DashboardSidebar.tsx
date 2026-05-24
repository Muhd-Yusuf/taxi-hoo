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
import { HiOutlineX } from "react-icons/hi";
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
  mobileOpen,
  onMobileClose,
}: {
  role: "admin";
  userName: string;
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}) {
  const pathname = usePathname();
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-zinc-200 z-40 flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? "lg:w-[72px]" : "lg:w-[260px]"
        } ${
          mobileOpen
            ? "w-[260px] translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo + collapse/close toggle */}
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
                Taxi-<span className="text-brand-500">Hoo</span>
              </span>
            )}
          </Link>

          {/* Close button on mobile, collapse toggle on desktop */}
          <button
            onClick={() => {
              if (mobileOpen && onMobileClose) {
                onMobileClose();
              } else {
                onToggle();
              }
            }}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors flex-shrink-0"
            title={mobileOpen ? "Close sidebar" : collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {mobileOpen ? (
              <HiOutlineX size={18} />
            ) : collapsed ? (
              <PiListBold size={18} />
            ) : (
              <PiCaretLeftBold size={16} />
            )}
          </button>
        </div>

        {/* User section */}
        <div className={`px-4 py-5 border-b border-zinc-100 flex-shrink-0 ${collapsed && !mobileOpen ? "flex justify-center" : ""}`}>
          <div className={`flex items-center ${collapsed && !mobileOpen ? "" : "gap-3"}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              {initials}
            </div>
            {(mobileOpen || !collapsed) && (
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 truncate">{userName}</p>
                <p className="text-[11px] text-brand-600 font-medium">Admin</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5 space-y-1.5 overflow-y-auto">
          {adminNav.map((item) => {
            const isActive = pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;
            const showLabel = mobileOpen || !collapsed;
            return (
              <Link
                key={item.href}
                href={item.href}
                title={!showLabel ? item.label : undefined}
                onClick={onMobileClose}
                className={`flex items-center gap-3 rounded-xl transition-all ${
                  !showLabel ? "justify-center px-0 py-3" : "px-3.5 py-3"
                } ${
                  isActive
                    ? "bg-brand-50 text-brand-600 font-semibold"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {showLabel && (
                  <span className="text-[13px] font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="px-3 py-4 border-t border-zinc-100 space-y-1.5 flex-shrink-0">
          <Link
            href="#"
            title={!mobileOpen && collapsed ? "Settings" : undefined}
            className={`flex items-center gap-3 rounded-xl text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors ${
              !mobileOpen && collapsed ? "justify-center px-0 py-3" : "px-3.5 py-3"
            }`}
          >
            <PiGearSixBold size={20} className="flex-shrink-0" />
            {(mobileOpen || !collapsed) && <span className="text-[13px] font-medium">Settings</span>}
          </Link>
          <Link
            href="/"
            title={!mobileOpen && collapsed ? "Log out" : undefined}
            className={`flex items-center gap-3 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors ${
              !mobileOpen && collapsed ? "justify-center px-0 py-3" : "px-3.5 py-3"
            }`}
          >
            <PiSignOutBold size={20} className="flex-shrink-0" />
            {(mobileOpen || !collapsed) && <span className="text-[13px] font-medium">Log out</span>}
          </Link>
        </div>
      </aside>
    </>
  );
}
