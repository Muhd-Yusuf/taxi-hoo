"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      {/* Logo + Text */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-5"
      >
        <Image
          src="/logo.jpeg"
          alt="Taxi-Hoo"
          width={80}
          height={80}
          className="rounded-2xl"
          priority
        />
        <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
          Taxi-<span className="text-brand-500">Hoo</span>
        </h1>
      </motion.div>

      {/* Loading bar */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-1 bg-zinc-200 rounded-full overflow-hidden">
        <div className="h-full bg-brand-500 rounded-full animate-loading-bar" />
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
