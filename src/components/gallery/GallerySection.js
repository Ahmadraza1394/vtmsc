"use client";

import { useState, useEffect } from "react";
import ImageModal from "./ImageModal";

const categories = [
  "All",
  "Services",
  "Events",
  "Mission",
  "Community",
  "Haiti",
];

const photos = [
  {
    id: 1,
    image: "/images/IMG_6080-scaled.jpg",
    category: "Services",
    alt: "Church service",
  },
  {
    id: 2,
    image: "/images/IMG_6043-600x600.jpg",
    category: "Community",
    alt: "Community outreach",
  },
  {
    id: 3,
    image: "/images/IMG_6221-1-700x450.jpg",
    category: "Events",
    alt: "Church event",
  },
  {
    id: 4,
    image: "/images/churchwp_media_-36-700x450.jpg",
    category: "Services",
    alt: "Worship service",
  },
  {
    id: 5,
    image: "/images/2f6d15cb-25e1-4aef-b890-05583e4b5278.jpg",
    category: "Mission",
    alt: "Mission work",
  },
  {
    id: 6,
    image: "/images/4e45d363-fbb0-442f-9d25-2eb784ad0ec5.jpg",
    category: "Community",
    alt: "Community gathering",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Photos");
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const handleImageClick = (photoIndex) => {
    setSelectedImageIndex(photoIndex);
  };

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex < filteredPhotos.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  if (!mounted) {
    return (
      <div className="text-center py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] h-80 bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
        {["Photos", "Videos", "Audio"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all ${
              activeTab === tab
                ? "bg-brand-primary text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Photos" && (
        <>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Photo Gallery
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-brand-primary text-white"
                      : "bg-background-light text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/3] h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "Videos" && (
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Video Gallery
          </h2>
          <p className="text-gray-600">Video content coming soon...</p>
        </div>
      )}

      {activeTab === "Audio" && (
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Audio Gallery
          </h2>
          <p className="text-gray-600">Audio content coming soon...</p>
        </div>
      )}

      <ImageModal
        src={
          selectedImageIndex !== null
            ? filteredPhotos[selectedImageIndex]?.image
            : null
        }
        alt={
          selectedImageIndex !== null
            ? filteredPhotos[selectedImageIndex]?.alt
            : null
        }
        isOpen={selectedImageIndex !== null}
        onClose={handleClose}
        onPrevious={selectedImageIndex > 0 ? handlePrevious : null}
        onNext={
          selectedImageIndex < filteredPhotos.length - 1 ? handleNext : null
        }
        currentIndex={selectedImageIndex || 0}
        totalImages={filteredPhotos.length}
      />
    </div>
  );
}
