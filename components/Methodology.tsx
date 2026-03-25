"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Structured Learning",
    points: [
      "Concept-focused lectures for strong fundamentals",
      "Interactive classroom discussions",
      "Step-by-step clarity building approach",
    ],
  },
  {
    number: "02",
    title: "Regular Testing",
    points: [
      "Daily Practice Papers (DPPs)",
      "Weekly full-length mock tests",
      "Focus on speed and accuracy",
    ],
  },
  {
    number: "03",
    title: "Performance Feedback",
    points: [
      "Detailed performance analysis reports",
      "Identification of weak areas",
      "Targeted improvement strategies",
    ],
  },
  {
    number: "04",
    title: "Exam Preparation",
    points: [
      "Comprehensive revision modules",
      "Rank booster sessions",
      "Final exam strategy & guidance",
    ],
  },
];

export default function Methodology() {
  return (
    <section className="py-32 bg-[#f8f9fb] text-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-28">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Our Teaching <span className="text-[#D62D31]">Methodology</span>
            </h2>

            {/* Underline */}
            <div className="mt-4 flex justify-center">
              <div className="w-25 h-[3px] bg-[#D62D31] rounded-full" />
            </div>
          </div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-[15px] leading-relaxed">
            A structured and result-driven approach focused on clarity,
            consistency, and high performance in competitive examinations.
          </p>
        </div>

        <div className="relative">
          {/* 🔥 PERFECTLY CENTERED TIMELINE */}
          <div className="hidden lg:block absolute top-[26px] left-0 w-full h-[2px] bg-gray-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center lg:text-left"
              >
                {/* 🔴 CENTERED DOT */}
                <div className="hidden lg:flex justify-center w-full mb-8 relative z-10">
                  <div className="relative flex items-center justify-center">
                    {/* Glow */}
                    <div className="absolute w-12 h-12 bg-[#D62D31]/20 rounded-full blur-xl"></div>

                    {/* Dot */}
                    <div className="w-5 h-5 rounded-full bg-[#D62D31] border-2 border-white shadow-sm" />
                  </div>
                </div>

                {/* ✨ CARD */}
                <div className="w-full rounded-xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#D62D31]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]">
                  {/* Step Badge */}
                  <div className="inline-flex items-center justify-center h-4 w-4 p-5 rounded-full border border-[#D62D31]/30 bg-[#D62D31]/10 text-[#D62D31] text-xs font-semibold tracking-[0.2em] mb-4">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3">
                    {step.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 text-[14.5px] leading-relaxed"
                      >
                        {/* ✔ Perfect Circle Icon */}
                        <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#D62D31]/15 border border-[#D62D31]/30">
                          <Check size={13} className="text-[#D62D31]" />
                        </span>

                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
