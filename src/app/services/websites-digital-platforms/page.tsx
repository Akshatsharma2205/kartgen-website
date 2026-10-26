import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Websites & Digital Platforms | Kartgen Infotech LLP",
  description:
    "Digital Experiences Built Around Your Business. High-speed corporate websites, client portals, and bespoke web platforms.",
};

export default function WebsitesDigitalPlatformsPage() {
  const service = servicesData.find((s) => s.slug === "websites-digital-platforms");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
