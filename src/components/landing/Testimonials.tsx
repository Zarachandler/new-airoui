"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    q: "Our outreach was scattered before we found this tool. Now we manage email, LinkedIn, and calls in one place - and our meetings have tripled.",
    a: "Head of Sales, CredFlow",
    company: "CredFlow",
  },
  {
    q: "We replaced multiple tools with this one platform. The AI writes better intros than most SDRs, and our reply rate jumped from 5% to 18% in two weeks.",
    a: "Growth Lead, CloudWorks",
    company: "CloudWorks",
  },
  {
    q: "The automation feels personal. Every message sounds human, and our leads love the experience.",
    a: "Founder, LeadBridge Agency",
    company: "LeadBridge Agency",
  },
  {
    q: "We've tested a lot of sequencers & ultimately this has been the most helpful in generating revenue for our clients. It has all the functionality any advanced cold email initiative needs.",
    a: "Mike Ellis",
    company: "Kale Acquisition",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#0f1f47]/30" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f1f47]/60">
              Customer Testimonials
            </p>
            <span className="h-px w-8 bg-[#0f1f47]/30" />
          </div>
          <h2 className="text-3xl font-bold text-[#0f1f47] md:text-4xl">
            Real Results. Real Customers.
          </h2>
        </div>

        <div className="relative mt-12">
          {/* Slider Container */}
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {quotes.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="mx-auto max-w-3xl text-center">
                    {/* Quote mark */}
                    <div className="mb-6 text-6xl leading-none text-[#0f1f47]/10">
                      "
                    </div>
                    
                    {/* Quote text */}
                    <blockquote className="text-lg leading-relaxed text-[#0f1f47]/80 md:text-xl">
                      {item.q}
                    </blockquote>
                    
                    {/* Author */}
                    <div className="mt-8">
                      <p className="text-base font-semibold text-[#0f1f47]">
                        {item.a}
                      </p>
                      <p className="mt-1 text-sm text-[#0f1f47]/50">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[#a7b3d3] p-2 text-[#0f1f47] transition-all hover:bg-[#a7b3d3]/80 hover:scale-110 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 font-bold" strokeWidth={2.5} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#a7b3d3] p-2 text-[#0f1f47] transition-all hover:bg-[#a7b3d3]/80 hover:scale-110 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 font-bold" strokeWidth={2.5} />
          </button>

          {/* Dots Indicator */}
          <div className="mt-10 flex justify-center gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-[#0f1f47]"
                    : "w-1.5 bg-[#0f1f47]/30 hover:bg-[#0f1f47]/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;