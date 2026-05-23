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
} from "react-icons/pi";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white snap-y snap-mandatory overflow-y-auto">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="snap-start min-h-screen flex flex-col justify-center bg-zinc-950 relative overflow-hidden px-5 pt-20">
        {/* Gradient blob */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              {/* Badge */}
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-400">
                    Available in Lagos, Abuja & PH
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Your ride,
                <br />
                <span className="text-emerald-400">reimagined.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md"
              >
                Request a ride in seconds. Transparent pricing, verified
                drivers, and a seamless experience from pickup to drop-off.
              </motion.p>

              {/* CTA */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col gap-4 max-w-sm"
              >
                <Link
                  href="/register"
                  className="flex items-center justify-center h-14 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-2xl font-semibold text-base w-full transition-colors"
                >
                  Get Started
                </Link>
                <p className="text-sm text-zinc-500 text-center">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </motion.div>
            </div>

            {/* Desktop visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent flex items-center justify-center">
                  <Image
                    src="/logo.jpeg"
                    alt="Taxi-Hoo"
                    width={200}
                    height={200}
                    className="rounded-full shadow-2xl shadow-emerald-500/20"
                  />
                </div>

                {/* Floating card */}
                <div className="absolute -top-2 -right-6 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3 shadow-2xl shadow-black/50">
                  <div className="flex items-center gap-2">
                    <PiNavigationArrowFill
                      size={14}
                      className="text-emerald-400"
                    />
                    <span className="text-sm font-bold text-white">4.9</span>
                    <span className="text-xs text-zinc-500">avg rating</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-8 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3.5 shadow-2xl shadow-black/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center">
                      <PiCarFill size={14} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">
                        Driver arriving
                      </p>
                      <p className="text-[11px] text-zinc-500">3 min away</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="snap-start min-h-screen flex flex-col justify-center bg-white px-5 py-16">
        <div className="max-w-7xl mx-auto w-full lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold text-emerald-500 uppercase tracking-[0.15em] mb-3">
              Why Taxi-Hoo
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-12">
              Move smarter,
              <br className="sm:hidden" /> not harder
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                Icon: PiCarFill,
                title: "Fast Pickup",
                description:
                  "Get matched with a nearby driver in under 3 minutes. No waiting around, no guessing.",
              },
              {
                Icon: PiCurrencyNgnBold,
                title: "Transparent Pricing",
                description:
                  "See your fare before you ride. No surge surprises, no hidden fees. What you see is what you pay.",
              },
              {
                Icon: PiShieldCheckFill,
                title: "Verified Drivers",
                description:
                  "Every driver passes identity and background checks. Your safety is never compromised.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-7"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-5">
                  <feature.Icon size={22} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="snap-start min-h-screen flex flex-col justify-center bg-zinc-50 px-5 py-16">
        <div className="max-w-7xl mx-auto w-full lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold text-emerald-500 uppercase tracking-[0.15em] mb-3">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-14">
              Get a ride in minutes
            </h2>
          </motion.div>

          <div className="flex flex-col gap-0 max-w-md mx-auto lg:max-w-none lg:flex-row lg:gap-8">
            {[
              {
                step: "01",
                Icon: PiMapPinFill,
                title: "Request",
                description:
                  "Enter your destination. We show you nearby drivers and the fare upfront -- no surprises.",
              },
              {
                step: "02",
                Icon: PiNavigationArrowFill,
                title: "Ride",
                description:
                  "A verified driver picks you up. Track the trip live and share your status in real-time.",
              },
              {
                step: "03",
                Icon: PiCheckCircleFill,
                title: "Arrive",
                description:
                  "Get dropped off safely. Pay seamlessly through the app and rate your experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center lg:flex-1"
              >
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>

                {/* Dotted connector (mobile: vertical, desktop: hidden) */}
                {i < 2 && (
                  <div className="w-px h-10 border-l-2 border-dashed border-zinc-300 lg:hidden" />
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mt-4 mb-4">
                  <item.Icon size={24} className="text-emerald-400" />
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-xs mb-8 lg:mb-0">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats + CTA ─── */}
      <section className="snap-start min-h-screen flex flex-col justify-center bg-zinc-950 text-white px-5 py-16">
        <div className="max-w-7xl mx-auto w-full lg:px-8">
          {/* Stats */}
          <motion.div {...fadeUp} className="mb-20">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4 text-center">
              {[
                { value: "5,000+", label: "Active riders" },
                { value: "340+", label: "Verified drivers" },
                { value: "28K+", label: "Rides completed" },
                { value: "4.8", label: "Average rating" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...stagger}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-2 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            className="text-center flex flex-col items-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Start driving with Taxi-Hoo
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed max-w-md mb-8">
              Join hundreds of drivers building their income. Flexible hours,
              competitive rates, and a platform that works for you.
            </p>
            <Link
              href="/register"
              className="flex items-center justify-center gap-2 h-14 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white rounded-2xl font-semibold text-base w-full max-w-sm transition-colors"
            >
              Get Started
              <PiArrowRightBold size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
