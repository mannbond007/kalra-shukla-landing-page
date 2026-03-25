"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start: number | null = null;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 100000, suffix: "+", label: "Students Mentored" },
  { value: 33, suffix: "+", label: "Years of Trust" },
  { value: 25000, suffix: "+", label: "NEET Selections" },
  { value: 15000, suffix: "+", label: "JEE Selections" },
];

export default function Results() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Impact in Numbers
          </h2>
          <div className="h-[2.5px] w-25 bg-[#D62D31] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-6 relative"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-extrabold text-[#D62D31] tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="mt-2 text-gray-500 text-sm md:text-base">
                {stat.label}
              </p>

              {/* Divider */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:flex flex-col items-center absolute right-0 top-1/2 -translate-y-1/2">
  <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-[#D62D31] to-transparent"></div>
  <div className="w-2 h-2 bg-[#D62D31] rounded-full mt-1"></div>
</div>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}