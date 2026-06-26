import { Sidebar } from "@/components/layout/Sidebar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />

      <main
        className="flex-1 min-w-0 px-6 sm:px-10 lg:px-12 xl:px-14 max-w-5xl"
        id="main-content"
      >
        {/* Hero fica sem FadeIn — já está above the fold */}
        <HeroSection />

        <hr className="border-border" />

        <FadeIn>
          <AboutSection />
        </FadeIn>

        <hr className="border-border" />

        <FadeIn>
          <ExperienceSection />
        </FadeIn>

        <hr className="border-border" />

        <FadeIn>
          <ProjectsSection />
        </FadeIn>

        <hr className="border-border" />

        <FadeIn>
          <AchievementsSection />
        </FadeIn>

        <footer className="py-8 text-xs text-text-muted border-t border-border mt-4">
          © {new Date().getFullYear()} Paulo Ricardo da Silva Vieira — Código é importante,
          mas entender o problema e{" "}
          <span className="text-action font-medium">entregar valor</span> é o que faz a diferença.
        </footer>
      </main>
    </div>
  );
}
