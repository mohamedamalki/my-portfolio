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
    items: ["PHP", "Laravel", "REST APIs"],
  },
  {
    category: "Databases",
    icon: "FaDatabase",
    color: "cyan",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Workflow",
    icon: "FaTools",
    color: "purple",
    items: ["Git", "GitHub", "Postman", "Agile Methodology"],
  },
];

export const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'Optiza Workers',
    period: 'Jul 2026 – Present',
    type: 'Development',
    description: [
      'Developed a club management application covering players, coaches, and seasons.',
      'Built a secure RESTful API for the application’s core features.',
      'Designed an administrative dashboard to monitor club operations in real time.',
    ],
  },
  {
    title: 'Back-End Developer Intern',
    company: 'Deweb Technology',
    period: 'Jun 2026 – Jul 2026',
    type: 'Development',
    description: [
      'Developed the back end of an After-Sales Service Team Work Order Management Application using Laravel and MySQL.',
      'Built a RESTful API for the application.',
      'Implemented secure authentication using Laravel Sanctum.',
    ],
  },
  {
    title: 'Freelance E-commerce — Men’s Fashion',
    company: 'Self-employed',
    period: '2021 – 2023',
    type: 'Entrepreneurship',
    description: [
      'Sold men’s clothing through online sales channels.',
      'Published and promoted products on digital platforms.',
      'Managed orders, inventory, and delivery tracking.',
    ],
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
