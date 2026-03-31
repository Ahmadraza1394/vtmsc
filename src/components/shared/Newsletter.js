"use client";

import { useState, useEffect } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStatus("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  if (!mounted) {
    return (
      <div className="bg-background-light py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8"></div>
            <div className="h-12 bg-gray-200 rounded max-w-xl mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Stay Connected
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-brand-primary text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap rounded"
          >
            Subscribe
          </button>
        </form>
        {status && (
          <p className="mt-4 text-brand-primary font-medium">{status}</p>
        )}
      </div>
    </div>
  );
}
