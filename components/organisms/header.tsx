import Link from "next/link";
import { Plus, Sun } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import MenuClient from "../molecules/menu-client";

export default function Header() {
  return (
    <header className="w-full bg-background-2 sticky top-0 z-50">
      <div className="max-w-[1440px] h-[65px] mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Left Side: Logo & Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            {/* Medical Cross Icon */}
            <div className="bg-[#1B9AF5] w-8 h-8 rounded-sm flex items-center justify-center text-white shrink-0">
              <Plus size={24} strokeWidth={3} />
            </div>
            {/* Brand Name */}
            <h3 className="hidden lg:block">{APP_NAME}</h3>
          </Link>
        </div>

        {/*  Right Side  */}
        <div>
          <MenuClient />
        </div>
      </div>
    </header>
  );
}
