import { FeatureSplitSection } from "@/components/organisms/FeatureSplitSection";
import { ValuePropGrid } from "@/components/organisms/ValuePropGrid";
import { ContactForm } from "@/components/organisms/ContactForm";

export function FeaturesBlock() {
  return (
    <section id="why-kv" className="pt-10 pb-14 md:pt-14 md:pb-18 lg:pt-18 lg:pb-22 space-y-10 md:space-y-14 lg:space-y-18" aria-labelledby="features-heading">
      <ContactForm />
      <FeatureSplitSection />
      <ValuePropGrid />
    </section>
  );
}
