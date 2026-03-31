"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const audioMessages = [
  {
    id: 1,
    title: "Culte du Dimanche 21 Aout 2022",
    author: "Bishop Nicolas Homicil",
    date: "Aug 21, 2022",
    duration: "58:20",
    totalDuration: "58:20",
    category: "SERMON",
    progress: 0,
  },
  {
    id: 2,
    title: "Christmas Gift for Your Soul",
    author: "Bishop Nicolas Homicil",
    date: "Dec 25, 2022",
    duration: "42:15",
    totalDuration: "42:15",
    category: "EVENT",
    progress: 0,
  },
  {
    id: 3,
    title: "God's Gift to You",
    author: "Bishop Nicolas Homicil",
    date: "Jan 15, 2023",
    duration: "35:40",
    totalDuration: "35:40",
    category: "DEVOTION",
    progress: 0,
  },
];

export default function AudioMessages() {
  const [playingId, setPlayingId] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="text-center py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
          Audio Messages
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-primary"></div>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 mb-8">
        {audioMessages.map((audio) => (
          <div
            key={audio.id}
            className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-primary"
          >
            <div className="flex items-start gap-4 mb-4">
              <button
                onClick={() =>
                  setPlayingId(playingId === audio.id ? null : audio.id)
                }
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-brand-primary text-white rounded-full hover:opacity-90 transition-opacity"
              >
                <svg
                  className="w-6 h-6 ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {audio.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{audio.author}</span>
                  <span>•</span>
                  <span>{audio.date}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {audio.duration}
                </div>
                <div className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
                  {audio.category}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-primary transition-all duration-300"
                  style={{ width: `${audio.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">
                {audio.totalDuration}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/gallery"
          className="inline-block bg-transparent border-2 border-brand-primary text-brand-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-all"
        >
          View All Audio
        </Link>
      </div>
    </div>
  );
}
