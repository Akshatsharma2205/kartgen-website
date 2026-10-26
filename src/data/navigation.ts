import { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const serviceNav: NavItem[] = [
  {
    label: "Business Automation & AI",
    href: "/services/business-automation",
    description: "Eliminate repetitive tasks, sync CRM/ERP data, and build intelligent workflows.",
    badge: "Automation",
  },
  {
    label: "Websites & Digital Platforms",
    href: "/services/websites-digital-platforms",
    description: "High-performance websites, client portals, and bespoke web applications.",
    badge: "Platforms",
  },
  {
    label: "Cloud & Technology Optimization",
    href: "/services/cloud-technology-optimization",
    description: "Right-size cloud bills, modernize servers, and eliminate architectural waste.",
    badge: "Infrastructure",
  },
];

export const footerLinks = {
  services: [
    { label: "Business Automation & AI", href: "/services/business-automation" },
    { label: "Websites & Digital Platforms", href: "/services/websites-digital-platforms" },
    { label: "Cloud & Technology Optimization", href: "/services/cloud-technology-optimization" },
    { label: "Services Overview & Comparison", href: "/services" },
  ],
  company: [
    { label: "About Kartgen", href: "/about" },
    { label: "Case Studies & Work", href: "/work" },
    { label: "Engineering Ethos", href: "/about#ethos" },
    { label: "Contact & Scoping", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Engagement", href: "/about#terms" },
    { label: "Privacy Notice", href: "/about#privacy" },
    { label: "Demonstration Notice", href: "/contact#demo" },
  ],
};
