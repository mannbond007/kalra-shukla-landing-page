import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Courses from "@/components/Courses";
import Methodology from "@/components/Methodology";
import Results from "@/components/Results";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <WhyChooseUs />
      <Courses />
      <Methodology />
      <Results />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
