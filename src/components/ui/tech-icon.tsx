import {
  Blocks,
  Bot,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  Lightbulb,
  Network,
  RefreshCcw,
  Server,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const simpleIconSlugs: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  JavaScript: "javascript",
  Tailwind: "tailwindcss",
  "Tailwind CSS": "tailwindcss",
  Redux: "redux",
  "Framer Motion": "framer",
  ".NET": "dotnet",
  "C#": "csharp",
  "Node.js": "nodedotjs",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  "SQL Server": "microsoftsqlserver",
  OpenAI: "openai",
  "OpenAI APIs": "openai",
  Azure: "microsoftazure",
  "Azure DevOps": "azuredevops",
  AWS: "amazonaws",
  "GitHub Actions": "githubactions",
  Vercel: "vercel",
  Docker: "docker",
  Jest: "jest",
  "React Testing Library": "testinglibrary",
  RTL: "testinglibrary",
  SonarQube: "sonarqube",
  OWASP: "owasp",
  JWT: "jsonwebtokens",
};

const lucideIcons: Record<string, LucideIcon> = {
  "REST APIs": Network,
  OAuth: KeyRound,
  "AI Workflows": Workflow,
  "AI workflows": Workflow,
  "AI Integrations": Bot,
  "Workflow Automation": Workflow,
  "AI-assisted development": BrainCircuit,
  "Prompt engineering": Braces,
  "System Design": Blocks,
  Mentoring: Users,
  "Product Thinking": Lightbulb,
  Agile: RefreshCcw,
  "CI/CD": GitBranch,
  SQL: Database,
  "ASP.NET": Server,
  "ASP.NET MVC": Server,
  "Leaflet.js": Cloud,
};

interface TechIconProps {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

const innerIconSizes = {
  sm: "h-3 w-3",
  md: "h-3.5 w-3.5",
  lg: "h-[1.125rem] w-[1.125rem]",
};

function simpleIconUrl(slug: string, color?: string) {
  return color ? `https://cdn.simpleicons.org/${slug}/${color}` : `https://cdn.simpleicons.org/${slug}`;
}

export function TechIcon({ label, size = "md", className }: TechIconProps) {
  const slug = simpleIconSlugs[label];
  const LucideFallback = lucideIcons[label] ?? Code2;

  return (
    <span
      aria-hidden="true"
      className={cn(
        "group/icon inline-flex shrink-0 items-center justify-center rounded-md border border-[#D4A373]/15 bg-[#FEFAE0] text-[#8A5A2B] shadow-sm transition-all duration-200 ease-out group-hover:border-[#D4A373]/25 group-hover:bg-[#FAEDCD]/60 group-hover:text-[#111827]",
        iconSizes[size],
        className,
      )}
    >
      {slug ? (
        <span className={cn("relative block", innerIconSizes[size])}>
          <img
            src={simpleIconUrl(slug, "8A5A2B")}
            alt=""
            className="absolute inset-0 h-full w-full transition-opacity duration-200 group-hover:opacity-0 group-hover/icon:opacity-0"
            loading="lazy"
          />
          <img
            src={simpleIconUrl(slug)}
            alt=""
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover/icon:opacity-100"
            loading="lazy"
          />
        </span>
      ) : (
        <LucideFallback className={cn("transition-colors duration-200", innerIconSizes[size])} strokeWidth={2.2} />
      )}
    </span>
  );
}

export function TechBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      title={label}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border border-[#D4A373]/10 bg-[#FEFAE0]/80 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#D4A373]/25 hover:bg-[#FAEDCD]/60 hover:shadow-sm motion-reduce:transform-none",
        className,
      )}
    >
      <TechIcon label={label} size="sm" />
      {label}
    </span>
  );
}
