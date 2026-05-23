"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  PiMapPinFill,
  PiNavigationArrowFill,
  PiStarFill,
  PiShieldCheckFill,
  PiCarFill,
  PiCurrencyNgnBold,
  PiUsersFill,
  PiArrowRightBold,
  PiLightningFill,
  PiPhoneFill,
  PiClockFill,
  PiCheckCircleFill,
  PiCaretDownBold,
  PiCaretUpBold,
  PiQuotesFill,
} from "react-icons/pi";
import { RiShieldStarLine, RiMapPin2Fill, RiNavigationFill } from "react-icons/ri";
import { TbRoute } from "react-icons/tb";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group cursor-pointer"
      >
        <span className="text-[15px] sm:text-base font-semibold text-dark pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <span className="text-text-muted flex-shrink-0">
          {open ? <PiCaretUpBold size={16} /> : <PiCaretDownBold size={16} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed pb-5 sm:pb-6 pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-dark pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text + Booking */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                Your ride,
                <br />
                reimagined
              </h1>
              <p className="mt-5 sm:mt-6 text-[15px] sm:text-base text-zinc-400 leading-relaxed max-w-[480px]">
                Request a ride in seconds. Transparent pricing, verified drivers,
                and a seamless experience from pickup to drop-off.
              </p>

              {/* Booking widget */}
              <Card className="mt-8 sm:mt-10 bg-zinc-900 border-zinc-800 max-w-[440px] ring-0">
                <CardContent className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-success flex-shrink-0" />
                    <Input
                      type="text"
                      placeholder="Pickup location"
                      className="bg-zinc-800/60 border-zinc-700/50 text-white placeholder:text-zinc-500 h-11 rounded-xl focus-visible:ring-primary/30 focus-visible:border-primary/50"
                    />
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-primary flex-shrink-0" />
                    <Input
                      type="text"
                      placeholder="Where to?"
                      className="bg-zinc-800/60 border-zinc-700/50 text-white placeholder:text-zinc-500 h-11 rounded-xl focus-visible:ring-primary/30 focus-visible:border-primary/50"
                    />
                  </div>
                  <Link
                    href="/passenger/book"
                    className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary-hover text-white w-full h-12 rounded-xl text-sm font-semibold mt-1 cursor-pointer" })}
                  >
                    See prices <PiArrowRightBold size={15} />
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Right — Visual (lg only) */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glow ring */}
                <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-primary/20 via-primary/8 to-transparent flex items-center justify-center shadow-[0_0_120px_rgba(16,185,129,0.15)]">
                  <Image
                    src="/logo.jpeg"
                    alt="Taxi-Hoo"
                    width={220}
                    height={220}
                    className="rounded-full shadow-2xl shadow-primary/25"
                  />
                </div>

                {/* Floating card — Rating */}
                <Card className="absolute -top-4 -right-10 bg-zinc-900 border-zinc-800 ring-0 shadow-2xl shadow-black/40">
                  <CardContent className="px-5 py-3.5 flex items-center gap-2.5">
                    <PiStarFill size={16} className="text-primary" />
                    <span className="text-sm font-bold text-white">4.9</span>
                    <span className="text-xs text-zinc-500">avg rating</span>
                  </CardContent>
                </Card>

                {/* Floating card — Driver arriving */}
                <Card className="absolute -bottom-6 -left-12 bg-zinc-900 border-zinc-800 ring-0 shadow-2xl shadow-black/40">
                  <CardContent className="px-5 py-4 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-success/15 flex items-center justify-center">
                      <PiNavigationArrowFill size={16} className="text-success" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">Driver arriving</p>
                      <p className="text-[11px] text-zinc-500">3 min away</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ride / Drive CTAs ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <Card className="bg-surface-alt border-border/50 shadow-sm hover:shadow-md transition-all group ring-0 rounded-2xl">
              <CardContent className="p-8 sm:p-10">
                <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center mb-6">
                  <PiCarFill size={26} className="text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-[28px] font-bold text-dark leading-tight mb-3">
                  Ride with Taxi-Hoo
                </CardTitle>
                <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-[400px]">
                  Tap a button, get a ride. Set your pickup, choose your
                  destination, and a verified driver comes to you. It is that
                  simple.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dark group-hover:gap-3 transition-all"
                >
                  Get started <PiArrowRightBold size={14} />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-surface-alt border-border/50 shadow-sm hover:shadow-md transition-all group ring-0 rounded-2xl">
              <CardContent className="p-8 sm:p-10">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <PiCurrencyNgnBold size={26} className="text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-[28px] font-bold text-dark leading-tight mb-3">
                  Earn as a driver
                </CardTitle>
                <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-[400px]">
                  Make money on your schedule. Drive when you want, earn what you
                  need. No boss, no office — just the open road and your
                  earnings.
                </p>
                <Link
                  href="/register?role=driver"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-dark group-hover:gap-3 transition-all"
                >
                  Start driving <PiArrowRightBold size={14} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mb-3">
            How it works
          </p>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold text-dark tracking-tight mb-12 sm:mb-16 lg:mb-20">
            Get a ride in minutes
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
            {[
              {
                step: "Step 1",
                title: "Request",
                desc: "Enter your destination. We show you nearby drivers and the fare upfront — no surprises, no hidden charges.",
                Icon: RiMapPin2Fill,
              },
              {
                step: "Step 2",
                title: "Ride",
                desc: "A verified driver picks you up. Track the trip live and share your status with friends or family in real-time.",
                Icon: TbRoute,
              },
              {
                step: "Step 3",
                title: "Arrive",
                desc: "Get dropped off safely at your destination. Pay seamlessly through the app and rate your experience.",
                Icon: PiCheckCircleFill,
              },
            ].map((item) => (
              <Card key={item.step} className="bg-white border-border/50 shadow-sm ring-0 rounded-2xl">
                <CardContent className="p-7 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-dark flex items-center justify-center mb-5">
                    <item.Icon size={22} className="text-primary" />
                  </div>
                  <Badge variant="outline" className="mb-3 text-primary border-primary/30 bg-primary/5 font-semibold text-[11px] uppercase tracking-wider">
                    {item.step}
                  </Badge>
                  <CardTitle className="text-lg sm:text-xl lg:text-[22px] font-bold text-dark mb-2.5">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mb-3">
                Safety
              </p>
              <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold text-dark tracking-tight leading-tight mb-5 sm:mb-6">
                Your safety drives everything we do
              </h2>
              <p className="text-[15px] sm:text-base text-text-secondary leading-relaxed mb-8 sm:mb-10 max-w-[480px]">
                Every trip is backed by safety features designed to protect you —
                from the moment you request a ride to the second you arrive.
              </p>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    title: "Verified drivers",
                    desc: "Every driver passes rigorous background and identity verification checks before joining.",
                    Icon: RiShieldStarLine,
                  },
                  {
                    title: "Real-time GPS tracking",
                    desc: "Share your trip live with friends or family. They can follow your journey in real-time.",
                    Icon: PiNavigationArrowFill,
                  },
                  {
                    title: "24/7 support",
                    desc: "Our dedicated safety team is available around the clock for any concern, big or small.",
                    Icon: PiPhoneFill,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[13px] sm:text-sm text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Status cards */}
            <Card className="bg-surface-alt ring-0 border-border/50 rounded-2xl sm:rounded-3xl">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-3.5 sm:space-y-4">
                  {[
                    {
                      label: "Driver verified",
                      sub: "ID check complete",
                      Icon: PiShieldCheckFill,
                      color: "text-success",
                      bg: "bg-success/10",
                    },
                    {
                      label: "Trip started",
                      sub: "GPS tracking active",
                      Icon: RiNavigationFill,
                      color: "text-info",
                      bg: "bg-info/10",
                    },
                    {
                      label: "Estimated arrival",
                      sub: "12 min \u00b7 5.4 km",
                      Icon: PiClockFill,
                      color: "text-primary-dark",
                      bg: "bg-primary/10",
                    },
                    {
                      label: "Share trip",
                      sub: "3 contacts notified",
                      Icon: PiUsersFill,
                      color: "text-success",
                      bg: "bg-success/10",
                    },
                  ].map((item) => (
                    <Card
                      key={item.label}
                      className="bg-white ring-0 border-border shadow-sm rounded-xl"
                    >
                      <CardContent className="p-4 sm:p-5 flex items-center gap-4">
                        <div
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                        >
                          <item.Icon size={18} className={item.color} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-dark">
                            {item.label}
                          </p>
                          <p className="text-xs text-text-muted mt-0.5">
                            {item.sub}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {[
              { value: "5,000+", label: "Riders" },
              { value: "340+", label: "Drivers" },
              { value: "28K+", label: "Rides completed" },
              { value: "4.8", label: "Average rating" },
            ].map((s, i) => (
              <div key={s.label}>
                <p className="text-[32px] sm:text-[40px] lg:text-5xl font-extrabold text-white leading-none tracking-tight">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 mt-2 sm:mt-3 font-medium">
                  {s.label}
                </p>
                {i < 3 && (
                  <Separator
                    orientation="vertical"
                    className="hidden lg:block absolute right-0 top-1/4 h-1/2 bg-zinc-800"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mb-3">
              Testimonials
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold text-dark tracking-tight">
              What riders say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                quote:
                  "Taxi-Hoo has completely changed how I get around Lagos. The drivers are always professional, and I feel safe every single trip.",
                name: "Chioma Obi",
                role: "Rider",
                stars: 5,
              },
              {
                quote:
                  "I use Taxi-Hoo for all my business meetings. The app is reliable, the cars are clean, and I always arrive on time. Highly recommended.",
                name: "Abubakar Sani",
                role: "Business Traveler",
                stars: 5,
              },
              {
                quote:
                  "As a daily commuter, Taxi-Hoo saves me so much time and stress. The prices are fair and the drivers know the best routes.",
                name: "Folake Adeyemi",
                role: "Daily Commuter",
                stars: 5,
              },
            ].map((t) => (
              <Card
                key={t.name}
                className="bg-surface-alt border-border/50 shadow-sm ring-0 rounded-2xl flex flex-col"
              >
                <CardContent className="p-6 sm:p-8 flex flex-col flex-1">
                  <PiQuotesFill size={28} className="text-primary/30 mb-4" />
                  <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <PiStarFill key={i} size={14} className="text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-dark">
                        {t.name}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-[11px] font-medium">
                      {t.role}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Driver CTA ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Card className="bg-primary ring-0 border-0 rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-10 sm:p-12 lg:p-16">
                  <h2 className="text-[28px] sm:text-4xl lg:text-[42px] font-bold text-dark leading-[1.1] tracking-tight mb-4 sm:mb-5">
                    Drive when you want, earn what you need
                  </h2>
                  <p className="text-[15px] sm:text-base text-dark/70 leading-relaxed mb-8 sm:mb-10 max-w-[420px]">
                    Join hundreds of drivers building their income with
                    Taxi-Hoo. Flexible hours, competitive rates, and full
                    control over your schedule.
                  </p>
                  <Link
                    href="/register?role=driver"
                    className={buttonVariants({ variant: "secondary", size: "lg", className: "bg-dark hover:bg-dark-light text-white h-12 px-6 rounded-xl font-semibold cursor-pointer" })}
                  >
                    Get started <PiArrowRightBold size={14} />
                  </Link>
                </div>
                <div className="hidden lg:flex items-center justify-center p-12">
                  <Image
                    src="/logo.jpeg"
                    alt="Drive with Taxi-Hoo"
                    width={200}
                    height={200}
                    className="rounded-3xl shadow-2xl opacity-90"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mb-3">
                FAQ
              </p>
              <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold text-dark tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            <Card className="bg-white ring-0 border-border rounded-2xl">
              <CardContent className="p-6 sm:p-8">
                <FAQItem
                  question="How do I book a ride?"
                  answer="Simply open the Taxi-Hoo app, enter your pickup location and destination, and tap 'See prices'. You will see available drivers near you along with the estimated fare. Confirm your ride and a driver will be on their way within minutes."
                />
                <FAQItem
                  question="Is Taxi-Hoo safe?"
                  answer="Safety is our top priority. All drivers undergo thorough background checks and identity verification. Every trip includes real-time GPS tracking, and you can share your ride status with trusted contacts. Our safety team is available 24/7."
                />
                <FAQItem
                  question="How do drivers get paid?"
                  answer="Drivers receive their earnings directly through the app. Payments are processed weekly, with the option for instant cashout. Taxi-Hoo takes a small commission, and the rest goes straight to the driver."
                />
                <FAQItem
                  question="What cities is Taxi-Hoo available in?"
                  answer="Taxi-Hoo is currently available in major Nigerian cities including Lagos, Abuja, and Port Harcourt. We are rapidly expanding to more cities across the country. Check the app for the latest availability in your area."
                />
                <FAQItem
                  question="How do I become a driver?"
                  answer="Getting started as a driver is easy. Sign up on our platform, submit your vehicle details and driver's license, and pass our verification process. Once approved, you can start accepting rides and earning immediately."
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
