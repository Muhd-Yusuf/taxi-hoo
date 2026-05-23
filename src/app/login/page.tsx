"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiCarFill, PiUserFill, PiArrowLeftBold } from "react-icons/pi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  const dashboardPath = role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ── Form Side ── */}
      <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 py-12 sm:py-16">
        <div className="w-full max-w-[400px] mx-auto">
          {/* Top — Logo + Back */}
          <div className="flex items-center justify-between mb-12 sm:mb-14">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.jpeg" alt="Taxi-Hoo" width={36} height={36} className="rounded-lg" />
              <span className="text-[17px] font-bold text-dark tracking-tight">
                Taxi-<span className="text-primary">Hoo</span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-dark font-medium transition-colors"
            >
              <PiArrowLeftBold size={14} />
              Back
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] sm:text-[32px] font-bold text-dark tracking-tight leading-tight mb-1.5">
            Welcome back
          </h1>
          <p className="text-[14px] sm:text-[15px] text-text-secondary mb-8 sm:mb-10">
            Sign in to your account
          </p>

          {/* Role Toggle */}
          <div className="flex bg-surface-alt rounded-xl p-1 mb-7 sm:mb-8 border border-border">
            {(["passenger", "driver"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium rounded-lg capitalize transition-all ${
                  role === r
                    ? "bg-dark text-white shadow-sm"
                    : "text-text-muted hover:text-dark"
                }`}
              >
                {r === "passenger" ? <PiUserFill size={14} /> : <PiCarFill size={14} />}
                {r === "passenger" ? "Rider" : "Driver"}
              </button>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = dashboardPath;
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-[13px] font-medium text-dark mb-2">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-dark mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 pr-11 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-dark transition-colors"
                >
                  {showPassword ? <PiEyeSlashBold size={17} /> : <PiEyeBold size={17} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border accent-dark"
                />
                <span className="text-[13px] text-text-secondary">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-[13px] text-dark font-medium hover:text-primary transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-dark hover:bg-dark-light text-white text-[14px] font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 mt-2"
            >
              Sign in <PiArrowRightBold size={15} />
            </button>
          </form>

          <p className="text-center text-[13px] text-text-secondary mt-8 sm:mt-10">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-dark font-semibold hover:text-primary transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* ── Brand Panel (lg only) ── */}
      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center relative overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />

        <div className="relative text-center px-12 max-w-[440px]">
          <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-10 shadow-[0_0_100px_rgba(16,185,129,0.12)]">
            <Image
              src="/logo.jpeg"
              alt="Taxi-Hoo"
              width={120}
              height={120}
              className="rounded-full shadow-2xl shadow-primary/20"
            />
          </div>
          <h2 className="text-[28px] font-bold text-white mb-4 tracking-tight">
            Ride with confidence
          </h2>
          <p className="text-[15px] text-zinc-500 leading-relaxed">
            Thousands trust Taxi-Hoo for safe, reliable transportation every day. Your journey is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}
