export function LoginPage() {
  return (
    <section className="space-y-4 rounded-card border border-border bg-surface p-6 shadow-card">
      <h2 className="text-2xl font-semibold">Sign in</h2>
      <p className="text-sm text-text-muted">
        Google OAuth wiring is scheduled for Milestone 1 tasks M1-002 and M1-004.
      </p>
      <button
        className="inline-flex items-center rounded-card bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast"
        type="button"
      >
        Continue with Google
      </button>
    </section>
  );
}
