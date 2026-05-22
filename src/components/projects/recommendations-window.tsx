const recommendations = [
  {
    name: "Saad Hussain",
    role: "Tech Enthusiast | Manager | Lead | Developer",
    context: "Managed Sarmad directly",
    excerpt:
      "Sarmad demonstrated strong teamwork and technical proficiency, taking ownership of assigned tasks with depth and discipline.",
    theme: "Ownership · Communication growth · React expertise",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
  {
    name: "Lau Guan Kiat",
    role: "Product Management | Board Advisor",
    context: "Client relationship",
    excerpt:
      "He showed remarkable autonomy in decision-making and consistently helped the team move faster through smart problem solving.",
    theme: "Autonomy · Problem solving · Delivery impact",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
  {
    name: "Anthonia Essiet",
    role: "Product Designer | Creative Strategist",
    context: "Worked on same team",
    excerpt:
      "A front-end wizard who turns ideas into reality with a collaborative spirit and dependable execution quality.",
    theme: "Frontend expertise · Collaboration · Execution",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
  {
    name: "Narendraprasad Upadhyay",
    role: "Scrum Master",
    context: "Worked on payment team",
    excerpt:
      "Outstanding frontend developer with exceptional technical skill, attention to detail, and strong team contribution.",
    theme: "Quality mindset · Teamwork · Reliability",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
  {
    name: "Alvaro Castañón",
    role: "Certified Product Owner",
    context: "Worked on same team",
    excerpt:
      "Sarmad translated product requirements into working functionality while proactively suggesting meaningful improvements.",
    theme: "Product thinking · Proactivity · Communication",
    link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/",
  },
];

export function RecommendationsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {recommendations.map((recommendation) => (
        <article key={recommendation.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300/60 to-violet-300/60" />
            <div>
              <p className="text-sm font-semibold text-white">{recommendation.name}</p>
              <p className="text-xs text-slate-400">{recommendation.role}</p>
              <p className="text-[11px] text-slate-500">{recommendation.context}</p>
            </div>
          </div>
          <p className="text-sm text-slate-200">“{recommendation.excerpt}”</p>
          <p className="mt-3 text-xs text-cyan-100">{recommendation.theme}</p>
          <a href={recommendation.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs text-cyan-200 hover:underline">View on LinkedIn ↗</a>
        </article>
      ))}
    </div>
  );
}
