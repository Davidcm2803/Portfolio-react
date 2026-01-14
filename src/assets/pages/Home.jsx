import { AboutMe } from "../../components/AboutMe";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { HeroSection } from "../../components/HeroSection";
import { MySkill } from "../../components/Myskills";
import { Navbar } from "../../components/Navbar";
import { ProjectsSection } from "../../components/ProjectsSection";
import {StarBackground} from "@/components/StarBackground";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background */}
      <StarBackground />
      {/* UI */}
      <Navbar />
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutMe />
        <MySkill/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
};
