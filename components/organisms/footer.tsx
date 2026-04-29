import { APP_NAME } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background-4">
            <div className="max-w-[1440px] mx-auto flex flex-col justify-between px-6 md:px-8 py-12 gap-20">

                {/* 1 Div contains Left and Right sections */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    {/* Left Section: Brand Info */}
                    <div className="flex flex-col gap-4 max-w-sm">
                        <h4 className="text-text-caption-2">
                            {APP_NAME}
                        </h4>
                        <p className="body-regular text-text-caption-1">
                            Excellence in Healthcare, Committed to Your Well-being
                        </p>
                    </div>

                    {/* Right Section: Contact Info */}
                    <div className="flex flex-col gap-4 mt-4 md:mt-0">
                        <h4 className="text-text-caption-2">
                            Contact Us
                        </h4>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center space-x-2 body-regular text-text-caption-1">
                                <Phone size={16} />
                                <a href="tel:+15551234567">(555) 123-4567</a>
                            </div>

                            <div className="flex items-center space-x-2 body-regular text-text-caption-1">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:info@highland.med">info@luma.med</a>
                            </div>

                            <div className="flex items-center space-x-2 body-regular text-text-caption-1">
                                <MapPin className="w-4 h-4 mt-0.5" />
                                <span>123 Luma Dr, Highland, CA 92346</span>
                            </div>
                        </div>

                    </div>

                </div>


                {/*Bottom copyright section */}
                <div className="text-center body-regular text-text-caption-1 ">
                    <p>© {currentYear} {APP_NAME}. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}