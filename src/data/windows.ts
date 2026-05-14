import { DesktopWindow } from "@/types/window";

export const DESKTOP_WINDOWS: DesktopWindow[] = [
  { id: "about", title: "About", icon: "user", defaultPosition: { x: 70, y: 90 }, defaultSize: { w: 450, h: 320 } },
  { id: "terminal", title: "Terminal", icon: "terminal", defaultPosition: { x: 160, y: 140 }, defaultSize: { w: 610, h: 390 } },
  { id: "projects", title: "Projects", icon: "briefcase", defaultPosition: { x: 210, y: 80 }, defaultSize: { w: 760, h: 480 } },
  { id: "experience", title: "Experience", icon: "timeline", defaultPosition: { x: 120, y: 120 }, defaultSize: { w: 700, h: 460 } },
  { id: "skills", title: "Skills", icon: "spark", defaultPosition: { x: 260, y: 100 }, defaultSize: { w: 680, h: 440 } },
  { id: "recommendations", title: "Recommendations", icon: "reviews", defaultPosition: { x: 180, y: 110 }, defaultSize: { w: 700, h: 450 } },
];
