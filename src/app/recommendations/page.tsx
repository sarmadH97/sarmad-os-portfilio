import { SiteShell } from "@/components/desktop/site-shell";
import { RecommendationsWindow } from "@/components/projects/recommendations-window";
import { Reveal } from "@/components/ui/motion";

export default function RecommendationsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-5 md:pb-20 md:pt-28">
        <Reveal>
          <div className="mb-6 rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:border-[#D4A373]/20 hover:shadow-2xl md:mb-8 md:rounded-[2rem] md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Recommendations</p>
          <h1 className="font-display mt-3 max-w-3xl text-[clamp(2.4rem,11vw,4rem)] font-black uppercase leading-[0.96] text-[#111827] md:text-5xl">Trusted by product, engineering, and startup collaborators.</h1>
          </div>
        </Reveal>
        <RecommendationsWindow />
      </section>
    </SiteShell>
  );
}
