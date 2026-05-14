"use client";
import { useState } from "react";

const recs = [
  { name: "Product Lead", title: "Cross-functional collaborator", text: "Turns complex ideas into clean user-facing systems while preserving engineering rigor.", tags: "Product thinking · Collaboration" },
  { name: "Engineering Manager", title: "Architecture-first executor", text: "Combines autonomy with strong architecture instincts and consistently raises team standards.", tags: "Leadership · Architecture" },
  { name: "Senior Designer", title: "UX-focused technologist", text: "Bridges design and engineering with precision; quality and polish are always visible.", tags: "Frontend expertise · Problem solving" },
  { name: "AI Program Owner", title: "AI systems partner", text: "Understands practical AI workflows and integrates them in ways that create measurable impact.", tags: "AI/system thinking · Delivery" },
];

export function RecommendationsWindow() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return <div className="max-h-[350px] space-y-3 overflow-auto pr-1">{recs.map((r, i) => <article key={r.name + i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-300/60 to-violet-300/60" /><div><p className="font-medium text-white">{r.name}</p><p className="text-xs text-slate-400">{r.title}</p></div></div>
      <button className="text-xs text-cyan-200" onClick={() => setExpanded(expanded === r.name ? null : r.name)}>{expanded === r.name ? "Collapse" : "Expand"}</button>
    </div>
    <p className="text-sm text-slate-200 mt-2">{expanded === r.name ? r.text + " " + r.text : r.text}</p>
    <p className="text-xs text-slate-400 mt-2">{r.tags}</p>
  </article>)}</div>;
}
