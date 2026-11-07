import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import AIDemo from "@/components/sections/AIDemo";
import Why from "@/components/sections/Why";
import Process from "@/components/sections/Process";
import Ways from "@/components/sections/Ways";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <AIDemo />
        <Faq />  
      </main>
      <Footer />
    </>
  );
}