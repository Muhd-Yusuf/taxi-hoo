"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowLeftBold, PiEnvelopeSimpleBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import OTPInput from "@/components/OTPInput";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [role, setRole] = useState<"passenger" | "driver">("passenger");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const dashboardPath =
    role === "passenger" ? "/passenger/book" : "/driver/dashboard";

  useEffect(() => {
    if (step !== "otp") return;
    setCountdown(30);
    setCanResend(false);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [step]);

  const maskedPhone = phoneNumber
    ? phoneNumber.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3")
    : "XXX XXX XXXX";

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col">
      <AnimatePresence mode="wait">
        {step === "phone" && (
          <motion.div
            key="phone"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col"
          >
            {/* Back arrow */}
            <div className="px-4 pt-4">
              <Link
                href="/"
                className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                <PiArrowLeftBold size={20} />
              </Link>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center px-6 max-w-[420px] mx-auto w-full">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-0.5 shadow-lg shadow-emerald-500/20">
                  <Image
                    src="/logo.jpeg"
                    alt="Taxi-Hoo"
                    width={64}
                    height={64}
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-2xl font-bold text-zinc-900 text-center">
                Welcome back
              </h1>
              <p className="text-sm text-zinc-500 text-center mt-1.5 mb-6">
                Sign in to your account
              </p>

              {/* Role toggle */}
              <div className="flex bg-zinc-100 rounded-2xl p-1 mb-6">
                <button
                  onClick={() => setRole("passenger")}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    role === "passenger"
                      ? "bg-white text-emerald-600 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  Rider
                </button>
                <button
                  onClick={() => setRole("driver")}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    role === "driver"
                      ? "bg-white text-emerald-600 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  Driver
                </button>
              </div>

              {/* Phone input */}
              <div className="flex">
                <div className="bg-zinc-100 text-zinc-700 px-3 h-14 rounded-l-2xl border border-r-0 border-zinc-200 text-sm font-medium flex items-center">
                  +234
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="800 000 0000"
                  className="h-14 rounded-r-2xl border border-zinc-200 bg-zinc-50 px-4 text-base flex-1 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                />
              </div>

              {/* Continue button */}
              <button
                onClick={() => setStep("otp")}
                className="w-full h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-2xl text-sm mt-4 transition-all active:scale-[0.98] shadow-lg shadow-emerald-500/20"
              >
                Continue
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-zinc-200" />
                <span className="text-xs text-zinc-400">or</span>
                <div className="flex-1 h-px bg-zinc-200" />
              </div>

              {/* Email button */}
              <button className="w-full h-14 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium rounded-2xl text-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
                <PiEnvelopeSimpleBold size={18} />
                Continue with Email
              </button>

              {/* Bottom links */}
              <p className="text-center text-sm text-zinc-500 mt-8">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-emerald-600 font-semibold"
                >
                  Sign up
                </Link>
              </p>
              <p className="text-center text-xs text-zinc-400 mt-3">
                <Link
                  href="/admin"
                  className="text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  Admin Login
                </Link>
              </p>
            </div>
          </motion.div>
        )}

        {step === "otp" && (
          <motion.div
            key="otp"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col"
          >
            {/* Back arrow */}
            <div className="px-4 pt-4">
              <button
                onClick={() => setStep("phone")}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-600 hover:bg-zinc-100 transition-colors"
              >
                <PiArrowLeftBold size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center px-6 max-w-[420px] mx-auto w-full">
              <h1 className="text-2xl font-bold text-zinc-900 text-center">
                Verify your number
              </h1>
              <p className="text-sm text-zinc-500 text-center mt-1.5 mb-10">
                We sent a code to +234 {maskedPhone}
              </p>

              {/* OTP Input */}
              <OTPInput
                length={4}
                onComplete={() => {
                  window.location.href = dashboardPath;
                }}
              />

              {/* Resend */}
              <div className="text-center mt-8">
                {canResend ? (
                  <button
                    onClick={() => {
                      setCanResend(false);
                      setCountdown(30);
                      const interval = setInterval(() => {
                        setCountdown((prev) => {
                          if (prev <= 1) {
                            clearInterval(interval);
                            setCanResend(true);
                            return 0;
                          }
                          return prev - 1;
                        });
                      }, 1000);
                    }}
                    className="text-sm text-emerald-600 font-semibold"
                  >
                    Resend code
                  </button>
                ) : (
                  <p className="text-sm text-zinc-400">
                    Resend code in{" "}
                    <span className="text-zinc-600 font-medium">
                      {countdown}s
                    </span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
