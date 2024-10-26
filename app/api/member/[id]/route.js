import connectDB from "@/connection/mongoose";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import mongoose from 'mongoose';

export async function GET(req, { params }) {
    try {
        const { id } = params; // Get the dynamic route parameter
        
        // Check if id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        // Establish MongoDB connection
        await connectDB();

        // Fetch the user based on the provided id
        const user = await Users.findById(id);

        // If no user is found
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Return the user data
        return NextResponse.json(user, { status: 200 });

    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}


export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const data = await req.json(); // Get all data from the request body

        // Check if id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        // Connect to the database
        await connectDB();

        // Find and update the user data with provided fields
        const updatedUser = await Users.findByIdAndUpdate(
            id,
            { $set: data },  // Dynamically set fields from request body
            { new: true, runValidators: true }  // Return the updated document and run schema validation
        );

        // If no user is found
        if (!updatedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Return the updated user data
        return NextResponse.json({ message: 'User updated successfully', user: updatedUser }, { status: 200 });

    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}



export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        
        // Check if id is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        // Connect to the database
        await connectDB();

        // Find and delete the user data
        const deletedUser = await Users.findByIdAndDelete(id);

        // If no user is found
        if (!deletedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Return success message
        return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}