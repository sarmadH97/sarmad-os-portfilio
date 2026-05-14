import { create } from "zustand";
import { DESKTOP_WINDOWS } from "@/data/windows";
import { WindowId, WindowState } from "@/types/window";

interface WindowStore {
  windows: Record<WindowId, WindowState>;
  activeWindow: WindowId | null;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
}

const initialWindows = DESKTOP_WINDOWS.reduce((acc, item, i) => {
  acc[item.id] = {
    ...item,
    isOpen: item.id === "about",
    isMinimized: false,
    zIndex: i + 1,
  };
  return acc;
}, {} as Record<WindowId, WindowState>);

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: initialWindows,
  activeWindow: "about",
  openWindow: (id) => {
    const top = Math.max(...Object.values(get().windows).map((w) => w.zIndex), 0) + 1;
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: true, isMinimized: false, zIndex: top },
      },
      activeWindow: id,
    }));
  },
  closeWindow: (id) =>
    set((state) => ({
      windows: { ...state.windows, [id]: { ...state.windows[id], isOpen: false } },
      activeWindow: state.activeWindow === id ? null : state.activeWindow,
    })),
  focusWindow: (id) => {
    const top = Math.max(...Object.values(get().windows).map((w) => w.zIndex), 0) + 1;
    set((state) => ({
      windows: { ...state.windows, [id]: { ...state.windows[id], zIndex: top } },
      activeWindow: id,
    }));
  },
}));
