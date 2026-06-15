import { cn } from "@/lib/utils";

const techMarks: Record<string, string> = {
  React: "⚛",
  "Next.js": "N",
  TypeScript: "TS",
  JavaScript: "JS",
  Tailwind: "~",
  "Tailwind CSS": "~",
  Redux: "R",
  "Framer Motion": "F",
  ".NET": ".N",
  "C#": "C#",
  "Node.js": "⬢",
  NestJS: "N",
  "REST APIs": "↔",
  PostgreSQL: "PG",
  "SQL Server": "SQL",
  OpenAI: "AI",
  "OpenAI APIs": "AI",
  "AI Workflows": "✦",
  Azure: "A",
  AWS: "AWS",
  "GitHub Actions": "GH",
  Vercel: "▲",
  Docker: "▣",
  Jest: "J",
  "React Testing Library": "RTL",
  RTL: "RTL",
  SonarQube: "SQ",
  OWASP: "OW",
  OAuth: "OA",
  JWT: "JWT",
  "AI-assisted development": "AI",
  "Prompt engineering": "P",
  "AI workflows": "✦",
  "CI/CD": "CI",
};

interface TechIconProps {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TechIcon({ label, size = "md", className }: TechIconProps) {
  const mark = techMarks[label] ?? label.slice(0, 2).toUpperCase();
  const sizes = {
    sm: "h-4 w-4 text-[9px]",
    md: "h-5 w-5 text-[10px]",
    lg: "h-7 w-7 text-xs",
  };

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md border border-[#D4A373]/15 bg-[#FEFAE0] font-heading font-black leading-none text-[#8A5A2B] shadow-sm",
        sizes[size],
        className,
      )}
    >
      {mark}
    </span>
  );
}

export function TechBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      title={label}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[#D4A373]/10 bg-[#FEFAE0]/80 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#D4A373]/25 hover:bg-[#FAEDCD]/60 hover:shadow-sm motion-reduce:transform-none",
        className,
      )}
    >
      <TechIcon label={label} size="sm" />
      {label}
    </span>
  );
}
