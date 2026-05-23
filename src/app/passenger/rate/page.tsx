"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppHeader from "@/components/AppHeader";
import { PiStarFill, PiCheckCircleFill } from "react-icons/pi";

const tags = [
  "Clean car",
  "Great conversation",
  "Smooth driving",
  "On time",
  "Professional",
  "Safe driver",
];

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
      <AppHeader title="Rate Your Trip" showBack />

      <div className="flex-1 flex flex-col items-center px-6 py-6">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full flex flex-col items-center"
            >
              {/* Trip summary card */}
              <div className="w-full bg-zinc-50 rounded-2xl border border-zinc-100 p-4 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 text-emerald-400 text-sm font-bold flex items-center justify-center flex-shrink-0">
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
                  <span className="text-[15px] font-bold text-zinc-900">
                    {"\u20A6"}3,500
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="truncate">Lekki Phase 1</span>
                  <span className="text-zinc-300 mx-0.5">&rarr;</span>
                  <div className="w-2 h-2 rounded-sm bg-zinc-900 flex-shrink-0" />
                  <span className="truncate">Victoria Island</span>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex items-center justify-center gap-3 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-transform hover:scale-110 active:scale-90 p-0.5"
                  >
                    <PiStarFill
                      size={44}
                      className={`transition-colors ${
                        star <= (hoveredStar || rating)
                          ? "text-amber-400"
                          : "text-zinc-200"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm text-zinc-500 mb-6">
                {ratingLabels[hoveredStar || rating]}
              </p>

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
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 ${
                          selectedTags.includes(tag)
                            ? "bg-zinc-900 text-white"
                            : "bg-zinc-100 text-zinc-600 border border-zinc-200"
                        }`}
                      >
                        {tag}
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
                  className="h-14 bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl w-full font-semibold mt-4 active:scale-[0.98] transition-all text-[15px]"
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
              >
                <PiCheckCircleFill size={56} className="text-emerald-500" />
              </motion.div>
              <h2 className="text-2xl font-bold text-zinc-900 mt-5 mb-2">
                Thank you!
              </h2>
              <p className="text-sm text-zinc-500 mb-8">
                Your feedback helps us improve
              </p>
              <a href="/passenger/book" className="w-full">
                <button className="h-14 bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl w-full font-semibold active:scale-[0.98] transition-all text-[15px]">
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
