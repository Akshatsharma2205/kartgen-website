import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Cloud & Technology Optimization | Kartgen Infotech LLP",
  description:
    "Make Your Technology Work Smarter. Cloud bill right-sizing, VPS migration, Docker containerization, and database query tuning.",
};

export default function CloudTechnologyOptimizationPage() {
  const service = servicesData.find((s) => s.slug === "cloud-technology-optimization");

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
