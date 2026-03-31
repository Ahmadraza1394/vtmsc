"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TipTapEditor from "@/components/admin/TipTapEditor";

export default function NewBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "sermon",
    author: {
      name: "Pastor John",
      email: "pastor@voicetabernacle.org",
      bio: "Senior Pastor at Voice Tabernacle Multi Services Center",
    },
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: "",
    },
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleContentChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (formData.title.length > 200) {
      alert("Title cannot exceed 200 characters");
      return;
    }

    if (formData.excerpt.length > 500) {
      alert("Excerpt cannot exceed 500 characters");
      return;
    }

    if (
      !formData.title.trim() ||
      !formData.excerpt.trim() ||
      !formData.content.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const submitData = new FormData();

      // Generate slug from title
      const slug = generateSlug(formData.title);

      // Process form data with default values
      const processedData = {
        ...formData,
        slug,
        status: "published", // Auto-publish all blogs
        featured: false, // Default to not featured
      };

      submitData.append("blogData", JSON.stringify(processedData));
      if (imageFile) {
        submitData.append("featuredImage", imageFile);
      }

      const response = await fetch("/api/blogs", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Blog post created successfully!");
        router.push("/admin/blogs");
      } else {
        alert("Error creating blog post: " + result.error);
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Error creating blog post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create New Blog Post
              </h1>
              <p className="text-gray-600 mt-1">
                Write and publish a new blog post with rich text editor
              </p>
            </div>
            <Link
              href="/admin/blogs"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Basic Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blog Title *
                      <span className="text-xs text-gray-500 ml-2">
                        ({formData.title.length}/200 characters)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      maxLength="200"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
                        formData.title.length > 200
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter blog post title"
                    />
                    {formData.title.length > 200 && (
                      <p className="text-red-500 text-xs mt-1">
                        Title cannot exceed 200 characters
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt *
                      <span className="text-xs text-gray-500 ml-2">
                        ({formData.excerpt.length}/500 characters)
                      </span>
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      required
                      maxLength="500"
                      rows="3"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent ${
                        formData.excerpt.length > 500
                          ? "border-red-300 bg-red-50"
                          : "border-gray-300"
                      }`}
                      placeholder="Brief description for blog cards and listings"
                    />
                    {formData.excerpt.length > 500 && (
                      <p className="text-red-500 text-xs mt-1">
                        Excerpt cannot exceed 500 characters
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Content
                </h2>
                <TipTapEditor
                  content={formData.content}
                  onChange={handleContentChange}
                  placeholder="Start writing your blog post..."
                />
              </div>

              {/* Featured Image */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Featured Image
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Featured Image (Optional)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                  </div>

                  {imagePreview && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image Preview
                      </label>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full max-w-md h-48 object-cover rounded-lg border"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category Settings */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Category
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="sermon">Sermon</option>
                    <option value="devotional">Devotional</option>
                    <option value="testimony">Testimony</option>
                    <option value="community">Community</option>
                    <option value="youth">Youth</option>
                    <option value="missions">Missions</option>
                    <option value="announcement">Announcement</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4 pt-6 border-t bg-white rounded-lg shadow p-6">
            <Link
              href="/admin/blogs"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Blog Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
