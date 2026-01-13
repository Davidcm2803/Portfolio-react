import { AboutMe } from "../../components/AboutMe";
import { HeroSection } from "../../components/HeroSection";
import { MySkill } from "../../components/MySkills";
import { Navbar } from "../../components/Navbar";
import { ProjectsSection } from "../../components/ProjectsSection";
import { ThemeToggle } from "../../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background */}
      <StarBackground />

      {/* UI */}
      <ThemeToggle />
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutMe />
        <MySkill/>
        <ProjectsSection/>
      </main>
    </div>
  );
};
