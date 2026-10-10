import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ReviewCardProps {
    id: string;
    name: string;
    avatarUrl?: string;
    rating: number;
    testimonial: string;
    date: string;
}

export default function ReviewCard({
    id, name, date, testimonial, rating, avatarUrl,
}: ReviewCardProps) {
    return (
        <Card className="flex flex-col gap-4 p-6 w-full max-w-[384px] rounded-lg bg-background border border-border-2">
            {/* Header: Avatar, Name, and Stars */}
            <CardHeader className="flex flex-col md:flex-row items-center gap-2 md:gap-3 p-0">

                {/* Avatar */}
                <div className="relative shrink-0 w-10 rounded-full aspect-square md:w-12 overflow-hidden">
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt={`${name}'s avatar`}
                            fill
                            className="object-cover rounded-full"
                        />) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-xl">{name?.charAt(0)}</span>
                        </div>
                    )}
                </div>

                {/* Name and Rating */}
                {/* - this div can shrink elements as much as nec to fit in container 
                 -overflow hidden: no child content can go beyond the border*/}
                <div className="flex flex-col flex-1 min-w-0 overflow-hidden text-center md:text-left">
                    <div className="truncate body-semibold text-text-title mt-[3px]">
                        {name}
                    </div>

                    {/* Dynamic Star Rendering */}
                    <div className="flex justify-center md:justify-start mb-[3px]">

                        {/* create array of length 5, iterate over array, get index, for each index 
                        return a Star component  --> .map() replaces each value with whatever is returned
                        _ -> the current value, not being used*/}
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                // React requires a key for elements rendered as a list
                                key={index}
                                className={`h-4 w-4.5 ${index < rating
                                    ? "text-[#FACC15] fill-[#FACC15]" // Filled yellow star
                                    : "text-gray-200 fill-gray-200"   // Empty gray star fallback
                                    }`}

                                // patient rates 3 starts --> rating = 3 --> 0 1 2 3 4 
                                // --> only want Stars at 0 1 2 to be filled 
                            />
                        ))}
                    </div>
                </div>

            </CardHeader>

            {/* flex-grow applied to make sure multiple cards in a grid have the same height */}
            <CardContent className="p-0 bg-transparent overflow-hidden flex-grow">

                {/* Body: Review Text */}
                
                {/* ensure review isn't longer than 3 lines: line-clamp-3 */}
                <p className="body-regular text-text-body-subtle line-clamp-3">
                    &ldquo;{testimonial}&rdquo;
                </p>
            </CardContent>

            <CardFooter className="p-0 pb-6  bg-transparent">
                {/* Footer: Date */}
                <p className="body-small text-text-caption-1">
                    {date}
                </p>
            </CardFooter>
        </Card>
    );
}