import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Business Automation & AI Services | Kartgen Infotech LLP",
  description:
    "Less Manual Work. Better Business Operations. Resilient workflow automation, API integration, and intelligent document extraction.",
};

export default function BusinessAutomationPage() {
  const service = servicesData.find((s) => s.slug === "business-automation");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
