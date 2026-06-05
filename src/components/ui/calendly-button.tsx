import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/sarmadhusssain/30min";

interface CalendlyButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "subtle";
  className?: string;
}

export function CalendlyButton({ label = "Book a Discovery Call", variant = "primary", className }: CalendlyButtonProps) {
  const styles = {
    primary: "bg-[#013E37] text-white shadow-lg shadow-[#013E37]/25 hover:bg-[#02584f]",
    secondary: "border border-[#013E37]/20 bg-white text-[#111827] hover:bg-[#F3E7BE]/45",
    subtle: "border border-[#013E37]/15 bg-[#F3E7BE]/35 text-[#013E37] hover:bg-[#F3E7BE]/60",
  };

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition", styles[variant], className)}
    >
      {label}
    </a>
  );
}
