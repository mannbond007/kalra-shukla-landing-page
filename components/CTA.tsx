"use client";
import { MoveRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#ED383C] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Start Your NEET/JEE Preparation Today
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join the league of top rankers. Seats for the upcoming batch are filling fast. Register now!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#ED383C] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5 transition-all"
          >
            Book Free Demo
            <MoveRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+919695501502"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 transition-all"
          >
            <PhoneCall className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
