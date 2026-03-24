"use client";
import { motion } from "framer-motion";
import { ChevronRight, PhoneCall, Award, Users, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8F8F8]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-[#ED383C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#ED383C]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Established in <span className="font-bold text-[#ED383C]">1993</span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.15] mb-6">
              Best <span className="text-[#ED383C]">NEET & IIT-JEE</span>{" "}
              Coaching in Lucknow
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Unlock your true potential with expert faculty, rigorous testing,
              and a proven track record. Trusted since 1993 with 100,000+
              successful students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="inline-flex justify-center items-center gap-2 bg-[#ED383C] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d62d31] transition-all shadow-lg hover:shadow-[#ED383C]/30 hover:-translate-y-0.5"
              >
                Book Free Demo
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+919695501502"
                className="inline-flex justify-center items-center gap-2 bg-white text-[#1A1A1A] border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[550px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              {/* Background Image */}
              <Image
                src="/hero.webp" // put your image in public folder
                alt="Students studying in coaching class"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay (for premium look) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                <h2 className="text-3xl font-bold mb-2 uppercase tracking-wide">
                  Premium Coaching
                </h2>
                <p className="text-sm opacity-90">
                  NEET & JEE Preparation with Top Faculty
                </p>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-12 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#ED383C]/10 flex items-center justify-center text-[#ED383C]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1A1A1A]">33+</p>
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  Years Exp.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-12 -right-6 md:-right-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1A1A1A]">100k+</p>
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  Students
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
