"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ViewProfileButtonProps {
    doctorID: string;
}

export default function ViewProfileButton({ doctorID }: ViewProfileButtonProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    // Navigate to the specific doctor's profile page
    // The spinner will run until the new page finishes loading
    const handleViewProfile = () => {
        startTransition(() => {router.push(`/doctors/${doctorID}`)
        });   
    };

    return (
        <Button 
            variant="brand" 
            className="w-full md:h-10 h-9 text-text-caption-2"
            onClick={handleViewProfile}
            //button disabled when isPending is true
            disabled={isPending}
        >
            {isPending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                </>
            ) : (
                "View Profile"
            )}
        </Button>
    );
}