"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PiCarFill,
  PiCurrencyDollarBold,
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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-24 sm:pt-44 sm:pb-32 flex flex-col items-center text-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative mb-10"
          >
            <div className="w-32 h-32 rounded-full bg-emerald-50 flex items-center justify-center relative">
              <PiCarFill size={56} className="text-emerald-500 relative z-10" />
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <PiStarFill size={16} className="text-amber-400" />
              </div>
              <div className="absolute -bottom-1 -left-3 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                <PiMapPinFill size={14} className="text-blue-400" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            {...fade}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-bold text-zinc-900 tracking-tight"
          >
            Your ride,
            <br />
            <span className="text-emerald-500">reimagined.</span>
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-md"
          >
            Request a ride in seconds. Transparent pricing, verified drivers,
            and a seamless experience from pickup to drop-off.
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm"
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
              className="flex items-center justify-center h-14 border border-zinc-200 hover:border-zinc-300 text-zinc-600 rounded-2xl font-medium text-[15px] px-8 transition-colors w-full sm:w-auto"
            >
              Sign in
            </Link>
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
                Icon: PiCurrencyDollarBold,
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
              const colors: Record<string, { bg: string; icon: string }> = {
                emerald: { bg: "bg-emerald-50", icon: "text-emerald-600" },
                blue: { bg: "bg-blue-50", icon: "text-blue-600" },
                amber: { bg: "bg-amber-50", icon: "text-amber-600" },
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
                    className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center mb-5`}
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
                step: "Step 1",
                Icon: PiMapPinFill,
                title: "Set your destination",
                description:
                  "Enter where you want to go and see your fare upfront.",
              },
              {
                step: "Step 2",
                Icon: PiNavigationArrowFill,
                title: "Get picked up",
                description:
                  "A verified driver arrives at your location. Track them live.",
              },
              {
                step: "Step 3",
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
                <span className="text-emerald-500 text-sm font-bold mb-3">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <item.Icon size={22} className="text-emerald-600" />
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
      <section className="py-20 lg:py-28 px-6 sm:px-10 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fade} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Trusted across Botswana
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
                className="text-center bg-white rounded-2xl border border-zinc-100 p-6"
              >
                <stat.Icon size={20} className="text-emerald-500 mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
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
            <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6">
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
              Join thousands of riders and drivers across Botswana. Sign up in
              under a minute.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto sm:max-w-none">
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-semibold text-sm px-8 transition-colors w-full sm:w-auto"
              >
                Get Started
                <PiArrowRightBold size={15} />
              </Link>
              <Link
                href="/register?role=driver"
                className="flex items-center justify-center h-14 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 rounded-2xl font-semibold text-sm px-8 transition-colors w-full sm:w-auto"
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
