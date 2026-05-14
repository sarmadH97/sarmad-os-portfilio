export type WindowId = "about" | "terminal" | "projects" | "experience" | "skills" | "recommendations";

export interface DesktopWindow {
  id: WindowId;
  title: string;
  icon: "user" | "terminal" | "briefcase" | "timeline" | "spark" | "reviews";
  defaultPosition: { x: number; y: number };
  defaultSize: { w: number; h: number };
}

export interface WindowState extends DesktopWindow {
  position: { x: number; y: number };
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
}
