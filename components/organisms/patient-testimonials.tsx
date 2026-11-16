import ReviewCard from "../molecules/review";
import { testimonialData } from "@/db/dummydata";

interface ReviewData {
    id: string;
    patientName: string;
    rating: number;
    patientImage?: string;
    testimonialText: string;
    reviewDate: string;
}

export default function PatientTestimonials() {
   const testimonials: ReviewData[] = testimonialData;
   

    return (
        <section className="w-full">
            {/* Section Header */}
            <h2 className="text-text-title mb-8 text-center ">
                Patient Testimonials
            </h2>

            {/* Responsive Grid Layout */}

            {testimonials.length>0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
                    {testimonials.map((testimonial) => (
                        <ReviewCard
                            key={testimonial.id}
                            id={testimonial.id}
                            name={testimonial.patientName}
                            avatarUrl={testimonial.patientImage || ""}
                            rating={testimonial.rating}
                            testimonial={testimonial.testimonialText}
                            date={testimonial.reviewDate}
                        />
                    ))}
                </div>) : (
                    <div className="text-gray-500 text-center"> No Patient Reviews yet </div>
                )

            }
        </section>
    );
}