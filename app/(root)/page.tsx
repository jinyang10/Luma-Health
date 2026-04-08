//represents our homepage!!

import Image from "next/image";
import Header from "@/components/organisms/header";

//use flower brackets for { Button } since 
// Button component in button.tsx is a non-default export
import {Button} from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      Homepage
    </div>
  );
}
