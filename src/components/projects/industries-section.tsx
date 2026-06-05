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
    <section className="rounded-[2rem] border border-[#013E37]/10 bg-white/90 p-6 shadow-lg shadow-[#013E37]/10 backdrop-blur-xl">
      <p className="text-sm font-medium text-[#013E37]">Industries Worked In</p>
      {!compact ? (
        <h2 className="font-heading mt-2 text-2xl font-semibold text-[#111827]">Enterprise systems, startup SaaS, and AI product domains.</h2>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {INDUSTRIES_WORKED_IN.map((industry) => (
          <span key={industry} className="inline-flex items-center gap-2 rounded-full border border-[#013E37]/10 bg-[#F3E7BE]/35 px-3 py-2 text-sm text-slate-700">
            <Check className="h-4 w-4 text-[#013E37]" aria-hidden="true" />
            {industry}
          </span>
        ))}
      </div>
    </section>
  );
}
