import { Sparkles } from "lucide-react";

export function AboutWindow() {
  return (
    <div className="space-y-4 text-sm text-slate-200">
      <p className="text-lg font-semibold text-white">Senior Product Engineer</p>
      <p>
        I build delightful, high-performance products by combining clean architecture, strong developer tooling,
        and thoughtful user experiences.
      </p>
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <p className="flex items-center gap-2 text-slate-100"><Sparkles className="h-4 w-4 text-cyan-300" /> Focus Areas</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-slate-300">
          <li>AI-assisted workflows</li>
          <li>Cloud-native systems</li>
          <li>Design systems + DX</li>
        </ul>
      </div>
    </div>
  );
}
