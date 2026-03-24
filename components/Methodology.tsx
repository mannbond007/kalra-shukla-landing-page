"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Structured Learning",
    description: "In-depth concept building through expertly designed lectures and interactive classroom discussions.",
  },
  {
    number: "02",
    title: "Regular Testing",
    description: "Daily Practice Papers (DPPs) and weekly mock exams to build speed and accuracy.",
  },
  {
    number: "03",
    title: "Feedback System",
    description: "Personalized performance reports to identify weak areas and formulate improvement strategies.",
  },
  {
    number: "04",
    title: "Exam Focus",
    description: "Intensive revision modules and rank booster sessions before the final exams.",
  }
];

export default function Methodology() {
  return (
    <section className="py-20 lg:py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ED383C] opacity-5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Teaching <span className="text-[#ED383C]">Methodology</span>
          </h2>
          <p className="text-lg text-gray-400">
            A step-by-step roadmap that transforms regular students into top rankers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gray-800" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 mx-auto md:mx-0 bg-[#222222] border-4 border-[#1A1A1A] rounded-2xl flex items-center justify-center mb-8 relative group hover:-translate-y-2 transition-transform shadow-2xl">
                {/* Connecting dot overlay on line */}
                <div className="hidden lg:block absolute top-1/2 -right-12 xl:-right-[3.25rem] w-4 h-4 bg-[#ED383C] rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="text-3xl font-black text-[#ED383C]">{step.number}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
