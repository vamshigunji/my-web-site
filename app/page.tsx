import { HeroSequence } from "@/components/HeroSequence";
import { SkillSection } from "@/components/SkillSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectSection } from "@/components/ProjectSection";
import { EXPERIENCE, PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <HeroSequence />
      <SkillSection />
      <ExperienceSection experiences={EXPERIENCE} />
      <ProjectSection projects={PROJECTS} />
    </main>
  );
}
