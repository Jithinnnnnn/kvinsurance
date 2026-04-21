"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/atoms/Typography";
import { FaqItemRow } from "@/components/molecules/FaqItemRow";
import { faqs } from "@/core/services/content.service";
import { fadeInUp, smoothTransition, viewport } from "@/lib/motion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="content-container" id="faq">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={smoothTransition}
      >
        <SectionTitle id="faq-heading">Frequently asked questions</SectionTitle>
      </motion.div>

      <div className="mt-8 space-y-4">
        {faqs.map((item, index) => (
          <FaqItemRow
            key={item.question}
            item={item}
            id={`faq-${index}`}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
