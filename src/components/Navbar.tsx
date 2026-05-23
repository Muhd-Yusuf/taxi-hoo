"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Ride", href: "/passenger/book" },
  { label: "Drive", href: "/register?role=driver" },
  { label: "Safety", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpeg"
            alt="Taxi-Hoo"
            width={34}
            height={34}
            className="rounded-lg"
          />
          <span className="text-[17px] font-bold text-zinc-900 tracking-tight">
            Taxi-<span className="text-emerald-600">Hoo</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 px-4 py-2 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 px-4 py-2 rounded-lg transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 px-5 py-2.5 rounded-xl transition-colors"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-700 hover:bg-zinc-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-zinc-200 shadow-lg z-50">
            <div className="px-5 sm:px-8 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-[15px] font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 px-4 py-3 rounded-xl transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 mt-3 border-t border-zinc-100 space-y-2">
                <Link
                  href="/login"
                  className="block text-center text-[15px] font-medium text-zinc-700 hover:bg-zinc-50 px-4 py-3 rounded-xl transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="block text-center text-[15px] font-semibold text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
