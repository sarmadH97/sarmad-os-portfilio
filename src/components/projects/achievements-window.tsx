import { StaggerGroup, StaggerItem } from "@/components/ui/motion";

const achievements = [
  { metric: "5x", title: "Achiever of the Month", detail: "Recognized at Techlogix for consistent high-impact delivery." },
  { metric: "#1", title: "AI Hackathon Winner", detail: "Built Terra AI Assistant for practical team workflow automation." },
  { metric: "150+", title: "Frontend Features", detail: "Delivered enterprise frontend features across payroll, expansion, SaaS, and AI-assisted product systems." },
  { metric: "AI", title: "AI-Assisted Product Delivery", detail: "Built and shipped product features faster using AI-assisted development, automation, and modern engineering workflows." },
  { metric: "85%", title: "Code Coverage", detail: "Raised quality bar with Jest, Enzyme, and RTL patterns." },
  { metric: "Global", title: "Payroll Systems", detail: "Built for enterprise scale, reliability, and clear UX." },
];

export function AchievementsWindow() {
  return (
    <StaggerGroup className="grid gap-3 md:grid-cols-3">
      {achievements.map((item) => (
        <StaggerItem key={item.title}>
          <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:bg-[#FAEDCD]/30 hover:shadow-md motion-reduce:transform-none">
          <p className="font-display text-4xl font-black text-[#8A5A2B]">{item.metric}</p>
          <p className="mt-1 text-sm font-semibold text-[#111827]">{item.title}</p>
          <p className="mt-2 text-base leading-7 text-slate-600">{item.detail}</p>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
