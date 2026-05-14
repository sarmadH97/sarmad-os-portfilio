import { create } from "zustand";
import { DESKTOP_WINDOWS } from "@/data/windows";
import { WindowId, WindowState } from "@/types/window";

interface WindowStore {
  windows: Record<WindowId, WindowState>;
  activeWindow: WindowId | null;
  isMobile: boolean;
  setMobile: (isMobile: boolean) => void;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  setWindowPosition: (id: WindowId, x: number, y: number) => void;
}

const initialWindows = DESKTOP_WINDOWS.reduce((acc, item, i) => {
  acc[item.id] = {
    ...item,
    position: item.defaultPosition,
    isOpen: item.id === "about" || item.id === "terminal",
    isMinimized: false,
    zIndex: i + 10,
  };
  return acc;
}, {} as Record<WindowId, WindowState>);

const getTopZ = (windows: Record<WindowId, WindowState>) => Math.max(...Object.values(windows).map((w) => w.zIndex), 10) + 1;

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: initialWindows,
  activeWindow: "terminal",
  isMobile: false,
  setMobile: (isMobile) => set({ isMobile }),
  openWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: true, isMinimized: false, zIndex: getTopZ(state.windows) },
      },
      activeWindow: id,
    })),
  closeWindow: (id) =>
    set((state) => ({
      windows: { ...state.windows, [id]: { ...state.windows[id], isOpen: false } },
      activeWindow: state.activeWindow === id ? null : state.activeWindow,
    })),
  focusWindow: (id) =>
    set((state) => ({
      windows: { ...state.windows, [id]: { ...state.windows[id], zIndex: getTopZ(state.windows) } },
      activeWindow: id,
    })),
  setWindowPosition: (id, x, y) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], position: { x, y } },
      },
    })),
}));
