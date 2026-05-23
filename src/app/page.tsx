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
  PiLightningFill,
  PiUsersFill,
} from "react-icons/pi";

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-zinc-950 pt-32 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                Available in Lagos, Abuja &amp; PH
              </span>
            </div>
          </motion.div>

          <motion.h1
            {...fade}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Your ride,{" "}
            <span className="text-emerald-400">reimagined.</span>
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto"
          >
            Request a ride in seconds. Transparent pricing, verified drivers,
            and a seamless experience from pickup to drop-off.
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold text-base px-8 transition-colors max-w-sm w-full"
            >
              Get Started
              <PiArrowRightBold size={16} />
            </Link>
            <p className="text-sm text-zinc-500">
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
      </section>

      {/* ── Features ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Why Taxi-Hoo
            </h2>
            <p className="text-zinc-500 mt-2 max-w-md mx-auto text-sm sm:text-base">
              Everything you need for a seamless ride experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                Icon: PiCarFill,
                title: "Fast Pickup",
                description:
                  "Get matched with a nearby driver in under 3 minutes. No waiting around.",
              },
              {
                Icon: PiCurrencyNgnBold,
                title: "Transparent Pricing",
                description:
                  "See your fare before you ride. No surge surprises, no hidden fees.",
              },
              {
                Icon: PiShieldCheckFill,
                title: "Verified Drivers",
                description:
                  "Every driver passes identity and background checks. Your safety first.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 mx-auto">
                  <feature.Icon size={22} className="text-emerald-600" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              How it works
            </h2>
            <p className="text-zinc-500 mt-2 max-w-md mx-auto text-sm sm:text-base">
              Three simple steps to get where you need to go.
            </p>
          </motion.div>

          {/* Mobile: vertical with connecting line */}
          <div className="flex flex-col items-center lg:hidden">
            {[
              {
                step: "1",
                title: "Request",
                description:
                  "Enter your destination and see the fare upfront. No surprises.",
              },
              {
                step: "2",
                title: "Ride",
                description:
                  "A verified driver picks you up. Track your trip in real-time.",
              },
              {
                step: "3",
                title: "Arrive",
                description:
                  "Get dropped off safely. Pay through the app and rate your driver.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                {i < 2 && (
                  <div className="w-px h-8 bg-zinc-300" />
                )}
                {i < 2 ? null : <div className="h-4" />}
                <h3 className="text-base font-semibold text-zinc-900 mt-3 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-8">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Request",
                description:
                  "Enter your destination and see the fare upfront. No surprises.",
              },
              {
                step: "2",
                title: "Ride",
                description:
                  "A verified driver picks you up. Track your trip in real-time.",
              },
              {
                step: "3",
                title: "Arrive",
                description:
                  "Get dropped off safely. Pay through the app and rate your driver.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fade}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
          >
            {[
              { value: "5,000+", label: "Active riders" },
              { value: "340+", label: "Verified drivers" },
              { value: "28K+", label: "Rides completed" },
              { value: "4.8", label: "Average rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fade}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 px-6 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fade}>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-3">
              Ready to ride?
            </h2>
            <p className="text-zinc-500 mb-8 max-w-md mx-auto text-sm sm:text-base">
              Join thousands of riders and drivers across Nigeria. Sign up
              in under a minute.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto sm:max-w-none">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 h-12 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-semibold text-sm px-8 transition-colors w-full sm:w-auto"
              >
                Get Started
                <PiArrowRightBold size={15} />
              </Link>
              <Link
                href="/register?role=driver"
                className="inline-flex items-center justify-center h-12 border border-zinc-300 hover:border-zinc-400 text-zinc-700 rounded-xl font-semibold text-sm px-8 transition-colors w-full sm:w-auto"
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
