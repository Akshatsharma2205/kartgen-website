export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ServicePillar {
  slug: string;
  route: string;
  title: string;
  shortDescription: string;
  headline: string;
  summary: string;
  illustrationPath: string;
  problems: {
    title: string;
    description: string;
  }[];
  offerings: {
    title: string;
    description: string;
    capabilities: string[];
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  exampleApplications: {
    title: string;
    description: string;
    tag: string;
    illustrative: boolean;
  }[];
  kartgenApproach: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Business Automation & AI' | 'Websites & Digital Platforms' | 'Cloud & Technology Optimization';
  categorySlug: 'business-automation' | 'websites-digital-platforms' | 'cloud-technology-optimization';
  summary: string;
  businessProblem: string;
  solutionDelivered: string;
  outcomes: string[];
  technologies: string[];
  illustrative: boolean;
  statusLabel: string;
}

export interface BusinessOutcome {
  id: string;
  title: string;
  metricLabel: string;
  metricValue: string;
  description: string;
}
