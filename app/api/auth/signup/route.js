
import connectDB from '@/connection/mongoose';
import Users from '@/models/users';

import CryptoJS from 'crypto-js';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
     // Establish MongoDB connection if it's not already connected
     await connectDB(); // Ensure the connection to MongoDB is established
    // Parse the request body (use await req.json() in App Router)
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Please provide all fields' }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password using CryptoJS
    const hashedPassword = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET).toString();

    // Create a new user instance
    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};

// No need to wrap with connectDB in App Router
// You should handle DB connections differently, or ensure the mongoose connection logic runs in your handler.
