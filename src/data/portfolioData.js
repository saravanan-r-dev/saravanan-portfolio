// ============================================================
// portfolioData.js
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "SARAVANAN",
  firstName: "SARAVANAN",
  brandName: "SARAVANAN", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+91 89460 44957",
  emails: {
    primary: "saravanan.r.dev@gmail.com",
    secondary: "",
  },
  summary: "I'm a Full Stack Developer with an MCA degree and expertise in building Java, Spring Boot, and React applications.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/saravanan-r-dev",
  linkedin: "https://www.linkedin.com/in/-saravanan-r-",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm SARAVANAN",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Building secure, scalable full-stack web applications with Java, Spring Boot, and React to deliver seamless digital user experiences.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:saravanan.r.dev@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">SARAVANAN</span>, a passionate Java Full Stack Developer based in Bengaluru, India. With an MCA from SNS College of Technology, I specialize in crafting robust web architectures using Spring Boot, MySQL, and dynamic React interfaces while sharpening my skills through the placement training program at TAP Academy. My goal is to build secure, scalable, and intuitive software solutions that solve real-world problems.`,
  techStack: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A methodical approach from system architecture to production-grade deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze system requirements, domain logic, and API contracts to architect clean and scalable full-stack solutions.",
    },
    {
      number: "02",
      title: "Design",
      text: "Model relational database schemas in MySQL and construct intuitive, component-driven wireframes with Tailwind CSS.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Build robust RESTful services with Spring Boot and craft responsive, state-driven frontends using React.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test endpoints with Postman, manage version control via Git & GitHub, and prepare production-ready deployments.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "SQL" }],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "JavaScript (ES6)" },
        { name: "Tailwind CSS" },
        { name: "HTML5 & CSS3" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Spring Boot" },
        { name: "Hibernate" },
        { name: "REST APIs" },
        { name: "JDBC" },
        { name: "MySQL" },
      ],
    },
    {
      title: "Tools & Core",
      skills: [
        { name: "Git & GitHub" },
        { name: "Postman" },
        { name: "Maven" },
        { name: "OOP & DSA" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Full Stack Developer Intern",
    duration: "July 2026 – Present",
    skills: [
      "Backend module architecture & REST endpoint design",
      "Authentication & API performance optimization",
      "Responsive React component development",
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "React", "REST APIs"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Fostering open communication and effective peer code reviews to achieve sprint goals together.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex architectural bottlenecks into structured, testable algorithmic components.",
  },
  {
    name: "Adaptability",
    icon: "📈",
    desc: "Rapidly mastering evolving frameworks, modern developer tooling, and agile development workflows.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Prioritizing key deliverables and milestone execution to ensure consistent on-time project shipping.",
  },
];

export const projects = [
  {
    id: "collabdock",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "CollabDock",
    description: "A real-time developer workspace that allows teams to manage tasks, track sprints, and collaborate seamlessly on full-stack web applications.",
    techTags: ["Java", "Spring Boot", "MySQL", "React", "Tailwind CSS", "JWT"],
    links: { github: "https://github.com/saravanan-r-dev/CollabDock", demo: "" },
    isFlagship: true,
  },
  {
    id: "campusfix",
    number: "02",
    badge: null,
    title: "CampusFix",
    description: "A university utility portal where students can submit and track complaints or service requests while admins manage worker assignments and analytics.",
    techTags: ["Java", "Spring Boot", "SQL", "React", "REST APIs", "JWT"],
    links: { github: "https://github.com/saravanan-r-dev/CampusFix", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/-saravanan-r-",
};

export const education = {
  degree: "MCA (Master of Computer Applications)",
  institution: "SNS College of Technology",
  cgpa: "2022 – 2024",
  graduation: "2024",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Spring Boot · React · MySQL", "Building Scalable Web Products"],
  credential: "MCA (Master of Computer Applications)",
  copyright: `© ${new Date().getFullYear()} SARAVANAN | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
