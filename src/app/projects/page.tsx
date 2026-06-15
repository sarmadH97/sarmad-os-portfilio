import { SiteShell } from "@/components/desktop/site-shell";
import { ProjectsWindow } from "@/components/projects/projects-window";
import { Reveal } from "@/components/ui/motion";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-5 md:pb-20 md:pt-28">
        <PageHeader eyebrow="Selected work" title="Projects built for scale, clarity, and real product outcomes." description="A concise view of SaaS, enterprise, fintech, and AI systems I’ve helped shape." />
        <ProjectsWindow />
      </section>
    </SiteShell>
  );
}

function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <Reveal><div className="mb-6 rounded-[1.5rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-5 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:border-[#D4A373]/20 hover:shadow-2xl md:mb-8 md:rounded-[2rem] md:p-8"><p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8A5A2B]">{eyebrow}</p><h1 className="font-display mt-3 max-w-3xl text-[clamp(2.4rem,11vw,4rem)] font-black uppercase leading-[0.96] text-[#111827] md:text-5xl">{title}</h1><p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{description}</p></div></Reveal>;
}
