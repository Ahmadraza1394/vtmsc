import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

// GET /api/blogs/[id] - Get single blog
export async function GET(request, { params }) {
  try {
    await connectDB();

    const blog = await Blog.findById(params.id).lean();

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Blog GET error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// PUT /api/blogs/[id] - Update blog
export async function PUT(request, { params }) {
  try {
    await connectDB();

    const existingBlog = await Blog.findById(params.id);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 },
      );
    }

    const formData = await request.formData();
    const blogData = JSON.parse(formData.get("blogData"));
    const imageFile = formData.get("featuredImage");

    let updateData = { ...blogData };

    // Handle featured image update
    if (imageFile) {
      // Delete old image from Cloudinary
      if (existingBlog.featuredImage?.public_id) {
        await deleteImage(existingBlog.featuredImage.public_id);
      }

      // Upload new image
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64Image = `data:${imageFile.type};base64,${buffer.toString("base64")}`;

      const imageResult = await uploadImage(base64Image, "vtmsc/blogs");
      if (!imageResult.success) {
        return NextResponse.json(
          { success: false, error: "Failed to upload featured image" },
          { status: 400 },
        );
      }

      updateData.featuredImage = {
        url: imageResult.url,
        public_id: imageResult.public_id,
        alt: blogData.featuredImageAlt || blogData.title,
      };
    }

    const updatedBlog = await Blog.findByIdAndUpdate(params.id, updateData, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: "Blog updated successfully",
    });
  } catch (error) {
    console.error("Blog PUT error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// DELETE /api/blogs/[id] - Delete blog
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const blog = await Blog.findById(params.id);
    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 },
      );
    }

    // Delete featured image from Cloudinary
    if (blog.featuredImage?.public_id) {
      await deleteImage(blog.featuredImage.public_id);
    }

    await Blog.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Blog DELETE error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
