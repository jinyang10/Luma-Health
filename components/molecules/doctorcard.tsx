import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ViewProfileButton from "./view-profile-button";

interface DoctorCardProps {
    id: string;
    name?: string;
    specialty?: string;
    rating?: number;
    reviewCount: number;
    imageUrl: string;
}

export default function DoctorCard(
    { id, name, specialty, rating, reviewCount, imageUrl }: DoctorCardProps) {
    return (
        <Card className="w-full flex flex-col max-w-sm rounded-lg shadow-sm bg-background overflow-hidden border border-border-2">
            
            <CardContent className="w-full flex flex-col md:flex-row items-start gap-3 md:gap-4 pt-6">

                {/* Avatar PIC */}
                <div className="relative shrink-0">
                    <div className="rounded-full w-12 md:w-16 aspect-square overflow-hidden relative">
                        {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={`Profile picture of ${name}`}
                            fill
                            className="object-cover"
                            
                        />) : 
                        (<div className="w-full h-full bg-gray-200 flex items-center justify-center"> 
                            <span className="text-gray-400 text-xl font-bold"> {name?.charAt(0)}</span>
                        </div>
                        )}
                    </div>
                </div>

                {/* Text: Doctor Details */}
                <div className="flex flex-col min-w-0 flex-1">
                    <h2 className="body-semibold text-text-title truncate">
                        {name}
                    </h2>
                    <p className="body-regular text-text-body-subtle truncate">
                        {specialty}
                    </p>

                    {/* Rating */}
                    <div className="md:mt-1 flex items-center justify-center md:justify-start gap-1">
                        <Star className="h-4 w-4.5 text-[#FACC15] fill-[#FACC15]" />
                        
                        <span className="body-regular text-text-body-subtle">
                            {rating?.toFixed(1)} ({reviewCount} reviews)
                        </span>
                    </div>
                </div>

            </CardContent>

            <CardFooter className="w-full border-none">
                <ViewProfileButton doctorID={id}/>
            </CardFooter>

        </Card>
    );
}