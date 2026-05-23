"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpeg"
              alt="Taxi-Hoo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-lg font-bold text-white tracking-tight">
              Taxi-<span className="text-primary">Hoo</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/register"
              className="text-[14px] text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              Ride
            </Link>
            <Link
              href="/register?role=driver"
              className="text-[14px] text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              Drive
            </Link>
            <Link
              href="/login"
              className="text-[14px] text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="text-[14px] bg-white text-dark font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors ml-2"
            >
              Sign up
            </Link>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-dark-border pb-5 space-y-1 pt-3">
            <Link
              href="/register"
              className="block text-[15px] text-gray-300 hover:text-white px-3 py-2.5 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Ride
            </Link>
            <Link
              href="/register?role=driver"
              className="block text-[15px] text-gray-300 hover:text-white px-3 py-2.5 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Drive
            </Link>
            <Link
              href="/login"
              className="block text-[15px] text-gray-300 hover:text-white px-3 py-2.5 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="block text-[15px] text-center bg-white text-dark font-semibold mx-3 mt-3 px-5 py-2.5 rounded-lg"
              onClick={() => setOpen(false)}
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
