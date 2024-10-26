import LoadingAnimation from "@/components/others/loading";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(
        <>
        <LoadingAnimation text="Fetching profile data"/>
        
        </>
    );
  }