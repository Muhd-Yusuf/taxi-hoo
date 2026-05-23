"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiCarFill, PiUserFill } from "react-icons/pi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  const dashboardPath = role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 flex items-center justify-center px-5 py-10 sm:py-12">
        <div className="w-full max-w-[380px]">
          <Link href="/" className="flex items-center gap-2 mb-10 sm:mb-12">
            <Image src="/logo.jpeg" alt="Taxi-Hoo" width={34} height={34} className="rounded-lg" />
            <span className="text-[16px] font-bold text-dark tracking-tight">Taxi-<span className="text-primary">Hoo</span></span>
          </Link>
          <h1 className="text-[26px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">Welcome back</h1>
          <p className="text-[13px] text-text-secondary mb-7 sm:mb-8">Sign in to your account</p>

          <div className="flex bg-surface-alt rounded-xl p-1 mb-6 border border-border">
            {(["passenger", "driver"] as const).map((r) => (
              <button key={r} onClick={() => setRole(r)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] font-medium rounded-lg capitalize transition-all ${
                  role === r ? "bg-dark text-white shadow-sm" : "text-text-muted hover:text-dark"
                }`}>
                {r === "passenger" ? <PiUserFill size={13} /> : <PiCarFill size={13} />}
                {r === "passenger" ? "Rider" : "Driver"}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); window.location.href = dashboardPath; }} className="space-y-4">
            <div>
              <label className="block text-[12px] font-medium text-dark mb-1.5">Email</label>
              <input type="email" placeholder="name@example.com" className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all" required />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-dark mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full px-3.5 pr-10 py-2.5 sm:py-3 rounded-xl border border-border bg-white text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-dark transition-colors">
                  {showPassword ? <PiEyeSlashBold size={16} /> : <PiEyeBold size={16} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 rounded border-border accent-dark" />
                <span className="text-[12px] text-text-secondary">Remember me</span>
              </label>
              <Link href="#" className="text-[12px] text-dark font-medium hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" className="w-full bg-dark hover:bg-dark-light text-white text-[13px] font-semibold py-2.5 sm:py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-1">
              Sign in <PiArrowRightBold size={14} />
            </button>
          </form>
          <p className="text-center text-[12px] text-text-secondary mt-7 sm:mt-8">
            Don&apos;t have an account? <Link href="/register" className="text-dark font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center">
        <div className="text-center px-12">
          <Image src="/logo.jpeg" alt="Taxi-Hoo" width={150} height={150} className="rounded-3xl mx-auto mb-8 shadow-2xl shadow-primary/15" />
          <h2 className="text-[26px] font-bold text-white mb-3 tracking-tight">Ride with confidence</h2>
          <p className="text-[13px] text-gray-500 max-w-[300px] mx-auto leading-relaxed">
            Thousands trust Taxi-Hoo for safe, reliable transportation every day.
          </p>
        </div>
      </div>
    </div>
  );
}
