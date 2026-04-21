"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BodyText, SectionTitle } from "@/components/atoms/Typography";
import { featureSplits } from "@/core/services/content.service";
import { fadeInUp, smoothTransition, viewport } from "@/lib/motion";

export function FeatureSplitSection() {
  return (
    <section className="content-container py-16 md:py-24 lg:py-32">
      <div className="space-y-16 md:space-y-24 lg:space-y-32">
        {featureSplits.map((item, index) => {
          const reverse = index % 2 === 1;
          return (
            <article 
              key={item.title} 
              className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
            >
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={smoothTransition}
                className={`space-y-4 md:space-y-6 ${reverse ? "lg:order-2" : ""}`}
              >
                <div className="inline-block">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent md:px-4 md:py-2 md:text-sm">
                    {item.eyebrow}
                  </span>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <SectionTitle className="text-foreground">{item.title}</SectionTitle>
                  <BodyText className="text-base leading-relaxed text-muted md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
                    {item.description}
                  </BodyText>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ ...smoothTransition, delay: 0.1 }}
                className={`group relative ${reverse ? "lg:order-1" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-2xl transition-all duration-500 group-hover:shadow-3xl md:aspect-[3/2] md:rounded-3xl lg:aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <Image
                    src={item.image}
                    alt={`${item.title} - Professional insurance services`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
