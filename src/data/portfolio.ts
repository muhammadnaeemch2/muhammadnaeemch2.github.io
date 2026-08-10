// ---------------------------------------------------------------------------
// Portfolio content
// Sourced from Muhammad Naeem's resume. Update this file as new experience,
// projects, or skills come in — nothing else in the app needs to change.
// ---------------------------------------------------------------------------

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  avatarUrl: string;
  bio: string[];
  socials: { label: string; url: string; icon: SocialIcon }[];
};

export type SocialIcon = "github" | "linkedin" | "mail";

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string[];
  tags: string[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const profile: Profile = {
  name: "Muhammad Naeem",
  role: "Full Stack Developer",
  tagline:
    "I build scalable web applications and APIs with the MERN stack and Nest.js, and have improved system performance by 30% along the way.",
  location: "Lahore, Pakistan",
  email: "muhammadnaeemch2@gmail.com",
  phone: "+92 320 6493681",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.svg",
  bio: [
    "I'm a Full Stack Developer with about 2.5 years of experience building scalable web applications and APIs using MongoDB, MySQL, Express.js, React, Nest.js, and Node.js.",
    "I've worked across the stack on client setups, role-based access control, booking and scheduling systems, loyalty and rewards logic, and dynamic dashboard APIs — consistently focused on clean backend architecture and measurable performance gains.",
    "I take a proactive approach to learning new backend technologies and enjoy solving problems creatively while keeping the end user experience in mind.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/muhammadnaeemch2", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/mrnaeem", icon: "linkedin" },
    { label: "Email", url: "mailto:muhammadnaeemch2@gmail.com", icon: "mail" },
  ],
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "React Native"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Snowflake"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Moyasar", "Team Development"],
  },
];

export const projects: Project[] = [
  {
    slug: "intelypro",
    title: "Intelypro",
    description:
      "Backend platform automating marketing and retail services — client setups, calendar configurations, and POP/POS/Geo Fence associations, plus bulk user management with role and group assignments. Optimized backend workflows for a 30% improvement in overall system performance.",
    image: "/projects/placeholder-1.svg",
    tags: ["Node.js", "Nest.js", "MongoDB", "REST APIs"],
    featured: true,
  },
  {
    slug: "shell-petroleum",
    title: "Shell Petroleum",
    description:
      "User registration and hierarchy management system with mechanic registration, profile approval workflows, and parent/child user linking. Built product import with QR code generation, a QR-based loyalty point scanning system, a digital wallet for tracking points, and dynamic dashboard APIs driven by user role and hierarchy.",
    image: "/projects/placeholder-2.svg",
    tags: ["Node.js", "Express.js", "MongoDB", "QR Codes"],
    featured: true,
  },
  {
    slug: "glora",
    title: "Glora",
    description:
      "Multi-tenant booking platform with role-based authentication for admins, business owners, staff, and customers. Built booking APIs with real-time availability checks, a branch-employee scheduling system, and cron jobs to generate consolidated per-branch invoices.",
    image: "/projects/placeholder-3.svg",
    tags: ["Node.js", "Nest.js", "MySQL", "RBAC"],
    featured: true,
  },
  {
    slug: "fitx",
    title: "FitX",
    description:
      "Node.js backend for a Flutter fitness app, storing auto-generated and ChatGPT-generated custom exercises, with video uploads handled through Cloudinary.",
    image: "/projects/placeholder-4.svg",
    tags: ["Node.js", "MongoDB", "Cloudinary", "ChatGPT API"],
  },
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    description:
      "Feature development for an employee management system focused on improving user experience and operational efficiency, including diagnosing and resolving defects to improve system reliability.",
    image: "/projects/placeholder-5.svg",
    tags: ["Node.js", "React", "MySQL"],
  },
];

export const experience: Experience[] = [
  {
    company: "Intelytics",
    role: "Software Engineer",
    start: "Jul 2024",
    end: "Present",
    location: "Lahore, Pakistan",
    description: [
      "Built and maintained backend systems across three products — Intelypro, Shell Petroleum, and Glora — spanning client/user management, QR-based loyalty programs, and multi-tenant booking platforms.",
      "Designed role-based access control and multi-level business hierarchies to keep access secure and data consistent across admins, staff, and customers.",
      "Developed dynamic, real-time dashboard APIs and cron-driven invoicing, and optimized backend workflows for a 30% improvement in system performance.",
    ],
    tags: ["Node.js", "Nest.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    company: "Shayan Solutions",
    role: "Associate Software Engineer",
    start: "Aug 2023",
    end: "Jun 2024",
    location: "Lahore, Pakistan",
    description: [
      "Built a Node.js backend for FitX, a Flutter fitness app, storing auto-generated and ChatGPT-generated custom exercises with Cloudinary-based video storage.",
      "Designed and implemented new features for an Employee Management System, improving user experience and operational efficiency.",
      "Identified, diagnosed, and resolved software defects, improving overall system reliability.",
    ],
    tags: ["Node.js", "React", "MongoDB", "Cloudinary"],
  },
];

export const education: Education[] = [
  {
    school: "UET Lahore",
    degree: "BSCS — Bachelor of Science in Computer Science",
    start: "2019",
    end: "2023",
  },
];

export const certificates: Certificate[] = [
  {
    title: "ITEC 2023 — IT Exhibition and Competition",
    issuer: "UET Lahore",
    year: "2023",
    description:
      "Received a recognition certificate for presenting an innovative project in computer science.",
  },
];
