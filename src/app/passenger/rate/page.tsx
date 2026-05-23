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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

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
        <Card className="text-center max-w-[400px] w-full">
          <CardContent className="py-10 px-8">
            <div className="w-20 h-20 rounded-full bg-success-light flex items-center justify-center mx-auto mb-6">
              <PiCheckCircleFill size={36} className="text-success" />
            </div>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-3">
              Thank you!
            </h2>
            <p className="text-[15px] text-text-secondary mb-8 leading-relaxed">
              Your rating helps improve the experience for everyone.
            </p>
            <a href="/passenger/book">
              <Button
                size="lg"
                className="bg-dark hover:bg-dark-light text-white text-[14px] font-semibold h-12 px-8 rounded-xl"
              >
                Book another ride
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-[520px] mx-auto">
      <h1 className="text-[24px] sm:text-[28px] font-bold text-dark tracking-tight mb-2">
        Rate your ride
      </h1>
      <p className="text-[14px] text-text-secondary mb-8">How was your trip?</p>

      <div className="space-y-6">
        {/* Trip summary */}
        <Card>
          <CardContent className="p-6">
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
              <span className="text-text-muted mx-1">&rarr;</span>
              <div className="w-2 h-2 rounded-sm bg-primary flex-shrink-0" />
              <span>Victoria Island</span>
            </div>

            <Separator />

            <div className="flex items-center gap-5 pt-4 text-[12px] text-text-muted">
              <span className="flex items-center gap-1.5">
                <PiNavigationArrowBold size={12} /> 8.2 km
              </span>
              <span className="flex items-center gap-1.5">
                <PiClockBold size={12} /> 25 min
              </span>
              <span className="font-bold text-dark text-[15px] ml-auto">₦3,500</span>
            </div>
          </CardContent>
        </Card>

        {/* Star rating */}
        <Card>
          <CardContent className="p-6 sm:p-8 text-center">
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
            <p className="text-[13px] text-text-muted">
              {rating === 0
                ? "Tap to rate"
                : rating <= 2
                ? "We're sorry to hear that"
                : rating <= 4
                ? "Thank you!"
                : "Excellent!"}
            </p>
          </CardContent>
        </Card>

        {/* Feedback tags */}
        {rating > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] font-semibold text-dark">What went well?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full text-[13px] font-medium px-4 py-2.5 h-auto transition-all ${
                      selectedTags.includes(tag)
                        ? "bg-dark text-white hover:bg-dark-light shadow-sm"
                        : "text-text-secondary hover:border-text-muted"
                    }`}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comment */}
        {rating > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] font-semibold text-dark">Additional comments</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="comment" className="sr-only">Comment</Label>
              <Textarea
                id="comment"
                placeholder="Share your experience (optional)"
                rows={4}
                className="bg-surface-alt border-border text-[14px] text-dark placeholder:text-text-muted resize-none"
              />
            </CardContent>
          </Card>
        )}

        {/* Submit */}
        {rating > 0 && (
          <Button
            onClick={() => setSubmitted(true)}
            size="lg"
            className="w-full bg-dark hover:bg-dark-light text-white text-[15px] font-semibold h-14 rounded-2xl"
          >
            Submit rating
          </Button>
        )}
      </div>
    </div>
  );
}
