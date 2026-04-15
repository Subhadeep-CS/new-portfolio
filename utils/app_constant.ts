import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFramer,
  SiGit,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { AboutMeInterface, HeaderMenuItem } from "./utils.type";
export const HEADER_MENU: HeaderMenuItem[] = [
  {
    name: "Portfolio",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export const DESIGNATION: string[] = [
  "Software Engineer",
  "Frontend Engineer",
  "Convert Cafine To Code",
];

export const ABOUT_ME: AboutMeInterface[] = [
  {
    key: "Who I Am",
    details:
      "I’m a Frontend Engineer focused on building scalable, high-performance web applications using React.js and Next.js. With nearly a year of real-world experience, I enjoy crafting clean user interfaces that balance aesthetics, usability, and performance.",
    children: [],
  },
  {
    key: "What I Specialize In",
    details:
      "My expertise lies in modern frontend development, where I design reusable components, manage complex application state, and deliver smooth user experiences for production-grade applications.",
    children: [
      {
        key: "Core Technologies",
        details: "React.js, Next.js (App Router), JavaScript (ES6+)",
      },
      {
        key: "State Management",
        details:
          "Redux Toolkit with scalable and predictable state architecture",
      },
      {
        key: "UI Engineering",
        details: "Responsive, accessible UI using Tailwind CSS and shadcn/ui",
      },
      {
        key: "Performance & SEO",
        details:
          "Optimizing rendering, bundle size, and building SEO-friendly pages",
      },
    ],
  },
  {
    key: "Professional Experience",
    details:
      "I have hands-on experience working on production applications across government and healthcare domains, where reliability, maintainability, and clarity are critical.",
    children: [
      {
        key: "Government Platform",
        details:
          "Contributed to a Navaratna PSU project (RailTel / KwikRail vendor portal), handling complex forms and workflows",
      },
      {
        key: "Healthcare Application",
        details:
          "Built data-driven, form-heavy user interfaces with a strong focus on usability and performance",
      },
    ],
  },
  {
    key: "How I Think as an Engineer",
    details:
      "I prioritize clean code, long-term maintainability, and scalable architecture. I actively refactor bloated codebases, follow best practices, and continuously strengthen my fundamentals in JavaScript, React internals, and frontend system design.",
    children: [],
  },
  {
    key: "Where I’m Headed",
    details:
      "My goal is to grow into a Senior Frontend Engineer by mastering frontend architecture, advanced Next.js patterns, and performance optimization, while gradually expanding into full-stack development.",
    children: [],
  },
];

export const TECH_STACK = [
  { name: "Next.js", url: "https://nextjs.org/", icon: SiNextdotjs, color: "#000000" },
  { name: "React", url: "https://react.dev/", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", url: "https://nodejs.org/", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", url: "https://expressjs.com/", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", url: "https://www.mongodb.com/", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: SiPostgresql, color: "#4169E1" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/", icon: SiFramer, color: "#0055FF" },
  { name: "Git", url: "https://git-scm.com/", icon: SiGit, color: "#F05032" },
  { name: "Docker", url: "https://www.docker.com/", icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", url: "https://vercel.com/", icon: SiVercel, color: "#000000" },
];

export interface ExperienceRole {
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  responsibilities: string[];
  projects?: {
    name: string;
    description: string[];
  }[];
  skills: string[];
}

export interface ExperienceInterface {
  company: string;
  logoUrl?: string;
  roles: ExperienceRole[];
}

export const EXPERIENCE_DATA: ExperienceInterface[] = [
  {
    company: "Quaric",
    logoUrl: "/icons/quaric.png", // A dummy URL, we can use a generic icon if not found
    roles: [
      {
        title: "Design Engineer",
        type: "Part-time",
        startDate: "03.2024",
        endDate: "∞",
        duration: "2y 2m",
        responsibilities: [
          "Created Quaric Brand Identity.",
          "Created the Quaric Design System to standardize design practices and accelerate development."
        ],
        projects: [
          {
            name: "Quaric Website",
            description: [
              "Designed the UI/UX for Quaric Website, delivering a seamless experience.",
              "Developed online ordering to streamline purchases.",
              "Integrated VNPAY-QR for secure transactions.",
              "Registered the e-commerce site with online.gov.vn for compliance."
            ]
          },
          {
            name: "ZaDark",
            description: [
              "Build and maintain ZaDark.com with Docusaurus, integrating AdSense.",
              "Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox - with 20k+ active users via Chrome Web Store (as of Sep 2025)."
            ]
          }
        ],
        skills: ["Next.js", "Strapi", "Auth0", "VNPAY-QR", "Docker", "NGINX", "Google Cloud", "Docusaurus", "Extension", "UI/UX Design", "UX Writing", "Design System", "Brand Design", "Figma", "Research"]
      }
    ]
  }
];
