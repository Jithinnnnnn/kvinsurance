import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";
import { FaqBlock } from "@/sections/FaqBlock";
import { FeaturesBlock } from "@/sections/FeaturesBlock";
import { HeroBlock } from "@/sections/HeroBlock";
import { MapBlock } from "@/sections/MapBlock";
import { TrustBlock } from "@/sections/TrustBlock";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="ladder-rail">
        <HeroBlock />
        <TrustBlock />
        <FeaturesBlock />
        <MapBlock />
        <FaqBlock />
      </main>
      <Footer />
    </div>
  );
}
