import { FaqSection } from "@/components/organisms/FaqSection";

export function FaqBlock() {
  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-20 lg:pt-18 lg:pb-28" aria-labelledby="faq-heading">
      <FaqSection />
    </section>
  );
}
