"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Car,
  Upload,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");

  const dashboardPath =
    role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
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
            Join <span className="text-primary">Taxi-Hoo</span> Today
          </h2>
          <p className="text-gray-400 max-w-sm">
            Whether you&apos;re a passenger looking for rides or a driver
            looking to earn, we&apos;ve got you covered.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-8">
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

          <h1 className="text-3xl font-bold text-dark mb-2">
            Create Account
          </h1>
          <p className="text-text-secondary mb-8">
            Get started with Taxi-Hoo in minutes
          </p>

          {/* Role Selector */}
          <div className="flex bg-surface-alt rounded-xl p-1 mb-8">
            {(["passenger", "driver"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg capitalize transition-all flex items-center justify-center gap-2 ${
                  role === r
                    ? "bg-primary text-dark shadow-sm"
                    : "text-text-secondary hover:text-dark"
                }`}
              >
                {r === "passenger" ? (
                  <User size={16} />
                ) : (
                  <Car size={16} />
                )}
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  First Name
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                  />
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

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
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            {/* Driver-specific fields */}
            {role === "driver" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Vehicle Information
                  </label>
                  <div className="relative">
                    <Car
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                    />
                    <input
                      type="text"
                      placeholder="e.g. Toyota Camry 2020"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    License Plate Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ABC-123-KD"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-dark placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Upload Driver&apos;s License
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload
                      size={24}
                      className="mx-auto text-text-muted mb-2"
                    />
                    <p className="text-sm text-text-secondary">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      PDF, JPG or PNG (max 5MB)
                    </p>
                  </div>
                </div>
              </>
            )}

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
                  placeholder="Create a password"
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

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded border-border text-primary focus:ring-primary"
                required
              />
              <span className="text-sm text-text-secondary">
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-primary hover:text-primary-hover font-medium"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-primary hover:text-primary-hover font-medium"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-dark font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 mt-2"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-text-secondary text-sm mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:text-primary-hover font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
