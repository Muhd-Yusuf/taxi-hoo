"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiStarFill, PiCheckCircleFill } from "react-icons/pi";

const tags = [
  { label: "Clean car", color: "emerald" },
  { label: "Great conversation", color: "blue" },
  { label: "Smooth driving", color: "purple" },
  { label: "On time", color: "amber" },
  { label: "Professional", color: "blue" },
  { label: "Safe driver", color: "emerald" },
];

const tagActiveColors: Record<string, string> = {
  emerald: "bg-emerald-500 text-white shadow-md shadow-emerald-500/25",
  blue: "bg-blue-500 text-white shadow-md shadow-blue-500/25",
  purple: "bg-purple-500 text-white shadow-md shadow-purple-500/25",
  amber: "bg-amber-500 text-white shadow-md shadow-amber-500/25",
};

const tagInactiveColors: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  blue: "bg-blue-50 text-blue-700 border border-blue-200",
  purple: "bg-purple-50 text-purple-700 border border-purple-200",
  amber: "bg-amber-50 text-amber-700 border border-amber-200",
};

const ratingLabels: Record<number, string> = {
  0: "Tap to rate",
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Great",
  5: "Excellent!",
};

export default function RatePage() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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
                      James Okafor
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      Toyota Camry &middot; ABC-123-KD
                    </p>
                  </div>
                  <span className="text-[15px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    {"\u20A6"}3,500
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 shadow-sm shadow-emerald-500/50" />
                  <span className="truncate text-emerald-700 font-medium">Lekki Phase 1</span>
                  <span className="text-zinc-300 mx-0.5">&rarr;</span>
                  <div className="w-2 h-2 rounded-sm bg-blue-500 flex-shrink-0 shadow-sm shadow-blue-500/50" />
                  <span className="truncate text-blue-700 font-medium">Victoria Island</span>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex items-center justify-center gap-3 mb-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isActive = star <= (hoveredStar || rating);
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
                          isActive
                            ? "text-amber-400"
                            : "text-zinc-200"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <p className={`text-sm font-medium mb-6 transition-colors ${
                (hoveredStar || rating) >= 4 ? "text-amber-600" : (hoveredStar || rating) > 0 ? "text-zinc-600" : "text-zinc-400"
              }`}>
                {ratingLabels[hoveredStar || rating]}
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

              {/* Feedback tags */}
              {rating > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full mb-5"
                >
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tags.map((tag) => (
                      <button
                        key={tag.label}
                        onClick={() => toggleTag(tag.label)}
                        className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 ${
                          selectedTags.includes(tag.label)
                            ? tagActiveColors[tag.color]
                            : tagInactiveColors[tag.color]
                        }`}
                      >
                        {tag.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Comment */}
              {rating > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full mb-4"
                >
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience (optional)"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-sm min-h-[100px] resize-none text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-300 transition-all"
                  />
                </motion.div>
              )}

              {/* Submit button */}
              {rating > 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  onClick={() => setSubmitted(true)}
                  className="h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl w-full font-semibold mt-4 active:scale-[0.98] transition-all text-[15px] shadow-lg shadow-emerald-500/25"
                >
                  Submit rating
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
                <button className="h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl w-full font-semibold active:scale-[0.98] transition-all text-[15px] shadow-lg shadow-emerald-500/25">
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
