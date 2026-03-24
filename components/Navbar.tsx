"use client";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/95 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="relative h-9 sm:h-10 w-auto transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/nav-icon.png"
              alt="Kalra Shukla Classes"
              width={160}
              height={45}
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* CTA Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Secondary CTA (Hidden on small screens) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-3 rounded-[2px] text-sm font-medium border border-gray-300 text-gray-600 hover:border-[#ED383C] hover:text-[#ED383C] hover:bg-[#ED383C]/5 transition-all"
          >
            Book Free Class
          </a>

          {/* Primary CTA */}
          <a
            href="tel:+919695501502"
            className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-[2px]  text-sm font-semibold text-white bg-[#ED383C] hover:bg-[#d62d31] shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all"
          >
            <Phone className="w-[18px] h-[18px]" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </nav>
  );
}