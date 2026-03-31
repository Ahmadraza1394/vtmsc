"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    badge: "WELCOME TO OUR COMMUNITY",
    title: "Whoever Believes Has Eternal Life",
    subtitle:
      '"And he said unto them, Go ye into all the world, and preach the gospel to every creature." - Mark 16:15',
    image: "/images/IMG_6080-scaled.jpg",
    showContent: true,
  },
  {
    id: 2,
    image: "/images/IMG_6043-600x600.jpg",
    showContent: false,
  },
  {
    id: 3,
    image: "/images/IMG_6221-1-700x450.jpg",
    showContent: false,
  },
  {
    id: 4,
    image: "/images/churchwp_media_-36-700x450.jpg",
    showContent: false,
  },
  {
    id: 5,
    image: "/images/2f6d15cb-25e1-4aef-b890-05583e4b5278.jpg",
    showContent: false,
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {slide.showContent && (
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="inline-block bg-brand-primary text-white text-xs md:text-sm font-semibold px-4 py-2 mb-4 md:mb-6 uppercase tracking-wider">
                    {slide.badge}
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl text-gray-200 italic mb-6 md:mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/give"
                      className="inline-block bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold hover:opacity-90 transition-opacity text-center uppercase tracking-wide"
                    >
                      Donate Now
                    </Link>
                    <Link
                      href="/sermons"
                      className="inline-block bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold hover:bg-white hover:text-gray-900 transition-all text-center uppercase tracking-wide"
                    >
                      Watch Sermons
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all z-10"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all z-10"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8 md:w-12"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
