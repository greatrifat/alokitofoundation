import Team from "@/components/team/team";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;

async function fetchMembers() {
    try {
        const res = await fetch(`${baseUrl}/api/member`, { 
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Parse the JSON response
        const result = await res.json();

        if (res.status === 200) {
            return result; // Return the fetched data (not stringified)
        } else {
            
            return null;  // Return null in case of an error
        }
    } catch (error) {
        console.error('Error fetching members:', error);
        return null;  // Handle fetch error
    }

    
}



export default async function MembersList() {
    
    const members  = await fetchMembers();
    
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Team members={members}/>
                </div>
                
            </div>
        </section >
    )
}