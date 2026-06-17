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
  "Node.js": "nodedotjs",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  "Azure DevOps": "azuredevops",
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

const customBrandIcons = new Set(["C#", "SQL Server", "OpenAI", "OpenAI APIs", "Azure", "AWS"]);

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

function CustomBrandIcon({ label, className }: { label: string; className?: string }) {
  if (label === "C#") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" role="img">
        <path d="M12 2.4 20.2 7v10L12 21.6 3.8 17V7L12 2.4Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 8.7a3.4 3.4 0 1 0 0 6.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15.4 8.8v6.4M18.1 8.8v6.4M14.4 11h4.7M14.4 13h4.7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </svg>
    );
  }

  if (label === "SQL Server") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" role="img">
        <ellipse cx="12" cy="5.5" rx="6.8" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.2 5.5v6.3c0 1.7 3 3 6.8 3s6.8-1.3 6.8-3V5.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.2 11.7v6.1c0 1.7 3 3 6.8 3s6.8-1.3 6.8-3v-6.1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (label === "OpenAI" || label === "OpenAI APIs") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" role="img">
        <path d="M12 4.2c2.1-1.2 4.8.3 4.8 2.8 2.5.1 4 2.8 2.7 4.9 1.3 2.1-.2 4.8-2.7 4.9 0 2.5-2.7 4-4.8 2.8-2.1 1.2-4.8-.3-4.8-2.8-2.5-.1-4-2.8-2.7-4.9C3.2 9.8 4.7 7.1 7.2 7c0-2.5 2.7-4 4.8-2.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.4 8.9 12 6.8l3.6 2.1v4.2L12 15.2l-3.6-2.1V8.9Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      </svg>
    );
  }

  if (label === "Azure") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" role="img">
        <path d="M13.8 3.8 5.4 18.2h7.5l5.7-10.1-4.8-4.3Z" fill="currentColor" opacity="0.55" />
        <path d="M14.4 4.2 9.8 16.4l4.5-4.5 4.3 6.3H8.1" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" role="img">
      <path d="M5.4 14.2c2.5 2.1 5.1 3.1 8 3.1 2.1 0 4.2-.5 6.3-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17.6 15.5 20 15l-.6 2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="4" y="11.2" fill="currentColor" fontSize="6.3" fontWeight="800" fontFamily="Arial, sans-serif">AWS</text>
    </svg>
  );
}

export function TechIcon({ label, size = "md", className }: TechIconProps) {
  const slug = simpleIconSlugs[label];
  const hasCustomBrandIcon = customBrandIcons.has(label);
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
      {hasCustomBrandIcon ? (
        <CustomBrandIcon label={label} className={cn("text-[#8A5A2B] transition-colors duration-200 group-hover:text-[#111827] group-hover/icon:text-[#111827]", innerIconSizes[size])} />
      ) : slug ? (
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
