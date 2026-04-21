import { MapSection } from "@/components/organisms/MapSection";

export function MapBlock() {
  return (
    <section className="pt-10 pb-14 md:pt-14 md:pb-18 lg:pt-18 lg:pb-22" aria-labelledby="location-heading">
      <MapSection />
    </section>
  );
}
