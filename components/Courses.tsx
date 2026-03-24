"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const courses = [
  {
    title: "NEET Coaching",
    duration: "1 to 2 Years",
    tag: "Medical",
    features: [
      "Extensive NCERT coverage",
      "Regular mock tests & analysis",
      "Doubt resolution sessions",
      "Access to online question bank"
    ],
    highlight: true,
  },
  {
    title: "IIT-JEE Coaching",
    duration: "1 to 2 Years",
    tag: "Engineering",
    features: [
      "Advanced problem-solving approach",
      "Module-wise testing pattern",
      "Previous years' paper analysis",
      "Concepts masterclasses"
    ],
    highlight: false,
  },
  {
    title: "Foundation Courses",
    duration: "For Class 9th & 10th",
    tag: "Olympiads & Board",
    features: [
      "Strong conceptual base",
      "NTSE & Olympiad preparation",
      "Focus on logic & reasoning",
      "Early start advantage"
    ],
    highlight: false,
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Our Flagship <span className="text-[#ED383C]">Programs</span>
          </h2>
          <p className="text-lg text-gray-600">
            Scientifically crafted curriculum for maximum syllabus retention and perfect exam temperament.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                course.highlight 
                  ? "border-[#ED383C] shadow-xl shadow-[#ED383C]/10" 
                  : "border-gray-200 shadow-lg shadow-gray-100/50"
              } flex flex-col h-full`}
            >
              {course.highlight && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#ED383C] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-[#1A1A1A] text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
                  {course.tag}
                </span>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{course.title}</h3>
                <p className="text-gray-500 font-medium">{course.duration}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        course.highlight ? "text-[#ED383C]" : "text-gray-400"
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                  course.highlight
                    ? "bg-[#ED383C] text-white hover:bg-[#d62d31]"
                    : "bg-gray-50 text-[#1A1A1A] hover:bg-gray-100"
                }`}
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
