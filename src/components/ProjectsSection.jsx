import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sneaker Ecommerce",
    description: "Shoe Ecommerce using .NET",
    image: "/projects/sneaker.jpg",
    tags: [".Net Core", "C#", "SQL Server"],
    githubUrl: "https://github.com/Davidcm2803/Shoe-Eccomerce.git",
  },
  {
    id: 2,
    title: "Parking App",
    description:
      "Parking app developed for our university to streamline vehicle access and save time for students and staff.",
    image: "/projects/Parqueo.png",
    tags: [".Net Framework", "C#", "MYSQL"],
    githubUrl: "https://github.com/Davidcm2803/Ulacit-parking.git",
  },
  {
    id: 3,
    title: "Tourism App",
    description:
      "Ecommerce create for tourism on San Jose City.",
    image: "/projects/turismo.png",
    tags: ["HTML", "CSS", "Stripe", "Firebase", "JavaScript"],
    demoUrl: "https://turism-app.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/web_project.git",
  },
  {
    id: 4,
    title: "Todo List for Phone",
    description:
      "A simple app to organize and keep track of tasks, helping you stay productive and manage your daily to-dos efficiently.",
    image: "/projects/todo.jpg",
    tags: ["HTML", "CSS", "Stripe", "JavaScript"],
    demoUrl: "https://todo-list-test-lemon.vercel.app/",
    githubUrl: "https://github.com/Davidcm2803/todo-list-test",
  },
];

export const ProjectsSection=() =>{
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing full-stack development, clean architecture, and modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group bg-card rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
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
                        animation: hoveredId === project.id 
                          ? `slideIn 0.3s ease-out ${tagIndex * 0.05}s both` 
                          : 'none'
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
                      className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: hoveredId === project.id ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Davidcm2803?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 group"
          >
            View All Projects on GitHub
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}