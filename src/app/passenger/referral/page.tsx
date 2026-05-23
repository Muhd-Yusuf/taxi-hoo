"use client";

import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import {
  PiCopyBold,
  PiWhatsappLogoFill,
  PiChatCircleDotsFill,
  PiEnvelopeSimpleFill,
} from "react-icons/pi";

export default function ReferralPage() {
  const referralCode = "TAXIHOO2025";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
  };

  return (
    <div className="min-h-full bg-zinc-50">
      <AppHeader showBack title="Referral" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 pt-6"
      >
        <p className="text-base text-zinc-700 font-medium">
          Refer a friend and earn &#x20A6;5,000
        </p>

        <div className="border border-zinc-200 rounded-xl px-4 h-14 flex items-center justify-between mt-4">
          <span className="text-sm font-mono font-semibold text-zinc-900">
            {referralCode}
          </span>
          <button
            onClick={handleCopy}
            className="active:scale-90 transition-transform"
          >
            <PiCopyBold size={18} className="text-zinc-400" />
          </button>
        </div>

        <button className="w-full h-14 bg-emerald-500 text-white font-semibold rounded-2xl mt-6 active:scale-[0.98] transition-transform">
          Invite
        </button>

        <div className="flex items-center gap-4 mt-6">
          <button className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center active:scale-95 transition-transform">
            <PiWhatsappLogoFill size={22} className="text-emerald-600" />
          </button>
          <button className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center active:scale-95 transition-transform">
            <PiChatCircleDotsFill size={22} className="text-emerald-600" />
          </button>
          <button className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center active:scale-95 transition-transform">
            <PiEnvelopeSimpleFill size={22} className="text-emerald-600" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
