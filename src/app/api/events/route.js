import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";

// GET /api/events - Get all events
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const category = searchParams.get("category");
    const status = searchParams.get("status") || "published";
    const featured = searchParams.get("featured");

    const skip = (page - 1) * limit;

    // Build query
    let query = {};
    if (status) query.status = status;
    if (category) query.category = category;
    if (featured !== null) query.featured = featured === "true";

    const events = await Event.find(query)
      .sort({ date: 1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Event.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Events GET error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// POST /api/events - Create new event
export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const eventData = JSON.parse(formData.get("eventData"));
    const imageFile = formData.get("image");

    // Upload image to Cloudinary using unsigned upload
    let imageResult = null;
    if (imageFile) {
      // Create form data for Cloudinary upload
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", imageFile);
      cloudinaryFormData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default",
      );
      cloudinaryFormData.append("folder", "vtmsc/events");

      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: cloudinaryFormData,
        },
      );

      if (!uploadResponse.ok) {
        return NextResponse.json(
          { success: false, error: "Failed to upload event image" },
          { status: 400 },
        );
      }

      const uploadResult = await uploadResponse.json();
      imageResult = {
        success: true,
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    // Create event with proper image handling
    const eventCreateData = {
      ...eventData,
    };

    // Only add image if upload was successful
    if (imageResult && imageResult.success) {
      eventCreateData.image = {
        url: imageResult.url,
        public_id: imageResult.public_id,
        alt: eventData.title || "Event image",
      };
    }

    const event = new Event(eventCreateData);

    await event.save();

    return NextResponse.json(
      {
        success: true,
        data: event,
        message: "Event created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Events POST error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
