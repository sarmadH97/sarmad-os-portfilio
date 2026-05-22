const recommendations = [
  {
    name: "Product Director",
    role: "Cross-functional partner",
    text: "Sarmad combines frontend depth with strong product judgment. He consistently turns ambiguous requirements into polished, scalable user experiences.",
    theme: "Frontend expertise · Product thinking · Problem solving",
  },
  {
    name: "Engineering Manager",
    role: "Team lead collaborator",
    text: "He leads by example, mentors engineers effectively, and raises architecture quality while keeping execution fast and pragmatic.",
    theme: "Leadership · Architecture mindset · Mentoring",
  },
  {
    name: "Startup Founder",
    role: "Execution stakeholder",
    text: "Sarmad operates with ownership and autonomy. He communicates clearly, collaborates deeply, and brings startup-ready engineering credibility.",
    theme: "Autonomy · Collaboration · Trust",
  },
];

export function RecommendationsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {recommendations.map((recommendation) => (
        <article key={recommendation.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300/60 to-violet-300/60" />
            <div>
              <p className="text-sm font-semibold text-white">{recommendation.name}</p>
              <p className="text-xs text-slate-400">{recommendation.role}</p>
            </div>
          </div>
          <p className="text-sm text-slate-200">{recommendation.text}</p>
          <p className="mt-3 text-xs text-cyan-100">{recommendation.theme}</p>
        </article>
      ))}
    </div>
  );
}
