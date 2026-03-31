import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Event description is required"],
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    content: {
      type: String,
      required: [true, "Event content is required"],
    },
    image: {
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
    date: {
      type: Date,
      required: [true, "Event date is required"],
    },
    time: {
      type: String,
      required: [true, "Event time is required"],
    },
    location: {
      type: String,
      required: [true, "Event location is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Event category is required"],
      enum: [
        "worship",
        "community",
        "youth",
        "outreach",
        "special",
        "conference",
      ],
      default: "worship",
    },
    status: {
      type: String,
      enum: ["draft", "published", "cancelled"],
      default: "published",
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
EventSchema.index({ date: 1, status: 1 });
EventSchema.index({ category: 1, status: 1 });
EventSchema.index({ featured: 1, status: 1 });
EventSchema.index({ createdAt: -1 });

// Virtual for formatted date
EventSchema.virtual("formattedDate").get(function () {
  return this.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

// Virtual for URL slug
EventSchema.virtual("slug").get(function () {
  return this.title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
});

// Pre-save middleware to update updatedAt
EventSchema.pre("save", function () {
  this.updatedAt = new Date();
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
