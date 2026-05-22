const recommendations = [
  {
    name: "Product Director",
    role: "Cross-functional partner · SaaS",
    text: "Sarmad combines frontend depth with product judgment and consistently translates ambiguity into scalable, polished experiences.",
    theme: "Frontend expertise · Product thinking · Problem solving",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
  {
    name: "Engineering Manager",
    role: "Team lead collaborator · Enterprise",
    text: "He raises architecture quality, mentors effectively, and keeps execution velocity high without sacrificing engineering fundamentals.",
    theme: "Leadership · Architecture mindset · Mentoring",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
  {
    name: "Startup Founder",
    role: "Product stakeholder · Startup",
    text: "Sarmad works with high ownership, clear communication, and founder-ready delivery discipline across product and engineering.",
    theme: "Autonomy · Collaboration · Trust",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
];

export function RecommendationsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {recommendations.map((recommendation) => (
        <article key={recommendation.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:bg-white/10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300/60 to-violet-300/60" />
            <div>
              <p className="text-sm font-semibold text-white">{recommendation.name}</p>
              <p className="text-xs text-slate-400">{recommendation.role}</p>
            </div>
          </div>
          <p className="text-sm text-slate-200">{recommendation.text}</p>
          <p className="mt-3 text-xs text-cyan-100">{recommendation.theme}</p>
          <a href={recommendation.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs text-cyan-200 hover:underline">View Full Recommendation ↗</a>
        </article>
      ))}
    </div>
  );
}
