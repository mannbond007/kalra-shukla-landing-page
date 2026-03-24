"use client";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, GraduationCap } from "lucide-react";

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
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="mt-1 bg-[#ED383C]/10 p-3 rounded-xl text-[#ED383C]">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
