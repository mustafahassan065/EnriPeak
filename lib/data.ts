import {
  Code,
  Globe,
  ShoppingCart,
  Server,
  Bot,
  Workflow,
  Sparkles,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  desc: string;
  href: string;
  icon: LucideIcon;
};

// NOTE: these /services/... pages will be built in the next phase.
export const WEB_SERVICES: Service[] = [
  { title: "Custom SaaS & Web Application Development", desc: "Dashboards, portals, SaaS and booking platforms.", href: "/services/custom-saas-web-application-development", icon: Code },
  { title: "Enterprise CMS & Portal Development", desc: "One structured content model", href: "/services/enterprise-cms", icon: Globe },
  { title: "Headless & Composable E-commerce Development", desc: "Custom stores with secure payment integration.", href: "/services/headless-ecommerce", icon: ShoppingCart },
  { title: "Website Redesign & Performance Optimization", desc: "Fast, SEO-ready websites designed to convert", href: "/services/website-redesign", icon: Server },
];

export const AI_SERVICES: Service[] = [
  { title: "AI Agents & Business Workflow Automation", desc: "Support, sales and internal agents that take action.", href: "/services/ai-agents-automation", icon: Bot },
  { title: "AI Chatbots & Conversational Assistants", desc: "A context-aware assistant that answers from your approved knowledge", href: "/services/ai-chatbots", icon: Workflow },
  { title: "Custom AI Assistants & System Integrations", desc: "One assistant connected to your CRM, ERP, documents and databases.", href: "/services/custom-ai-assistants", icon: Sparkles },
  { title: "AI-Powered Data & Document Intelligence", desc: "Read once. Extract once. Trust the output.", href: "/services/document-intelligence", icon: Plug },
];

export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Why Us", href: "/#why" },
  { label: "Contact", href: "/#contact" },
];