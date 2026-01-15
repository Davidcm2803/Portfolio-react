import { Briefcase, Code, User, Wrench, GraduationCap } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Technical Support Specialist & Web Developer
            </h3>

            <p className="text-muted-foreground">
              Bilingual Technical Support Specialist with 3+ years of experience
              in high-volume customer service and technical support. Strong
              background in troubleshooting software and hardware issues while
              optimizing processes and improving service delivery across global
              operations.
            </p>

            <p className="text-muted-foreground">
              In addition to support responsibilities, I have hands-on
              experience assisting in small-scale software development
              initiatives, including internal tools, process automation,
              documentation, testing, and troubleshooting of internally
              developed solutions. Currently expanding my skill set in web
              development using Python, Java, C#, JavaScript, and modern web
              technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/public/David_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="relative group bg-gradient-to-br from-background to-background/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30">
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-1">
                    Technical Support Specialist
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    Shyft Global Services | 2022 - Present
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Back Office Support assisting field engineers and supporting
                    global service delivery for US, Canada, and Japan. Actively
                    contributed to internal software initiatives by assisting
                    with process automation, internal tools, documentation,
                    testing, and troubleshooting of internally developed
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group bg-gradient-to-br from-background to-background/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-1">
                    Call Center Agent
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    Amazon CRC | 2021 - 2022
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Assisted US Amazon employees with COVID-19 medical leave
                    processes, improving handle time and maintaining strong
                    satisfaction metrics in a high-pressure environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group bg-gradient-to-br from-background to-background/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-lg mb-1">
                    Academic Background
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    University Studies | 2022 - Present
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Built a solid foundation in programming through academic
                    projects using Python, Java, C#, JavaScript, HTML/CSS, SQL
                    Server, and .NET MVC, focusing on logic, clean code, and
                    problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
