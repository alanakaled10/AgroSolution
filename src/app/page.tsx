import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import Differentials from "@/components/Differentials";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Timeline />
      <Differentials />
      <FormSection />
      <Footer />
    </main>
  );
}
