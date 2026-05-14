"use client";

import { useEffect } from "react";
import { Dock } from "@/components/dock/dock";
import { WindowManager } from "@/components/windows/window-manager";
import { useWindowStore } from "@/store/use-window-store";
import { TopBar } from "./topbar";
import { WallpaperBackground } from "./wallpaper";

export function DesktopShell() {
  const setMobile = useWindowStore((s) => s.setMobile);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [setMobile]);

  return (
    <main className="relative min-h-screen overflow-hidden p-3">
      <WallpaperBackground />
      <TopBar />
      <section className="relative h-[calc(100vh-2rem)] pt-16">
        <WindowManager />
      </section>
      <Dock />
    </main>
  );
}
