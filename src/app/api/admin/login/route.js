import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Get admin credentials from environment variables
    const adminEmail = process.env.ADMIN_EMAIL || "admin@voicetabernacle.org";
    const adminPassword = process.env.ADMIN_PASSWORD || "VTMSCAdmin2024!";

    // Check if email matches
    if (email !== adminEmail) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Check password (for now, direct comparison - in production you'd hash it)
    if (password !== adminPassword) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        email: adminEmail,
        role: "admin",
        iat: Math.floor(Date.now() / 1000)
      },
      process.env.NEXTAUTH_SECRET || "NextAuthSecret123!",
      { expiresIn: "24h" }
    );

    return NextResponse.json({
      success: true,
      token,
      email: adminEmail,
      message: "Login successful"
    });

  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
