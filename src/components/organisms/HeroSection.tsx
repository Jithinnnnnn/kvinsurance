"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { BodyText, DisplayTitle } from "@/components/atoms/Typography";
import { fadeInUp, smoothTransition, viewport } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="bg-ivory/70 pt-3 pb-6 md:pt-4 md:pb-8 lg:pt-6 lg:pb-12">
      <div className="content-container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={smoothTransition}
          className="grid overflow-hidden rounded-[2rem] border border-white/70 bg-[#c7d6d8] shadow-[0_24px_60px_-36px_rgba(2,32,71,0.35)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"
        >
          <div className="flex flex-col justify-center px-6 py-10 text-left md:px-12 md:py-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">
            K Vaidyan Solutions              
            </p>
            <DisplayTitle className="max-w-xl text-slate-900" id="hero-heading">
              Protecting You and Your Family
            </DisplayTitle>
            <BodyText className="mt-4 max-w-xl text-slate-700">
              Financial services are essential for any business or individual seeking to manage their finances effectively. One of the key aspects of financial services is finding a reliable company that can provide the required services. K-Vaidyan Solutions in Thevalakkara, Kollam is a reputable financial service company that offers high-quality financial services to clients in Thevalakkara, Kollam.
            </BodyText>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#quote" ariaLabel="Get started with a quote">
                Get Started
              </Button>
              <Button href="#why-kv" variant="ghost" ariaLabel="Learn how it works">
                See How It Works
              </Button>
            </div>
          </div>

          <div className="relative min-h-[16rem] sm:min-h-[18rem] md:min-h-[22rem]">
            <Image
              src="/family.jpg"
              alt="Happy family together"
              fill
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top sm:object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
