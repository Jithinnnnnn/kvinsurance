import type { FaqItem, Feature, FeatureSplit, NavLink, Partner } from "@/core/types/content";

export const navLinks: NavLink[] = [
  { label: "Coverage", href: "#coverage" },
  { label: "How It Works", href: "#why-kv" },
  { label: "FAQ", href: "#faq" },
];

export const keyPartners: Partner[] = [
  {
    name: "Oriental Insurance",
    logoUrl: "/oriental-insurance.svg",
    specialty: "General & Industrial",
    description: "A premier public sector insurer providing robust coverage across general insurance categories with a legacy of institutional trust."
  },
  {
    name: "New India Assurance",
    logoUrl: "/new-india-assurance.svg",
    specialty: "Multinational General Insurance",
    description: "India's largest multinational general insurance company, known for its strong solvency ratio and extensive range of traditional and modern policies."
  },
  {
    name: "TATA AIG",
    logoUrl: "/tata-aig.svg",
    specialty: "Comprehensive & Motor",
    description: "Combining the trust of the Tata Group with AIG's global expertise to offer innovative and technology-driven insurance solutions."
  },
  {
    name: "Star Health",
    logoUrl: "/star-health-insurance.svg",
    specialty: "Health & Allied",
    description: "India's first standalone health insurance provider, specializing in personalized health plans with a focus on high claim-settlement ratios."
  }
];

// 1. Core Service Grid (Top Tier Services)
export const featureCards: Feature[] = [
  {
    icon: "01",
    title: "Motor Insurance",
    description:
      "Comprehensive and third-party coverage for your vehicles, ensuring peace of mind on every journey with fast claim processing.",
  },
  {
    icon: "02",
    title: "Health Insurance",
    description:
      "Secure your family's future with financial protection against medical emergencies and rising healthcare costs.",
  },
  {
    icon: "03",
    title: "Home Insurance",
    description:
      "Complete protection for your residential property against fire, theft, and natural calamities.",
  },
];

// 2. Services Provided (Z-Pattern Layout)
export const featureSplits: FeatureSplit[] = [
  {
    eyebrow: "Vehicle Protection",
    title: "Motor Insurance for comprehensive vehicle coverage",
    description:
      "Comprehensive and third-party liability coverage for two-wheelers and four-wheelers, including zero-depreciation add-ons and 24/7 roadside assistance.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Medical Security",
    title: "Health Insurance for complete medical protection",
    description:
      "Financial protection for medical emergencies, covering hospitalization, pre/post-operative care, and critical illness for individuals and families.",
    image: "https://images.pexels.com/photos/5207102/pexels-photo-5207102.jpeg",
  },
  {
    eyebrow: "Property Safety",
    title: "Home Insurance to protect your valuable assets",
    description:
      "Multi-peril protection for residential properties against fire, burglary, and natural calamities, safeguarding both structure and valuable contents.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Journey Protection",
    title: "Travel Insurance for worry-free adventures",
    description:
      "Global coverage for travel-related risks, including medical emergencies abroad, trip delays, and loss of baggage or essential travel documents.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Future Security",
    title: "Life Insurance for long-term financial planning",
    description:
      "Endowment and term plans designed to provide long-term financial security for your dependents and effective wealth preservation for future goals.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Livestock Protection",
    title: "Cattle & Dairy Farm Insurance for agricultural security",
    description:
      "Specialized livestock protection designed to safeguard the livelihood of dairy farmers against disease, accidental death, and environmental hazards.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Business Coverage",
    title: "Shopkeeper's Insurance for retail business protection",
    description:
      "Integrated business protection covering shop premises, stock-in-trade, and public liability against fire, theft, and accidental damage.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Cargo Security",
    title: "Marine Insurance for comprehensive transit coverage",
    description:
      "End-to-end transit insurance for goods being transported by sea, air, or land, covering cargo loss or damage during domestic and international shipping.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    eyebrow: "Custom Solutions",
    title: "General Insurance for specialized coverage needs",
    description:
      "Bespoke additional insurance solutions tailored to unique personal or professional risks that fall outside standard policy categories.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
];


export const faqs: FaqItem[] = [
  {
    question: "How quickly can I get covered?",
    answer:
      "Most applicants complete the full digital flow in under 10 minutes, and eligible users can receive instant decisions.",
  },
  {
    question: "Can I change my policy later?",
    answer:
      "Yes. You can revisit your coverage profile at any time and request updates based on life events or income changes.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use encrypted transport, secure infrastructure, and strict access controls to protect every step of your application.",
  },
  {
    question: "Do I need a medical exam?",
    answer:
      "Many applicants qualify for no-exam coverage based on profile and underwriting checks, while some may require follow-up.",
  },
];
