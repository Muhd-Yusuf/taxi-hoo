"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Navigation,
  Shield,
  Clock,
  Star,
  ChevronRight,
  ArrowRight,
  Car,
  Users,
  Banknote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-dark pt-[72px]">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-24">
            {/* Left */}
            <div>
              <h1 className="text-[42px] sm:text-[52px] lg:text-[62px] font-extrabold text-white leading-[1.08] tracking-tight">
                Go anywhere
                <br />
                with <span className="text-primary">Taxi-Hoo</span>
              </h1>
              <p className="mt-5 text-[17px] text-gray-400 leading-relaxed max-w-[440px]">
                Request a ride, hop in, and go. Available in your city, ready when you are.
              </p>

              {/* Booking widget */}
              <div className="mt-8 bg-dark-light rounded-2xl p-5 max-w-[420px] border border-dark-border">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-dark-lighter rounded-xl px-4 py-3.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-success flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Pickup location"
                      className="bg-transparent text-[15px] text-white placeholder:text-gray-500 outline-none w-full"
                    />
                  </div>
                  <div className="flex items-center gap-3 bg-dark-lighter rounded-xl px-4 py-3.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-primary flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="bg-transparent text-[15px] text-white placeholder:text-gray-500 outline-none w-full"
                    />
                  </div>
                </div>
                <Link
                  href="/passenger/book"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-dark text-[15px] font-bold py-3.5 rounded-xl transition-colors"
                >
                  See prices
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Right — Logo showcase */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                  <Image
                    src="/logo.jpeg"
                    alt="Taxi-Hoo"
                    width={220}
                    height={220}
                    className="rounded-full shadow-2xl shadow-primary/20"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-3 -left-6 bg-dark-light border border-dark-border rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-success/20 flex items-center justify-center">
                      <Navigation size={16} className="text-success" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">Driver arriving</p>
                      <p className="text-[11px] text-gray-500">3 min away</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-4 bg-dark-light border border-dark-border rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-[13px] font-semibold text-white">4.8</span>
                    <span className="text-[11px] text-gray-500">avg rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dual CTA — Ride / Drive ── */}
      <section className="max-w-[1240px] mx-auto px-5 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Ride */}
          <div className="bg-surface-alt rounded-2xl p-8 lg:p-10 group hover:bg-surface-hover transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center mb-6">
              <Car size={24} className="text-primary" />
            </div>
            <h2 className="text-[26px] font-bold text-dark leading-tight mb-3">
              Ride with Taxi-Hoo
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-6 max-w-[380px]">
              Tap a button, get a ride. Set your pickup, choose your destination,
              and let a verified driver come to you.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-dark group-hover:gap-3 transition-all"
            >
              Get started
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Drive */}
          <div className="bg-surface-alt rounded-2xl p-8 lg:p-10 group hover:bg-surface-hover transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
              <Banknote size={24} className="text-dark" />
            </div>
            <h2 className="text-[26px] font-bold text-dark leading-tight mb-3">
              Earn as a driver
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-6 max-w-[380px]">
              Make money on your schedule. Drive when you want, earn what you need.
              No boss, no office, just you and the road.
            </p>
            <Link
              href="/register?role=driver"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-dark group-hover:gap-3 transition-all"
            >
              Start driving
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-surface-alt">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-8 py-20">
          <p className="text-[13px] font-semibold text-text-muted uppercase tracking-[0.08em] mb-3">
            How it works
          </p>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-dark leading-tight mb-14">
            Get a ride in minutes
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-14">
            {[
              {
                step: "1",
                title: "Request",
                desc: "Open the app, enter where you want to go. We'll show you nearby drivers and the fare upfront.",
                icon: MapPin,
              },
              {
                step: "2",
                title: "Ride",
                desc: "A verified driver picks you up. Track the trip in real-time and share your status with family.",
                icon: Navigation,
              },
              {
                step: "3",
                title: "Arrive",
                desc: "Get dropped off safely. Pay seamlessly and rate your experience to help the community.",
                icon: Star,
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-dark flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-[40px] font-extrabold text-border leading-none select-none">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section className="max-w-[1240px] mx-auto px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[13px] font-semibold text-text-muted uppercase tracking-[0.08em] mb-3">
              Safety
            </p>
            <h2 className="text-[32px] sm:text-[38px] font-bold text-dark leading-tight mb-5">
              Your safety drives everything we do
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-8 max-w-[460px]">
              Every trip on Taxi-Hoo is backed by safety features designed to protect you. From the moment you request to the moment you arrive.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Verified drivers",
                  desc: "Every driver passes background and identity checks before they can accept rides.",
                },
                {
                  title: "Real-time GPS tracking",
                  desc: "Share your trip with friends or family. They can follow along live.",
                },
                {
                  title: "24/7 support",
                  desc: "Our safety team is available around the clock. Help is always one tap away.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield size={14} className="text-success" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-dark mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="bg-surface-alt rounded-3xl p-8 lg:p-10">
            <div className="space-y-4">
              {[
                { label: "Driver verified", sub: "ID check complete", color: "bg-success/10", iconColor: "text-success", Icon: Shield },
                { label: "Trip started", sub: "GPS tracking active", color: "bg-info/10", iconColor: "text-info", Icon: Navigation },
                { label: "Estimated arrival", sub: "12 min · 5.4 km", color: "bg-primary/10", iconColor: "text-primary-dark", Icon: Clock },
                { label: "Share trip", sub: "3 contacts notified", color: "bg-success/10", iconColor: "text-success", Icon: Users },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-border"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.Icon size={18} className={item.iconColor} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-dark">{item.label}</p>
                    <p className="text-[12px] text-text-muted">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-dark">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { value: "5,000+", label: "Riders" },
              { value: "340+", label: "Drivers" },
              { value: "28K+", label: "Rides completed" },
              { value: "4.8", label: "Average rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[36px] lg:text-[44px] font-extrabold text-white leading-none">
                  {s.value}
                </p>
                <p className="text-[13px] text-gray-500 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Driver CTA ── */}
      <section className="max-w-[1240px] mx-auto px-5 lg:px-8 py-20">
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-14">
              <h2 className="text-[30px] sm:text-[36px] font-bold text-dark leading-tight mb-4">
                Drive when you want, earn what you need
              </h2>
              <p className="text-[15px] text-dark/70 leading-relaxed mb-8 max-w-[400px]">
                Join hundreds of drivers earning with Taxi-Hoo. Flexible hours, competitive rates, and full control over your schedule.
              </p>
              <Link
                href="/register?role=driver"
                className="inline-flex items-center gap-2 bg-dark hover:bg-dark-light text-white text-[15px] font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Get started
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center p-10">
              <Image
                src="/logo.jpeg"
                alt="Drive with Taxi-Hoo"
                width={200}
                height={200}
                className="rounded-2xl shadow-xl opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
