//represents our homepage

import Image from "next/image";
import Header from "@/components/organisms/header";
import DepartmentsSection from "@/components/organisms/our-departments";
import OurDoctors from "@/components/organisms/our-doctors";

//use flower brackets for { Button } since 
// Button component in button.tsx is a non-default export
import {Button} from '@/components/ui/button';

export default function Home() {
  return (
    <div>Homepage
      <div className="max-w-[1216px] mx-auto">
        <DepartmentsSection />
      </div>
      <br />
      <br />
      <div className="max-w-[1216px] mx-auto">
        <OurDoctors />
      </div>
      
    </div>
  );
}
