"use client";

import { useState } from "react";
import {
  PiStarFill,
  PiCarFill,
  PiMapPinBold,
  PiNavigationArrowBold,
  PiClockBold,
  PiThumbsUpFill,
  PiCheckCircleFill,
} from "react-icons/pi";

const tags = ["Clean car", "Great conversation", "Smooth driving", "On time", "Professional", "Safe driver"];

export default function RatePage() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-[400px]">
          <div className="w-20 h-20 rounded-full bg-success-light flex items-center justify-center mx-auto mb-6">
            <PiCheckCircleFill size={36} className="text-success" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-3">
            Thank you!
          </h2>
          <p className="text-[15px] text-text-secondary mb-8 leading-relaxed">
            Your rating helps improve the experience for everyone.
          </p>
          <a
            href="/passenger/book"
            className="inline-flex bg-dark text-white text-[14px] font-semibold px-8 py-3.5 rounded-xl hover:bg-dark-light transition-colors"
          >
            Book another ride
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[520px] mx-auto">
      <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-1">
        Rate your ride
      </h1>
      <p className="text-[14px] text-text-secondary mb-8">How was your trip?</p>

      <div className="space-y-6">
        {/* Trip summary */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
              <span className="text-[13px] font-bold text-primary">JO</span>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-dark">James Okafor</p>
              <p className="text-[13px] text-text-muted mt-0.5">Toyota Camry · ABC-123-KD</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-[13px] text-text-secondary mb-4 px-1">
            <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
            <span>Lekki Phase 1</span>
            <span className="text-text-muted mx-1">→</span>
            <div className="w-2 h-2 rounded-sm bg-primary flex-shrink-0" />
            <span>Victoria Island</span>
          </div>

          <div className="flex items-center gap-5 pt-4 border-t border-border text-[12px] text-text-muted">
            <span className="flex items-center gap-1.5">
              <PiNavigationArrowBold size={12} /> 8.2 km
            </span>
            <span className="flex items-center gap-1.5">
              <PiClockBold size={12} /> 25 min
            </span>
            <span className="font-bold text-dark text-[15px] ml-auto">₦3,500</span>
          </div>
        </div>

        {/* Star rating */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8 text-center">
          <p className="text-[16px] font-semibold text-dark mb-6">How would you rate this trip?</p>
          <div className="flex items-center justify-center gap-4 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <PiStarFill
                  size={40}
                  className={`transition-colors ${
                    star <= (hoveredStar || rating)
                      ? "text-primary fill-primary"
                      : "text-border"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="text-[13px] text-text-muted">
            {rating === 0
              ? "Tap to rate"
              : rating <= 2
              ? "We're sorry to hear that"
              : rating <= 4
              ? "Thank you!"
              : "Excellent!"}
          </p>
        </div>

        {/* Feedback tags */}
        {rating > 0 && (
          <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
            <p className="text-[15px] font-semibold text-dark mb-4">What went well?</p>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2.5 rounded-full text-[13px] font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-dark text-white shadow-sm"
                      : "bg-surface-alt text-text-secondary border border-border hover:border-text-muted"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comment */}
        {rating > 0 && (
          <div className="bg-white rounded-2xl border border-border shadow-sm p-5 sm:p-6">
            <p className="text-[15px] font-semibold text-dark mb-4">Additional comments</p>
            <textarea
              placeholder="Share your experience (optional)"
              rows={4}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-surface-alt text-[14px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark/10 resize-none transition-all"
            />
          </div>
        )}

        {/* Submit */}
        {rating > 0 && (
          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-dark hover:bg-dark-light text-white text-[15px] font-semibold py-4 rounded-2xl transition-colors"
          >
            Submit rating
          </button>
        )}
      </div>
    </div>
  );
}
