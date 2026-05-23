"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Shield,
  Clock,
  Star,
  DollarSign,
  Smartphone,
  Users,
  Car,
  CheckCircle2,
  ArrowRight,
  Zap,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: MapPin,
    title: "Instant Booking",
    desc: "Request a taxi in seconds. Select your pickup and destination, and get matched with a nearby driver instantly.",
  },
  {
    icon: Navigation,
    title: "Live Tracking",
    desc: "Track your driver in real-time on the map. See estimated arrival time and follow the trip as it happens.",
  },
  {
    icon: DollarSign,
    title: "Fare Estimation",
    desc: "Know your trip cost before booking. Transparent pricing with no hidden charges or surge surprises.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    desc: "Rate your driver after every trip. Help maintain quality service across the entire platform.",
  },
  {
    icon: Clock,
    title: "Ride History",
    desc: "Access all your previous trips, view ride details, and easily rebook your favorite destinations.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "Verified drivers, secure communications, and data protection ensure your safety on every ride.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Set Your Location",
    desc: "Enter your pickup point and destination. The app automatically detects your current location.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Get Matched",
    desc: "We connect you with the nearest available driver. View their profile, vehicle info, and rating.",
    icon: Users,
  },
  {
    step: "03",
    title: "Track & Ride",
    desc: "Watch your driver approach in real time. Enjoy a safe, comfortable ride to your destination.",
    icon: Car,
  },
  {
    step: "04",
    title: "Pay & Rate",
    desc: "Pay conveniently and rate your experience. Your feedback helps us serve you better.",
    icon: Star,
  },
];

const stats = [
  { value: "5,000+", label: "Happy Passengers" },
  { value: "340+", label: "Verified Drivers" },
  { value: "28,000+", label: "Rides Completed" },
  { value: "4.8", label: "Average Rating" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-dark overflow-hidden pt-16">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #F5B800 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
              >
                <Zap size={14} className="text-primary" />
                <span className="text-primary text-sm font-medium">
                  Fast. Safe. Reliable.
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Your Ride,{" "}
                <span className="text-primary">Just a Tap Away</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
              >
                Connect with nearby taxi drivers instantly. Book rides, track
                in real-time, and arrive safely at your destination with
                Taxi-Hoo.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/register"
                  className="bg-primary hover:bg-primary-hover text-dark font-bold px-8 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2"
                >
                  Book a Ride
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/register?role=driver"
                  className="border-2 border-white/20 hover:border-primary text-white hover:text-primary font-semibold px-8 py-3.5 rounded-full transition-all"
                >
                  Become a Driver
                </Link>
              </motion.div>

              {/* Stats inline */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-primary">
                      {s.value}
                    </p>
                    <p className="text-sm text-gray-500">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero image / illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-primary/20 flex items-center justify-center">
                    <Image
                      src="/logo.jpeg"
                      alt="Taxi-Hoo"
                      width={200}
                      height={200}
                      className="rounded-full"
                    />
                  </div>
                </div>
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success-light flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      Driver Matched!
                    </p>
                    <p className="text-xs text-text-muted">Arriving in 3 min</p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <Navigation size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      Live Tracking
                    </p>
                    <p className="text-xs text-text-muted">Real-time updates</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
            >
              Features
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-dark mb-4"
            >
              Everything You Need for a{" "}
              <span className="text-primary">Perfect Ride</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary max-w-2xl mx-auto"
            >
              From booking to arrival, Taxi-Hoo provides a seamless
              experience with powerful features for both passengers and
              drivers.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <f.icon
                    size={22}
                    className="text-primary group-hover:text-dark transition-colors"
                  />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-dark mb-4"
            >
              Get a Ride in{" "}
              <span className="text-primary">4 Simple Steps</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {howItWorks.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-5 flex items-center justify-center shadow-lg shadow-primary/25">
                  <item.icon size={28} className="text-dark" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Step {item.step}
                </span>
                <h3 className="text-lg font-semibold text-dark mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 lg:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-2"
              >
                Safety First
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-white mb-6"
              >
                Your Safety is Our{" "}
                <span className="text-primary">Top Priority</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                We go the extra mile to ensure every ride is safe, secure, and
                comfortable. From driver verification to real-time tracking,
                your well-being comes first.
              </motion.p>

              <motion.ul variants={stagger} className="space-y-4">
                {[
                  "All drivers are verified and background-checked",
                  "Real-time GPS tracking on every trip",
                  "24/7 customer support available",
                  "In-app emergency assistance button",
                  "Secure end-to-end encrypted communication",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden lg:block"
            >
              <div className="bg-dark-light rounded-3xl p-8 border border-white/5">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-dark-lighter rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Shield size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Driver Verified
                      </p>
                      <p className="text-sm text-gray-400">
                        ID & background check passed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-dark-lighter rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                      <Navigation size={24} className="text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Trip Active</p>
                      <p className="text-sm text-gray-400">
                        GPS tracking enabled
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-dark-lighter rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center">
                      <Phone size={24} className="text-info" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Support Ready
                      </p>
                      <p className="text-sm text-gray-400">
                        24/7 help available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA for Drivers */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-primary rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25px 25px, #000 2px, transparent 0)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="relative">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-dark/10 rounded-full px-4 py-1.5 mb-6"
              >
                <Smartphone size={14} className="text-dark" />
                <span className="text-dark text-sm font-medium">
                  Join Our Driver Network
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-dark mb-4"
              >
                Drive with Taxi-Hoo & Earn More
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-dark/70 mb-8 max-w-xl mx-auto"
              >
                Set your own schedule, earn competitive rates, and be part of
                a growing transportation network. Join hundreds of drivers
                already earning with us.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/register?role=driver"
                  className="bg-dark hover:bg-dark-light text-white font-bold px-8 py-3.5 rounded-full transition-all hover:shadow-xl flex items-center gap-2"
                >
                  Start Driving
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/#how-it-works"
                  className="border-2 border-dark/20 hover:border-dark text-dark font-semibold px-8 py-3.5 rounded-full transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
