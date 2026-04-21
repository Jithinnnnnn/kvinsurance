import { HeroSection } from "@/components/organisms/HeroSection";

export function HeroBlock() {
  return (
    <section id="top" className="pt-20 pb-8 md:pt-28 md:pb-12 lg:pt-24 lg:pb-16" aria-labelledby="hero-heading">
      <HeroSection />
    </section>
  );
}
