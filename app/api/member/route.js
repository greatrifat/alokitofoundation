import connectDB from "@/connection/mongoose";
import Users from "@/models/users";
import { NextResponse } from "next/server";


export async function GET(){

    try{
        await connectDB();
        const members = await Users.find()
        return NextResponse.json(members,{status: 200});
    }catch (error) {
        console.error('Signin error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
    
}



