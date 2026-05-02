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
  SiStorybook,
  SiSass,
  SiStyledcomponents,
  SiJest,
  SiVitest,
  SiZod,
  SiPostman,
  SiVite,
  SiPrisma,
} from "react-icons/si";

import {
  CodeXml,
  Lightbulb,
  MapPin,
  Phone,
  Link as LinkIcon,
  Mail,
  User,
  Palette,
  Github,
  BookOpen,
  Building2,
  Tv,
  Headphones,
  Users,
  Gem,
  Stethoscope,
  Mic,
  Bitcoin,
  Box,
  Code,
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
    name: "Education",
    href: "/education",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  // {
  //   name: "Resources (Soon)",
  //   href: "/resources",
  // },
  // {
  //   name: "Beyond Code (Soon)",
  //   href: "/library",
  // },
];

export const DESIGNATION: string[] = [
  "Software Engineer",
  "Frontend Engineer",
  "React.js Developer",
  "Next.js Developer",
  "UI/UX Focused Developer",
  "Building Scalable Frontends",
  "Clean Code Advocate",
  "Performance Driven Developer",
  "Crafting Pixel-Perfect UIs",
  "Turning Ideas Into Interfaces",
  "Frontend System Design Enthusiast",
  "JavaScript Specialist",
  "Problem Solver",
  "Continuous Learner",
  "From Concept to Production",
  "Coffee → Code ☕",
];

export const ABOUT_ME: AboutMeInterface[] = [
  {
    key: "Who I Am",
    details:
      "I am a results-driven Software Engineer specializing in Frontend development with React.js and Next.js. With a strong foundation in building scalable, high-performance web applications, I focus on delivering seamless user experiences through clean architecture and modern engineering practices.",
    children: [],
  },
  {
    key: "What I Specialize In",
    details:
      "I specialize in architecting modern frontend systems, from real-time communication platforms to complex enterprise dashboards, ensuring high performance, accessibility, and scalability.",
    children: [
      {
        key: "Core Technologies",
        details: "React.js, Next.js (App Router), TypeScript, JavaScript (ES6+)",
      },
      {
        key: "Real-time & Communication",
        details:
          "WebSockets (Socket.IO), WebRTC (Audio/Video Calling), Push Notifications (FCM)",
      },
      {
        key: "State & Data Management",
        details:
          "Redux Toolkit, RTK Query, Zustand, TanStack Query, GraphQL",
      },
      {
        key: "Performance & Optimization",
        details:
          "Core Web Vitals, SSR/SSG/ISR, Service Workers, Web Workers, Code Splitting",
      },
    ],
  },
  {
    key: "Professional Experience",
    details:
      "I have extensive experience in building production-grade applications, ranging from media streaming platforms to government vendor portals, with a focus on performance and long-term maintainability.",
    children: [
      {
        key: "Next.js Architecture",
        details:
          "Scaling applications using App Router, SSR, and SSG while maintaining strict performance budgets.",
      },
      {
        key: "Interactive UIs",
        details:
          "Crafting fluid animations and micro-interactions using GSAP and Framer Motion.",
      },
    ],
  },
  {
    key: "How I Think as an Engineer",
    details:
      "I prioritize scalability and maintainability. I believe in established testing standards, comprehensive code reviews, and following atomic design principles to build robust, reusable UI systems.",
    children: [],
  },
  {
    key: "Where I’m Headed",
    details:
      "I’m focused on mastering advanced frontend architecture and deepening my expertise in full-stack development, while continuing to advocate for web performance and accessibility.",
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
  { name: "Storybook", url: "https://storybook.js.org/", icon: SiStorybook, color: "#FF4785" },
  { name: "SASS", url: "https://sass-lang.com/", icon: SiSass, color: "#CC6699" },
  { name: "Styled Components", url: "https://styled-components.com/", icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "shadcn/ui", url: "https://ui.shadcn.com/", icon: SiShadcnui, color: "#000000" },
  { name: "Radix UI", url: "https://www.radix-ui.com/", icon: SiRadixui, color: "#161618" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/", icon: SiFramer, color: "#0055FF" },
  { name: "GSAP", url: "https://greensock.com/gsap/", icon: SiGreensock, color: "#88CE02" },
  { name: "GraphQL", url: "https://graphql.org/", icon: SiGraphql, color: "#E10098" },
  { name: "Socket.io", url: "https://socket.io/", icon: SiSocketdotio, color: "#010101" },
  { name: "Material UI", url: "https://mui.com/", icon: SiMui, color: "#007FFF" },
  { name: "Ant Design", url: "https://ant.design/", icon: SiAntdesign, color: "#0170FE" },
  { name: "Vitest", url: "https://vitest.dev/", icon: SiVitest, color: "#6E9F18" },
  { name: "Jest", url: "https://jestjs.io/", icon: SiJest, color: "#C21325" },
  { name: "Vite", url: "https://vitejs.dev/", icon: SiVite, color: "#646CFF" },
  { name: "Postman", url: "https://www.postman.com/", icon: SiPostman, color: "#FF6C37" },
  { name: "Zod", url: "https://zod.dev/", icon: SiZod, color: "#3E67B1" },
  { name: "Prisma", url: "https://www.prisma.io/", icon: SiPrisma, color: "#2D3748" },
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
    company: "WebArt Technology",
    logoUrl: "/img/icon/webartlogo_web.png",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        startDate: "Jul 2025",
        endDate: "Present",
        duration: "Present",
        responsibilities: [
          "Architected and scaled Next.js applications (App Router, SSR, SSG), improving SEO rankings and reducing LCP and TTI metrics.",
          "Designed and implemented a real-time chat platform using WebSockets and Socket.IO, enabling instant messaging and live presence.",
          "Integrated audio and video calling using WebRTC, handling signaling, peer connection lifecycle, and connection recovery.",
          "Implemented Service Workers for offline caching, background sync, and improved repeat-visit performance.",
          "Leveraged Web Workers to offload CPU-intensive operations, preventing main-thread blocking and UI jank.",
          "Built push notification workflows using Firebase Cloud Messaging (FCM) for real-time user alerts.",
          "Enhanced UI interactions with GSAP and Framer Motion, balancing animations with strict performance budgets.",
          "Optimized frontend performance through code splitting, lazy loading, memoization, and intelligent caching.",
          "Established testing standards using Jest and React Testing Library.",
          "Conducted code reviews focusing on performance, accessibility, and long-term maintainability."
        ],
        skills: ["Next.js", "React.js", "WebSockets", "Socket.IO", "WebRTC", "Service Workers", "Web Workers", "Firebase Cloud Messaging", "GSAP", "Framer Motion", "Jest", "React Testing Library"]
      }
    ]
  },
  {
    company: "Brainium Information Technologies Pvt. Ltd.",
    logoUrl: "/img/icon/brainiumicon.png",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        startDate: "Aug 2024",
        endDate: "May 2025",
        duration: "10 mos",
        responsibilities: [
          "Developed 15+ reusable React components, improving delivery speed and UI consistency across modules.",
          "Implemented Redux Toolkit, RTK Query, and Zustand for predictable and scalable state management.",
          "Integrated TanStack Query for server-state handling, significantly reducing redundant API calls.",
          "Consumed GraphQL APIs, implementing schema-driven queries and optimized data-fetch strategies.",
          "Improved SEO and initial render performance using SSR and SSG in Next.js.",
          "Collaborated in architecture discussions and peer code reviews with senior engineers."
        ],
        skills: ["React", "Redux Toolkit", "RTK Query", "Zustand", "TanStack Query", "GraphQL", "Next.js", "SSR", "SSG"]
      },
      {
        title: "Software Developer Intern",
        type: "Internship",
        startDate: "Apr 2024",
        endDate: "Aug 2024",
        duration: "5 mos",
        responsibilities: [
          "Built modular and reusable UI components following atomic design principles.",
          "Assisted in React to Next.js migration, improving routing, SEO, and performance.",
          "Fixed UI bugs and followed Git-based workflows and PR reviews."
        ],
        skills: ["React", "Next.js", "Atomic Design", "Git"]
      }
    ]
  },
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
    institution: "Barrackpore Rastraguru Surendranath College",
    degree: "Master's degree, Computer Science",
    startDate: "2020",
    endDate: "2022",
    duration: "2 Years",
    grade: "8.73 CGPA",
    description: [
      "Achieved a cumulative grade point average of 8.73 CGPA.",
      "Conducted research on 'Informal System Design and Synthesis in the Limelight of Asymmetric Type Functions' in collaboration with the Department of Computer Science.",
      "Presented research findings at a college conference in front of external evaluators from Kalyani Mahavidyalaya.",
      "Mastered advanced theoretical concepts and practical applications in modern computer science with a focus on system design."
    ],
    skills: ["Computer Science", "System Design", "Type Functions", "Research Methodology", "jQuery", "Bootstrap"]
  },
  {
    institution: "University of Calcutta",
    degree: "Bachelor's degree, Computer Science",
    startDate: "2017",
    endDate: "2020",
    duration: "3 Years",
    grade: "74.75%",
    description: [
      "Graduated with 74.75% marks, focusing on core Computer Science fundamentals.",
      "Strong emphasis on Data Structures, Algorithms, and C++ programming.",
      "Consistently achieved high academic performance with a focus on problem-solving."
    ],
    skills: ["C++", "DSA", "Computer Science", "Algorithms"]
  },
  {
    institution: "Shyamnagar Kanti Chandra High School",
    degree: "WBCHSE Board (Science)",
    startDate: "2015",
    endDate: "2017",
    duration: "2 Years",
    grade: "82.6%",
    description: [
      "Completed Higher Secondary education with a focus on Mathematics, Physics, Chemistry, and Biology.",
      "Achieved 82.6% in the WBCHSE board examinations."
    ]
  },
  {
    institution: "Barrackpore Ramakrishna Vivekananda Mission",
    degree: "WBBSE Board (Secondary)",
    startDate: "2013",
    endDate: "2015",
    duration: "2 Years",
    grade: "82.3%",
    description: [
      "Completed Secondary education with a focus on general science and mathematics.",
      "Achieved 82.3% in the WBBSE board examinations."
    ]
  }
];

export const CERTIFICATION_DATA = [
  {
    title: "Javascript Basic",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/f0d92f5507ab"
  },
  {
    title: "Namaste React",
    issuer: "Namaste Dev",
    link: "https://namastedev.com/dassubhadeep631/certificates/namaste-react"
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/2cfdaa6f29b5"
  },
  {
    title: "Namaste Frontend System Design",
    issuer: "Namaste Dev",
    link: "https://namastedev.com/online.course6938/certificates/namaste-frontend-system-design"
  }
];

export const HONOR_AWARD_DATA = [
  {
    title: "Developer of the Quarter – Certificate of Recognition",
    issuer: "Webart",
    date: "JUL-SEP 2025",
    description: "Awarded ‘Developer of the Quarter’ for exceptional performance and contribution to key projects."
  }
];

export const BOOKMARK_DATA = [
  {
    title: "Design Inspirations",
    description: "A curated collection of pixel-perfect UI designs, landing pages, and component libraries that I reference for every project.",
    link: "https://www.lapa.ninja/",
    icon: Palette
  },
  {
    title: "Frontend Repositories",
    description: "Star-marked repositories featuring advanced React patterns, Next.js 15 templates, and utility libraries I use in production.",
    link: "https://github.com/Subhadeep-CS?tab=stars",
    icon: Github
  },
  {
    title: "Technical Articles",
    description: "Deep dives into JavaScript internals, performance optimization, and architectural patterns from top engineering blogs.",
    link: "https://dev.to/",
    icon: BookOpen
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
    infoText: "Frontend Engineer @WebArt Technology",
  },
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
    infoText: "subhadeepdas.com",
    href: "https://subhadeepdas.com",
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
  icon?: any;
}

export const PROJECTS_DATA: ProjectInterface[] = [
  {
    title: "RailTel Vendor Platform",
    description: "An enterprise-grade dashboard for the Government PSU RailTel. Architected to handle massive datasets, visualizing over 100,000 purchase orders through dynamic, high-performance charts.",
    year: "2023",
    type: "Enterprise Dashboard",
    tech: ["React", "Tailwind CSS", "Recharts", "Redux"],
    icon: Building2,
  },
  {
    title: "Imboxo OTT",
    description: "A high-performance media streaming platform featuring dynamic content discovery and seamless cross-device playback. Engineered for scale and immersive entertainment experiences.",
    year: "2024",
    type: "Streaming Platform",
    tech: ["Next.js", "Video.js", "Redux Toolkit", "Tailwind CSS"],
    link: "https://imboxo.com",
    icon: Tv,
  },
  {
    title: "Pr3cio",
    description: "A comprehensive web-based music streaming service. Features include real-time audio playback, dynamic playlist generation, and a fluid, dark-mode focused interface.",
    year: "2024",
    type: "Audio Streaming App",
    tech: ["React", "Web Audio API", "Zustand", "Framer Motion"],
    link: "https://pr3cio.com/",
    icon: Headphones,
  },
  {
    title: "Webart CRM Workspace",
    description: "An advanced internal CRM system featuring real-time communication modules. Engineered peer-to-peer audio and video calling integrations alongside secure instant messaging.",
    year: "2024",
    type: "Internal Product",
    tech: ["React", "WebRTC", "Socket.io", "Tailwind CSS"],
    icon: Users,
  },
  {
    title: "The Million Carats",
    description: "A premium e-commerce destination for high-end jewelry. Built with a focus on high-fidelity product imagery, complex cart state management, and seamless secure checkouts.",
    year: "2023",
    type: "E-Commerce",
    tech: ["Next.js", "Tailwind CSS", "Redux", "Stripe"],
    link: "https://www.themillioncarats.com/",
    icon: Gem,
  },
  {
    title: "Medicompares",
    description: "A UK-based healthcare marketplace enabling users to discover, compare, and securely book online medical treatments. Features robust search filtering and complex booking workflows.",
    year: "2023",
    type: "Healthcare Marketplace",
    tech: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    link: "https://www.medicompares.co.uk/",
    icon: Stethoscope,
  },
  {
    title: "The White Room",
    description: "The official digital presence for The White Room band. An interactive, visually striking promotional site showcasing tours, discography, and media galleries with fluid animations.",
    year: "2023",
    type: "Promotional Website",
    tech: ["React", "GSAP", "Tailwind CSS"],
    icon: Mic,
  },
  {
    title: "Crypto Market Tracker",
    description: "A real-time cryptocurrency tracking application. Integrates live market data feeds to render precise pricing charts, market cap trends, and real-time fluctuations.",
    year: "2022",
    type: "Fintech App",
    tech: ["React", "Chart.js", "CoinGecko API", "Firebase"],
    link: "https://crypto-application-b3b2f.web.app/",
    icon: Bitcoin,
  },
  {
    title: "KwikRail Configurator",
    description: "A complex web-based CAD system for an Australian supplier. Allows users to dynamically configure modular handrails and barrier systems directly within the browser.",
    year: "2024",
    type: "CAD System",
    tech: ["React", "Three.js", "Zustand", "Tailwind CSS"],
    icon: Box,
  },
  {
    title: "The Portfolio Journey",
    description: "The current iteration of my personal portfolio. A reflection of my engineering philosophy, focusing on aesthetic design, micro-interactions, and pristine code architecture.",
    year: "2024",
    type: "Personal Brand",
    tech: ["Next.js 15", "Framer Motion", "Tailwind CSS"],
    link: "https://subhadeepdas.com",
    icon: Code,
  },
];
