import { SiteShell } from "@/components/desktop/site-shell";
import { ProjectsWindow } from "@/components/projects/projects-window";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-28">
        <PageHeader eyebrow="Selected work" title="Projects built for scale, clarity, and real product outcomes." description="A concise view of SaaS, enterprise, fintech, and AI systems I’ve helped shape." />
        <ProjectsWindow />
      </section>
    </SiteShell>
  );
}

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mb-8 rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-8 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl"><p className="text-sm font-medium uppercase tracking-[0.18em] text-[#013E37]">{eyebrow}</p><h1 className="font-display mt-3 max-w-3xl text-5xl font-black uppercase text-[#111827]">{title}</h1><p className="mt-3 max-w-2xl text-slate-600">{description}</p></div>;
}
