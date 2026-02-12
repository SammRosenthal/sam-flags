# Sams Flags

Production-shaped TypeScript learning project for feature flags and analytics.

## Prerequisites

- Node.js 22 (project pins this in `.nvmrc`)
- pnpm 8.x
- GitHub repository uses protected `main`; develop on feature branches

Quick setup:

```bash
nvm install
nvm use
```

## Current stack

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

Create local env file:

```bash
cp .env.example .env
```

Google OAuth local setup details live in `local-docs/plan/sams-flags-google-oauth-local-setup.md`.

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

## Project roadmap

### Phase 0 - Foundation

- Lock flag rule semantics and event model v1
- Define SLOs for flag latency, ingest reliability, and dashboard freshness
- Finalize safety constraints (kill switch, fail-open SDK behavior, PII redaction)

### Phase 1 - MVP

- Tenant/project/environment model and API key management
- React client SDK first (`useFlag`, bootstrap defaults, local cache)
- Flag delivery API and minimal control plane UI
- Event ingest API and a basic near-real-time metrics dashboard

### Phase 2 - Reliability and operability

- Idempotent event ingestion with dedupe
- Queue-based processing with retries and DLQ
- Per-tenant quotas and rate limits
- Audit logs, baseline observability, and alerting

### Phase 3 - Scale architecture

- Partitioning and hot-tenant protections
- Cache strategy for flag config and hot queries
- Pre-aggregation for dashboard reads
- Replay/backfill support and SLO validation with load harnesses

### Phase 4 - Product depth

- Advanced targeting and segment support
- Funnel/retention/cohort analytics
- Multivariate flags and experiment readouts
- RBAC and governance controls

### Phase 5 - Long-term vision

- Progressive rollout approvals and automated rollback
- Advanced experiment analysis
- Near-real-time segmentation
- Multi-region readiness, DR, and integration/export workflows

Detailed planning docs live under `local-docs/plan/`.

## VS Code setup

- Recommended extension: `oxc.oxc-vscode` (checked in at `.vscode/extensions.json`)
- Workspace settings in `.vscode/settings.json` enable Oxc format and fix-on-save defaults
