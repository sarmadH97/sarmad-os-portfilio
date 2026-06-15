import { StaggerGroup, StaggerItem } from "@/components/ui/motion";
import { TechBadge, TechIcon } from "@/components/ui/tech-icon";

const categories = [
  { name: "Frontend Engineering", capability: "Scalable product UI systems.", icon: "React", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Framer Motion"] },
  { name: "Backend & APIs", capability: "Reliable service contracts and data flows.", icon: ".NET", skills: [".NET", "C#", "Node.js", "NestJS", "REST APIs", "PostgreSQL", "SQL Server"] },
  { name: "AI & Automation", capability: "Practical LLM workflow integration.", icon: "OpenAI", skills: ["OpenAI", "AI Workflows"] },
  { name: "Cloud & DevOps", capability: "Deployment-ready product operations.", icon: "Azure", skills: ["Azure", "AWS", "GitHub Actions", "Vercel", "Docker"] },
  { name: "Security & Testing", capability: "Quality and secure coding built in.", icon: "Jest", skills: ["Jest", "React Testing Library", "SonarQube", "OWASP", "OAuth", "JWT"] },
  { name: "Leadership & Product", capability: "Technical clarity for fast teams.", icon: "AI Workflows", skills: ["System Design", "Mentoring", "Product Thinking", "Agile"] },
];

export function SkillsWindow() {
  return (
    <StaggerGroup className="grid gap-3 md:grid-cols-2">
      {categories.map((category) => (
        <StaggerItem key={category.name}>
          <section className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-md motion-reduce:transform-none">
            <div className="flex items-start gap-3">
              <TechIcon label={category.icon} size="lg" />
              <div>
                <h3 className="font-semibold text-[#111827]">{category.name}</h3>
                <p className="mt-1 text-base leading-7 text-slate-600">{category.capability}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => <TechBadge key={skill} label={skill} />)}
            </div>
          </section>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
