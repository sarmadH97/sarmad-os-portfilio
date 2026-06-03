export function AIWorkflowWindow() {
  const steps = [
    "Product signal intake",
    "Context enrichment",
    "Model-assisted drafting",
    "Human review + policy checks",
    "CI deployment automation",
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-200">A practical AI delivery loop focused on speed, quality, and governance.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {steps.map((step, i) => (
          <article key={step} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-cyan-200">Stage {i + 1}</p>
            <p className="text-sm text-slate-100">{step}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
