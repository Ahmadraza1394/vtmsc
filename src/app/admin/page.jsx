"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated, getAdminEmail, logoutAdmin } from "@/lib/auth";
import Navbar from "@/components/layout/Navbar";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalBlogs: 0,
    publishedEvents: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    if (!isAdminAuthenticated()) {
      router.push("/admin/login");
      return;
    }
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchStats = async () => {
    try {
      const [eventsResponse, blogsResponse] = await Promise.all([
        fetch("/api/events?limit=1000"),
        fetch("/api/blogs?limit=1000"),
      ]);

      const eventsData = await eventsResponse.json();
      const blogsData = await blogsResponse.json();

      if (eventsData.success && blogsData.success) {
        const events = eventsData.data;
        const blogs = blogsData.data;

        setStats({
          totalEvents: events.length,
          totalBlogs: blogs.length,
          publishedEvents: events.filter((e) => e.status === "published")
            .length,
          publishedBlogs: blogs.filter((b) => b.status === "published").length,
          draftBlogs: blogs.filter((b) => b.status === "draft").length,
        });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Website Navigation */}
      <Navbar />

      {/* Admin Actions Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Admin Panel</span>
              <Link
                href="/admin/events"
                className="text-green-100 hover:text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Events
              </Link>
              <Link
                href="/admin/blogs"
                className="text-green-100 hover:text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Blogs
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-green-100">
                {getAdminEmail() || "Admin"}
              </span>
              <button
                onClick={logoutAdmin}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Voice Tabernacle Multi Services Center
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Welcome, {getAdminEmail() || "Admin"}
                </span>
                <button
                  onClick={logoutAdmin}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </button>
                <Link
                  href="/"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h2>
          <p className="text-gray-600">
            Here&apos;s what&apos;s happening with your content today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Total Events
                </p>
                <div className="text-3xl font-bold text-gray-900">
                  {loading ? (
                    <div className="animate-pulse bg-gray-200 h-8 w-12 rounded"></div>
                  ) : (
                    stats.totalEvents
                  )}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Total Blogs
                </p>
                <div className="text-3xl font-bold text-gray-900">
                  {loading ? (
                    <div className="animate-pulse bg-gray-200 h-8 w-12 rounded"></div>
                  ) : (
                    stats.totalBlogs
                  )}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Published
                </p>
                <div className="text-3xl font-bold text-gray-900">
                  {loading ? (
                    <div className="animate-pulse bg-gray-200 h-8 w-12 rounded"></div>
                  ) : (
                    stats.publishedEvents + stats.publishedBlogs
                  )}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-600 to-green-700">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Drafts
                </p>
                <div className="text-3xl font-bold text-gray-900">
                  {loading ? (
                    <div className="animate-pulse bg-gray-200 h-8 w-12 rounded"></div>
                  ) : (
                    stats.draftBlogs
                  )}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-400 to-green-500">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Events Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-primary to-purple-600 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Events</h2>
                  <p className="text-purple-100 mt-1">Manage church events</p>
                </div>
                <Link
                  href="/admin/events/new"
                  className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-opacity-30 transition-all duration-200 font-semibold border border-white border-opacity-20"
                >
                  + New Event
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <Link
                  href="/admin/events"
                  className="block p-4 border-2 border-gray-100 rounded-xl hover:border-brand-primary hover:bg-brand-primary hover:bg-opacity-5 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-brand-primary">
                        All Events
                      </h3>
                      <p className="text-sm text-gray-600">
                        Manage and edit all events
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
                        {stats.totalEvents}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-brand-primary"
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
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/events?status=published"
                  className="block p-4 border-2 border-gray-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600">
                        Published Events
                      </h3>
                      <p className="text-sm text-gray-600">
                        Live events on website
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                        {stats.publishedEvents}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-green-500"
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
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Blogs Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Blogs</h2>
                  <p className="text-green-100 mt-1">
                    Create and manage articles
                  </p>
                </div>
                <Link
                  href="/admin/blogs/new"
                  className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-opacity-30 transition-all duration-200 font-semibold border border-white border-opacity-20"
                >
                  + New Blog
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <Link
                  href="/admin/blogs"
                  className="block p-4 border-2 border-gray-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600">
                        All Blogs
                      </h3>
                      <p className="text-sm text-gray-600">
                        Manage all blog posts
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
                        {stats.totalBlogs}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-green-500"
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
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/blogs?status=published"
                  className="block p-4 border-2 border-gray-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600">
                        Published Blogs
                      </h3>
                      <p className="text-sm text-gray-600">Live blog posts</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                        {stats.publishedBlogs}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-green-500"
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
                    </div>
                  </div>
                </Link>

                <Link
                  href="/admin/blogs?status=draft"
                  className="block p-4 border-2 border-gray-100 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-amber-600">
                        Draft Blogs
                      </h3>
                      <p className="text-sm text-gray-600">
                        Unpublished drafts
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full font-medium">
                        {stats.draftBlogs}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-amber-500"
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
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
