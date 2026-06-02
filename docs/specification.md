# Specification

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Components | Radix UI primitives |
| Monorepo | Turborepo + pnpm workspaces |
| Content | MDX |
| Deployment | Vercel |
| Domain | elenazorich.dev (zorich-lab.vercel.app for now) |

No CMS, no database in Phase 1.

## Repository structure

```
zorich-lab/
├── apps/
│   └── web/                  # Main site — elenazorich.dev
├── packages/
│   ├── ui/                   # Component library
│   │   └── src/
│   │       ├── components/
│   │       │   └── Button/
│   │       │       ├── Button.tsx
│   │       │       └── index.ts
│   │       └── index.ts
│   ├── tokens/               # Design tokens
│   │   └── src/
│   │       ├── colors.ts
│   │       ├── spacing.ts
│   │       ├── typography.ts
│   │       └── index.ts
│   └── tsconfig/             # Shared TypeScript config
├── docs/
├── turbo.json
└── package.json
```

## Phase 1 — Month 1

### Week 1: Foundation
- Init monorepo (Turborepo + pnpm)
- Next.js 15 app with TypeScript strict
- Tailwind v4 setup
- ESLint + Prettier
- Deploy empty app to Vercel
- Write ADR-001

### Week 2: Tokens + first component
- Design tokens: colors, spacing, typography as CSS variables
- Button component — variants (primary, secondary, ghost), sizes, states (hover, disabled, loading)
- Teaches: props, TypeScript generics, compound variants with CVA

### Week 3: Two more components
- Input — controlled vs uncontrolled, ref forwarding, error state
- Card — composition pattern, slot-based API
- Teaches: forwardRef, children patterns, TypeScript interfaces

### Week 4: Design system page + portfolio shell
- `/ui` page showing all components with usage examples
- Home page shell
- Navigation component
- Teaches: MDX, Next.js routing, layout patterns

## Component roadmap (Month 1 scope)

| Component | React concept |
|---|---|
| Button | Props, variants, CVA |
| Input | forwardRef, controlled/uncontrolled |
| Card | Composition, slots |
| Navigation | State, active routes |

## Each component must have

- TypeScript interface as source of truth
- All visual states shown (default, hover, focus, disabled, error)
- Accessibility: keyboard nav, aria labels
- Usage example in `/ui` page

## Pages (Month 1)

- `/` — Home (name, title, links)
- `/ui` — Design system showcase
- `/challenges` — TypeScript challenges and code snippets

## TypeScript challenges page

Each challenge is an MDX file with:
- Problem statement
- My solution with explanation
- What it tests (type narrowing, generics, utility types, async, etc.)
- Difficulty: easy / medium / hard

Stored in `apps/web/content/challenges/`.

### Month 1 challenge topics

| Topic | Interview relevance |
|---|---|
| Union types + type narrowing | Very common |
| Generics basics | Common |
| Utility types (Partial, Pick, Omit, Record) | Very common |
| async/await + error handling | Very common |
| Array methods with types (map, filter, reduce) | Common |
| Type guards | Common |
