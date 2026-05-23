"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Taxi-Hoo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-dark">
              TAXI-<span className="text-primary">HOO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/#safety"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              Safety
            </Link>
            <Link
              href="/login"
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="bg-primary hover:bg-primary-hover text-dark font-semibold px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-border space-y-3">
            <Link
              href="/#features"
              className="block px-3 py-2 text-text-secondary hover:text-primary font-medium"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="block px-3 py-2 text-text-secondary hover:text-primary font-medium"
              onClick={() => setOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#safety"
              className="block px-3 py-2 text-text-secondary hover:text-primary font-medium"
              onClick={() => setOpen(false)}
            >
              Safety
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-text-secondary hover:text-primary font-medium"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="block mx-3 text-center bg-primary hover:bg-primary-hover text-dark font-semibold px-6 py-2.5 rounded-full"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
