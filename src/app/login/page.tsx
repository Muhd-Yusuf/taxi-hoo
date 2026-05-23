"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

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
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-10">
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

          <h1 className="text-3xl font-bold text-dark mb-2">Welcome back</h1>
          <p className="text-text-secondary mb-8">
            Sign in to your account to continue
          </p>

          {/* Role Selector */}
          <div className="flex bg-surface-alt rounded-xl p-1 mb-8">
            {(["passenger", "driver", "admin"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg capitalize transition-all ${
                  role === r
                    ? "bg-primary text-dark shadow-sm"
                    : "text-text-secondary hover:text-dark"
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
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-dark mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-dark"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-text-secondary">
                  Remember me
                </span>
              </label>
              <Link
                href="#"
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-dark font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-text-secondary text-sm mt-8">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary hover:text-primary-hover font-semibold"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #F5B800 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="relative text-center p-12">
          <Image
            src="/logo.jpeg"
            alt="Taxi-Hoo"
            width={180}
            height={180}
            className="rounded-3xl mx-auto mb-8 shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ride with <span className="text-primary">Confidence</span>
          </h2>
          <p className="text-gray-400 max-w-sm">
            Join thousands of passengers and drivers on the most trusted taxi
            platform.
          </p>
        </div>
      </div>
    </div>
  );
}
