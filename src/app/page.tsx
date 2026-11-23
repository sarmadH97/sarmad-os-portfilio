import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarmad Hussain | Senior Software Engineer & Founding Engineer",
  description: "Senior software engineer helping founders turn product ideas into scalable, AI-enabled software. 6+ years across fintech, payroll, SaaS, and AI systems.",
};

import { DesktopShell } from "@/components/desktop/desktop-shell";

export default function HomePage() {
  return <DesktopShell />;
}
