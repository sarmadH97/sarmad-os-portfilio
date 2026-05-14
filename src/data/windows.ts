import { DesktopWindow } from "@/types/window";

export const DESKTOP_WINDOWS: DesktopWindow[] = [
  {
    id: "about",
    title: "About",
    icon: "user",
    defaultPosition: { x: 90, y: 90 },
    defaultSize: { w: 500, h: 360 },
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "terminal",
    defaultPosition: { x: 220, y: 150 },
    defaultSize: { w: 620, h: 390 },
  },
];
