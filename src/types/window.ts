export type WindowId =
  | "projects"
  | "terminal"
  | "aiWorkflow"
  | "architecture"
  | "recommendations";

export interface DesktopWindow {
  id: WindowId;
  title: string;
  icon: "briefcase" | "terminal" | "spark" | "network" | "reviews";
  defaultPosition: { x: number; y: number };
  defaultSize: { w: number; h: number };
}

export interface WindowState extends DesktopWindow {
  position: { x: number; y: number };
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
}
