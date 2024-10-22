"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProfileView from "@/components/profile/profile_view";

const user = {
  name: "Md Robayet Ahasan",
  email: "greatrifat@gmail.com",
  imageUrl: "/image/default.jpg",
};

export default function Profile({ params }){
    const { id } = params;
    //<div> Profile id is {id}</div>
    return (
        <>
        <ProfileView/>
        
        </>
      );
}
