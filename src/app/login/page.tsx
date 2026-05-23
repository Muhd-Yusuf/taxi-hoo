"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver" | "admin">("passenger");

  const dashboardPath =
    role === "passenger"
      ? "/passenger/book"
      : role === "driver"
      ? "/driver/dashboard"
      : "/admin/dashboard";

  return (
    <div className="min-h-screen flex">
      {/* Form side */}
      <div className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-[400px]">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Image src="/logo.jpeg" alt="Taxi-Hoo" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-bold text-dark tracking-tight">
              Taxi-<span className="text-primary">Hoo</span>
            </span>
          </Link>

          <h1 className="text-[28px] font-bold text-dark tracking-tight mb-1">
            Welcome back
          </h1>
          <p className="text-[14px] text-text-secondary mb-8">
            Enter your credentials to access your account
          </p>

          {/* Role tabs */}
          <div className="flex bg-surface-alt rounded-xl p-1 mb-7 border border-border">
            {(["passenger", "driver", "admin"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 text-[13px] font-medium rounded-lg capitalize transition-all ${
                  role === r
                    ? "bg-dark text-white shadow-sm"
                    : "text-text-muted hover:text-dark"
                }`}
              >
                {r}
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
            <div>
              <label className="block text-[13px] font-medium text-dark mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-dark mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 pr-11 py-3 rounded-xl border border-border bg-white text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-dark transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5 rounded border-border text-dark accent-dark" />
                <span className="text-[13px] text-text-secondary">Remember me</span>
              </label>
              <Link href="#" className="text-[13px] text-dark font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-dark hover:bg-dark-light text-white text-[14px] font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
            >
              Sign in
              <ArrowRight size={15} />
            </button>
          </form>

          <p className="text-center text-[13px] text-text-secondary mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-dark font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right side — brand panel */}
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
            Ride with confidence
          </h2>
          <p className="text-[14px] text-gray-500 max-w-[320px] mx-auto leading-relaxed">
            Thousands of passengers and drivers trust Taxi-Hoo for safe, reliable transportation every day.
          </p>
        </div>
      </div>
    </div>
  );
}
