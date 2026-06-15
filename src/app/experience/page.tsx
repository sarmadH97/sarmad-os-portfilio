import { SiteShell } from "@/components/desktop/site-shell";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { ExperienceWindow } from "@/components/projects/experience-window";
import { SkillsWindow } from "@/components/projects/skills-window";
import { IndustriesSection } from "@/components/projects/industries-section";
import { Reveal } from "@/components/ui/motion";

export default function ExperiencePage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pb-16 pt-24 sm:px-5 md:space-y-8 md:pb-20 md:pt-28">
        <Reveal>
          <section className="rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:border-[#D4A373]/20 hover:shadow-2xl md:rounded-[2rem] md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Experience</p>
          <h1 className="font-display mt-3 max-w-3xl text-[clamp(2.4rem,11vw,4rem)] font-black uppercase leading-[0.96] text-[#111827] md:text-5xl">Enterprise systems, AI delivery, and product engineering growth.</h1>
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
