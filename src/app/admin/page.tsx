"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiShieldCheckFill } from "react-icons/pi";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-5 py-12 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[420px]">
        {/* Logo + Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-5 shadow-[0_0_60px_rgba(16,185,129,0.1)]">
            <Image
              src="/logo.jpeg"
              alt="Taxi-Hoo"
              width={52}
              height={52}
              className="rounded-full"
            />
          </div>
          <h1 className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight mb-1.5">
            Admin Portal
          </h1>
          <p className="text-[14px] text-zinc-500">
            Taxi-Hoo Management Dashboard
          </p>
        </div>

        {/* Card */}
        <div className="bg-dark-light border border-dark-border rounded-2xl p-8 sm:p-10">
          {/* Shield badge */}
          <div className="flex items-center gap-2.5 bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 mb-7 sm:mb-8">
            <PiShieldCheckFill size={18} className="text-primary flex-shrink-0" />
            <span className="text-[13px] text-primary font-medium">
              Authorized personnel only
            </span>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/admin/dashboard";
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-[13px] font-medium text-zinc-300 mb-2">
                Admin Email
              </label>
              <input
                type="email"
                placeholder="admin@taxihoo.com"
                className="w-full px-4 py-3.5 rounded-xl border border-dark-border bg-dark-lighter text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-zinc-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  className="w-full px-4 pr-11 py-3.5 rounded-xl border border-dark-border bg-dark-lighter text-[14px] text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  {showPassword ? <PiEyeSlashBold size={17} /> : <PiEyeBold size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white text-[14px] font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 mt-2"
            >
              Access Dashboard <PiArrowRightBold size={15} />
            </button>
          </form>
        </div>

        {/* Footer link */}
        <p className="text-center text-[13px] text-zinc-600 mt-7 sm:mt-8">
          Not an admin?{" "}
          <Link
            href="/login"
            className="text-primary hover:text-primary-hover font-medium transition-colors"
          >
            Go to rider login
          </Link>
        </p>
      </div>
    </div>
  );
}
