"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PiCarFill,
  PiCurrencyNgnBold,
  PiArrowRightBold,
  PiCheckCircleFill,
  PiStarFill,
  PiShieldCheckFill,
  PiNavigationArrowFill,
  PiMapPinFill,
  PiCaretDownBold,
  PiCaretUpBold,
} from "react-icons/pi";
import { RiMapPin2Fill } from "react-icons/ri";
import { TbRoute } from "react-icons/tb";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-[15px] font-semibold text-zinc-900 pr-4 group-hover:text-emerald-600 transition-colors">
          {question}
        </span>
        <span className="text-zinc-400 flex-shrink-0">
          {isOpen ? <PiCaretUpBold size={14} /> : <PiCaretDownBold size={14} />}
        </span>
      </button>
      {isOpen && (
        <p className="text-sm text-zinc-500 leading-relaxed pb-5 pr-8">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative bg-zinc-950 overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-emerald-400">Available in Lagos, Abuja & PH</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
                Your ride,
                <br />
                <span className="text-emerald-400">reimagined.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-md">
                Request a ride in seconds. Transparent pricing, verified drivers,
                and a seamless experience from pickup to drop-off.
              </p>

              {/* Booking Widget */}
              <div className="mt-8 sm:mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-6 max-w-md">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Pickup location"
                      className="w-full bg-zinc-800/70 border border-zinc-700/50 text-white placeholder:text-zinc-500 text-sm rounded-xl px-4 h-12 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="w-full bg-zinc-800/70 border border-zinc-700/50 text-white placeholder:text-zinc-500 text-sm rounded-xl px-4 h-12 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <Link
                    href="/passenger/book"
                    className="flex items-center justify-center gap-2 w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl transition-colors mt-1"
                  >
                    See prices <PiArrowRightBold size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — Visual (lg only) */}
            <div className="hidden lg:flex justify-center">
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

                {/* Floating: Rating */}
                <div className="absolute -top-2 -right-6 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3 shadow-2xl shadow-black/50">
                  <div className="flex items-center gap-2">
                    <PiStarFill size={15} className="text-emerald-400" />
                    <span className="text-sm font-bold text-white">4.9</span>
                    <span className="text-xs text-zinc-500">avg rating</span>
                  </div>
                </div>

                {/* Floating: Driver arriving */}
                <div className="absolute -bottom-4 -left-8 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3.5 shadow-2xl shadow-black/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center">
                      <PiNavigationArrowFill size={14} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">Driver arriving</p>
                      <p className="text-[11px] text-zinc-500">3 min away</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ride / Drive Cards ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Ride Card */}
            <div className="group bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/60 rounded-2xl p-8 sm:p-10 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6">
                <PiCarFill size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-zinc-900 mb-3">
                Ride with Taxi-Hoo
              </h3>
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 max-w-sm">
                Tap a button, get a ride. Set your pickup, choose your
                destination, and a verified driver comes to you.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:gap-3 transition-all"
              >
                Get started <PiArrowRightBold size={13} />
              </Link>
            </div>

            {/* Drive Card */}
            <div className="group bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/60 rounded-2xl p-8 sm:p-10 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6">
                <PiCurrencyNgnBold size={24} className="text-white" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-zinc-900 mb-3">
                Earn as a driver
              </h3>
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 max-w-sm">
                Make money on your schedule. Drive when you want, earn
                what you need. No boss, no office.
              </p>
              <Link
                href="/register?role=driver"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:gap-3 transition-all"
              >
                Start driving <PiArrowRightBold size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="bg-zinc-50 border-y border-zinc-200/60 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-12 sm:mb-16">
            Get a ride in minutes
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Request",
                desc: "Enter your destination. We show you nearby drivers and the fare upfront — no surprises.",
                Icon: RiMapPin2Fill,
              },
              {
                step: "02",
                title: "Ride",
                desc: "A verified driver picks you up. Track the trip live and share your status in real-time.",
                Icon: TbRoute,
              },
              {
                step: "03",
                title: "Arrive",
                desc: "Get dropped off safely. Pay seamlessly through the app and rate your experience.",
                Icon: PiCheckCircleFill,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-zinc-200/60 rounded-2xl p-7 sm:p-8"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <item.Icon size={20} className="text-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Safety ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-3">
                Safety first
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-5">
                Your safety drives everything we do
              </h2>
              <p className="text-[15px] text-zinc-500 leading-relaxed mb-8 max-w-md">
                Every trip is backed by features designed to protect you — from
                the moment you request a ride to the second you arrive.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Verified drivers",
                    desc: "Background and identity verification for every driver.",
                    Icon: PiShieldCheckFill,
                  },
                  {
                    title: "Real-time GPS tracking",
                    desc: "Share your trip live with friends or family.",
                    Icon: PiNavigationArrowFill,
                  },
                  {
                    title: "24/7 support",
                    desc: "Our safety team is available around the clock.",
                    Icon: PiMapPinFill,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <item.Icon size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety status cards */}
            <div className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6 sm:p-8 space-y-3">
              {[
                { label: "Driver verified", sub: "ID check complete", color: "bg-emerald-50 text-emerald-600" },
                { label: "Trip started", sub: "GPS tracking active", color: "bg-blue-50 text-blue-600" },
                { label: "Estimated arrival", sub: "12 min · 5.4 km", color: "bg-amber-50 text-amber-600" },
                { label: "Share trip", sub: "3 contacts notified", color: "bg-emerald-50 text-emerald-600" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-zinc-200/60 rounded-xl px-5 py-4 flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color.split(" ")[0]} flex items-center justify-center flex-shrink-0`}>
                    <PiCheckCircleFill size={18} className={item.color.split(" ")[1]} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-zinc-950 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {[
              { value: "5,000+", label: "Active riders" },
              { value: "340+", label: "Verified drivers" },
              { value: "28K+", label: "Rides completed" },
              { value: "4.8", label: "Average rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 mt-2 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Driver CTA ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-emerald-500 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 sm:p-12 lg:p-14">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
                  Drive when you want,
                  <br />
                  earn what you need
                </h2>
                <p className="text-[15px] text-white/80 leading-relaxed mb-8 max-w-sm">
                  Join hundreds of drivers building their income with Taxi-Hoo.
                  Flexible hours and competitive rates.
                </p>
                <Link
                  href="/register?role=driver"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Get started <PiArrowRightBold size={13} />
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center p-12">
                <Image
                  src="/logo.jpeg"
                  alt="Drive with Taxi-Hoo"
                  width={180}
                  height={180}
                  className="rounded-3xl shadow-2xl opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.15em] mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="bg-white border border-zinc-200/60 rounded-2xl p-6 sm:p-8">
            <FAQItem
              question="How do I book a ride?"
              answer="Open the Taxi-Hoo app, enter your pickup and destination, and tap 'See prices'. You'll see nearby drivers and estimated fares. Confirm and a driver will be on their way."
            />
            <FAQItem
              question="Is Taxi-Hoo safe?"
              answer="Safety is our priority. All drivers pass background checks. Every trip includes GPS tracking, and you can share ride status with trusted contacts. Our safety team is available 24/7."
            />
            <FAQItem
              question="How do drivers get paid?"
              answer="Drivers receive earnings directly through the app. Payments are processed weekly with optional instant cashout. Taxi-Hoo takes a small commission."
            />
            <FAQItem
              question="What cities is Taxi-Hoo available in?"
              answer="Currently available in Lagos, Abuja, and Port Harcourt. We're expanding to more cities across Nigeria."
            />
            <FAQItem
              question="How do I become a driver?"
              answer="Sign up, submit your vehicle details and license, pass our verification, and start accepting rides immediately."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
