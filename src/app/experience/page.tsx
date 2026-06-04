import { Check } from "lucide-react";
import { SiteShell } from "@/components/desktop/site-shell";
import { AchievementsWindow } from "@/components/projects/achievements-window";
import { ExperienceWindow } from "@/components/projects/experience-window";
import { SkillsWindow } from "@/components/projects/skills-window";

const industries = ["Banking", "Fintech", "Payroll", "HR Tech", "SaaS", "AI Products", "Enterprise Software"];

export default function ExperiencePage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-20 pt-28">
        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Experience</p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl font-black uppercase text-[#111827]">Enterprise systems, AI delivery, and product engineering growth.</h1>
        </section>
        <AchievementsWindow />
        <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
          <p className="text-sm font-medium text-[#013E37]">Industries Worked In</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span key={industry} className="inline-flex items-center gap-2 rounded-full border border-[#013E37]/10 bg-[#F3E7BE]/35 px-3 py-2 text-sm text-slate-700">
                <Check className="h-4 w-4 text-[#013E37]" aria-hidden="true" />
                {industry}
              </span>
            ))}
          </div>
        </section>
        <ExperienceWindow />
        <SkillsWindow />
      </div>
    </SiteShell>
  );
}
