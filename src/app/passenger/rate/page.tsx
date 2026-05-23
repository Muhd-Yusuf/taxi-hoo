"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiStarFill, PiCheckCircleFill } from "react-icons/pi";

const ratingLabels: Record<number, { text: string; color: string }> = {
  0: { text: "Tap to rate", color: "text-zinc-400" },
  1: { text: "Poor", color: "text-emerald-600" },
  2: { text: "Fair", color: "text-emerald-600" },
  3: { text: "Good", color: "text-emerald-600" },
  4: { text: "Very Good", color: "text-emerald-600" },
  5: { text: "Excellent", color: "text-emerald-600" },
};

const tipAmounts = [200, 500, 1000, 2000, 5000];

export default function RatePage() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const activeRating = hoveredStar || rating;
  const label = ratingLabels[activeRating];

  return (
    <div className="bg-white min-h-full flex flex-col">
      {/* Gradient hero background */}
      <div className="bg-gradient-to-b from-amber-50 via-amber-50/50 to-white">
        <AppHeader title="Rate Your Trip" showBack />
      </div>

      <div className="flex-1 flex flex-col items-center px-6 py-6">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full flex flex-col items-center relative"
            >
              {/* Trip summary card */}
              <div className="w-full bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-2xl border border-zinc-100 p-4 mb-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-emerald-400 text-sm font-bold flex items-center justify-center flex-shrink-0 ring-2 ring-emerald-500/20">
                    JO
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-zinc-900">
                      Thabo Mokobi
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      Toyota Camry &middot; B 123 ABC
                    </p>
                  </div>
                  <span className="text-[15px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    P3,500
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 shadow-sm shadow-emerald-500/50" />
                  <span className="truncate text-emerald-700 font-medium">Main Mall</span>
                  <span className="text-zinc-300 mx-0.5">&rarr;</span>
                  <div className="w-2 h-2 rounded-sm bg-blue-500 flex-shrink-0 shadow-sm shadow-blue-500/50" />
                  <span className="truncate text-blue-700 font-medium">Riverwalk</span>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex items-center justify-center gap-3 mb-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isActive = star <= activeRating;
                  return (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className={`transition-all hover:scale-110 active:scale-90 p-1 rounded-full ${
                        isActive ? "drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : ""
                      }`}
                    >
                      <PiStarFill
                        size={44}
                        className={`transition-colors ${
                          isActive ? "text-amber-400" : "text-zinc-200"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Rating label */}
              <p className={`text-sm font-semibold mb-6 transition-colors ${label.color}`}>
                {label.text}
              </p>

              {/* Celebration dots when 5 stars */}
              {rating === 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-20 left-0 right-0 flex justify-center gap-1 pointer-events-none"
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        ["bg-amber-400", "bg-emerald-400", "bg-blue-400", "bg-purple-400", "bg-red-400"][i % 5]
                      }`}
                      initial={{ y: 0, x: (i - 6) * 20, opacity: 1 }}
                      animate={{
                        y: [0, -40 - Math.random() * 60, 100],
                        x: (i - 6) * 20 + (Math.random() - 0.5) * 40,
                        opacity: [1, 1, 0],
                      }}
                      transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                    />
                  ))}
                </motion.div>
              )}

              {/* Comment textarea */}
              {rating > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full mb-5"
                >
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your text"
                    className="w-full border border-zinc-200 rounded-xl p-4 text-sm h-24 resize-none text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 transition-all"
                  />
                </motion.div>
              )}

              {/* Tip section */}
              {rating > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="w-full mb-5"
                >
                  <p className="text-sm font-semibold text-zinc-900 mb-3">
                    Give some tips to Thabo Mokobi
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tipAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() =>
                          setSelectedTip(selectedTip === amount ? null : amount)
                        }
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                          selectedTip === amount
                            ? "bg-emerald-500 text-white border-emerald-500"
                            : "bg-white text-zinc-700 border-zinc-200"
                        }`}
                      >
                        {"P"}
                        {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Submit button */}
              {rating > 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => setSubmitted(true)}
                  className="h-14 bg-emerald-500 text-white rounded-2xl w-full font-semibold mt-4 active:scale-[0.98] transition-all text-[15px]"
                >
                  Submit
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center px-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-lg shadow-emerald-200/50"
              >
                <PiCheckCircleFill size={48} className="text-emerald-500" />
              </motion.div>
              <h2 className="text-2xl font-bold text-zinc-900 mt-5 mb-2">
                Thank you!
              </h2>
              <p className="text-sm text-zinc-500 mb-8">
                Your feedback helps us improve
              </p>
              <a href="/passenger/book" className="w-full">
                <button className="h-14 bg-emerald-500 text-white rounded-2xl w-full font-semibold active:scale-[0.98] transition-all text-[15px]">
                  Back to Home
                </button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
