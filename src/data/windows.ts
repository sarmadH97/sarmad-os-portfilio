import { DesktopWindow } from "@/types/window";

export const DESKTOP_WINDOWS: DesktopWindow[] = [
  { id: "projects", title: "Project Deep Dives", icon: "briefcase", defaultPosition: { x: 120, y: 80 }, defaultSize: { w: 860, h: 520 } },
  { id: "terminal", title: "Terminal", icon: "terminal", defaultPosition: { x: 200, y: 140 }, defaultSize: { w: 640, h: 400 } },
  { id: "aiWorkflow", title: "AI Workflow Explorer", icon: "spark", defaultPosition: { x: 180, y: 90 }, defaultSize: { w: 760, h: 460 } },
  { id: "architecture", title: "Architecture Visualizer", icon: "network", defaultPosition: { x: 220, y: 110 }, defaultSize: { w: 760, h: 460 } },
  { id: "recommendations", title: "Recommendation Details", icon: "reviews", defaultPosition: { x: 240, y: 120 }, defaultSize: { w: 700, h: 430 } },
];
