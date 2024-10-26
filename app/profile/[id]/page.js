
import ProfileView from "@/components/profile/profile_view";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default async function Profile({ params }) {
    const { id } = params;

    // Directly call the API to fetch user data
    const res = await fetch(`${baseUrl}/api/member/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    
    if (!res.ok) {
        return <p>Error fetching profile data.</p>; // Handle error state
    }

    const user = await res.json(); // Parse JSON response
    return  <ProfileView user={user} /> ;
}
