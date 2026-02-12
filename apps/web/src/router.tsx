import { Link, Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

import { AppPage } from "./routes/AppPage";
import { LoginPage } from "./routes/LoginPage";

function RootLayout() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <header className="border-b border-border bg-surface/80">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              Sams Flags
            </p>
            <h1 className="font-sans text-lg font-semibold">Control Plane Scaffold</h1>
          </div>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              className="rounded-card px-3 py-1 hover:bg-accent hover:text-accent-contrast"
              to="/app"
            >
              App
            </Link>
            <Link
              className="rounded-card px-3 py-1 hover:bg-accent hover:text-accent-contrast"
              to="/login"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/app",
  component: AppPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: AppPage,
});

const routeTree = rootRoute.addChildren([indexRoute, appRoute, loginRoute]);

export function createAppRouter() {
  return createRouter({ routeTree });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createAppRouter>;
  }
}
