"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dock } from "@/components/dock/dock";
import { WindowManager } from "@/components/windows/window-manager";
import { useWindowStore } from "@/store/use-window-store";
import { BootSequence } from "./boot-sequence";
import { TopBar } from "./topbar";
import { WallpaperBackground } from "./wallpaper";

const BOOT_KEY = "sarmad_os_booted";

export function DesktopShell() {
  const setMobile = useWindowStore((s) => s.setMobile);
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);

    const booted = window.sessionStorage.getItem(BOOT_KEY) === "1";
    if (booted) {
      setShowBoot(false);
    }

    return () => window.removeEventListener("resize", update);
  }, [setMobile]);

  const handleBootComplete = () => {
    window.sessionStorage.setItem(BOOT_KEY, "1");
    setShowBoot(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden p-3">
      <WallpaperBackground />
      <AnimatePresence>{showBoot ? <BootSequence onComplete={handleBootComplete} /> : null}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.985, y: 8 }}
        animate={{ opacity: showBoot ? 0 : 1, scale: showBoot ? 0.985 : 1, y: showBoot ? 8 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative"
      >
        <TopBar />
        <section className="relative h-[calc(100vh-2rem)] pt-16">
          <WindowManager />
        </section>
        <Dock />
      </motion.div>
    </main>
  );
}
