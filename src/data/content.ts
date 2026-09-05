// Single source of truth for all portfolio copy.
// Typos from about-me.md are corrected here for display only.

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  period: string;
  stack: string;
  summary: string;
  highlights: string[];
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}

export const profile = {
  name: "Ta Minh Khang",
  role: "Fullstack Developer",
  headline: "Hello, I'm Ta Minh Khang",
  subHeadline:
    "I build full-stack web applications with C# / ASP.NET Core on the backend and React + TypeScript on the frontend.",
  email: "khangta67@gmail.com",
  linkedin: "https://www.linkedin.com/in/minh-khang-ta-dev/",
  github: "https://github.com/Aquarius2301",
};

export const about = {
  intro:
    "I'm a fullstack developer with experience across the .NET and React ecosystems. " +
    "I enjoy designing clean, layered backends and crafting responsive, reusable frontend interfaces, " +
    "and I like bringing AI capabilities into real products.",
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["English (Professional Working)", "Vietnamese (Native)"],
  },
  {
    category: "Backend",
    items: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "RESTful API",
      "JWT",
      "SQL Server",
      "Clean Architecture",
      "CQRS",
      "Google OAuth",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React (TypeScript)",
      "TanStack Query",
      "Ant Design (AntD)",
      "Zustand",
      "i18next",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Postman", "VS Code", "Swagger"],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  certUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "Google Certified Gemini Educator",
    issuer: "Google",
    year: "2026",
    description:
      "Certification recognizing proficiency in applying Google Gemini AI in education.",
    certUrl: "/GoogleCertificate.pdf",
  },
  {
    title: "Practical AI Training Program",
    issuer: "FPT University Can Tho campus",
    year: "2026",
    description:
      "Completed a Generative AI course, gaining hands-on experience with AI tools and its applications in software development.",
    certUrl: "/PracticalAICertificate.pdf",
  },
  {
    title: "Bachelor of Software Engineering",
    issuer: "FPT University",
    year: "2025",
    description: "Bachelor's degree in Software Engineering, GPA 8.5 / 10.",
  },
];

export const projects: Project[] = [
  {
    name: "MyTarotReader",
    period: "2026 – now",
    stack: "Backend, Frontend",
    summary:
      "An AI-powered tarot reading platform that generates context-aware interpretations " +
      "and hosts real-time interactive AI chat sessions.",
    highlights: [
      "Architected a full-stack AI tarot reading application using .NET 8 (Clean Architecture: Domain/Application/Infrastructure/API) and React 19 (TypeScript) with Vite.",
      "Implemented secure authentication and session control using Google OAuth, JWT-based tokens, and Redis caching for rate limiting / cooldown management.",
      "Integrated Google Gemini API to generate context-aware tarot interpretations and real-time interactive AI chat sessions.",
      "Developed rich frontend features using Ant Design, TanStack Query for server-state caching, Zustand for global UI state, and i18next for multi-language support (EN/VI).",
    ],
    tags: [
      "ASP.NET Core",
      "Clean Architecture",
      "React",
      "TypeScript",
      "Google OAuth",
      "JWT",
      "Redis",
      "Gemini API",
      "Ant Design",
      "TanStack Query",
      "Zustand",
      "i18next",
    ],
    repoUrl: "https://github.com/Aquarius2301/MyTarotReader",
    demoUrl: "https://my-tarot-reader.vercel.app/",
  },
  {
    name: "AI Workspace",
    period: "2026 – now",
    stack: "Backend, Frontend",
    summary:
      "A Jira-like team and project management platform with role-based access control and a live demo deployment.",
    highlights: [
      "Built a Jira-like management platform using .NET 8 (Clean Architecture / CQRS) and React 19 (TypeScript) with role-based access control and live demo deployment.",
      "Integrated Google Gemini API to assist with workspace search and automated task management.",
      "Implemented secure auth using JWT, HttpOnly cookies, refresh-token rotation, and server-side session revocation, alongside rate-limiting against brute-force attacks.",
      "Developed a responsive Kanban board with drag-and-drop and TanStack Query data layer.",
    ],
    tags: [
      "ASP.NET Core",
      "EF Core",
      "JWT",
      "React",
      "Gemini API",
      "CQRS",
      "TanStack Query",
    ],
    repoUrl: "https://github.com/Aquarius2301/AI-Workspace",
  },
  {
    name: "My Blog",
    period: "2025 – 2026",
    stack: "Backend, Frontend",
    summary:
      "A full-stack social blogging platform enabling users to create multimedia posts, upload images, " +
      "and interact via real-time likes and comments.",
    highlights: [
      "Designed and implemented robust RESTful APIs using ASP.NET Core following a clean, layered architecture for scalable backend management.",
      "Integrated secure identity management using JWT authentication with an advanced Access and Refresh Token mechanism.",
      "Leveraged Gemini API to architect an AI-driven module that enhances user engagement with personalized, context-aware insights.",
    ],
    tags: [
      "ASP.NET Core",
      "EF Core",
      "JWT",
      "React",
      "TanStack Query",
      "Gemini API",
    ],
    repoUrl: "https://github.com/Aquarius2301/MyBlog-System",
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Practical AI Training Program - FPT University Can Tho campus",
    period: "2026",
    subtitle: "Use AI tools to build software applications",
    details: [
      "Completed a Generative AI course, gaining hands-on experience with AI tools and its applications in software development.",
    ],
  },
  {
    title: "FPT University Can Tho Campus",
    period: "2021 – 2025",
    subtitle: "Bachelor of Software Engineering",
    details: [
      "GPA 8.5 / 10",
      "7-time Honorable Student",
      "Top 5 IT Students — Spring 2023",
    ],
  },
];

export const experience: TimelineEntry[] = [
  {
    title: "Act Brain Vietnam (Ho Chi Minh)",
    subtitle: "Backend / Frontend Intern",
    period: "Jan 2024 – Apr 2024",
    details: [
      "Migrated a legacy enterprise system from Zend Framework to Laravel and React (TypeScript), optimizing codebase maintainability and boosting development efficiency.",
      "Designed and developed secure, high-performance RESTful APIs using PHP to power front-end features.",
      "Built responsive, dynamic, and reusable UI components using React and TypeScript, enhancing overall user experience.",
      "Created and executed unit tests to validate core system logic, ensuring platform stability and reducing post-deployment bugs.",
    ],
  },
];

export const contact = {
  email: profile.email,
  linkedin: profile.linkedin,
  github: profile.github,
};

// Static assets served from /public (Vite serves them at the site root).
export const assets = {
  cvUrl: "/CV_TaMinhKhang_SoftwareDeveloper.pdf",
  certUrl: "/GoogleCertificate.pdf",
};

// Anchor targets used by the header menu and CTAs.
export const navSections = [
  { key: "about", label: "About me", anchor: "#about" },
  { key: "skills", label: "Skills", anchor: "#skills" },
  { key: "projects", label: "Project", anchor: "#projects" },
  { key: "certifications", label: "Certifications", anchor: "#certifications" },
  { key: "contact", label: "Contact", anchor: "#contact" },
];
