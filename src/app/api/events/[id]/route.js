import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Event from "@/models/Event";

// GET /api/events/[id] - Get single event
export async function GET(request, { params }) {
  try {
    await connectDB();
    const resolvedParams = await params;

    const event = await Event.findById(resolvedParams.id).lean();

    if (!event) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.error("Event GET error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// PUT /api/events/[id] - Update event
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const resolvedParams = await params;

    const formData = await request.formData();
    const eventData = JSON.parse(formData.get("eventData"));
    const imageFile = formData.get("image");

    const existingEvent = await Event.findById(resolvedParams.id);
    if (!existingEvent) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 },
      );
    }

    let updateData = { ...eventData };

    // Handle image update
    if (imageFile) {
      // Delete old image from Cloudinary
      if (existingEvent.image?.public_id) {
        await deleteImage(existingEvent.image.public_id);
      }

      // Upload new image
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = `data:${imageFile.type};base64,${buffer.toString("base64")}`;

      const imageResult = await uploadImage(base64Image, "vtmsc/events");
      if (!imageResult.success) {
        return NextResponse.json(
          { success: false, error: "Failed to upload image" },
          { status: 400 },
        );
      }

      updateData.image = {
        url: imageResult.url,
        public_id: imageResult.public_id,
        alt: eventData.imageAlt || eventData.title,
      };
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      resolvedParams.id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    return NextResponse.json({
      success: true,
      data: updatedEvent,
      message: "Event updated successfully",
    });
  } catch (error) {
    console.error("Event PUT error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// DELETE /api/events/[id] - Delete event
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const resolvedParams = await params;

    const event = await Event.findById(resolvedParams.id);
    if (!event) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 },
      );
    }

    // Delete image from Cloudinary
    if (event.image?.public_id) {
      await deleteImage(event.image.public_id);
    }

    await Event.findByIdAndDelete(resolvedParams.id);

    return NextResponse.json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Event DELETE error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
