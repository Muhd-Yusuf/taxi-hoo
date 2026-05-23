"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PiCarFill,
  PiCurrencyNgnBold,
  PiShieldCheckFill,
  PiArrowRightBold,
  PiMapPinFill,
  PiNavigationArrowFill,
  PiCheckCircleFill,
  PiStarFill,
  PiUsersFill,
  PiClockFill,
} from "react-icons/pi";

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-zinc-950 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/[0.07] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-24 sm:pt-44 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <motion.div {...fade} transition={{ duration: 0.5, delay: 0.05 }}>
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-emerald-400">
                  Available in Lagos, Abuja &amp; PH
                </span>
              </span>
            </motion.div>

            <motion.h1
              {...fade}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight"
            >
              Your ride,
              <br />
              <span className="text-emerald-400">reimagined.</span>
            </motion.h1>

            <motion.p
              {...fade}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Request a ride in seconds. Transparent pricing, verified drivers,
              and a seamless experience from pickup to drop-off.
            </motion.p>

            <motion.div
              {...fade}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto lg:mx-0"
            >
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-semibold text-[15px] px-8 transition-colors w-full sm:w-auto"
              >
                Get Started
                <PiArrowRightBold size={16} />
              </Link>
              <Link
                href="/login"
                className="flex items-center justify-center h-14 border border-zinc-700 hover:border-zinc-600 text-zinc-300 rounded-2xl font-medium text-[15px] px-8 transition-colors w-full sm:w-auto"
              >
                Sign in
              </Link>
            </motion.div>
          </div>

          {/* Right side visual — phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[280px]">
              {/* Phone frame */}
              <div className="bg-zinc-800 rounded-[2.5rem] p-3 shadow-2xl shadow-black/60 border border-zinc-700/50">
                <div className="bg-zinc-900 rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-zinc-900 flex items-center justify-center">
                    <div className="w-20 h-5 bg-zinc-800 rounded-full" />
                  </div>
                  {/* App content mock */}
                  <div className="bg-emerald-950 p-5 pb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <PiMapPinFill size={16} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-500">Good morning</p>
                        <p className="text-[13px] font-semibold text-white">Sarah Johnson</p>
                      </div>
                    </div>
                    <div className="bg-zinc-800/60 rounded-xl p-3 mb-3">
                      <p className="text-[10px] text-zinc-500 mb-1">PICKUP</p>
                      <p className="text-[12px] text-white font-medium">Lekki Phase 1</p>
                    </div>
                    <div className="bg-zinc-800/60 rounded-xl p-3 mb-4">
                      <p className="text-[10px] text-zinc-500 mb-1">DESTINATION</p>
                      <p className="text-[12px] text-white font-medium">Victoria Island</p>
                    </div>
                    <div className="h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <p className="text-[12px] font-semibold text-white">Find a Driver</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-4 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-1.5">
                  <PiStarFill size={12} className="text-amber-400" />
                  <span className="text-sm font-bold text-white">4.9</span>
                </div>
              </div>

              {/* Floating ETA badge */}
              <div className="absolute -bottom-2 -left-6 bg-zinc-800 border border-zinc-700 rounded-xl px-3.5 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <PiClockFill size={12} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white">3 min</p>
                    <p className="text-[9px] text-zinc-500">ETA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Why riders love Taxi-Hoo
            </h2>
            <p className="text-zinc-500 mt-3 max-w-md mx-auto text-sm sm:text-base">
              Built for riders and drivers who value speed, safety, and simplicity.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {[
              {
                Icon: PiCarFill,
                title: "Fast Pickup",
                description:
                  "Get matched with a nearby driver in under 3 minutes. No waiting around.",
                color: "emerald",
              },
              {
                Icon: PiCurrencyNgnBold,
                title: "Transparent Pricing",
                description:
                  "See your fare before you ride. No surge surprises, no hidden fees.",
                color: "blue",
              },
              {
                Icon: PiShieldCheckFill,
                title: "Verified Drivers",
                description:
                  "Every driver passes identity and background checks. Safety first.",
                color: "amber",
              },
            ].map((feature, i) => {
              const colors: Record<string, { bg: string; icon: string; ring: string }> = {
                emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", ring: "ring-emerald-100" },
                blue: { bg: "bg-blue-50", icon: "text-blue-600", ring: "ring-blue-100" },
                amber: { bg: "bg-amber-50", icon: "text-amber-600", ring: "ring-amber-100" },
              };
              const c = colors[feature.color];
              return (
                <motion.div
                  key={feature.title}
                  {...fade}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center bg-white rounded-2xl border border-zinc-100 p-6 sm:p-8"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${c.bg} ring-4 ${c.ring} flex items-center justify-center mb-5`}
                  >
                    <feature.Icon size={24} className={c.icon} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-zinc-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              How it works
            </h2>
            <p className="text-zinc-500 mt-3 max-w-md mx-auto text-sm sm:text-base">
              Three simple steps to get where you need to go.
            </p>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8 max-w-3xl mx-auto">
            {[
              {
                step: "1",
                Icon: PiMapPinFill,
                title: "Set your destination",
                description:
                  "Enter where you want to go and see your fare upfront.",
              },
              {
                step: "2",
                Icon: PiNavigationArrowFill,
                title: "Get picked up",
                description:
                  "A verified driver arrives at your location. Track them live.",
              },
              {
                step: "3",
                Icon: PiCheckCircleFill,
                title: "Arrive safely",
                description:
                  "Get dropped off. Pay through the app and rate your trip.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 text-white font-bold flex items-center justify-center mb-4 text-sm">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <item.Icon size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[260px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fade} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Trusted across Nigeria
            </h2>
            <p className="text-zinc-500 mt-3 text-sm sm:text-base">
              Numbers that speak for themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "5,000+", label: "Active riders", Icon: PiUsersFill },
              { value: "340+", label: "Verified drivers", Icon: PiCarFill },
              { value: "28K+", label: "Rides completed", Icon: PiCheckCircleFill },
              { value: "4.8", label: "Average rating", Icon: PiStarFill },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6"
              >
                <stat.Icon size={20} className="text-emerald-400 mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1.5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 bg-emerald-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fade}>
            <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6 shadow-lg">
              <Image
                src="/logo.jpeg"
                alt="Taxi-Hoo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-3">
              Ready to ride?
            </h2>
            <p className="text-zinc-600 mb-8 max-w-md mx-auto text-sm sm:text-base">
              Join thousands of riders and drivers across Nigeria. Sign up in
              under a minute.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto sm:max-w-none">
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 h-14 bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl font-semibold text-sm px-8 transition-colors w-full sm:w-auto"
              >
                Get Started
                <PiArrowRightBold size={15} />
              </Link>
              <Link
                href="/register?role=driver"
                className="flex items-center justify-center h-14 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 rounded-2xl font-semibold text-sm px-8 transition-colors w-full sm:w-auto shadow-sm"
              >
                Become a Driver
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
