import { Sidebar } from "@/components/layout/Sidebar";
import { HeroSection } from "@/sections/HeroSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TechnologiesSection } from "@/sections/TechnologiesSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />

      <main
        className="flex-1 min-w-0 px-6 sm:px-10 lg:px-14 xl:px-16 max-w-4xl"
        id="main-content"
      >
        <HeroSection />

        <hr className="border-border" />

        <ExperienceSection />

        <hr className="border-border" />

        <ProjectsSection />

        <hr className="border-border" />

        <TechnologiesSection />

        <hr className="border-border" />

        <ContactSection />

        <footer className="py-8 text-xs text-text-muted">
          © {new Date().getFullYear()} Paulo Ricardo da Silva Vieira
        </footer>
      </main>
    </div>
  );
}
