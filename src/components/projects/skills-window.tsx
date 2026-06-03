const categories = [
  { name: "Frontend Engineering", capability: "Scalable product UI systems.", skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Framer Motion"] },
  { name: "Backend & APIs", capability: "Reliable service contracts and data flows.", skills: [".NET", "Node.js", "REST APIs", "PostgreSQL", "SQL Server"] },
  { name: "AI & Automation", capability: "Practical LLM workflow integration.", skills: ["OpenAI APIs", "AI-assisted development", "Prompt engineering", "AI workflows"] },
  { name: "Cloud & DevOps", capability: "Deployment-ready product operations.", skills: ["Azure", "AWS", "CI/CD", "GitHub Actions", "Vercel", "Docker"] },
  { name: "Security & Testing", capability: "Quality and secure coding built in.", skills: ["OWASP", "Jest", "RTL", "Enzyme", "SonarQube"] },
  { name: "Leadership & Product", capability: "Technical clarity for fast teams.", skills: ["System Design", "Mentoring", "Product Thinking", "Agile"] },
];

export function SkillsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {categories.map((category) => (
        <section key={category.name} className="rounded-2xl border border-[#013E37]/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <h3 className="font-semibold text-[#111827]">{category.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{category.capability}</p>
          <p className="mt-3 text-xs text-[#013E37]">{category.skills.join(" · ")}</p>
        </section>
      ))}
    </div>
  );
}
