import { StaggerGroup, StaggerItem } from "@/components/ui/motion";

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
    <StaggerGroup className="grid gap-3 md:grid-cols-2">
      {categories.map((category) => (
        <StaggerItem key={category.name}>
          <section className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-md motion-reduce:transform-none">
          <h3 className="font-semibold text-[#111827]">{category.name}</h3>
          <p className="mt-1 text-base leading-7 text-slate-600">{category.capability}</p>
          <p className="mt-3 text-xs text-[#8A5A2B]">{category.skills.join(" · ")}</p>
          </section>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
