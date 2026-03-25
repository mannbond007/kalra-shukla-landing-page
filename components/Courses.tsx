"use client";
import { Check, CircleCheckBig } from "lucide-react";

const courses = [
  {
    title: "NEET Coaching",
    duration: "1 - 2 Years",
    tag: "Medical",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800",
    desc: "Master NEET with structured preparation and proven rank strategies.",
    features: [
      "Complete NCERT coverage",
      "Weekly mock tests",
      "Doubt sessions",
      "Rank boosting strategy",
      "Personal mentorship",
      "Performance tracking",
    ],
    badge: "500+ Selections",
  },
  {
    title: "IIT-JEE Coaching",
    duration: "1 - 2 Years",
    tag: "Engineering",
    image: "https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/iit-coaching-1.jpg",
    desc: "Advanced JEE training with deep concept clarity.",
    features: [
      "Advanced problems",
      "PYQ analysis",
      "Concept mastery",
      "Test series",
      "Doubt solving sessions",
      "Rank improvement plans",
    ],
    badge: "Top AIR Results",
  },
  {
    title: "Foundation Courses",
    duration: "Class 9th & 10th",
    tag: "Olympiads",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800",
    desc: "Build strong academic base early.",
    features: [
      "Concept clarity",
      "NTSE prep",
      "Logical thinking",
      "Early advantage",
      "Competitive mindset",
      "Regular tests",
    ],
    badge: "Strong Foundation",
  },
  {
    title: "School Integrated Program",
    duration: "Class 11th & 12th",
    tag: "Integrated",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800",
    desc: "School + coaching integrated for efficiency.",
    features: [
      "Time saving",
      "Board + competitive sync",
      "Daily monitoring",
      "Better discipline",
      "Integrated curriculum",
      "Reduced stress",
    ],
    badge: "Save 3-4 Hrs Daily",
  },
];

export default function Courses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#ED383C]">Programs</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Carefully designed programs to help students achieve top ranks in NEET & JEE
            with structured learning, expert guidance, and consistent practice.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <Card key={i} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* 🔥 Card */
function Card({ course }: any) {
  return (
    <div className="group p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 h-full flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden rounded-md">
        <img
          className="h-40 w-full object-cover object-center transition duration-500 group-hover:scale-105"
          src={course.image}
          alt={course.title}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <span className="absolute top-2 left-2 text-[10px] bg-white/90 backdrop-blur px-2 py-1 rounded-full shadow font-semibold">
          {course.tag}
        </span>
      </div>

      {/* Title */}
      <p className="text-gray-900 text-lg font-semibold mt-4">
        {course.title}
      </p>

      <p className="text-xs text-gray-500 mt-1">
        {course.duration}
      </p>

      {/* Badge */}
      <p className="text-xs font-semibold text-[#ED383C] mt-2">
        {course.badge}
      </p>

      {/* Description */}
      <p className="text-zinc-500 text-sm leading-6 mt-2 mb-3">
        {course.desc}
      </p>

      {/* ✅ FEATURES WITH CLEAN CHECK ICON */}
      <ul className="space-y-2 mb-5 flex-1">
        {course.features.slice(0, 4).map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            {/* <Check className="" /> */}
            <CircleCheckBig className="w-4 h-4 text-[#ED383C] mt-[3px] stroke-[3]" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-md bg-[#ED383C] text-white text-sm font-semibold hover:bg-[#d62d31] transition-all duration-300 shadow-sm hover:shadow-md">
        Learn More
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>

    </div>
  );
}