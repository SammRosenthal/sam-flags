# Sams Flags

Production-shaped TypeScript learning project for feature flags and analytics.

## Stack scaffolded in M1-001

- pnpm workspaces + Turborepo
- React + Vite + TanStack Router/Query (`apps/web`)
- Fastify API (`apps/api`)
- Token-first design package (`packages/ui`) with Tailwind CSS v4 bridge in web app
- Shared package boundaries for core/shared/react SDK logic
- Oxc stack for linting/formatting (`oxlint` + `oxfmt`)

## Workspace layout

- `apps/web` - dashboard SPA
- `apps/api` - backend API service
- `packages/ui` - cross-platform design tokens
- `packages/shared` - shared contracts and schemas
- `packages/core` - evaluator domain logic
- `packages/react` - React SDK surface
- `packages/config-typescript` - shared TypeScript configs

## First run

```bash
pnpm install
pnpm fmt:check
pnpm lint
pnpm typecheck
pnpm test
pnpm dev
```

Default local ports:

- Web: `http://localhost:3000`
- API: `http://localhost:4000`

## Session resume workflow

1. Read `AGENTS.md`.
2. Read `local-docs/plan/sams-flags-milestone-1.md`.
3. Claim exactly one task in the M1 tracker.
4. On stop, write a handoff entry with changed files and verification commands.
