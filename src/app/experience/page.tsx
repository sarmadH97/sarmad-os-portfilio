import { SiteShell } from "@/components/desktop/site-shell";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { ExperienceWindow } from "@/components/projects/experience-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { IndustriesSection } from "@/components/projects/industries-section";
import { Reveal } from "@/components/ui/motion";

export default function ExperiencePage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-20 pt-28">
        <Reveal>
          <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-8 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:border-[#D4A373]/20 hover:shadow-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Experience</p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl font-black uppercase text-[#111827]">Enterprise systems, AI delivery, and product engineering growth.</h1>
          </section>
        </Reveal>
        <AchievementsWindow />
        <Reveal><IndustriesSection /></Reveal>
        <ExperienceWindow />
        <SkillsWindow />
      </div>
    </SiteShell>
  );
}
