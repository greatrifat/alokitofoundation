"use client";
import { useRouter } from "next/navigation";

export default async function ProfileUpdatePage({ params }) {
    const router = useRouter();
    const id = "671a9fa3409db7d7ddddbe8a"; // Replace with the actual ID if static, or pass via params.

    const handleUpdate = async () => {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;

        try {
            const res = await fetch(`${baseUrl}/api/member/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store",
                },
                body: JSON.stringify({
                    name: 'update name',
                    location: 'Dhaka',
                    password: '1234',
                    bio: 'Default Bio',
                    facebook: 'facebook.com/greatrifat',
                    imageUrl: 'https://res.cloudinary.com/dxtmwgpcl/image/upload/v1729879417/my-folder/lcidmnztoebtsjesw1yi.png'
                }),
            });

            const data = await res.json();

            if (res.status === 200) {
                alert(data.message || "User updated successfully");
                router.push("/profile");  // Redirect to the profile page or another page if needed
            } else {
                alert(data.message || "Update failed");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Error updating profile");
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
            <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Update Profile
            </button>
        </div>
    );
}
