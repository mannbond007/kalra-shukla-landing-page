"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    exam: "NEET AIR 24",
    content: "The faculty here doesn't just teach, they mentor you. The study material was precisely what I needed to crack NEET with ease.",
  },
  {
    name: "Priya Singh",
    exam: "JEE Advanced AIR 85",
    content: "Joining Kalra Shukla Classes was the best decision for my JEE prep. The weekly tests helped me build my exam temperament perfectly.",
  },
  {
    name: "Rohan Verma",
    exam: "NEET Selection",
    content: "My foundation was quite weak initially, but the personal attention from teachers helped me cover all topics thoroughly.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Hear From Our <span className="text-[#ED383C]">Achievers</span>
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from our students who turned their dreams into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-[#F8F8F8] p-8 rounded-3xl relative"
            >
              <Quote className="w-12 h-12 text-[#ED383C]/20 absolute top-8 right-8" />
              
              <div className="flex items-center gap-1 mb-6 text-[#ED383C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic leading-relaxed relative z-10">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white uppercase overflow-hidden">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                  <p className="text-sm font-semibold text-[#ED383C]">{testimonial.exam}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
