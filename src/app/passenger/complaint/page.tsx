"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiCheckCircleFill } from "react-icons/pi";

const complaintTypes = [
  "Vehicle not clean",
  "Driver was rude",
  "Overcharged",
  "Late arrival",
  "Other",
];

export default function ComplaintPage() {
  const router = useRouter();
  const [view, setView] = useState<"form" | "success">("form");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    setView("success");
  };

  if (view === "success") {
    return (
      <div className="min-h-full bg-zinc-50 flex flex-col">
        <AppHeader showBack title="Complaint" />

        <div className="flex-1 flex flex-col items-center justify-center px-5">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 rounded-full bg-emerald-100 flex items-center justify-center">
              <PiCheckCircleFill size={64} className="text-emerald-500" />
            </div>
            <h2 className="text-xl font-bold text-zinc-900 mt-6">
              Send successful
            </h2>
            <p className="text-sm text-zinc-500 mt-2">
              Your complaint has been sent successfully
            </p>
            <button
              onClick={() => router.push("/passenger/book")}
              className="w-full max-w-xs h-14 bg-emerald-500 text-white font-semibold rounded-2xl mt-8 active:scale-[0.98] transition-transform"
            >
              Back Home
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-zinc-50">
      <AppHeader showBack title="Complaint" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 pt-6"
      >
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full h-14 border border-zinc-200 rounded-xl px-4 text-sm bg-white appearance-none"
        >
          <option value="" disabled>
            Select complaint type
          </option>
          {complaintTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your complaint..."
          className="w-full h-32 border border-zinc-200 rounded-xl p-4 text-sm resize-none mt-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full h-14 bg-emerald-500 text-white font-semibold rounded-2xl mt-4 active:scale-[0.98] transition-transform"
        >
          Submit
        </button>
      </motion.div>
    </div>
  );
}
