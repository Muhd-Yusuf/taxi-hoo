"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PiCarFill,
  PiMapPinFill,
  PiClockFill,
  PiDeviceMobileFill,
  PiArrowRightBold,
} from "react-icons/pi";

const slides = [
  {
    title: "Anywhere you are",
    description:
      "Request a ride from anywhere. Our drivers are always nearby and ready to pick you up.",
  },
  {
    title: "At anytime",
    description:
      "Day or night, rain or shine. Reliable rides available 24/7 whenever you need them.",
  },
  {
    title: "Book your car",
    description:
      "Choose your ride, set your destination, and get moving in just a few taps.",
  },
];

/* ---------- Slide Illustrations ---------- */

function Slide1Illustration() {
  return (
    <div className="relative flex items-end justify-center w-full h-full">
      {/* City silhouette */}
      <div className="absolute bottom-16 flex items-end gap-1.5 opacity-40">
        <div className="w-6 h-20 bg-zinc-200 rounded-t-sm" />
        <div className="w-5 h-28 bg-zinc-200 rounded-t-sm" />
        <div className="w-7 h-16 bg-zinc-200 rounded-t-sm" />
        <div className="w-4 h-24 bg-zinc-200 rounded-t-sm" />
        <div className="w-6 h-32 bg-zinc-200 rounded-t-sm" />
        <div className="w-5 h-14 bg-zinc-200 rounded-t-sm" />
        <div className="w-7 h-22 bg-zinc-200 rounded-t-sm" />
        <div className="w-4 h-18 bg-zinc-200 rounded-t-sm" />
      </div>

      {/* Map pin floating */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-16"
      >
        <PiMapPinFill size={32} className="text-red-500" />
      </motion.div>

      {/* Car on road shape */}
      <div className="relative mb-10">
        <div className="w-56 h-20 bg-brand-100 rounded-[40px] flex items-center justify-center">
          <PiCarFill size={72} className="text-brand-500" />
        </div>
      </div>
    </div>
  );
}

function Slide2Illustration() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      {/* Circular background */}
      <div className="w-48 h-48 bg-brand-50 rounded-full flex flex-col items-center justify-center gap-2">
        <PiClockFill size={72} className="text-brand-500" />
        <PiCarFill size={40} className="text-brand-400" />
      </div>
    </div>
  );
}

function Slide3Illustration() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Oval background */}
      <div className="w-56 h-44 bg-brand-50 rounded-[60px] flex items-center justify-center gap-3">
        <PiDeviceMobileFill size={72} className="text-brand-500" />
        <PiCarFill size={48} className="text-brand-600" />
      </div>
    </div>
  );
}

const illustrations = [Slide1Illustration, Slide2Illustration, Slide3Illustration];

/* ---------- Main Component ---------- */

export default function OnboardingPage() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSlide = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: index * container.clientWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      scrollToSlide(activeIndex + 1);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col max-w-md mx-auto">
      {/* Skip */}
      <div className="absolute top-0 right-0 z-10 p-5">
        <Link
          href="/login"
          className="text-sm font-medium text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          Skip
        </Link>
      </div>

      {/* Slides */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-x-auto snap-x snap-mandatory flex scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, i) => {
          const Illustration = illustrations[i];
          return (
            <div
              key={i}
              className="min-w-full snap-center h-[100dvh] flex flex-col"
            >
              {/* Top illustration area — 55% */}
              <div className="flex-[55] flex items-center justify-center px-8 pt-12">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Illustration />
                </motion.div>
              </div>

              {/* Bottom text area */}
              <div className="flex-[45] flex flex-col items-center justify-start px-8 pt-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-center max-w-sm"
                >
                  <h2 className="text-xl font-bold text-zinc-900 mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {slide.description}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 pb-10 px-8 flex items-center justify-between">
        {/* Pagination dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-brand-500"
                  : "w-2 bg-zinc-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Circular next button */}
        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-full bg-brand-500 hover:bg-brand-600 active:bg-brand-700 shadow-lg shadow-brand-500/30 flex items-center justify-center text-white transition-colors"
        >
          {activeIndex === slides.length - 1 ? (
            <span className="text-sm font-bold">Go</span>
          ) : (
            <PiArrowRightBold size={20} />
          )}
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
