import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiNpm,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFramer,
  SiGreensock,
  SiGraphql,
  SiReactrouter,
  SiRedux,
  SiReactquery,
  SiFigma,
  SiMui,
  SiAntdesign,
  SiDocker,
  SiVercel,
  SiGithub,
  SiRadixui,
  SiSocketdotio,
  SiAstro,
} from "react-icons/si";

import {
  CodeXml,
  Lightbulb,
  MapPin,
  Phone,
  Link as LinkIcon,
  Mail,
  User,
} from "lucide-react";

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
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Beyond Code",
    href: "/library",
  },
  {
    name: "Education",
    href: "/education",
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
      "I’m a Frontend Engineer with nearly 2 years of experience building scalable, high-performance web applications using React.js and Next.js. I focus on crafting clean, intuitive user interfaces that balance aesthetics, usability, and performance.",
    children: [],
  },
  {
    key: "What I Specialize In",
    details:
      "I specialize in modern frontend development, designing scalable component architectures, managing complex application state, and delivering smooth, production-grade user experiences.",
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
        details:
          "Responsive, accessible UI development using Tailwind CSS and shadcn/ui",
      },
      {
        key: "Performance & SEO",
        details:
          "Optimizing rendering, reducing bundle size, and building SEO-friendly applications",
      },
    ],
  },
  {
    key: "Professional Experience",
    details:
      "I have hands-on experience working on production-grade applications across different domains, focusing on scalability, performance, and maintainability.",
    children: [
      {
        key: "Government Platform",
        details:
          "Contributed to a Navaratna PSU project (RailTel / KwikRail vendor portal), building complex multi-step forms, workflows, and data-driven UI systems",
      },
      {
        key: "OTT Platform (Imboxo)",
        details:
          "Built and contributed to an OTT platform (imboxo.com), developing dynamic, content-driven user interfaces with a focus on performance, smooth media experience, and scalable frontend architecture",
      },
    ],
  },
  {
    key: "How I Think as an Engineer",
    details:
      "I prioritize clean code, scalable architecture, and long-term maintainability. I actively refactor complex codebases, follow best practices, and continuously deepen my understanding of JavaScript, React internals, and frontend system design.",
    children: [],
  },
  {
    key: "Where I’m Headed",
    details:
      "I’m focused on growing into a Senior Frontend Engineer by mastering advanced frontend architecture, deepening my expertise in Next.js, and gradually expanding into full-stack development.",
    children: [],
  },
];
export const TECH_STACK = [
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: SiTypescript, color: "#3178C6" },
  { name: "React", url: "https://react.dev/", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", url: "https://nextjs.org/", icon: SiNextdotjs, color: "#000000" },
  { name: "Astro", url: "https://astro.build/", icon: SiAstro, color: "#FF5D01" },
  { name: "React Router", url: "https://reactrouter.com/", icon: SiReactrouter, color: "#CA4245" },
  { name: "Redux", url: "https://redux.js.org/", icon: SiRedux, color: "#764ABC" },
  { name: "TanStack", url: "https://tanstack.com/query/latest", icon: SiReactquery, color: "#FF4154" },
  { name: "GraphQL", url: "https://graphql.org/", icon: SiGraphql, color: "#E10098" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "shadcn/ui", url: "https://ui.shadcn.com/", icon: SiShadcnui, color: "#000000" },
  { name: "Radix UI", url: "https://www.radix-ui.com/", icon: SiRadixui, color: "#161618" },
  { name: "Socket.io", url: "https://socket.io/", icon: SiSocketdotio, color: "#010101" },
  { name: "Material UI", url: "https://mui.com/", icon: SiMui, color: "#007FFF" },
  { name: "Ant Design", url: "https://ant.design/", icon: SiAntdesign, color: "#0170FE" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/", icon: SiFramer, color: "#0055FF" },
  { name: "GSAP", url: "https://greensock.com/gsap/", icon: SiGreensock, color: "#88CE02" },
  { name: "Node.js", url: "https://nodejs.org/", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", url: "https://expressjs.com/", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", url: "https://www.mongodb.com/", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", url: "https://git-scm.com/", icon: SiGit, color: "#F05032" },
  { name: "GitHub", url: "https://github.com/", icon: SiGithub, color: "#181717" },
  { name: "Figma", url: "https://www.figma.com/", icon: SiFigma, color: "#F24E1E" },
  { name: "npm", url: "https://www.npmjs.com/", icon: SiNpm, color: "#CB3837" },
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
    company: "Webart",
    roles: [
      {
        title: "Frontend Engineer",
        type: "Full-time",
        startDate: "01.2024",
        endDate: "Present",
        duration: "1y 3m",
        responsibilities: [
          "Leading the development of highly interactive and accessible web applications using Next.js 14/15 and TypeScript.",
          "Engineering scalable UI systems and reusable component libraries with Tailwind CSS and Framer Motion.",
          "Optimizing frontend performance, reducing Core Web Vitals (LCP/FID) by 35% through code splitting and efficient state management."
        ],
        projects: [
          {
            name: "Imboxo OTT Platform",
            description: [
              "Architected the frontend for a high-traffic media streaming dashboard.",
              "Implemented an advanced video playback system with dynamic adaptive bitrate switching.",
              "Designed a highly responsive discovery engine with complex filtering and search logic."
            ]
          },
          {
            name: "Govt PSU Vendor Portal",
            description: [
              "Built the core frontend module for a RailTel/KwikRail project handling 100k+ monthly vendor applications.",
              "Developed a complex multi-step form system with real-time validation and localized data handling.",
              "Integrated secure PDF generation and digital signature workflows."
            ]
          }
        ],
        skills: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Framer Motion", "Tailwind CSS", "GSAP", "Socket.io", "React Query"]
      }
    ]
  },
  {
    company: "Quaric",
    roles: [
      {
        title: "Design Engineer",
        type: "Part-time",
        startDate: "03.2023",
        endDate: "12.2023",
        duration: "10m",
        responsibilities: [
          "Defined and implemented the Quaric Brand Identity and unified Design System.",
          "Bridged the gap between design and development by building pixel-perfect UI components that maintained branding consistency."
        ],
        projects: [
          {
            name: "Quaric Design System",
            description: [
              "Engineered a foundational UI kit in Figma and translated it into a production-ready React component library.",
              "Implemented automated documentation for developers to streamline handoffs."
            ]
          },
          {
            name: "ZaDark Extension",
            description: [
              "Optimized UI/UX for the Zalo Web dark mode extension, reaching 20k+ active users.",
              "Developed custom browser extension scripts for performance-critical UI injection."
            ]
          }
        ],
        skills: ["React", "Strapi", "Figma", "UI/UX Design", "Chrome Extensions", "Design System", "CSS Architecture"]
      }
    ]
  }
];

export interface EducationInterface {
  institution: string;
  degree: string;
  fieldId?: string;
  startDate: string;
  endDate: string;
  duration: string;
  grade?: string;
  logoUrl?: string;
  description: string[];
  skills?: string[];
}

export const EDUCATION_DATA: EducationInterface[] = [
  {
    institution: "University of Technology",
    degree: "Bachelor’s in Computer Science & Engineering",
    startDate: "2019",
    endDate: "2023",
    duration: "4 Years",
    description: [
      "Graduated with honors, focusing on Software Engineering and Advanced Web Technologies.",
      "President of the Coding Club, organizing hackathons for 500+ students.",
      "Achieved 1st Prize in an Inter-College Frontend Development competition."
    ],
    skills: ["Data Structures", "Algorithms", "C++", "Java", "Web Technologies", "DBMS", "Operating Systems"]
  }
];

export const CERTIFICATION_DATA = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "Aug 2024",
    link: "#"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Jan 2023",
    link: "#"
  }
];

export const HONOR_AWARD_DATA = [
  {
    title: "Star Performer of the Quarter",
    issuer: "Webart",
    date: "Dec 2024",
    description: "Awarded for exceptional delivery of the RailTel / Govt PSU front-end architecture."
  }
];

export const BOOKMARK_DATA = [
  {
    title: "Design Inspirations & Repositories",
    description: "Curated collection of frontend resources, component libraries, and architecture patterns.",
    count: 247
  }
];

export const QUOTES = [
  {
    text: "A man who is master of patience is master of everything else.",
    author: "George Savile",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  }
];

export const MENTORS_DATA = [
  {
    name: "Akshay Saini",
    role: "Founder, Namaste Dev",
    description: "Simplified JavaScript & React internals, making complex frontend concepts accessible and highly intuitive.",
    link: "https://namastedev.com",
  },
  {
    name: "Chirag Goel",
    role: "Software Engineer",
    description: "Invaluable lessons on React architecture, performance optimization, and mastering modern web development.",
    link: "https://namastedev.com",
  },
  {
    name: "Kevin Powell",
    role: "CSS Evangelist",
    description: "Demystified CSS for me. He taught me how to embrace the cascade and write scalable, responsive stylesheets.",
    link: "https://www.kevinpowell.co/",
  }
];

export const BOOKS_DATA = [
  {
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    description: "The definitive guide to understanding JavaScript deeply, demystifying closures, scope, and async programming.",
    buyLink: "https://github.com/getify/You-Dont-Know-JS",
    theme: "bg-yellow-100",
    themeBorder: "border-yellow-200"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of agile software craftsmanship, emphasizing readability, refactoring, and clean architecture.",
    buyLink: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    theme: "bg-zinc-100",
    themeBorder: "border-zinc-200"
  }
];

export const OTHER_RESOURCES_DATA = [
  {
    title: "Frontend Mentor",
    description: "Real-world HTML, CSS, and JavaScript challenges that helped sharpen my UI development skills.",
    link: "https://www.frontendmentor.io/"
  },
  {
    title: "MDN Web Docs",
    description: "The absolute source of truth for web standards, JavaScript documentation, and browser compatibility.",
    link: "https://developer.mozilla.org/"
  }
];

export const SELF_HELP_BOOKS_DATA = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy and proven way to build good habits and break bad ones. This book helped me optimize my daily routines and improve 1% everyday.",
    coverUrl: "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
    buyLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world. Crucial for mastering long, uninterrupted hours of deep programming.",
    coverUrl: "https://m.media-amazon.com/images/I/71sB1uEDXDL._AC_UF1000,1000_QL80_.jpg",
    buyLink: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692"
  }
];

/* DESIGNATION CONTENT */
export const DESIGNATIONS = [
  {
    Icon: CodeXml,
    infoText: "Frontend Engineer @Webart",
  },
  // {
  //   Icon: Lightbulb,
  //   infoText: "Founder @SomeIdea",
  // },
];

export const CONTACT_INFO = [
  {
    Icon: MapPin,
    infoText: "India",
  },
  {
    isClock: true,
  },
  {
    Icon: Phone,
    infoText: "+91 98746 69132 ",
    href: "tel:+919874669132",
  },
  {
    Icon: Mail,
    infoText: "dassubhadeep631@gmail.com",
    href: "mailto:dassubhadeep631@gmail.com",
  },
  {
    Icon: LinkIcon,
    infoText: "subhadeep.com",
    href: "https://subhadeep.com",
  },
  {
    Icon: User,
    infoText: "he/him",
  },
];

export interface ProjectInterface {
  title: string;
  description: string;
  year: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  type: string;
}

export const PROJECTS_DATA: ProjectInterface[] = [
  {
    title: "Imboxo OTT",
    description: "A high-performance media streaming platform with dynamic content discovery, custom video player integration, and seamless cross-device synchronization.",
    year: "2025",
    type: "Personal Project",
    tech: ["Next.js 15", "Video.js", "Redux Toolkit", "Framer Motion", "Tailwind CSS"],
    link: "https://imboxo.com",
    github: "#",
  },
  {
    title: "ZaDark Extension",
    description: "A productivity-focused browser extension for Zalo Web, serving over 20,000 active users. Includes dark mode, UI customization, and custom scripts.",
    year: "2024",
    type: "Browser Extension",
    tech: ["JavaScript", "WebExtensions API", "Docusaurus", "Tailwind CSS"],
    link: "https://zadark.com",
    github: "#",
  },
  {
    title: "Quaric Design System",
    description: "Developed a scalable UI library and brand identity for Quaric, ensuring visual consistency across all web and mobile platforms.",
    year: "2024",
    type: "Design Engineering",
    tech: ["React", "Framer Motion", "Storybook", "Figma", "Tailwind CSS"],
    link: "https://quaric.com",
  },
  {
    title: "Govt Vendor Portal",
    description: "Built a robust frontend for a Govt PSU vendor management system, handling complex multi-step registration forms and data-heavy dashboards.",
    year: "2023",
    type: "Government Project",
    tech: ["React.js", "Redux toolkit", "Ant Design", "Formik", "SCSS"],
    link: "#",
  },
  {
    title: "The Portfolio Journey",
    description: "This very portfolio! A reflection of my engineering philosophy, focusing on aesthetics, performance, and clean motion design.",
    year: "2023",
    type: "Brand Identity",
    tech: ["Next.js 15", "Framer Motion", "Lucide Icons", "Radix UI"],
    link: "/",
    github: "https://github.com/Subhadeep-CS/new-portfolio",
  }
];
