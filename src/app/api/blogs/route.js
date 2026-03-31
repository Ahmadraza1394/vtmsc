import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

// GET /api/blogs - Get all blogs
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const category = searchParams.get("category");
    const status = searchParams.get("status") || "published";
    const featured = searchParams.get("featured");
    const author = searchParams.get("author");

    const skip = (page - 1) * limit;

    // Build query
    let query = {};
    if (status) query.status = status;
    if (category) query.category = category;
    if (featured !== null) query.featured = featured === "true";
    if (author) query["author.name"] = new RegExp(author, "i");

    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Blog.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Blogs GET error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// POST /api/blogs - Create new blog
export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const blogData = JSON.parse(formData.get("blogData"));
    const imageFile = formData.get("featuredImage");

    // Upload featured image to Cloudinary
    let imageResult = null;
    if (imageFile) {
      // Create form data for Cloudinary upload
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", imageFile);
      cloudinaryFormData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default",
      );
      cloudinaryFormData.append("folder", "vtmsc/blogs");

      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: cloudinaryFormData,
        },
      );

      if (!uploadResponse.ok) {
        return NextResponse.json(
          { success: false, error: "Failed to upload featured image" },
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

    // Create blog with proper featuredImage handling
    const blogCreateData = {
      ...blogData,
    };

    // Only add featuredImage if upload was successful
    if (imageResult && imageResult.success) {
      blogCreateData.featuredImage = {
        url: imageResult.url,
        public_id: imageResult.public_id,
        alt: blogData.title || "Blog image",
      };
    }

    // Create and save the blog
    const blog = new Blog(blogCreateData);
    const savedBlog = await blog.save();

    return NextResponse.json(
      {
        success: true,
        data: savedBlog,
        message: "Blog created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Blogs POST error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
