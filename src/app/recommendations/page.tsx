import { SiteShell } from "@/components/desktop/site-shell";
import { RecommendationsWindow } from "@/components/projects/recommendations-window";

export default function RecommendationsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-28">
        <div className="mb-8 rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">Recommendations</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#111827]">Trusted by product, engineering, and startup collaborators.</h1>
        </div>
        <RecommendationsWindow />
      </section>
    </SiteShell>
  );
}
