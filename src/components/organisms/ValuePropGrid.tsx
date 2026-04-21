"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/atoms/Typography";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { featureCards } from "@/core/services/content.service";
import { fadeInUp, smoothTransition, viewport } from "@/lib/motion";

export function ValuePropGrid() {
  return (
    <div className="content-container" id="coverage">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={smoothTransition}
      >
        <SectionTitle id="features-heading">Everything engineered around confidence and speed.</SectionTitle>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ ...smoothTransition, delay: index * 0.08 }}
          >
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
