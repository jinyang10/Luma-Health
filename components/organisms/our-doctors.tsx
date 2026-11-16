import { doctorData } from "@/db/dummydata"; 
import DoctorCard from "../molecules/doctorcard";


//no need to define interface, but can
interface DoctorCardData {
    id:string;
    name:string;
    specialty:string;
    rating:number;
    reviewCount:number;
    imageUrl:string
}

export default function OurDoctors() {
  const doctors:DoctorCardData[] = doctorData;

  return (
    <section className="w-full">
      {/* Section Header */}
      <h2 className="text-text-title mb-8 text-center">
        Our Doctors
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            rating={doctor.rating}
            reviewCount={doctor.reviewCount}
            imageUrl={doctor.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}