import { ArrowRight, ExternalLink, Github, Wrench } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sneaker Ecommerce",
    description:
      "E-commerce application built with .NET for managing sneaker products, orders, and users.",
    image: "/projects/sneaker.jpg",
    tags: [".Net Core", "C#", "SQL Server"],
    githubUrl: "https://github.com/Davidcm2803/Shoe-Eccomerce.git",
  },
  {
    id: 2,
    title: "Parking App",
    description:
      "University parking management system built with .NET to control vehicle access and optimize parking operations.",
    image: "/projects/Parqueo.png",
    tags: [".Net Framework", "C#", "MYSQL"],
    githubUrl: "https://github.com/Davidcm2803/Ulacit-parking.git",
  },
  {
    id: 3,
    title: "Tourism App",
    description:
      "Tourism e-commerce web app for San José City with online payments and real-time data storage.",
    image: "/projects/turismo.png",
    tags: ["HTML", "CSS", "Stripe", "Firebase", "JavaScript"],
    demoUrl: "https://turism-app.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/web_project.git",
  },
  {
    id: 4,
    title: "Todo List for Phone",
    description:
      "Task management web app designed to organize daily activities and improve productivity.",
    image: "/projects/todo.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://todo-list-test-lemon.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/todo-list-test",
  },
  {
    id: 5,
    title: "Bet App with C#",
    description:
      "Dynamic sports betting application built with ASP.NET Core (.NET 9) consuming sports data via a RESTful API, tested with Postman.",
    image: "/projects/apuestas.jpg",
    tags: [".Net Core", "C#", "JavaScript", "MYSQL", "AWS"],
    githubUrl: "https://github.com/Davidcm2803/Proyecto_Apuestas",
  },
  {
    id: 6,
    title: "Python Projects",
    description:
      "Collection of Python projects focused on automation, data processing, and problem solving.",
    image: "/projects/python.jpg",
    tags: ["Python"],
    githubUrl: "https://github.com/Davidcm2803/Python-projects",
  },
  {
    id: 7,
    title: "Snake Game",
    description:
      "Classic arcade-style Snake game built with Python using Tkinter for the graphical interface, featuring score tracking and sound effects.",
    image: "/projects/snake.jpg",
    tags: ["Python", "Tkinter", "Game Development"],
    githubUrl: "https://github.com/Davidcm2803/Snake_Python",
  },
];

const devProjects = [
  {
    id: 8,
    title: "Educational Quiz App",
    description:
      "Educational quiz platform with AI, real-time sockets, and two user roles: students answer quizzes and teachers create them. Built following Scrum methodology.",
    image: "/projects/quiz.jpg",
    tags: ["React", "Vite", "Python", "FastAPI", "AI", "WebSockets"],
    githubUrl: "https://github.com/Davidcm2803/Quiz-proyect",
  },
  {
    id: 9,
    title: "Bot Literario",
    description:
      "RAG-powered literary chatbot that answers questions based exclusively on a collection of TXT books, using AI to reason only within the provided context.",
    image: "/projects/bot-literario.png",
    tags: ["React", "Vite", "Python", "Flask", "RAG", "AI"],
    githubUrl: "https://github.com/Davidcm2803/bot-literario",
  },
  {
    id: 10,
    title: "CV Optimizer",
    description:
      "AI-powered resume optimizer that analyzes and improves your CV to better pass ATS filters, using RAG and intelligent suggestions.",
    image: "/projects/cv-optimizer.jpg",
    tags: ["React", "Python", "RAG", "AI"],
    githubUrl: "https://github.com/Davidcm2803/cv-optimizer-ui",
  },
];

const ProjectCard = ({ project, index, isDevProject = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-card rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      {/* In Development Badge */}
      {isDevProject && (
        <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/90 text-white text-xs font-semibold rounded-full shadow backdrop-blur-sm">
          <Wrench size={11} className="animate-pulse" />
          In Development
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay tint for dev projects */}
        {isDevProject && (
          <div className="absolute inset-0 bg-amber-500/10 pointer-events-none" />
        )}

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
              className={`h-full rounded-full transition-all duration-700 ease-out ${
                isDevProject ? "bg-amber-500" : "bg-primary"
              }`}
              style={{ width: hovered ? "100%" : "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, clean
            architecture, and modern technologies
          </p>
        </div>

        {/* Completed Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* In Development Section */}
        <div className="mb-12">
          {/* Section divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10">
              <Wrench size={14} className="text-amber-500 animate-pulse" />
              <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                In Development
              </span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          <p className="text-center text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
            Projects currently under active development — AI-powered apps
            pushing the boundaries of what I'm building next.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isDevProject
              />
            ))}
          </div>
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