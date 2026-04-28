"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { EllipsisVertical, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";

interface MenuClientProps {
    // React.ReactNode is a very flexible type: 
    // almost any type that React can render
    desktopAvatar: React.ReactNode;
}

// define component for right side of header
export default function MenuClient({desktopAvatar} : MenuClientProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = ()=> {
        setIsMobileMenuOpen(false);

    };
    
    // by default: when you open/close the side sheet, component returns focus to the element that originally opened the sheet
    // if you don't prevent default behavior, when user clicks on trigger to close it, library automatically shifts 
    // browser's focus back to the 3 dots --> results in seeing a blue/black outline around the trigger button
    const handleSheetCloseAutoFocus = (event:Event)=> {
        event.preventDefault();
    };

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
                {/* goes to the Doctors section on homepage */}
                {/* asChild: tells component to render its Child element as the rendered DOM element instead of itself*/}
                <Button asChild variant="brand" size="lg">
                    <Link href={"/"} className="text-text-caption-2">Book Appointment</Link>
                </Button>

                {/* sign in 'button'*/}
                {/* this is either: a Sign In button, or an Avatar */}
                {desktopAvatar}

            </nav>

            {/* Mobile Navigation*/}
            {/* Navigation for mobile view added here */}
            <nav className="md:hidden">

                {/* when user clicks on trigger to open/close the sheet, we call setter function and pass value true/false to it
                and isMobileMenuOpen's value is updated */}
                {/* this is a Controlled Component (React state controls Sheet's open/closed status/value) */}
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>

                    {/* Trigger: determines what controls the opening of the sheet: 3 vertical dots */}

                    {/* when you click on the button, sheettrigger captures the click and tells parent sheet to change its 
                    internal state to open --> renders the sheet content*/}
                    <SheetTrigger className="align-middle" onClick={()=>setIsMobileMenuOpen(true)}>
                        
                        {/* the 3 vertical dots (EllipsisVertical) is the clickable element for SheetTrigger */}
                        <EllipsisVertical />
                    </SheetTrigger>
                    
                    {/* Content: Sidebar */}
                    <SheetContent 
                        // side="right" means the sheetcontent (sidebar) will appear on the right side
                        side="right" 
                        onCloseAutoFocus={handleSheetCloseAutoFocus}
                        className="flex flex-col items-start p-4 bg-bakcground-2"
                    >
                        <SheetHeader className="border-b border-stroke-1 pb-4 text-left">
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>

                        {/* Top Items */}
                            
                                <ThemeToggle />

                            <Link 
                                href="/" 
                                className="body-regular text-text-body hover:text-primary transition-colors"
                            >
                                Home
                            </Link>

                            <Button 
                                variant="brand" 
                                className="w-full" 
                                onClick={handleBookAppointment}
                            >
                                Book Appointment
                            </Button>

                        {/* Bottom Pinned Item */}
                        <div className="mt-auto pb-4">
                            <Button 
                                variant="secondary" 
                                className="w-full bg-bg-2 hover:bg-bg-3 text-text-body" 
                                onClick={handleSignIn}
                            >
                                Sign In
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}