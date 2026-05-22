const achievements = [
  { metric: "5x", title: "Achiever of the Month", detail: "Recognized five times at Techlogix for execution consistency and high-impact delivery." },
  { metric: "#1", title: "Techlogix AI Hackathon Winner", detail: "Built Terra AI Assistant and won first place for practical AI workflow innovation." },
  { metric: "100+", title: ".NET Services Modernized", detail: "Led migration of more than 100 services to RESTful APIs for scalable system integration." },
  { metric: "50+", title: "Enterprise Frontend Features", detail: "Delivered 50+ production features across payroll, global expansion, and enterprise platforms." },
  { metric: "85%", title: "Code Coverage Quality Bar", detail: "Elevated test coverage to 85% using Jest, Enzyme, and React Testing Library patterns." },
  { metric: "Global", title: "Payroll & Expansion Systems", detail: "Contributed to enterprise-scale payroll and global rollout modules with UX and data-flow reliability." },
];

export function AchievementsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {achievements.map((item) => (
        <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/10">
          <p className="text-2xl font-semibold text-cyan-200">{item.metric}</p>
          <p className="mt-1 text-sm font-medium text-white">{item.title}</p>
          <p className="mt-2 text-xs text-slate-300">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
