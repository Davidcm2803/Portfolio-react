import { Briefcase, Code, User, Wrench, GraduationCap, Bot } from "lucide-react";
import { Download } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Bilingual Full Stack Developer & AI Engineer | +3 years experience
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base">
              Over 3 years of experience providing high-volume technical support
              with a strong focus on software troubleshooting and process
              optimization, combined with hands-on experience designing and
              shipping production software: LLM-powered automation pipelines,
              RAG systems, serverless cloud architectures, and internal tools
              that remove manual work from real business processes.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base">
              Recently focused on applying AI (Gemini, LLM chatbots,
              retrieval-augmented generation) to solve back-office problems at
              scale: document intelligence with OCR (Tesseract), workflow
              automation with Python and FastAPI, vector search with Weaviate
              and MongoDB Atlas, and serverless deployments on AWS (Lambda, API
              Gateway, S3, CloudFront) provisioned with Terraform. Comfortable
              across the stack in Python, Java, C#, JavaScript, SQL, React, and
              Tailwind CSS, and passionate about turning ambiguous operational
              problems into reliable, automated systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button text-center"
              >
                Get In Touch
              </a>
              <button
                onClick={() => window.open("/David_Resume.pdf", "_blank")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-emerald-600 transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5 shrink-0" />
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 w-full">
            {/* Equifax - AI & Automation */}
            <div className="relative group bg-gradient-to-br from-background to-background/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0 pr-4">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 break-words">
                    AI Automation & Backend Developer
                  </h4>
                  <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                    Equifax | 2026 – Present
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-snug">
                    Built AI automation pipelines with Python, FastAPI, and
                    Tesseract OCR to replace manual screening workflows,
                    including a Gemini-based LLM pipeline that normalizes
                    records for automatic ingestion, a RAG flow that
                    cross-references data across multiple sources, and an app
                    that scans inbound emails and PDFs to auto-count
                    applicants per requisition.
                  </p>
                </div>
              </div>
            </div>

            {/* Shyft Global Services */}
            <div className="relative group bg-gradient-to-br from-background to-background/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 break-words">
                    Technical Support Specialist
                  </h4>
                  <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                    Shyft Global Services | 2022 – 2025
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-snug">
                    Automated business processes with Python, C#, and
                    Salesforce, cutting case processing time by 35%, while
                    supporting and configuring routers, switches, and
                    Broadcom/Cisco hardware and managing VLANs and Cisco
                    routers via PuTTY across internal and field environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Amazon CRC */}
            <div className="relative group bg-gradient-to-br from-background to-background/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 break-words">
                    Customer Service Representative 
                  </h4>
                  <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                    Amazon CRC | 2021 – 2022
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-snug">
                    Assisted US Amazon employees with COVID-19 medical leave
                    processes in a high-volume, high-pressure environment,
                    improving handle time while maintaining strong customer
                    satisfaction metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Background */}
            <div className="relative group bg-gradient-to-br from-background to-background/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1 break-words">
                    Academic Background
                  </h4>
                  <p className="text-xs sm:text-sm text-primary font-medium mb-2">
                    University Studies | 2022 – Present
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-snug">
                    Built a solid foundation in programming through academic
                    projects using Python, Java, C#, JavaScript, HTML/CSS, SQL
                    Server, and .NET MVC, with a focus on writing clean,
                    logical code and developing strong problem-solving skills.
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