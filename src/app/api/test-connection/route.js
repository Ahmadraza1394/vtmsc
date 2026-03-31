import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Event from '@/models/Event'
import Blog from '@/models/Blog'

export async function GET() {
  try {
    // Test database connection
    await connectDB()
    
    // Test model operations
    const eventCount = await Event.countDocuments()
    const blogCount = await Blog.countDocuments()
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      data: {
        database: 'vtmsc_database',
        collections: {
          events: eventCount,
          blogs: blogCount
        },
        models: ['Event', 'Blog'],
        features: [
          'MongoDB Atlas connection',
          'Cloudinary image uploads',
          'TipTap rich text editor',
          'CRUD operations for Events and Blogs'
        ]
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
