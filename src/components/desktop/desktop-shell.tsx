import { Dock } from "@/components/dock/dock";
import { WindowManager } from "@/components/windows/window-manager";
import { TopBar } from "./topbar";
import { WallpaperBackground } from "./wallpaper";

export function DesktopShell() {
  return (
    <main className="relative min-h-screen overflow-hidden p-3">
      <WallpaperBackground />
      <TopBar />
      <section className="relative h-[calc(100vh-2rem)] pt-16">
        <div className="hidden h-full md:block">
          <WindowManager />
        </div>
        <div className="md:hidden space-y-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">About and terminal apps are available in the dock.</div>
        </div>
      </section>
      <Dock />
    </main>
  );
}
