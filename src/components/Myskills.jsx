import { useState } from "react";
import { Code2, Database, Wrench, Cloud, Brain, ShieldAlert } from "lucide-react";

export const MySkill = () => {
  const [selected, setSelected] = useState("all");

  const techStack = {
    frontend: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    backend: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "RestApis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
      { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" }
    ],
    cloud: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "MongoDB Atlas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" }
    ],
    ai: [
      { name: "RAG Pipelines", logo: "https://cdn.simpleicons.org/langchain" },
      { name: "LLM APIs", logo: "https://cdn.simpleicons.org/anthropic" },
      { name: "Vector Databases", logo: "https://cdn.simpleicons.org/qdrant" },
      { name: "Data Science", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Applied AI", logo: "https://cdn.simpleicons.org/tensorflow" }
    ],
    security: [
      { name: "Kali Linux", logo: "https://cdn.simpleicons.org/kalilinux" },
      { name: "Ethical Hacking", logo: "https://cdn.simpleicons.org/hackthebox" },
      { name: "Web App Firewalls", logo: "https://cdn.simpleicons.org/cloudflare" },
      { name: "Network & MITM Analysis", logo: "https://cdn.simpleicons.org/wireshark" },
      { name: "SAST (Semgrep/Bandit)", logo: "https://cdn.simpleicons.org/owasp" }
    ],
    tools: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jest", logo: "https://cdn.simpleicons.org/jest" },
      { name: "JUnit5", logo: "https://cdn.simpleicons.org/junit5" },
      { name: "Pytest", logo: "https://cdn.simpleicons.org/pytest" },
      { name: "Selenium", logo: "https://cdn.simpleicons.org/selenium" },
      { name: "Cypress", logo: "https://cdn.simpleicons.org/cypress" },
      { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" }
    ]
  };

  const categories = [
    { key: "frontend", label: "Frontend", icon: Code2 },
    { key: "backend", label: "Backend", icon: Database },
    { key: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { key: "ai", label: "AI & Data", icon: Brain },
    { key: "security", label: "Security", icon: ShieldAlert },
    { key: "tools", label: "Tools", icon: Wrench }
  ];

  const TechCard = ({ title, technologies, icon: Icon }) => (
    <div className="group relative bg-card rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl border border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">{title}</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background hover:bg-primary/5 border border-border transition-all duration-300 hover:-translate-y-1"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="flex justify-center mb-12 px-2">
          <div className="flex flex-wrap justify-center gap-2 bg-card rounded-2xl p-2 border border-border max-w-full">
            {[{ key: "all", label: "All" }, ...categories.map(({ key, label }) => ({ key, label }))].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelected(tab.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  selected === tab.key
                    ? "bg-primary text-white shadow"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {selected === "all" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map(({ key, label, icon }) => (
              <TechCard key={key} title={label} technologies={techStack[key]} icon={icon} />
            ))}
          </div>
        )}

        {selected !== "all" && (
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              {categories
                .filter((c) => c.key === selected)
                .map(({ key, label, icon }) => (
                  <TechCard key={key} title={label} technologies={techStack[key]} icon={icon} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};