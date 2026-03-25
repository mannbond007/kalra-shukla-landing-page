"use client";

import { motion } from "framer-motion";
import { Quote, Star, CheckCircle } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    exam: "NEET AIR 24",
    image: "/students/s1.jpg",
    content:
      "The faculty here doesn't just teach, they mentor you. The study material was precisely what I needed to crack NEET with ease.",
  },
  {
    name: "Priya Singh",
    exam: "JEE Advanced AIR 85",
    image: "/students/s2.jpg",
    content:
      "Joining Kalra Shukla Classes was the best decision for my JEE prep. The weekly tests helped me build my exam temperament perfectly.",
  },
  {
    name: "Rohan Verma",
    exam: "NEET Selection",
    image: "/students/s3.png",
    content:
      "My foundation was quite weak initially, but the personal attention from teachers helped me cover all topics thoroughly.",
  },

  // 🔥 NEW STUDENTS

  {
    name: "Ananya Gupta",
    exam: "NEET AIR 142",
    image: "/students/s4.png",
    content:
      "The structured study plan and regular tests helped me stay consistent throughout my preparation. The guidance was truly exceptional.",
  },
  {
    name: "Kunal Mehta",
    exam: "JEE Main 99.2 Percentile",
    image: "/students/s5.png",
    content:
      "What I loved most was the discipline and environment here. It kept me focused and motivated every single day.",
  },
  {
    name: "Sneha Kapoor",
    exam: "NEET Selection",
    image: "/students/s6.png",
    content:
      "The doubt solving sessions were a game changer for me. Every concept was explained until I understood it completely.",
  },
  // {
  //   name: "Aditya Raj",
  //   exam: "JEE Advanced AIR 312",
  //   image: "/students/student7.jpg",
  //   content:
  //     "The faculty and test series prepared me for the real exam pressure. I felt confident on exam day because of the training here.",
  // },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Hear From Our{" "}
            <span className="text-[#D62D31]">Achievers</span>
          </h2>

          <div className="h-[3px] w-16 bg-[#D62D31] mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-base">
            Real stories from our students who turned their dreams into reality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote */}
              <Quote className="w-10 h-10 text-[#D62D31]/20 absolute top-6 right-6" />

              {/* ⭐ Stars */}
              <div className="flex items-center gap-1 mb-5 text-[#D62D31]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                “{testimonial.content}”
              </p>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-6">

                {/* User (with real image) */}
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1A1A1A]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm font-medium text-[#D62D31]">
                      {testimonial.exam}
                    </p>
                  </div>
                </div>

                {/* 🔥 Google + Verified */}
                <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-gray-100 shadow-sm">

                  {/* Google SVG */}
                  <svg width="16" height="16" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.36 1.22 8.27 2.24l6.13-6.13C34.91 2.32 29.87 0 24 0 14.82 0 6.7 5.48 2.69 13.44l7.54 5.86C12.25 13.09 17.7 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.14 24.5c0-1.64-.15-3.2-.43-4.7H24v9h12.5c-.54 2.9-2.17 5.35-4.63 7.01l7.16 5.56C43.98 37.2 46.14 31.39 46.14 24.5z"/>
                    <path fill="#FBBC05" d="M10.23 28.3a14.48 14.48 0 0 1 0-8.6l-7.54-5.86A23.97 23.97 0 0 0 0 24c0 3.85.92 7.48 2.69 10.56l7.54-5.86z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.92-2.14 15.89-5.82l-7.16-5.56c-2.02 1.36-4.6 2.17-8.73 2.17-6.3 0-11.75-3.59-13.77-8.8l-7.54 5.86C6.7 42.52 14.82 48 24 48z"/>
                  </svg>

                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}