"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiEyeBold, PiEyeSlashBold, PiArrowRightBold, PiUploadSimpleBold } from "react-icons/pi";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  const dashboardPath =
    role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center relative">
        <div className="text-center px-12">
          <Image
            src="/logo.jpeg"
            alt="Taxi-Hoo"
            width={160}
            height={160}
            className="rounded-3xl mx-auto mb-8 shadow-2xl shadow-primary/15"
          />
          <h2 className="text-[28px] font-bold text-white mb-3 tracking-tight">
            Join Taxi-Hoo today
          </h2>
          <p className="text-[14px] text-gray-500 max-w-[320px] mx-auto leading-relaxed">
            Create an account in minutes and start riding or earning with the most trusted taxi platform.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-5 py-12 overflow-y-auto">
        <div className="w-full max-w-[400px]">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <Image src="/logo.jpeg" alt="Taxi-Hoo" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-bold text-dark tracking-tight">
              Taxi-<span className="text-primary">Hoo</span>
            </span>
          </Link>

          <h1 className="text-[28px] font-bold text-dark tracking-tight mb-1">
            Create your account
          </h1>
          <p className="text-[14px] text-text-secondary mb-8">
            Get started with Taxi-Hoo
          </p>

          {/* Role */}
          <div className="flex bg-surface-alt rounded-xl p-1 mb-7 border border-border">
            {(["passenger", "driver"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 text-[13px] font-medium rounded-lg capitalize transition-all ${
                  role === r
                    ? "bg-dark text-white shadow-sm"
                    : "text-text-muted hover:text-dark"
                }`}
              >
                {r === "passenger" ? "Rider" : "Driver"}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = dashboardPath;
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[13px] font-medium text-dark mb-1.5">First name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-dark mb-1.5">Last name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-medium text-dark mb-1.5">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-dark mb-1.5">Phone number</label>
              <input
                type="tel"
                placeholder="+234 800 000 0000"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                required
              />
            </div>

            {role === "driver" && (
              <>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">Vehicle</label>
                  <input
                    type="text"
                    placeholder="e.g. Toyota Camry 2020"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">License plate</label>
                  <input
                    type="text"
                    placeholder="ABC-123-KD"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-dark mb-1.5">Driver&apos;s license</label>
                  <div className="border border-dashed border-border rounded-xl p-5 text-center hover:border-text-muted transition-colors cursor-pointer bg-surface-alt">
                    <PiUploadSimpleBold size={20} className="mx-auto text-text-muted mb-1.5" />
                    <p className="text-[13px] text-text-secondary">Click to upload</p>
                    <p className="text-[11px] text-text-muted mt-0.5">PDF, JPG or PNG (max 5MB)</p>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-[13px] font-medium text-dark mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className="w-full px-4 pr-11 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-dark transition-colors"
                >
                  {showPassword ? <PiEyeSlashBold size={16} /> : <PiEyeBold size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input type="checkbox" className="w-3.5 h-3.5 mt-0.5 rounded border-border accent-dark" required />
              <span className="text-[12px] text-text-secondary leading-relaxed">
                I agree to the{" "}
                <Link href="#" className="text-dark font-medium hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="#" className="text-dark font-medium hover:underline">Privacy Policy</Link>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-dark hover:bg-dark-light text-white text-[14px] font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
            >
              Create account
              <PiArrowRightBold size={15} />
            </button>
          </form>

          <p className="text-center text-[13px] text-text-secondary mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-dark font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
