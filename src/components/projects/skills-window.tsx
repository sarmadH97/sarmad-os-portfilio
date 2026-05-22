const categories = [
  {
    name: "Frontend Engineering",
    capability: "Designing high-trust product interfaces with scalable architecture and polished interaction systems.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Framer Motion"],
  },
  {
    name: "Backend & APIs",
    capability: "Building dependable service contracts and data-backed application workflows.",
    skills: [".NET", "Node.js", "REST APIs", "PostgreSQL", "SQL Server"],
  },
  {
    name: "AI & Automation",
    capability: "Integrating LLM-enabled workflows into practical delivery systems for better speed and clarity.",
    skills: ["OpenAI APIs", "AI-assisted development", "Prompt engineering", "AI workflows"],
  },
  {
    name: "Cloud & DevOps",
    capability: "Shipping with production discipline through cloud-native deployment and CI/CD orchestration.",
    skills: ["Azure", "AWS", "CI/CD", "GitHub Actions", "Vercel", "Docker"],
  },
  {
    name: "Security & Testing",
    capability: "Embedding secure coding standards and quality controls into the development lifecycle.",
    skills: ["OWASP Top 10 mindset", "Jest", "React Testing Library", "Enzyme", "SonarQube", "Code coverage strategy"],
  },
  {
    name: "Leadership & Product Thinking",
    capability: "Aligning technical execution with business outcomes while mentoring teams and driving ownership.",
    skills: ["System Design", "Frontend Architecture", "Product Thinking", "Team Leadership", "Mentoring", "Agile collaboration"],
  },
];

export function SkillsWindow() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {categories.map((category) => (
        <section key={category.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:bg-white/10">
          <h3 className="text-white font-medium">{category.name}</h3>
          <p className="mt-2 text-sm text-slate-300">{category.capability}</p>
          <p className="mt-3 text-xs text-cyan-100">{category.skills.join(" · ")}</p>
        </section>
      ))}
    </div>
  );
}
