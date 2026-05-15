import About from "@/components/sections/About";
import ContactPreview from "@/components/sections/ContactPreview";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <About />
      <CTA />
      <ContactPreview />
    </main>
  );
}