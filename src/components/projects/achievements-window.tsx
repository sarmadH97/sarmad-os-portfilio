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
    <div className="grid gap-3 md:grid-cols-3">
      {achievements.map((item) => (
        <article key={item.title} className="rounded-2xl border border-[#013E37]/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F3E7BE]/30 hover:shadow-md">
          <p className="font-display text-4xl font-black text-[#013E37]">{item.metric}</p>
          <p className="mt-1 text-sm font-semibold text-[#111827]">{item.title}</p>
          <p className="mt-2 text-base leading-7 text-slate-600">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
