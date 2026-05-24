"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Ride", href: "/passenger/book" },
  { label: "Drive", href: "/register?role=driver" },
  { label: "Safety", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  useEffect(() => {
    if (!isLanding) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLanding]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = isLanding && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md border-b border-zinc-200/80"
        }`}
      >
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
            <span
              className={`text-[17px] font-bold tracking-tight transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-zinc-900"
              }`}
            >
              Taxi-
              <span className={isTransparent ? "text-brand-400" : "text-brand-600"}>
                Hoo
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                  isTransparent
                    ? "text-zinc-300 hover:text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isTransparent
                  ? "text-zinc-300 hover:text-white"
                  : "text-zinc-700 hover:text-zinc-900"
              }`}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors ${
                isTransparent
                  ? "text-white bg-white/10 hover:bg-white/20 border border-white/20"
                  : "text-white bg-brand-500 hover:bg-brand-600"
              }`}
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-zinc-700 hover:bg-zinc-100"
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="lg:hidden fixed top-0 left-0 h-full w-[300px] bg-white z-50 shadow-xl flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Sidebar Header */}
              <div className="h-16 flex items-center justify-between px-5 border-b border-zinc-100 flex-shrink-0">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/logo.jpeg"
                    alt="Taxi-Hoo"
                    width={34}
                    height={34}
                    className="rounded-lg"
                  />
                  <span className="text-[17px] font-bold text-zinc-900 tracking-tight">
                    Taxi-<span className="text-brand-600">Hoo</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
                  aria-label="Close menu"
                >
                  <HiOutlineX size={24} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-[15px] font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 px-4 py-3 rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Bottom: Divider + Auth Buttons */}
              <div className="px-4 py-6 border-t border-zinc-100 space-y-2 flex-shrink-0">
                <Link
                  href="/login"
                  className="block text-center text-[15px] font-medium text-zinc-700 hover:bg-zinc-50 px-4 py-3 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="block text-center text-[15px] font-semibold text-white bg-brand-500 hover:bg-brand-600 px-4 py-3 rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
