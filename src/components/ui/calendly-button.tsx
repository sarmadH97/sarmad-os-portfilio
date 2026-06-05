import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/sarmadhusssain/30min";

interface CalendlyButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "subtle";
  className?: string;
}

export function CalendlyButton({ label = "Book a Discovery Call", variant = "primary", className }: CalendlyButtonProps) {
  const styles = {
    primary: "bg-[#D4A373] text-[#111827] shadow-lg shadow-[#D4A373]/25 hover:bg-[#C08D5F]",
    secondary: "border border-[#D4A373]/20 bg-[#FEFAE0] text-[#111827] hover:bg-[#FAEDCD]/70",
    subtle: "border border-[#D4A373]/15 bg-[#FAEDCD]/35 text-[#8A5A2B] hover:bg-[#FAEDCD]/60",
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
