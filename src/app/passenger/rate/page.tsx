"use client";

import { useState } from "react";
import { Star, Car, MapPin, Navigation, Clock, ThumbsUp } from "lucide-react";

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
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-success-light flex items-center justify-center mx-auto mb-4">
            <ThumbsUp size={28} className="text-success" />
          </div>
          <h2 className="text-[22px] font-bold text-dark mb-2">Thank you!</h2>
          <p className="text-[14px] text-text-secondary mb-6">Your rating helps improve the experience for everyone.</p>
          <a href="/passenger/book" className="inline-flex bg-dark text-white text-[13px] font-semibold px-6 py-3 rounded-lg hover:bg-dark-light transition-colors">
            Book another ride
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[480px] mx-auto">
      <h1 className="text-[22px] font-bold text-dark mb-1">Rate your ride</h1>
      <p className="text-[13px] text-text-secondary mb-8">How was your trip?</p>

      {/* Trip summary */}
      <div className="bg-white rounded-xl border border-border p-4 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center">
            <span className="text-[11px] font-bold text-primary">JO</span>
          </div>
          <div>
            <p className="text-[14px] font-semibold text-dark">James Okafor</p>
            <p className="text-[11px] text-text-muted">Toyota Camry · ABC-123-KD</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-text-secondary">
          <div className="w-1.5 h-1.5 rounded-full bg-success" />
          <span>Lekki Phase 1</span>
          <span className="text-text-muted">→</span>
          <div className="w-1.5 h-1.5 rounded-sm bg-primary" />
          <span>Victoria Island</span>
        </div>
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-[11px] text-text-muted">
          <span className="flex items-center gap-1"><Navigation size={10} /> 8.2 km</span>
          <span className="flex items-center gap-1"><Clock size={10} /> 25 min</span>
          <span className="font-bold text-dark text-[13px]">₦3,500</span>
        </div>
      </div>

      {/* Stars */}
      <div className="bg-white rounded-xl border border-border p-6 mb-6 text-center">
        <p className="text-[14px] font-semibold text-dark mb-4">How would you rate this trip?</p>
        <div className="flex items-center justify-center gap-3 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              className="transition-transform hover:scale-110"
            >
              <Star
                size={36}
                className={`transition-colors ${
                  star <= (hoveredStar || rating)
                    ? "text-primary fill-primary"
                    : "text-border"
                }`}
              />
            </button>
          ))}
        </div>
        <p className="text-[12px] text-text-muted">
          {rating === 0 ? "Tap to rate" : rating <= 2 ? "We're sorry to hear that" : rating <= 4 ? "Thank you!" : "Excellent!"}
        </p>
      </div>

      {/* Tags */}
      {rating > 0 && (
        <div className="bg-white rounded-xl border border-border p-5 mb-6">
          <p className="text-[13px] font-semibold text-dark mb-3">What went well?</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3.5 py-2 rounded-lg text-[12px] font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-dark text-white"
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
        <div className="bg-white rounded-xl border border-border p-5 mb-6">
          <p className="text-[13px] font-semibold text-dark mb-3">Additional comments</p>
          <textarea
            placeholder="Share your experience (optional)"
            rows={3}
            className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface-alt text-[13px] text-dark placeholder:text-text-muted focus:outline-none focus:border-dark resize-none"
          />
        </div>
      )}

      {/* Submit */}
      {rating > 0 && (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full bg-dark hover:bg-dark-light text-white text-[14px] font-semibold py-3.5 rounded-xl transition-colors"
        >
          Submit rating
        </button>
      )}
    </div>
  );
}
