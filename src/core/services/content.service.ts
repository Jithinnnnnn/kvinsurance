import type { FaqItem, Feature, FeatureSplit, NavLink, Partner } from "@/core/types/content";

export const navLinks: NavLink[] = [
  { label: "Coverage", href: "#coverage" },
  { label: "How It Works", href: "#why-kv" },
  { label: "FAQ", href: "#faq" },
];

export const keyPartners: Partner[] = [
  {
    name: "Oriental Insurance",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Oriental_Insurance_Company_logo.svg/1200px-The_Oriental_Insurance_Company_logo.svg.png",
    specialty: "General & Industrial",
    description: "A premier public sector insurer providing robust coverage across general insurance categories with a legacy of institutional trust."
  },
  {
    name: "New India Assurance",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/The_New_India_Assurance_Company_logo.png/220px-The_New_India_Assurance_Company_logo.png",
    specialty: "Multinational General Insurance",
    description: "India's largest multinational general insurance company, known for its strong solvency ratio and extensive range of traditional and modern policies."
  },
  {
    name: "TATA AIG",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tata_AIG_Logo.svg/1200px-Tata_AIG_Logo.svg.png",
    specialty: "Comprehensive & Motor",
    description: "Combining the trust of the Tata Group with AIG's global expertise to offer innovative and technology-driven insurance solutions."
  },
  {
    name: "Star Health",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Star_Health_and_Allied_Insurance_logo.png/250px-Star_Health_and_Allied_Insurance_logo.png",
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

// 2. Specialized Service Splits (Z-Pattern Layout)
export const featureSplits: FeatureSplit[] = [
  {
    eyebrow: "Personal Mobility",
    title: "Motor Insurance for seamless journeys",
    description:
      "Comprehensive coverage for your vehicles. We handle everything from third-party liabilities to own-damage repairs, ensuring you stay mobile without financial stress.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Family Wellness",
    title: "Health Insurance for absolute peace of mind",
    description:
      "Financial protection for medical expenses. Get access to top-tier healthcare without worrying about hospital bills, surgical costs, or pre/post-hospitalization charges.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Asset Protection",
    title: "Home Insurance to safeguard your sanctuary",
    description:
      "Protection for your residential property against fire, theft, and natural calamities. Secure your most valuable investment with our robust home protection plans.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Global Protection",
    title: "Travel Insurance for your international adventures",
    description:
      "Coverage for travel-related risks globally. From medical emergencies abroad to trip cancellations and lost baggage, we ensure your world tours remain worry-free.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Custom Solutions",
    title: "General Insurance based on your unique needs",
    description:
      "Additional insurance solutions tailored to specific customer requirements. Whether it's business assets or specialized liability, we provide the safety net you need.",
    image: "https://images.unsplash.com/photo-1454165833767-131f72a77f34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Rural Resilience",
    title: "Cattle & Dairy Farm Insurance for livestock safety",
    description:
      "Insurance designed to protect your livestock and farming risks. Safeguard your livelihood against accidental loss, disease, and environmental hazards.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
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
