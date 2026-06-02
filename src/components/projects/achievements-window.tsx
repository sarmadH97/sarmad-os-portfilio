const achievements = [
  { metric: "5x", title: "Achiever of the Month", detail: "Recognized at Techlogix for consistent high-impact delivery." },
  { metric: "#1", title: "AI Hackathon Winner", detail: "Built Terra AI Assistant for practical team workflow automation." },
  { metric: "100+", title: "Services Modernized", detail: "Led .NET-to-REST API migration for scalable integrations." },
  { metric: "50+", title: "Frontend Features", detail: "Delivered enterprise features across payroll and expansion systems." },
  { metric: "85%", title: "Code Coverage", detail: "Raised quality bar with Jest, Enzyme, and RTL patterns." },
  { metric: "Global", title: "Payroll Systems", detail: "Built for enterprise scale, reliability, and clear UX." },
];

export function AchievementsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {achievements.map((item) => (
        <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-2xl font-semibold text-sky-600">{item.metric}</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{item.title}</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
