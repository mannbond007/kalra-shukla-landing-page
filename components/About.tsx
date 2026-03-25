"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const highlights = [
    "Established in 1993",
    "100,000+ Students Trained",
    "Highly Experienced Faculty",
    "Comprehensive Study Material",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
              {/* Image */}
              <Image
                src="/about_01.png"
                alt="Coaching"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ED383C]/10 via-transparent to-transparent"></div>

              {/* Optional Text Overlay (remove if not needed) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <p className="text-lg font-semibold">Our Campus</p>
                <p className="text-sm opacity-90">Top Faculty & Facilities</p>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-5 -right-3 md:-bottom-6 md:-right-4 bg-white/95 backdrop-blur-md px-3 py-3 rounded-xl shadow-md w-56 border border-gray-100"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex -space-x-2">
                  {["/s1.png", "/s2.png", "/s3.png", "/s4.png"].map(
                    (src, i) => (
                      <div
                        key={i}
                        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                      >
                        <img
                          src={src}
                          alt="Student"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ),
                  )}
                </div>

                <span className="text-[10px] font-medium text-gray-500">
                  +500
                </span>
              </div>

              {/* Title */}
              <p className="text-sm font-semibold text-[#1A1A1A] leading-tight">
                Top Achievers
              </p>

              {/* Bottom Stats */}
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#ED383C]">AIR</span>
                <span className="font-bold text-[#1A1A1A]">95%+</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
              Shaping the future of{" "}
              <span className="text-[#ED383C]">aspirants since 1993</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kalra Shukla Classes has been the most trusted name in Lucknow for
              medical and engineering entrance exams. With an unmatched
              dedication to excellence, we have continually produced top-ranking
              students.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="flex items-center gap-3 text-[#1A1A1A] font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#ED383C] flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <a
              href="#courses"
              className="inline-block bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all"
            >
              Explore Our Courses
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
