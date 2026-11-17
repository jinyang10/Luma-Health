import Image from "next/image";
import { bannerImageData } from "@/db/dummydata";


export default function HomeBanner() {

    if (!bannerImageData || bannerImageData.length==0) {
        return (
            <div className="w-full text-gray-500 mt-5 h-64 md:h-80 lg:h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                Banner not available
            </div>
        )
    }
  const banner = bannerImageData[0];

  return (
    //overflow hidden: ensures no content within the element goes beyond the element's boundaries
    <section className="relative w-full h-75 md:h-100 lg:h-125 overflow-hidden">
      {/* Background Image sourced directly from dummydata.ts */}
      <Image
        src={banner.imageUrl}
        alt={banner.name}
        fill //fill: tells image to take entire space of parent with the classname added
        priority
        sizes="100vw" //improves in helping performance - tells browswer this image always 100% of Viewport Width 
        className="object-cover" //image completely covers entire container while maintaining original aspect ratio
      />

      {/* Subtle dark overlay to ensure white text remains readable */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
        <h1 className="text-text-caption-2 text-center mb-6">
          Welcome to Luma Health
        </h1>
        <h4 className="text-text-caption-2 text-center">
          Excellence in Healthcare, Committed to Your Well-being
        </h4>
      </div>
    </section>
  );
}