import connectDB from '@/connection/mongoose';
import Users from '@/models/users';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';


const handler = async (req) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Only POST requests allowed' }, { status: 405 });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return NextResponse.json({ message: 'Please provide both email and password' }, { status: 400 });
  }

  try {
    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Decrypt stored password
    const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8);

    // Check if password matches
    if (decryptedPassword !== password) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return NextResponse.json({ message: 'Signin successful', token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export default connectDB(handler);
