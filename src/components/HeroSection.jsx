import { ArrowDown, Linkedin, Github, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Animated Avatar Circle */}
          <div className="relative opacity-0 animate-fade-in">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-purple-600 to-gray-900 dark:from-primary dark:via-purple-600 dark:to-gray-900 animate-pulse-subtle">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                    DC
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Software Dev</div>
                </div>
              </div>
            </div>
            {/* Orbiting particles */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_10px_2px_rgba(39,174,96,0.6)]"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slower">
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2 shadow-[0_0_10px_2px_rgba(168,85,247,0.6)]"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full animate-spin-reverse">
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-emerald-400 rounded-full -translate-y-1/2 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in-delay-1">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-2">
                <span className="name-gradient">
                  David Castillo
                </span>
              </h1>
              <p className="text-xl text-foreground opacity-0 animate-fade-in-delay-3">
                Bilingual (English/Spanish) Software Developer
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 opacity-0 animate-fade-in-delay-3">
                IT Support Specialist with 3+ years of experience
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
              <button
                onClick={() => window.open('./assets/David_Resume.pdf')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-emerald-600 transition-all transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all"
              >
                View my work
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
              <button
                onClick={() => window.open('https://www.linkedin.com/in/davidcastillom2803/')}
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:border-primary hover:text-white transition-all transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </button>
              <button
                onClick={() => window.open('https://github.com/Davidcm2803')}
                className="p-3 rounded-full bg-card border border-border hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-slower {
          animation: spin-slow 12s linear infinite reverse;
        }

        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }

        /* Light mode name - NEGRO con morado */
        .name-gradient {
          background: linear-gradient(to right, #1a1a1a, #6b21a8, #2d2d2d);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Dark mode name - colores CLAROS */
        .dark .name-gradient {
          background: linear-gradient(to right, #27ae60, #a78bfa, #34d399);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};