import privacyImg from "../assets/blog/privacy.jpeg";
import businessImg from "../assets/blog/business.jpeg";
import festivalImg from "../assets/blog/festival.jpeg";
import architectureImg from "../assets/blog/architecture.jpeg";
import securityImg from "../assets/blog/security.jpeg";
import devopsImg from "../assets/blog/devops.jpeg";
import cloudImg from "../assets/blog/cloud.png";
import mobileImg from "../assets/blog/mobile.png";
import machineImg from "../assets/blog/machine.png";
import uiuxImg from "../assets/blog/ui-ux.png";
import webImg from "../assets/blog/web.png";

export const FALLBACK_BLOG_POSTS = [
  {
    _id: "1",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Learn how to create scalable, type-safe web applications using React 18 and TypeScript best practices.",
    category: "Web Development",
    tags: ["Web Development", "React", "TypeScript"],
    formattedDate: "Jan 28, 2026",
    readTime: "8 min read",
    image: architectureImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nKey points:\n- React 18 features\n- TypeScript integration\n- Best practices\n- Performance optimization",
  },
  {
    _id: "2",
    title: "Mobile App Development: React Native vs Flutter",
    excerpt: "A comprehensive comparison between React Native and Flutter for cross-platform mobile development.",
    category: "Mobile Apps",
    tags: ["Mobile Apps", "React Native", "Flutter"],
    formattedDate: "Jan 25, 2026",
    readTime: "12 min read",
    image: businessImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nHighlights:\n- Performance comparison\n- Development experience\n- Community support\n- Use cases",
  },
  {
    _id: "3",
    title: "Cloud Architecture: AWS vs Azure vs Google Cloud",
    excerpt: "Choosing the right cloud provider for your business needs and understanding key differences.",
    category: "Cloud",
    tags: ["Cloud", "AWS", "Azure", "Google Cloud"],
    formattedDate: "Jan 22, 2026",
    readTime: "10 min read",
    image: architectureImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nWe can publish festival posts, company updates, and tech articles here.",
  },
  {
    _id: "4",
    title: "From Monolith to Microservices: A Migration Guide",
    excerpt: "When and how to evolve your architecture as your product scales.",
    category: "DevOps",
    tags: ["DevOps", "Microservices", "Architecture"],
    formattedDate: "Jan 18, 2026",
    readTime: "15 min read",
    image: devopsImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nTopics:\n- Service boundaries\n- Deployment strategy\n- Observability",
  },
  {
    _id: "5",
    title: "Introduction to Machine Learning with Python",
    excerpt: "Getting started with ML: algorithms, libraries, and real-world applications for beginners.",
    category: "AI/ML",
    tags: ["AI/ML", "Python", "Machine Learning"],
    formattedDate: "Jan 15, 2026",
    readTime: "12 min read",
    image: businessImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nTopics:\n- Supervised learning\n- Unsupervised learning\n- Popular algorithms\n- Python libraries",
  },
  {
    _id: "6",
    title: "UI/UX Design Principles for Modern Web Apps",
    excerpt: "Creating intuitive, accessible, and beautiful user interfaces that users love.",
    category: "UI/UX",
    tags: ["UI/UX", "Design", "User Experience"],
    formattedDate: "Jan 12, 2026",
    readTime: "9 min read",
    image: festivalImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nPrinciples:\n- User research\n- Wireframing\n- Prototyping\n- Accessibility",
  },
  {
    _id: "7",
    title: "Docker and Kubernetes: Container Orchestration",
    excerpt: "Master containerization and orchestration for scalable application deployment.",
    category: "DevOps",
    tags: ["DevOps", "Docker", "Kubernetes", "Containers"],
    formattedDate: "Jan 10, 2026",
    readTime: "14 min read",
    image: devopsImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nTopics:\n- Container basics\n- Kubernetes concepts\n- Deployment strategies\n- Best practices",
  },
  {
    _id: "8",
    title: "Responsive Web Design with CSS Grid and Flexbox",
    excerpt: "Modern CSS techniques for creating responsive layouts that work on all devices.",
    category: "Web Development",
    tags: ["Web Development", "CSS", "Responsive Design"],
    formattedDate: "Jan 8, 2026",
    readTime: "7 min read",
    image: privacyImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nTechniques:\n- CSS Grid\n- Flexbox\n- Media queries\n- Mobile-first design",
  },
  {
    _id: "9",
    title: "Cybersecurity Best Practices for Modern Applications",
    excerpt: "Essential security measures every developer should implement to protect applications and user data.",
    category: "Security",
    tags: ["Security", "Cybersecurity", "Best Practices", "Application Security"],
    formattedDate: "Jan 5, 2026",
    readTime: "11 min read",
    image: securityImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nTopics:\n- Authentication and authorization\n- Data encryption\n- Secure coding practices\n- Security testing",
  },
  {
    _id: "10",
    title: "The Future of Cloud Computing: Trends and Predictions",
    excerpt: "Exploring emerging trends in cloud technology and what they mean for businesses and developers.",
    category: "Cloud",
    tags: ["Cloud", "Future Tech", "Trends", "Cloud Computing"],
    formattedDate: "Jan 3, 2026",
    readTime: "9 min read",
    image: cloudImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nTrends:\n- Serverless computing\n- Edge computing\n- Multi-cloud strategies\n- AI integration in cloud services",
  },
  {
    _id: "11",
    title: "Progressive Web Apps: The Future of Mobile Web",
    excerpt: "How PWAs are bridging the gap between web and native mobile applications.",
    category: "Mobile Apps",
    tags: ["Mobile Apps", "PWA", "Web Development", "Mobile Web"],
    formattedDate: "Dec 30, 2025",
    readTime: "10 min read",
    image: mobileImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nFeatures:\n- Offline functionality\n- Push notifications\n- App-like experience\n- Cross-platform compatibility",
  },
  {
    _id: "12",
    title: "Deep Learning Fundamentals: Neural Networks Explained",
    excerpt: "Understanding the basics of neural networks and deep learning for AI enthusiasts.",
    category: "AI/ML",
    tags: ["AI/ML", "Deep Learning", "Neural Networks", "Artificial Intelligence"],
    formattedDate: "Dec 28, 2025",
    readTime: "13 min read",
    image: machineImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nConcepts:\n- Neural network architecture\n- Backpropagation\n- Activation functions\n- Training and optimization",
  },
  {
    _id: "13",
    title: "Modern Web Development: Next.js vs React vs Vue",
    excerpt: "A comprehensive comparison of popular frontend frameworks for modern web development.",
    category: "Web Development",
    tags: ["Web Development", "Frameworks", "Next.js", "React", "Vue"],
    formattedDate: "Dec 25, 2025",
    readTime: "12 min read",
    image: webImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nComparison:\n- Performance benchmarks\n- Learning curve\n- Community support\n- Use case scenarios",
  },
  {
    _id: "14",
    title: "Design Systems: Building Consistent User Interfaces",
    excerpt: "How to create and maintain design systems that ensure consistency across large applications.",
    category: "UI/UX",
    tags: ["UI/UX", "Design Systems", "Component Libraries", "Design Patterns"],
    formattedDate: "Dec 22, 2025",
    readTime: "8 min read",
    image: uiuxImg,
    content:
      "This is sample content. When the backend is connected, the full post content will load from the database.\n\nElements:\n- Component libraries\n- Design tokens\n- Documentation\n- Team collaboration",
  },
];

export function getFallbackPostById(id) {
  return FALLBACK_BLOG_POSTS.find((p) => String(p._id) === String(id));
}

