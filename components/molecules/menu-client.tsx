"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sun, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

export default function MenuClient() {
    const router = useRouter();

    const handleBookAppointment = () => router.push("/");
    const handleSignIn = () => router.push("/sign-in");

    return(
        <div>
            { /* Desktop, Tablet Nav */}
            <nav className="hidden md:flex items-center gap-3">
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Home Link */}
                <Link href="/" className="body-regular text-text-body hover:text-primary"> 
                Home 
                </Link>
                

                {/* Book Appointment Button */}
                <Button variant="default">Book Appointment</Button>

                {/*  */}


            </nav>

            {/* Mobile */}
            <nav className="flex md:hidden items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="Open menu" className="text-gray-700 hover:text-gray-900">
                            <MoreVertical size={24} />
                        </Button>
                    </SheetTrigger>
                    
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col bg-background">
                        <SheetHeader className="border-b pb-4 text-left">
                            <SheetTitle className="font-bold text-lg text-foreground">Menu</SheetTitle>
                        </SheetHeader>

                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col gap-6 mt-6 flex-1">
                            {/* Theme Toggle (Mobile) */}
                            <div className="flex justify-start">
                                <button aria-label="Toggle theme" className="text-gray-700 hover:text-gray-900 transition-colors">
                                    <Sun size={20} strokeWidth={2} />
                                </button>
                            </div>

                            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                                Home
                            </Link>

                            <Button variant="ghost" className="w-full" onClick={handleBookAppointment}>
                                Book Appointment
                            </Button>
                        </div>

                        {/* Mobile Footer Area (Sign In) */}
                        <div className="mt-auto pt-6 pb-2">
                            {/* TODO: Replace this block with <SigninOrAvatar /> later */}
                            <Button variant="secondary" className="w-full" onClick={handleSignIn}>
                                Sign In
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}