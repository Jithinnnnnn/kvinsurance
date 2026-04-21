import { FeatureSplitSection } from "@/components/organisms/FeatureSplitSection";
import { ValuePropGrid } from "@/components/organisms/ValuePropGrid";

export function FeaturesBlock() {
  return (
    <section id="why-kv" className="section-gap space-y-16" aria-labelledby="features-heading">
      <FeatureSplitSection />
      <ValuePropGrid />
    </section>
  );
}
