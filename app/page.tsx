import About from "@/components/sections/About";
import ContactPreview from "@/components/sections/ContactPreview";
import CTA from "@/components/sections/CTA";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import Hero from "@/components/sections/Hero";
import SecondaryCTAs from "@/components/sections/SecondaryCTAs";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <EmergencyBanner />
      <Stats />
      <Services />
      <About />
      <SecondaryCTAs />
      <CTA />
      <ContactPreview />
    </main>
  );
}