import SingleCard from "@/components/memberCard";


export default function MembersList() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <SingleCard
                        id="001"
                        name="Robayet Ahasan"
                        position="Student "
                        bio="hello this is robayet Ahasan, I am a cs student must be default text"
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        fbHref="/#"
                        webHref="/#"

                    />

                    <SingleCard
                        id="002"
                        name="Ahasan Rifat"
                        position="Student & owner"
                        bio="Lana drives the technical strategy of the flowbite platform and brand."
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        fbHref="/#"
                        webHref="/#"
                    />

                    <SingleCard
                        id="002"
                        name="Ahasan Rifat"
                        position="Student & owner"
                        bio="Lana drives the technical strategy of the flowbite platform and brand."
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        fbHref="/#"
                        webHref="/#"
                    />

                    <SingleCard
                        id="002"
                        name="Ahasan Rifat"
                        position="Student & owner"
                        bio="Lana drives the technical strategy of the flowbite platform and brand."
                        image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        fbHref="/#"
                        webHref="/#"
                    />

                </div>
            </div>
        </section>
    )
}