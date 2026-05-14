export type WindowId = "about" | "terminal";

export interface DesktopWindow {
  id: WindowId;
  title: string;
  icon: "user" | "terminal";
  defaultPosition: { x: number; y: number };
  defaultSize: { w: number; h: number };
}

export interface WindowState extends DesktopWindow {
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
}
