"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PiArrowLeftBold,
  PiCarFill,
  PiCurrencyDollarBold,
  PiEyeBold,
  PiEyeClosedBold,
  PiCheckBold,
} from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [role, setRole] = useState<"passenger" | "driver">("passenger");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const dashboardPath =
    role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const goBack = () => {
    if (step === 1) return;
    setStep((prev) => (prev - 1) as 1 | 2 | 3);
  };

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col lg:bg-zinc-50 lg:items-center lg:justify-center">
      {/* Content */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col lg:flex-initial"
          >
            {/* Top bar - mobile only */}
            <div className="px-4 pt-4 flex items-center gap-4 lg:hidden">
              <Link
                href="/"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                <PiArrowLeftBold size={20} />
              </Link>

              {/* Progress bars */}
              <div className="flex-1 flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      s <= step
                        ? "bg-brand-500"
                        : "bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 max-w-[420px] mx-auto w-full lg:bg-white lg:rounded-2xl lg:shadow-lg lg:border lg:border-zinc-200 lg:p-8 lg:max-w-[460px]">
              {/* Desktop: back + progress inside card */}
              <div className="hidden lg:flex items-center gap-4 mb-6">
                <Link
                  href="/"
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
                >
                  <PiArrowLeftBold size={20} />
                </Link>
                <div className="flex-1 flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 h-1.5 rounded-full transition-all ${
                        s <= step
                          ? "bg-brand-500"
                          : "bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-500 p-0.5 shadow-lg shadow-brand-500/20">
                  <Image
                    src="/logo.jpeg"
                    alt="Taxi-Hoo"
                    width={64}
                    height={64}
                    className="rounded-2xl"
                  />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-zinc-900 text-center">
                Join Taxi-Hoo
              </h1>
              <p className="text-sm text-zinc-500 text-center mt-1.5 mb-8">
                How would you like to use Taxi-Hoo?
              </p>

              {/* Role cards */}
              <div className="space-y-3">
                {/* Rider card */}
                <button
                  onClick={() => setRole("passenger")}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${
                    role === "passenger"
                      ? "border-brand-500 bg-brand-50 shadow-md shadow-brand-500/10"
                      : "border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300"
                  }`}
                >
                  <div
                    className={`w-13 h-13 rounded-xl flex items-center justify-center ${
                      role === "passenger"
                        ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                    style={{ width: 52, height: 52 }}
                  >
                    <PiCarFill size={24} />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-zinc-900">
                      Ride with us
                    </p>
                    <p className="text-sm text-zinc-500">
                      Get rides anywhere, anytime
                    </p>
                  </div>
                </button>

                {/* Driver card */}
                <button
                  onClick={() => setRole("driver")}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${
                    role === "driver"
                      ? "border-blue-500 bg-blue-50 shadow-md shadow-blue-500/10"
                      : "border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300"
                  }`}
                >
                  <div
                    className={`w-13 h-13 rounded-xl flex items-center justify-center ${
                      role === "driver"
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                    style={{ width: 52, height: 52 }}
                  >
                    <PiCurrencyDollarBold size={24} />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-zinc-900">
                      Drive with us
                    </p>
                    <p className="text-sm text-zinc-500">
                      Earn money on your schedule
                    </p>
                  </div>
                </button>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full h-14 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl text-sm mt-6 transition-all active:scale-[0.98]"
              >
                Continue
              </button>

              <p className="text-center text-sm text-zinc-500 mt-8">
                Already have an account?{" "}
                <Link href="/login" className="text-brand-600 font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col lg:flex-initial"
          >
            {/* Top bar - mobile only */}
            <div className="px-4 pt-4 flex items-center gap-4 lg:hidden">
              <button
                onClick={goBack}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                <PiArrowLeftBold size={20} />
              </button>

              <div className="flex-1 flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      s <= step
                        ? "bg-brand-500"
                        : "bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 max-w-[420px] mx-auto w-full py-8 lg:bg-white lg:rounded-2xl lg:shadow-lg lg:border lg:border-zinc-200 lg:p-8 lg:max-w-[460px]">
              {/* Desktop: back + progress inside card */}
              <div className="hidden lg:flex items-center gap-4 mb-6">
                <button
                  onClick={goBack}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
                >
                  <PiArrowLeftBold size={20} />
                </button>
                <div className="flex-1 flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 h-1.5 rounded-full transition-all ${
                        s <= step
                          ? "bg-brand-500"
                          : "bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h1 className="text-2xl font-bold text-zinc-900 text-center">Your details</h1>
              <p className="text-sm text-zinc-500 mt-1.5 mb-8 text-center">
                Tell us a bit about yourself
              </p>

              <div className="space-y-4">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors"
                />

                {/* Phone */}
                <div className="flex">
                  <div className="bg-zinc-100 text-zinc-700 px-3 h-14 rounded-l-2xl border border-r-0 border-zinc-200 text-sm font-medium flex items-center">
                    +267
                  </div>
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="74 059 182"
                    className="h-14 rounded-r-2xl border border-zinc-200 bg-zinc-50 px-4 text-base flex-1 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors"
                  />
                </div>

                {/* Driver-specific fields */}
                {role === "driver" && (
                  <>
                    <input
                      type="text"
                      placeholder="Vehicle model (e.g. Toyota Camry 2020)"
                      className="w-full h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="License plate (e.g. B 123 ABC)"
                      className="w-full h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors"
                    />
                  </>
                )}
              </div>

              <button
                onClick={() => setStep(3)}
                className="w-full h-14 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl text-sm mt-6 transition-all active:scale-[0.98]"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col lg:flex-initial"
          >
            {/* Top bar - mobile only */}
            <div className="px-4 pt-4 flex items-center gap-4 lg:hidden">
              <button
                onClick={goBack}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                <PiArrowLeftBold size={20} />
              </button>

              <div className="flex-1 flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      s <= step
                        ? "bg-brand-500"
                        : "bg-zinc-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 max-w-[420px] mx-auto w-full lg:bg-white lg:rounded-2xl lg:shadow-lg lg:border lg:border-zinc-200 lg:p-8 lg:max-w-[460px]">
              {/* Desktop: back + progress inside card */}
              <div className="hidden lg:flex items-center gap-4 mb-6">
                <button
                  onClick={goBack}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
                >
                  <PiArrowLeftBold size={20} />
                </button>
                <div className="flex-1 flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 h-1.5 rounded-full transition-all ${
                        s <= step
                          ? "bg-brand-500"
                          : "bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h1 className="text-2xl font-bold text-zinc-900 text-center">
                Create a password
              </h1>
              <p className="text-sm text-zinc-500 mt-1.5 mb-8 text-center">
                Choose a strong password for your account
              </p>

              {/* Password input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 pr-12 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  {showPassword ? (
                    <PiEyeClosedBold size={20} />
                  ) : (
                    <PiEyeBold size={20} />
                  )}
                </button>
              </div>

              {/* Password requirements */}
              <div className="mt-4 space-y-2.5">
                {[
                  { label: "At least 8 characters", met: hasMinLength },
                  { label: "One uppercase letter", met: hasUppercase },
                  { label: "One number", met: hasNumber },
                ].map((req) => (
                  <div key={req.label} className="flex items-center gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                        req.met
                          ? "bg-brand-500 text-white"
                          : "bg-zinc-100 text-zinc-300"
                      }`}
                    >
                      <PiCheckBold size={12} />
                    </div>
                    <span
                      className={`text-sm transition-colors ${
                        req.met ? "text-zinc-700" : "text-zinc-400"
                      }`}
                    >
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Terms checkbox */}
              <label className="flex items-start gap-3 mt-6 cursor-pointer">
                <div className="pt-0.5">
                  <div
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                      agreedToTerms
                        ? "bg-brand-500 border-brand-500 text-white"
                        : "border-zinc-300 bg-white"
                    }`}
                  >
                    {agreedToTerms && <PiCheckBold size={12} />}
                  </div>
                </div>
                <span className="text-sm text-zinc-500 leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-brand-600 font-medium">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-brand-600 font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Create Account button */}
              <button
                onClick={() => {
                  window.location.href = dashboardPath;
                }}
                className="w-full h-14 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl text-sm mt-6 transition-all active:scale-[0.98]"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-zinc-500 mt-8">
                Already have an account?{" "}
                <Link href="/login" className="text-brand-600 font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
