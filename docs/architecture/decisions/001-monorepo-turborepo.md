# ADR-001: Monorepo with Turborepo

## Context

The project has two distinct outputs: a portfolio site and a component library.
These need to share design tokens and types without copy-pasting.

## Decision

Use a monorepo managed by Turborepo with pnpm workspaces.

- `apps/web` — the Next.js site
- `packages/ui` — the component library
- `packages/tokens` — design tokens shared by both

## Consequences

**Good:** shared types and tokens with no duplication. Components developed in isolation, consumed by the app. Scales naturally when Storybook is added later.

**Trade-off:** more initial setup than a single Next.js app. Worth it because the separation enforces good component boundaries from the start.
