"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PiEyeBold,
  PiEyeClosedBold,
  PiShieldCheckFill,
  PiArrowRightBold,
} from "react-icons/pi";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-zinc-950 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-80px] w-[350px] h-[350px] rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/3 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-[400px] flex flex-col items-center"
      >
        {/* Logo */}
        <Image
          src="/logo.jpeg"
          alt="Taxi-Hoo"
          width={56}
          height={56}
          className="rounded-2xl shadow-2xl shadow-emerald-500/20"
        />

        {/* Heading */}
        <h1 className="text-2xl font-bold text-white mt-5">Admin Portal</h1>
        <p className="text-sm text-zinc-500 mt-1">Taxi-Hoo Management</p>

        {/* Form card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full mt-8">
          {/* Shield badge */}
          <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2 mb-6 w-fit">
            <PiShieldCheckFill size={16} />
            <span className="text-xs font-medium">Authorized access only</span>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/admin/dashboard";
            }}
            className="space-y-4"
          >
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@taxihoo.com"
                required
                className="w-full h-14 bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-2xl px-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  required
                  className="w-full h-14 bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-2xl px-4 pr-12 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <PiEyeClosedBold size={20} />
                  ) : (
                    <PiEyeBold size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 mt-2 transition-colors active:scale-[0.98]"
            >
              Access Dashboard
              <PiArrowRightBold size={15} />
            </button>
          </form>
        </div>

        {/* Footer link */}
        <p className="text-sm text-zinc-500 mt-6">
          Not an admin?{" "}
          <Link
            href="/login"
            className="text-zinc-400 hover:text-white font-medium transition-colors"
          >
            Rider login &rarr;
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
