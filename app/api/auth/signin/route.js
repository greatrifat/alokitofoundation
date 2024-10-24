import connectDB from '@/connection/mongoose';
import Users from '@/models/users';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    // Establish MongoDB connection
    await connectDB();

    // Parse the request body (use await req.json() in App Router)
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Please provide both email and password' }, { status: 400 });
    }

    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 401 });
    }

    // Decrypt stored password
    const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8);

    // Check if the provided password matches the decrypted password
    if (decryptedPassword !== password) {
      return NextResponse.json({ message: 'Wrong Password' }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' } // Token expires in 1 day
    );

    return NextResponse.json({ message: 'Signin successful', token, email: user.email, id: user._id }, { status: 200 });
  } catch (error) {
    console.error('Signin error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
