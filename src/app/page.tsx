"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PiMapPinFill, PiNavigationArrowFill, PiStarFill, PiShieldCheckFill, PiCarFill, PiCurrencyNgnBold, PiUsersFill, PiArrowRightBold, PiLightningFill, PiPhoneFill, PiClockFill, PiCheckCircleFill } from "react-icons/pi";
import { RiShieldStarLine, RiMapPin2Fill, RiNavigationFill } from "react-icons/ri";
import { TbRoute } from "react-icons/tb";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-dark pt-[68px]">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-14 sm:py-20 lg:py-28">
            <div>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold text-white leading-[1.08] tracking-tight">
                Go anywhere<br />with <span className="text-primary">Taxi-Hoo</span>
              </h1>
              <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-[440px]">
                Request a ride, hop in, and go. Available in your city, ready when you are.
              </p>

              {/* Booking widget */}
              <div className="mt-7 sm:mt-8 bg-dark-light rounded-2xl p-4 sm:p-5 max-w-[420px] border border-dark-border">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 bg-dark-lighter rounded-xl px-4 py-3 sm:py-3.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-success flex-shrink-0" />
                    <input type="text" placeholder="Pickup location" className="bg-transparent text-[14px] text-white placeholder:text-gray-500 outline-none w-full" />
                  </div>
                  <div className="flex items-center gap-3 bg-dark-lighter rounded-xl px-4 py-3 sm:py-3.5">
                    <div className="w-2.5 h-2.5 rounded-sm bg-primary flex-shrink-0" />
                    <input type="text" placeholder="Where to?" className="bg-transparent text-[14px] text-white placeholder:text-gray-500 outline-none w-full" />
                  </div>
                </div>
                <Link href="/passenger/book" className="mt-3.5 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-dark text-[14px] font-bold py-3 sm:py-3.5 rounded-xl transition-colors">
                  See prices <PiArrowRightBold size={15} />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                  <Image src="/logo.jpeg" alt="Taxi-Hoo" width={210} height={210} className="rounded-full shadow-2xl shadow-primary/20" />
                </div>
                <div className="absolute -bottom-3 -left-8 bg-dark-light border border-dark-border rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-success/20 flex items-center justify-center">
                      <PiNavigationArrowFill size={15} className="text-success" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-white">Driver arriving</p>
                      <p className="text-[10px] text-gray-500">3 min away</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-6 bg-dark-light border border-dark-border rounded-xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <PiStarFill size={14} className="text-primary" />
                    <span className="text-[12px] font-semibold text-white">4.8</span>
                    <span className="text-[10px] text-gray-500">avg rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ride / Drive ── */}
      <section className="max-w-[1240px] mx-auto px-5 lg:px-8 py-14 sm:py-20">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <div className="bg-surface-alt rounded-2xl p-7 sm:p-8 lg:p-10 group hover:bg-surface-hover transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-dark flex items-center justify-center mb-5 sm:mb-6">
              <PiCarFill size={24} className="text-primary" />
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-dark leading-tight mb-2 sm:mb-3">Ride with Taxi-Hoo</h2>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-5 sm:mb-6 max-w-[380px]">
              Tap a button, get a ride. Set your pickup, choose your destination, and a verified driver comes to you.
            </p>
            <Link href="/register" className="inline-flex items-center gap-2 text-[14px] font-semibold text-dark group-hover:gap-3 transition-all">
              Get started <PiArrowRightBold size={14} />
            </Link>
          </div>
          <div className="bg-surface-alt rounded-2xl p-7 sm:p-8 lg:p-10 group hover:bg-surface-hover transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 sm:mb-6">
              <PiCurrencyNgnBold size={24} className="text-dark" />
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-dark leading-tight mb-2 sm:mb-3">Earn as a driver</h2>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-5 sm:mb-6 max-w-[380px]">
              Make money on your schedule. Drive when you want, earn what you need. No boss, just the road.
            </p>
            <Link href="/register?role=driver" className="inline-flex items-center gap-2 text-[14px] font-semibold text-dark group-hover:gap-3 transition-all">
              Start driving <PiArrowRightBold size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-surface-alt">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-8 py-14 sm:py-20">
          <p className="text-[12px] font-semibold text-text-muted uppercase tracking-[0.1em] mb-2">How it works</p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-dark leading-tight mb-10 sm:mb-14">Get a ride in minutes</h2>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
            {[
              { step: "1", title: "Request", desc: "Enter your destination. We show nearby drivers and the fare upfront — no surprises.", Icon: RiMapPin2Fill },
              { step: "2", title: "Ride", desc: "A verified driver picks you up. Track the trip live and share your status with family.", Icon: TbRoute },
              { step: "3", title: "Arrive", desc: "Get dropped off safely. Pay seamlessly and rate your experience.", Icon: PiCheckCircleFill },
            ].map((item) => (
              <div key={item.step}>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-dark flex items-center justify-center flex-shrink-0">
                    <item.Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-[36px] sm:text-[40px] font-extrabold text-border leading-none select-none">{item.step}</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety ── */}
      <section className="max-w-[1240px] mx-auto px-5 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="text-[12px] font-semibold text-text-muted uppercase tracking-[0.1em] mb-2">Safety</p>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-dark leading-tight mb-4 sm:mb-5">Your safety drives everything we do</h2>
            <p className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-[460px]">
              Every trip is backed by safety features designed to protect you — from request to arrival.
            </p>
            <div className="space-y-4 sm:space-y-5">
              {[
                { title: "Verified drivers", desc: "Every driver passes background and identity checks.", Icon: RiShieldStarLine },
                { title: "Real-time GPS tracking", desc: "Share your trip live with friends or family.", Icon: PiNavigationArrowFill },
                { title: "24/7 support", desc: "Our safety team is available around the clock.", Icon: PiPhoneFill },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.Icon size={14} className="text-success" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-dark mb-0.5">{item.title}</h4>
                    <p className="text-[12px] sm:text-[13px] text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-alt rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-3 sm:space-y-4">
              {[
                { label: "Driver verified", sub: "ID check complete", Icon: PiShieldCheckFill, color: "text-success", bg: "bg-success/10" },
                { label: "Trip started", sub: "GPS tracking active", Icon: RiNavigationFill, color: "text-info", bg: "bg-info/10" },
                { label: "Estimated arrival", sub: "12 min · 5.4 km", Icon: PiClockFill, color: "text-primary-dark", bg: "bg-primary/10" },
                { label: "Share trip", sub: "3 contacts notified", Icon: PiUsersFill, color: "text-success", bg: "bg-success/10" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3.5 sm:p-4 border border-border">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.Icon size={17} className={item.color} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-dark">{item.label}</p>
                    <p className="text-[11px] text-text-muted">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-dark">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
            {[
              { value: "5,000+", label: "Riders" },
              { value: "340+", label: "Drivers" },
              { value: "28K+", label: "Rides completed" },
              { value: "4.8", label: "Average rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold text-white leading-none">{s.value}</p>
                <p className="text-[11px] sm:text-[13px] text-gray-500 mt-1.5 sm:mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Driver CTA ── */}
      <section className="max-w-[1240px] mx-auto px-5 lg:px-8 py-14 sm:py-20">
        <div className="bg-primary rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 sm:p-10 lg:p-14">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-dark leading-tight mb-3 sm:mb-4">
                Drive when you want, earn what you need
              </h2>
              <p className="text-[14px] text-dark/70 leading-relaxed mb-6 sm:mb-8 max-w-[400px]">
                Join hundreds of drivers earning with Taxi-Hoo. Flexible hours, competitive rates, full control.
              </p>
              <Link href="/register?role=driver" className="inline-flex items-center gap-2 bg-dark hover:bg-dark-light text-white text-[14px] font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-colors">
                Get started <PiArrowRightBold size={14} />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center p-10">
              <Image src="/logo.jpeg" alt="Drive with Taxi-Hoo" width={190} height={190} className="rounded-2xl shadow-xl opacity-90" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
