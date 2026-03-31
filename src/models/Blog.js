import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, "Blog excerpt is required"],
      trim: true,
      maxlength: [500, "Excerpt cannot exceed 500 characters"],
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
    featuredImage: {
      url: {
        type: String,
        required: false,
      },
      public_id: {
        type: String,
        required: false,
      },
      alt: {
        type: String,
        default: "",
      },
    },
    category: {
      type: String,
      required: [true, "Blog category is required"],
      enum: [
        "sermon",
        "devotional",
        "testimony",
        "community",
        "youth",
        "missions",
        "announcement",
      ],
      default: "sermon",
    },
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    author: {
      name: {
        type: String,
        required: [true, "Author name is required"],
        trim: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
      },
      bio: {
        type: String,
        trim: true,
        maxlength: [300, "Author bio cannot exceed 300 characters"],
      },
      avatar: {
        url: String,
        public_id: String,
      },
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    readTime: {
      type: Number, // in minutes
      default: 5,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    seo: {
      metaTitle: {
        type: String,
        maxlength: [60, "Meta title cannot exceed 60 characters"],
      },
      metaDescription: {
        type: String,
        maxlength: [160, "Meta description cannot exceed 160 characters"],
      },
      keywords: [
        {
          type: String,
          trim: true,
        },
      ],
    },
    createdBy: {
      type: String,
      required: true,
      default: "admin",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

// Create indexes for better performance
BlogSchema.index({ slug: 1 }, { unique: true });
BlogSchema.index({ status: 1, publishedAt: -1 });
BlogSchema.index({ category: 1, status: 1 });
BlogSchema.index({ featured: 1, status: 1 });
BlogSchema.index({ tags: 1 });
BlogSchema.index({ "author.name": 1 });
BlogSchema.index({ createdAt: -1 });

// Virtual for URL
BlogSchema.virtual("url").get(function () {
  return `/blog/${this.slug}`;
});

// Virtual for formatted publish date
BlogSchema.virtual("formattedPublishDate").get(function () {
  if (!this.publishedAt) return null;
  return this.publishedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

// Pre-save middleware to generate slug and update timestamps
BlogSchema.pre("save", function () {
  // Generate slug from title if not provided
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  // Set publishedAt when status changes to published
  if (this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  // Calculate read time based on content length (average 200 words per minute)
  if (this.content) {
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }

  this.updatedAt = new Date();
});

// Static method to find published blogs
BlogSchema.statics.findPublished = function () {
  return this.find({ status: "published" }).sort({ publishedAt: -1 });
};

// Static method to find featured blogs
BlogSchema.statics.findFeatured = function () {
  return this.find({ status: "published", featured: true }).sort({
    publishedAt: -1,
  });
};

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
