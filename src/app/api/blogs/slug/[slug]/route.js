import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'

// GET /api/blogs/slug/[slug] - Get blog by slug
export async function GET(request, { params }) {
  try {
    await connectDB()
    
    const blog = await Blog.findOne({ 
      slug: params.slug,
      status: 'published'
    }).lean()
    
    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      )
    }
    
    // Increment view count
    await Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } })
    
    return NextResponse.json({
      success: true,
      data: blog
    })
  } catch (error) {
    console.error('Blog slug GET error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
