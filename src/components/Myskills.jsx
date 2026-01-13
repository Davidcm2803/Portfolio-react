import { useState } from "react";
import { Code2, Database, Wrench, GraduationCap } from "lucide-react";

export const MySkill = () => {
  const [selected, setSelected] = useState("all");

  const techStack = {
    frontend: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
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
    learning: [
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    tools: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" }
    ]
  };

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
            {[
              { key: "all", label: "All" },
              { key: "frontend", label: "Frontend" },
              { key: "backend", label: "Backend" },
              { key: "learning", label: "Learning" },
              { key: "tools", label: "Tools" }
            ].map(tab => (
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <TechCard title="Frontend" technologies={techStack.frontend} icon={Code2} />
              <TechCard title="Backend" technologies={techStack.backend} icon={Database} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TechCard title="Aprendiendo" technologies={techStack.learning} icon={GraduationCap} />
              <TechCard title="Herramientas" technologies={techStack.tools} icon={Wrench} />
            </div>
          </>
        )}

        {selected !== "all" && (
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              {selected === "frontend" && <TechCard title="Frontend" technologies={techStack.frontend} icon={Code2} />}
              {selected === "backend" && <TechCard title="Backend" technologies={techStack.backend} icon={Database} />}
              {selected === "learning" && <TechCard title="Aprendiendo" technologies={techStack.learning} icon={GraduationCap} />}
              {selected === "tools" && <TechCard title="Herramientas" technologies={techStack.tools} icon={Wrench} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};