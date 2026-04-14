import { ComingSoonCta } from "@/components/sections/coming-soon-cta";
import { ContactSection } from "@/components/sections/contact-section";
import { GameSection } from "@/components/sections/game-section";
import { HomeHero } from "@/components/sections/home-hero";
import { VisualShowcase } from "@/components/sections/visual-showcase";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <GameSection />
      <VisualShowcase />
      <ComingSoonCta />
      <ContactSection />
    </>
  );
}
