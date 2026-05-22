const categories = [
  { name: "Frontend Engineering", skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Framer Motion"] },
  { name: "Backend & APIs", skills: [".NET", "Node.js", "REST APIs", "PostgreSQL", "SQL Server"] },
  { name: "AI & Automation", skills: ["OpenAI APIs", "AI-assisted development", "Prompt engineering", "AI workflows"] },
  { name: "Cloud & DevOps", skills: ["Azure", "AWS", "CI/CD", "GitHub Actions", "Vercel", "Docker"] },
  { name: "Engineering & Leadership", skills: ["System Design", "Frontend Architecture", "Product Thinking", "Team Leadership", "Mentoring", "Agile collaboration"] },
];

export function SkillsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {categories.map((category) => (
        <section key={category.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
          <h3 className="text-white font-medium">{category.name}</h3>
          <p className="mt-2 text-sm text-slate-200">{category.skills.join(" · ")}</p>
        </section>
      ))}
    </div>
  );
}
