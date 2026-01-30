import webImg from "../assets/services/web-development.jpeg";
import mobileImg from "../assets/services/mobile-development.jpeg";
import cloudImg from "../assets/services/cloud-devops.jpeg";
import apiImg from "../assets/services/api-backend.jpeg";
import uiuxImg from "../assets/services/ui-ux-design.jpeg";
import consultingImg from "../assets/services/consulting-strategy.jpeg";

export const SERVICES = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Modern websites and web apps that load fast, look great, and convert.",
    desc: "Responsive, performant websites and web applications built with React, Next.js, and modern frameworks. We create stunning digital experiences that engage users and drive business growth.",
    image: webImg,
    highlights: ["SEO-friendly", "Fast performance", "Modern UI", "Scalable architecture"],
    features: ["Single-page apps", "E-commerce", "Dashboards", "CMS integration"],
    deliverables: ["UI components & pages", "Admin panel (optional)", "Deployment setup", "Analytics & SEO basics"],
    tech: ["React", "Vite / Next.js", "Tailwind CSS", "REST APIs", "Testing"],
    faqs: [
      { q: "How long does a website take?", a: "Most websites take 1–3 weeks depending on pages and features." },
      { q: "Do you provide hosting?", a: "Yes, we can deploy on your preferred hosting (Vercel, AWS, etc.)." },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    short: "Beautiful mobile apps for Android/iOS with smooth UX and reliable performance.",
    desc: "Native and cross-platform mobile apps for iOS and Android that users love. We build intuitive, high-performance applications that work seamlessly across all devices.",
    image: mobileImg,
    highlights: ["Android + iOS", "Smooth animations", "Push notifications", "Store publishing"],
    features: ["React Native", "Flutter", "Native iOS/Android", "App store deployment"],
    deliverables: ["App screens & flows", "API integration", "Crash reporting", "Store release support"],
    tech: ["React Native", "Flutter", "Firebase (optional)", "REST APIs"],
    faqs: [
      { q: "Can you build both Android and iOS?", a: "Yes — using cross-platform or native depending on requirements." },
      { q: "Do you help with Play Store/App Store?", a: "Yes, we guide publishing and compliance steps." },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Ship faster with CI/CD, scalable infrastructure, and reliable monitoring.",
    desc: "Infrastructure as code, CI/CD pipelines, and cloud migration (AWS, GCP, Azure). We help you build robust, scalable cloud solutions that grow with your business.",
    image: cloudImg,
    highlights: ["CI/CD pipelines", "Autoscaling", "Monitoring", "Security best practices"],
    features: ["Kubernetes", "Terraform", "GitHub Actions", "Monitoring"],
    deliverables: ["CI/CD pipeline", "IaC templates", "Alerts & dashboards", "Runbooks"],
    tech: ["AWS / GCP / Azure", "Docker", "Kubernetes", "Terraform"],
    faqs: [
      { q: "Can you migrate my app to cloud?", a: "Yes — we plan and migrate with minimal downtime." },
      { q: "Do you set up monitoring?", a: "Yes, we add logging, metrics, and alerts." },
    ],
  },
  {
    slug: "api-backend",
    title: "API & Backend",
    short: "Secure, scalable APIs and backend systems that power your product.",
    desc: "Scalable REST and GraphQL APIs, microservices, and database design with MongoDB and SQL. We build robust backend systems that can handle millions of requests.",
    image: apiImg,
    highlights: ["JWT auth", "Role-based access", "Clean architecture", "Database design"],
    features: ["Node.js / Python", "MongoDB Atlas", "GraphQL", "Authentication"],
    deliverables: ["API endpoints", "Auth & roles", "Database schema", "Documentation"],
    tech: ["Node.js (Express)", "MongoDB Atlas", "JWT", "Mongoose"],
    faqs: [
      { q: "Do you provide admin APIs?", a: "Yes — admin endpoints and dashboards can be included." },
      { q: "Will it be secure?", a: "We follow best practices (hashing, JWT, validation, CORS, etc.)." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Modern UI/UX that feels premium and improves conversions.",
    desc: "User-centered design, prototypes, and design systems that align with your brand. We create beautiful, intuitive interfaces that users love to interact with.",
    image: uiuxImg,
    highlights: ["Wireframes", "Design system", "Prototypes", "Accessibility"],
    features: ["Wireframes", "High-fidelity mockups", "Design systems", "Usability testing"],
    deliverables: ["Wireframes", "UI kit", "Prototype", "Developer handoff"],
    tech: ["Figma", "Design systems", "Accessibility", "Component-driven UI"],
    faqs: [
      { q: "Do you redesign existing apps?", a: "Yes — we can modernize UI while keeping functionality." },
      { q: "Will you provide Figma file?", a: "Yes, you get the complete editable source." },
    ],
  },
  {
    slug: "consulting-strategy",
    title: "Consulting & Strategy",
    short: "Clear technical roadmap and architecture guidance to scale confidently.",
    desc: "Technology roadmaps, architecture review, and digital transformation advisory. We help you make informed decisions that drive business success.",
    image: consultingImg,
    highlights: ["Roadmap", "Architecture review", "Cost optimization", "Scaling advice"],
    features: ["Tech due diligence", "Architecture design", "Team scaling", "Process improvement"],
    deliverables: ["Roadmap & milestones", "Architecture diagram", "Risk assessment", "Recommendations"],
    tech: ["System design", "Best practices", "Security review", "Performance review"],
    faqs: [
      { q: "Can you review my existing code?", a: "Yes — we can audit code and suggest improvements." },
      { q: "Do you help with team setup?", a: "Yes — processes, tooling, and hiring guidance." },
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}

