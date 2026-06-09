import { SiteShell } from "@/components/desktop/site-shell";
import { RecommendationsWindow } from "@/components/projects/recommendations-window";

export default function RecommendationsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-28">
        <div className="mb-8 rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-8 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">Recommendations</p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl font-black uppercase text-[#111827]">Trusted by product, engineering, and startup collaborators.</h1>
        </div>
        <RecommendationsWindow />
      </section>
    </SiteShell>
  );
}
