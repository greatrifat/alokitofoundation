import connectDB from '@/connection/mongoose';
import Users from '@/models/users';
import CryptoJS from 'crypto-js';
import { NextResponse } from 'next/server';


const handler = async (req) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Only POST requests allowed' }, { status: 405 });
  }

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return NextResponse.json({ message: 'Please provide all fields' }, { status: 400 });
  }

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ email }); 
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash password using CryptoJS
    const hashedPassword = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET).toString();

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export default connectDB(handler);
