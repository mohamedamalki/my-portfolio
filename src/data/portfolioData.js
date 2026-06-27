// src/data/portfolioData.js

export const skills = [
  {
    category: "Frontend Development",
    icon: "FaReact",
    color: "cyan",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: "FaServer",
    color: "purple",
    items: ["PHP", "Laravel", "REST APIs", "Node.js", "Express.js"],
  },
  {
    category: "Databases",
    icon: "FaDatabase",
    color: "cyan",
    items: ["MySQL", "MongoDB", "Database Design", "Query Optimization"],
  },
  {
    category: "Tools & Workflow",
    icon: "FaTools",
    color: "purple",
    items: ["Git", "GitHub", "VS Code", "Postman", "Agile Methodology", "Figma"],
  },
];

export const experiences = [
  {
    title: "Full Stack Development Projects",
    company: "Personal & Training Projects",
    period: "2023 — Present",
    type: "Development",
    description: [
      "Built full-stack web applications using React, Laravel, and the MERN Stack",
      "Developed responsive, accessible user interfaces with modern design systems",
      "Designed and consumed RESTful APIs, managed relational and databases",
      "Managed the complete project planning, development, testing, and deployment",
    ],
  },
  {
    title: "Founder & Manager",
    company: "Online E-commerce Store",
    period: "2021 — 2024",
    type: "Entrepreneurship",
    description: [
      "Founded and operated an independent e-commerce business, managing all operations end-to-end",
      "Handled product listings, order management, customer relationships, and logistics",
      "Leveraged social media platforms to drive traffic and grow a customer base",
      "Monitored sales data, managed inventory, and continuously optimized store performance",
    ],
  },
  {
    title: "Store Assistant",
    company: "Retail Store",
    period: "2021 (1 month)",
    type: "Part-time",
    description: [
      "Organized and displayed products to maintain and appealing store layout",
      "Assisted with inventory management and stock organization",
      "Supported the daily operations of the store and contributed to team efficiency",
    ],
  },
];

export const projects = [
  {
    title: "E-commerce Website with Admin Dashboard",
    description:
      "A full-featured online store with product listings, shopping cart, order management, and a secure admin dashboard for inventory and analytics.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    features: ["Product catalog & search", "Cart & checkout flow", "Admin inventory panel", "Order tracking", "Authentication"],
    github: "https://github.com/mohamed2001-dev",
    color: "cyan",
  },
  {
  title: "Social Media App",
  description:
    "A full-stack social media application built with the MERN Stack, featuring user authentication, profile management, posts, likes, comments, and a modern responsive interface designed with Material UI.",
  tech: ["React", "Node.js", "MongoDB", "Express", "Material UI"],
  features: [
    "User authentication",
    "Create and manage posts",
    "Like and comment system",
    "User profile management",
    "Responsive Material UI design",
    "REST API integration"
  ],
    github: "https://github.com/mohamed2001-dev",
    color: "purple",
  },
  {
      title: "Prayer Times App",
  description:
    "A responsive prayer times application built with React and Tailwind CSS. The app uses a Prayer Times API to display accurate daily prayer times based on the selected city or location.",
  tech: ["React", "Tailwind CSS", "Prayer Times API", "JavaScript"],
  features: [
    "Daily prayer times",
    "City-based prayer schedule",
    "API integration",
    "Responsive design",
    "Clean Islamic-themed interface",
    "Fast and simple user experience"
  ],
    github: "https://github.com/mohamed2001-dev",
    color: "cyan",
  },
];

export const trainings = [
  {
    title: "Full Stack Web Development Bootcamp",
    org: "Souss Massa Tech Academy",
    period: "2024 — 2025",
    duration: "5 Months",
    description:
      "An intensive, project-based bootcamp covering the MERN Stack. Worked in collaborative teams on real-world projects, sharpened communication skills, and practiced professional Git workflows throughout.",
    skills: ["MERN Stack", "Team Collaboration", "Git & GitHub", "Agile Workflow", "Project Management"],
    color: "cyan",
  },
{
  title: "Full Stack Web Development",
  org: "OFPPT",
  period: "2023 - 2026",
  duration: "Evening Classes",
  description:
    "Full Stack Development training focused on building complete web applications from frontend interfaces to backend APIs and database management. The program covers modern web technologies, responsive design, server-side development, Agile methodology, cloud computing basics, and practical project implementation.",
  skills: [
    "Frontend Development",
    "Backend Development",
    "React",
    "Laravel",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "Agile Methodology",
    "Cloud Computing Basics"
  ],
  color: "cyan",
}
];

export const education = [
  { year: "2023 — 2026", title: "Full Stack Web Development", org: "OFPPT — Evening Classes" },
  { year: "2020 — 2021", title: "Studies in Physics", org: "Ibn Zohr University, Agadir" },
  { year: "2019 — 2020", title: "Baccalaureate", org: "High School Diploma" },
];

export const languages = [
  { lang: "Arabic", level: "Native", pct: 100 },
  { lang: "English", level: "Advanced (C1)", pct: 85 },
  { lang: "French", level: "Intermediate (B1)", pct: 60 },
  { lang: "German", level: "Intermediate (B1)", pct: 55 },
];
