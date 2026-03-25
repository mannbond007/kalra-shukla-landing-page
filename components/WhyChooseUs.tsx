"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileEdit,
  UserCheck,
  MessageSquarePlus,
  BookOpenText,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export default function WhyChooseUs() {
  const facilities = [
    {
      icon: Users,
      title: "Small Batch Size",
      points: [
        "Individual attention",
        "Better interaction",
        "Competitive peer group",
      ],
    },
    {
      icon: FileEdit,
      title: "Weekly Tests",
      points: [
        "NEET & JEE pattern",
        "Regular evaluation",
        "Performance insights",
      ],
    },
    {
      icon: UserCheck,
      title: "Personalized Attention",
      points: [
        "One-to-one mentoring",
        "Progress tracking",
        "Weak area focus",
      ],
    },
    {
      icon: MessageSquarePlus,
      title: "Doubt Solving",
      points: [
        "Dedicated sessions",
        "Instant resolution",
        "Concept clarity",
      ],
    },
    {
      icon: BookOpenText,
      title: "Study Material",
      points: [
        "Expert-designed modules",
        "Updated yearly",
        "Complete coverage",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      points: [
        "Detailed reports",
        "Parent updates",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Why Choose{" "}
            <span className="text-[#D62D31]">
              Kalra Shukla Classes?
            </span>
          </h2>

          <div className="h-[3px] w-20 bg-[#D62D31] mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-base md:text-lg">
            Our systematic approach and student-first mindset make us the premier
            choice for entrance exam preparation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-15 h-15 rounded-full bg-[#FDECEC] flex items-center justify-center text-[#D62D31] mb-6 transition-all duration-300 group-hover:bg-[#D62D31] group-hover:text-white">
                <facility.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                {facility.title}
              </h3>

              {/* ✅ Points with Tick Circle */}
              <ul className="space-y-2">
                {facility.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#FDECEC] mt-[2px]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D62D31]" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}