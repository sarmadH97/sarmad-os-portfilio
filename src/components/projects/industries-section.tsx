import { Check } from "lucide-react";

export const INDUSTRIES_WORKED_IN = [
  "Banking",
  "Fintech",
  "Payroll",
  "HR Tech",
  "Government Procurement",
  "Financial Services",
  "SaaS",
  "AI Products",
  "Enterprise Software",
];

interface IndustriesSectionProps {
  compact?: boolean;
}

export function IndustriesSection({ compact = false }: IndustriesSectionProps) {
  return (
    <section className="rounded-[2rem] border border-[#D4A373]/10 bg-[#FAEDCD]/80 p-6 shadow-lg shadow-[#D4A373]/10 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-xl motion-reduce:transform-none">
      <p className="text-sm font-medium text-[#8A5A2B]">Industries Worked In</p>
      {!compact ? (
        <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">Enterprise systems, startup SaaS, and AI product domains.</h2>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {INDUSTRIES_WORKED_IN.map((industry) => (
          <span key={industry} className="inline-flex items-center gap-2 rounded-full border border-[#D4A373]/10 bg-[#FAEDCD]/35 px-3 py-2 text-sm text-slate-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#D4A373]/20 hover:shadow-sm motion-reduce:transform-none">
            <Check className="h-4 w-4 text-[#8A5A2B]" aria-hidden="true" />
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}
