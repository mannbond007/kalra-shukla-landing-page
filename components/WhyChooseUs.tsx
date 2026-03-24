"use client";
import { motion } from "framer-motion";
import { Users, FileEdit, UserCheck, MessageSquarePlus, BookOpenText, BarChart3 } from "lucide-react";

export default function WhyChooseUs() {
  const facilities = [
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Ensuring individual focus and a competitive peer group for better learning.",
    },
    {
      icon: FileEdit,
      title: "Weekly Tests",
      description: "Rigorous testing matching the exact pattern of NEET & JEE.",
    },
    {
      icon: UserCheck,
      title: "Personalized Attention",
      description: "One-to-one mentoring to track progress and clear bottlenecks.",
    },
    {
      icon: MessageSquarePlus,
      title: "Doubt Solving",
      description: "Dedicated doubt clearing sessions after classes for absolute clarity.",
    },
    {
      icon: BookOpenText,
      title: "Study Material",
      description: "Comprehensive modules designed by experts, updated every year.",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Regular analysis reports shared with parents and students.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Why Choose <span className="text-[#ED383C]">Kalra Shukla Classes?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our systematic approach and student-first mindset make us the premier choice for entrance exam preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-[#ED383C]/5 rounded-2xl flex items-center justify-center text-[#ED383C] mb-6 group-hover:bg-[#ED383C] group-hover:text-white transition-colors">
                <facility.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{facility.title}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
