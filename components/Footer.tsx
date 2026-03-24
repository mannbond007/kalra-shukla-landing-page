import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="inline-block bg-[#1A1A1A] p-[1px] rounded-md">
              <Image
                src="/nav-icon.png"
                alt="Kalra Shukla Classes"
                width={160}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneers in competitive exam preparation since 1993, dedicated to
              producing top rankers in NEET and JEE.
            </p>
            <div className="flex gap-4 text-white">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED383C] transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED383C] transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED383C] transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ED383C] transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#ED383C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  NEET Target Batch
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  JEE Target Batch
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  Foundation XII
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  Foundation XI
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="hover:text-[#ED383C] transition-colors"
                >
                  Pre-Foundation IX/X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#ED383C] flex-shrink-0 mt-1" />
                <span>
                  The Avadh School, Vipul Khand-3, Gomti Nagar, Lucknow – 226010
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#ED383C] flex-shrink-0" />
                <span>+91 9695501502</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#ED383C] flex-shrink-0" />
                <span>info@kalrashukla.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Kalra Shukla Classes. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
