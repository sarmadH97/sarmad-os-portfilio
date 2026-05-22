"use client";

import { AnimatePresence } from "framer-motion";
import { useWindowStore } from "@/store/use-window-store";
import { WindowFrame } from "./window-frame";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { ProjectsWindow } from "@/components/projects/projects-window";
import { RecommendationsWindow } from "@/components/projects/recommendations-window";
import { AIWorkflowWindow } from "@/components/projects/ai-workflow-window";
import { ArchitectureWindow } from "@/components/projects/architecture-window";

export function WindowManager() {
  const windows = useWindowStore((s) => s.windows);
  const isMobile = useWindowStore((s) => s.isMobile);
  const sorted = Object.values(windows).filter((w) => w.isOpen).sort((a, b) => (isMobile ? 0 : a.zIndex - b.zIndex));

  return <div className="pointer-events-none fixed inset-0 z-[65]"><AnimatePresence>{sorted.map((window) => <WindowFrame key={window.id} id={window.id} title={window.title} defaultSize={window.defaultSize} zIndex={window.zIndex} position={window.position}>
    {window.id === "terminal" && <TerminalWindow />}
    {window.id === "projects" && <ProjectsWindow />}
    {window.id === "recommendations" && <RecommendationsWindow />}
    {window.id === "aiWorkflow" && <AIWorkflowWindow />}
    {window.id === "architecture" && <ArchitectureWindow />}
  </WindowFrame>)}</AnimatePresence></div>;
}
