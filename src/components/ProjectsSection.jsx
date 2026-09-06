import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useMemo } from "react";

const projects = [
  {
    id: 1,
    title: "WAF Code Tester",
    description:
      "AI-assisted application security platform: point it at a repo or upload source and it runs static analysis (Bandit, Semgrep-style rule sets) to flag vulnerabilities and bad practices, then an LLM chatbot with RAG lets you ask questions about the findings and get concrete remediation steps grounded in the actual codebase.",
    image: "/projects/QA.png",
    tags: ["FastAPI", "Python", "Bandit", "Semgrep", "SAST", "RAG", "AI", "Docker", "JWT"],
    language: "Python",
    demoUrl: "https://waf-code-tester.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/Code-Review-QA",
  },
  {
    id: 2,
    title: "506Tracker Cloud",
    description:
      "Serverless, cloud-native bus-tracking platform for Costa Rica: FastAPI on AWS Lambda behind API Gateway, a React frontend served through S3 + CloudFront, MongoDB Atlas for data, Firebase Auth, Stripe for payments, and the entire infrastructure provisioned as code with Terraform.",
    image: "/projects/bus.jpg",
    tags: ["AWS Lambda", "API Gateway", "S3", "CloudFront", "Terraform", "FastAPI", "React", "MongoDB Atlas", "Stripe"],
    language: "Python",
    demoUrl: "https://d1ybo6ldrc0wgn.cloudfront.net/",
    githubUrl: "https://github.com/Davidcm2803/Ulacit-buses",
  },
  {
    id: 3,
    title: "QHIT Quiz",
    description:
      "AI-driven quiz platform built around a RAG pipeline: teachers author quizzes and the system generates questions directly from their source material, while students compete live over WebSockets. Two role-based experiences, real-time sockets, delivered on a Scrum cadence.",
    image: "/projects/quiz.jpg",
    tags: ["React", "Vite", "Python", "FastAPI", "AI", "RAG", "WebSockets", "MongoDB Atlas"],
    language: "Python",
    demoUrl: "https://quiz-proyect-seven.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/Quiz-proyect",
  },
  {
    id: 4,
    title: "Chatbox AI",
    description:
      "Retrieval-Augmented Generation assistant that answers questions strictly from a curated literary library (Project Gutenberg texts) — no hallucinated answers. Weaviate handles vector search and embedding-based semantic retrieval behind a conversational interface.",
    image: "/projects/bot-literario.png",
    tags: ["React", "Vite", "Python", "Flask", "Weaviate", "RAG", "Vector Search", "AI"],
    language: "Python",
    demoUrl: "https://bot-literario.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/bot-literario",
  },
  {
    id: 5,
    title: "Shoey — Sneaker E-Commerce",
    description:
      "Full e-commerce application built with .NET for managing a sneaker catalog, orders, and users, backed by SQL Server.",
    image: "/projects/sneaker.jpg",
    tags: [".NET Core", "C#", "SQL Server"],
    language: "C#",
    githubUrl: "https://github.com/Davidcm2803/Shoe-Eccomerce.git",
  },
  {
    id: 6,
    title: "Bet506 — Sports Betting Platform",
    description:
      "Dynamic sports betting application built with ASP.NET Core (.NET 9), consuming live sports data from TheSportsDB REST API, running on a MySQL backend with C#, and tested end-to-end with Postman.",
    image: "/projects/apuestas.jpg",
    tags: [".NET Core", "C#", "TheSportsDB API", "MySQL", "AWS"],
    language: "C#",
    githubUrl: "https://github.com/Davidcm2803/Proyecto_Apuestas",
  },
  {
    id: 7,
    title: "CV Optimizer AI",
    description:
      "AI-powered resume optimizer that rewrites and restructures a CV to clear ATS filters, using a RAG pipeline to keep every LLM suggestion grounded in the candidate's real experience.",
    image: "/projects/cv-optimizer.jpg",
    tags: ["React", "Python", "RAG", "AI", "LLM"],
    language: "Python",
    githubUrl: "https://github.com/Davidcm2803/cv-optimizer-ui",
  },
  {
    id: 8,
    title: "Parking App",
    description:
      "University parking management system built with .NET to control vehicle access and optimize parking operations.",
    image: "/projects/Parqueo.png",
    tags: [".NET Framework", "C#", "MySQL"],
    language: "C#",
    githubUrl: "https://github.com/Davidcm2803/Ulacit-parking.git",
  },
  {
    id: 9,
    title: "Tourism App",
    description:
      "Tourism e-commerce web app for San José City with online payments and real-time data storage.",
    image: "/projects/turismo.png",
    tags: ["HTML", "CSS", "Stripe", "Firebase", "JavaScript"],
    language: "JavaScript",
    demoUrl: "https://turism-app.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/web_project.git",
  },
  {
    id: 10,
    title: "Todo List for Phone",
    description:
      "Task management web app designed to organize daily activities and improve productivity.",
    image: "/projects/todo.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    language: "JavaScript",
    demoUrl: "https://todo-list-test-lemon.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/todo-list-test",
  },
  {
    id: 11,
    title: "Python Projects",
    description:
      "Collection of Python projects focused on automation, data processing, and problem solving.",
    image: "/projects/python.jpg",
    tags: ["Python"],
    language: "Python",
    githubUrl: "https://github.com/Davidcm2803/Python-projects",
  },
  {
    id: 12,
    title: "Snake Game",
    description:
      "Classic arcade-style Snake game built with Python using Tkinter for the graphical interface, featuring score tracking and sound effects.",
    image: "/projects/snake.jpg",
    tags: ["Python", "Tkinter", "Game Development"],
    language: "Python",
    githubUrl: "https://github.com/Davidcm2803/Snake_Python",
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-card rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Image Container */}
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Floating action buttons */}
        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-card rounded-lg shadow-lg hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-card rounded-lg shadow-lg hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border transition-all duration-300 hover:border-primary hover:bg-primary/10"
              style={{
                animation: hovered
                  ? `slideIn 0.3s ease-out ${tagIndex * 0.05}s both`
                  : "none",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Progress bar indicator */}
        <div className="pt-2">
          <div className="h-0.5 w-full bg-border rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
              style={{ width: hovered ? "100%" : "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [language, setLanguage] = useState("All");

  const languages = useMemo(() => {
    const all = projects.map((p) => p.language);
    return ["All", ...Array.from(new Set(all))];
  }, []);

  const filteredProjects = useMemo(
    () =>
      language === "All"
        ? projects
        : projects.filter((p) => p.language === language),
    [language]
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack development, AI engineering (RAG pipelines, LLM
            integrations), cloud-native architecture on AWS, and application
            security tooling
          </p>
        </div>

        {/* Language filter */}
        <div className="flex justify-center mb-12 px-2">
          <div className="flex flex-wrap justify-center gap-2 bg-card rounded-2xl p-2 border border-border max-w-full">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${language === lang
                  ? "bg-primary text-white shadow"
                  : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          {filteredProjects.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
              No projects for this language yet.
            </p>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <a
            href="https://github.com/Davidcm2803?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 group"
          >
            View All Projects on GitHub
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};