"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiUploadSimpleBold, PiCarFill, PiUserFill } from "react-icons/pi";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  const dashboardPath =
    role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ── Brand Panel (lg only) ── */}
      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center relative overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/8 via-transparent to-primary/5" />

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
            Join Taxi-Hoo today
          </h2>
          <p className="text-[15px] text-zinc-500 leading-relaxed">
            Create an account in minutes and start riding or earning with the most trusted taxi platform in Nigeria.
          </p>
        </div>
      </div>

      {/* ── Form Side ── */}
      <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 py-10 sm:py-14 overflow-y-auto">
        <div className="w-full max-w-[420px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-10 sm:mb-12">
            <Image src="/logo.jpeg" alt="Taxi-Hoo" width={36} height={36} className="rounded-lg" />
            <span className="text-[17px] font-bold text-dark tracking-tight">
              Taxi-<span className="text-primary">Hoo</span>
            </span>
          </Link>

          {/* Heading */}
          <h1 className="text-[28px] sm:text-[32px] font-bold text-dark tracking-tight leading-tight mb-1.5">
            Create your account
          </h1>
          <p className="text-[14px] sm:text-[15px] text-text-secondary mb-8 sm:mb-10">
            Get started with Taxi-Hoo
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
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-dark mb-2">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-dark mb-2">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[13px] font-medium text-dark mb-2">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[13px] font-medium text-dark mb-2">Phone number</label>
              <input
                type="tel"
                placeholder="+234 800 000 0000"
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                required
              />
            </div>

            {/* Driver-specific fields */}
            {role === "driver" && (
              <>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-2">Vehicle</label>
                  <input
                    type="text"
                    placeholder="e.g. Toyota Camry 2020"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-2">License plate</label>
                  <input
                    type="text"
                    placeholder="ABC-123-KD"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-2">
                    Driver&apos;s license
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 sm:p-8 text-center hover:border-primary/40 transition-colors cursor-pointer bg-surface-alt group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                      <PiUploadSimpleBold size={22} className="text-primary" />
                    </div>
                    <p className="text-[14px] font-medium text-dark mb-1">Click to upload</p>
                    <p className="text-[12px] text-text-muted">PDF, JPG or PNG (max 5MB)</p>
                  </div>
                </div>
              </>
            )}

            {/* Password */}
            <div>
              <label className="block text-[13px] font-medium text-dark mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
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

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded border-border accent-dark flex-shrink-0"
                required
              />
              <span className="text-[13px] text-text-secondary leading-relaxed">
                I agree to the{" "}
                <Link href="#" className="text-dark font-medium hover:text-primary transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-dark font-medium hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-dark hover:bg-dark-light text-white text-[14px] font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2 mt-3"
            >
              Create account <PiArrowRightBold size={15} />
            </button>
          </form>

          <p className="text-center text-[13px] text-text-secondary mt-8 sm:mt-10">
            Already have an account?{" "}
            <Link href="/login" className="text-dark font-semibold hover:text-primary transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
