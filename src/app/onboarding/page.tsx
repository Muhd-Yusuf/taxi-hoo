"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PiCarFill,
  PiShieldCheckFill,
  PiCurrencyNgnBold,
} from "react-icons/pi";

const slides = [
  {
    Icon: PiCarFill,
    title: "Get a ride in minutes",
    description:
      "Request a ride, get picked up by a nearby driver, and enjoy the journey.",
  },
  {
    Icon: PiShieldCheckFill,
    title: "Safe & secure trips",
    description:
      "Verified drivers, real-time tracking, and 24/7 support for every ride.",
  },
  {
    Icon: PiCurrencyNgnBold,
    title: "Fair transparent pricing",
    description:
      "No hidden charges. See your fare upfront before you confirm.",
  },
];

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
    <div className="fixed inset-0 bg-zinc-950 flex flex-col">
      {/* Skip */}
      <div className="absolute top-0 right-0 z-10 p-5">
        <Link
          href="/login"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
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
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full snap-center h-[100dvh] flex flex-col items-center justify-center px-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 rounded-full bg-emerald-500/10 flex items-center justify-center mb-10">
                <slide.Icon size={64} className="text-emerald-500" />
              </div>

              <h2 className="text-2xl font-bold text-white tracking-tight mb-4 max-w-xs">
                {slide.title}
              </h2>

              <p className="text-base text-zinc-400 leading-relaxed max-w-sm">
                {slide.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 px-8 flex flex-col items-center gap-8">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-emerald-500"
                  : "w-2 bg-zinc-600"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Action button */}
        <button
          onClick={handleNext}
          className="w-full max-w-sm h-14 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-base font-semibold rounded-2xl transition-colors"
        >
          {activeIndex === slides.length - 1 ? "Get Started" : "Next"}
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
