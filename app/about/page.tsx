import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/sections/AboutIntro";
import WhyEnriPeak from "@/components/sections/WhyEnriPeak";
import Process from "@/components/sections/Process";
import AboutCta from "@/components/sections/AboutCta";

export const metadata = {
  title: "About EnriPeak | Web Development & AI Solutions",
  description: "Meet EnriPeak: a digital solutions partner combining web development and practical AI to help businesses move forward.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutIntro />
        <WhyEnriPeak />
        <Process />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
