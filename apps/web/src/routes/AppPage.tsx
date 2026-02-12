export function AppPage() {
  return (
    <section className="space-y-6">
      <div className="rounded-card border border-border bg-surface p-6 shadow-card">
        <h2 className="text-2xl font-semibold">Protected App Shell Placeholder</h2>
        <p className="mt-3 max-w-2xl text-sm text-text-muted">
          This route is where session and tenant-aware flag management screens will live in
          Milestone 1.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-card border border-border bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Auth</p>
          <p className="mt-2 text-sm">
            Google SSO and backend sessions start in tasks M1-002 through M1-004.
          </p>
        </article>
        <article className="rounded-card border border-border bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Flags</p>
          <p className="mt-2 text-sm">
            Thin boolean flag CRUD and evaluation loop lands in task M1-007.
          </p>
        </article>
      </div>
    </section>
  );
}
