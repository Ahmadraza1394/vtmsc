import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'

// POST /api/blogs/test-create - Create a test blog to verify the system works
export async function POST() {
  try {
    await connectDB()
    
    // Create a test blog post
    const testBlog = new Blog({
      title: 'Test Blog Post',
      slug: 'test-blog-post',
      excerpt: 'This is a test blog post to verify the system is working correctly.',
      content: '<p>This is a test blog post created to verify that the blog system is working correctly. The admin can create, edit, and delete blog posts.</p><h3>Features Working</h3><p>All blog features should be functional including rich text editing, image uploads, and database integration.</p>',
      category: 'announcement',
      status: 'published',
      featured: false,
      author: {
        name: 'System Administrator',
        email: 'admin@voicetabernacle.org',
        bio: 'System Administrator'
      },
      publishedAt: new Date()
    })
    
    const savedBlog = await testBlog.save()
    
    return NextResponse.json({
      success: true,
      data: savedBlog,
      message: 'Test blog created successfully'
    })
  } catch (error) {
    console.error('Test blog creation error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

// GET /api/blogs/test-create - Get test blog info
export async function GET() {
  try {
    await connectDB()
    
    const testBlog = await Blog.findOne({ slug: 'test-blog-post' }).lean()
    
    if (!testBlog) {
      return NextResponse.json({
        success: false,
        message: 'Test blog not found. Run POST to create it.'
      })
    }
    
    return NextResponse.json({
      success: true,
      data: testBlog,
      urls: {
        public_page: `/blog/${testBlog.slug}`,
        api_endpoint: `/api/blogs/slug/${testBlog.slug}`
      }
    })
  } catch (error) {
    console.error('Test blog GET error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
