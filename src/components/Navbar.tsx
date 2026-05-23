"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { label: "Ride", href: "/passenger/book" },
  { label: "Drive", href: "/register?role=driver" },
  { label: "Safety", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpeg"
              alt="Taxi-Hoo"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <span className="text-[17px] font-bold text-dark tracking-tight">
              Taxi-<span className="text-primary">Hoo</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] text-text-secondary hover:text-dark font-medium px-4 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-[14px] text-text-secondary hover:text-dark font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="text-[14px] bg-primary text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-hover transition-colors shadow-sm"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-dark p-2 -mr-2 rounded-lg hover:bg-surface-alt transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg z-50">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-[15px] text-text-secondary hover:text-dark hover:bg-surface-alt font-medium px-4 py-3 rounded-xl transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 mt-3 border-t border-border space-y-2">
                <Link
                  href="/login"
                  className="block text-[15px] text-text-secondary hover:text-dark hover:bg-surface-alt font-medium px-4 py-3 rounded-xl text-center transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="block text-[15px] text-center bg-primary text-white font-semibold px-5 py-3 rounded-xl hover:bg-primary-hover transition-colors shadow-sm"
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
