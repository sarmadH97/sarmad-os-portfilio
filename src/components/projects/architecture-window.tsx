export function ArchitectureWindow() {
  const nodes = [
    ["Client Apps", "Next.js + TypeScript interfaces"],
    ["Core APIs", "Node.js + .NET domain services"],
    ["Data Layer", "PostgreSQL + SQL Server with audit trails"],
    ["Cloud Runtime", "Azure/AWS hybrid deployment with CI/CD"],
  ] as const;

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-200">Reference architecture used for reliable product delivery and fintech-grade controls.</p>
      <div className="space-y-2">
        {nodes.map(([name, detail]) => (
          <div key={name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="text-xs text-slate-300">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
