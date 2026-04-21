"use client";

import Image from "next/image";
import { keyPartners } from "@/core/services/content.service";

export function SocialProofSection() {
  return (
    <section className="content-container pt-0 pb-6 md:pb-10 lg:pb-14">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4 md:text-3xl lg:text-4xl">
          Our Trusted Insurance Partners
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto md:text-xl">
          We collaborate with India's leading insurance providers to bring you comprehensive coverage and exceptional service.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {keyPartners.map((partner) => (
          <div
            key={partner.name}
            className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 md:p-8"
          >
            {/* Logo Section */}
            <div className="flex items-center justify-center h-20 mb-6 md:h-24 md:mb-8">
              <div className="relative w-full h-full">
                <Image
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 md:text-xl">
                  {partner.name}
                </h3>
                <div className="inline-block">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent md:text-sm">
                    {partner.specialty}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-muted leading-relaxed md:text-base">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicator */}
      <div className="mt-12 text-center md:mt-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 md:px-6 md:py-3 md:text-base">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Trusted by millions of customers across India
        </div>
      </div>
    </section>
  );
}