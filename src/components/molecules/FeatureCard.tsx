import { BodyText } from "@/components/atoms/Typography";
import type { Feature } from "@/core/types/content";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-stroke bg-white p-6 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.35)]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-foreground">
        {feature.icon}
      </span>
      <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em]">{feature.title}</h3>
      <BodyText className="mt-2">{feature.description}</BodyText>
    </article>
  );
}
