"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Visit Our <span className="text-[#ED383C]">Campus</span>
          </h2>
          <p className="text-lg text-gray-600">
            Drop by our center or get in touch with our counselors for guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          
          <div className="relative h-64 lg:h-auto min-h-[400px] bg-gray-200">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-8 text-center border-r border-gray-200">
              <MapPin className="w-16 h-16 mb-4 text-gray-300" />
              <h3 className="text-xl font-bold text-gray-500 mb-2">Interactive Map</h3>
              <p className="text-sm border border-dashed border-gray-300 p-4 rounded-xl">(Embed Google Maps iframe here in production)</p>
            </div>
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center">
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Kalra Shukla Classes</h3>
              <p className="text-gray-500 font-medium">Head Office - Gomti Nagar</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ED383C]/10 flex items-center justify-center text-[#ED383C] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Address</h4>
                  <p className="text-gray-600 mt-1">
                    The Avadh School, Vipul Khand-3<br />
                    Gomti Nagar, Lucknow – 226010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ED383C]/10 flex items-center justify-center text-[#ED383C] flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Contact No.</h4>
                  <p className="text-gray-600 mt-1">+91 9695501502</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ED383C]/10 flex items-center justify-center text-[#ED383C] flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Opening Hours</h4>
                  <p className="text-gray-600 mt-1">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-xl bg-[#1A1A1A] text-white font-bold hover:bg-gray-800 transition-colors"
              >
                Get Directions
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
