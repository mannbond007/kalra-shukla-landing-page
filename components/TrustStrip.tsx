"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Clock,
  BookOpen,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Legacy",
    description: "Delivering top ranks consistently since 1993.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Highest selection ratio in UP for NEET & JEE.",
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from IITians & top medical professionals.",
  },
  {
    icon: Clock,
    title: "Structured Timetable",
    description: "Well-planned schedule for maximum productivity.",
  },
  {
    icon: BookOpen,
    title: "Quality Study Material",
    description: "Curated notes & test series for exam success.",
  },
  {
    icon: Users,
    title: "Personal Mentorship",
    description: "Guidance and doubt support for every student.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 border-y border-gray-100 overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#ED383C]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-2xl md:text-3xl font-extrabold text-[#1A1A1A]">
  Why Students Trust{" "}
  <span className="text-[#ED383C]">Kalra Shukla</span>

  {/* centered underline */}
  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[3px] w-[150px] bg-gradient-to-r from-[#ED383C] to-red-300 rounded-full"></span>
</h2>
          <p className="text-gray-500 mt-7 text-sm md:text-base">
            Results-driven coaching with decades of excellence
          </p>
        </div>

        {/* 🔥 ALL CARDS SAME STYLE */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 hover:from-[#ED383C]/40 hover:to-[#ED383C]/10 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl p-6 h-full flex items-start gap-4 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* ICON (same for all) */}
                <div className="relative mt-1">
                  {/* glow */}
                  <div className="absolute inset-0 w-12 h-12 bg-[#ED383C]/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {/* icon box */}
                  <div
                    className="relative flex items-center justify-center w-13 h-13 rounded-lg 
                    bg-gradient-to-br from-[#ED383C]/10 to-[#ED383C]/5
                    border border-[#ED383C]/20
                    shadow-sm group-hover:shadow-md
                    transition-all duration-300 group-hover:scale-110"
                  >
                    <feature.icon className="w-6 h-6 text-[#ED383C]" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1 group-hover:text-[#ED383C] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
