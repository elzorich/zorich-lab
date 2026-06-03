# Specification

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Monorepo | Turborepo + pnpm workspaces |
| Playground | Vite + TypeScript |
| Deployment | Vercel |
| Domain | elenazorich.dev (zorich-lab.vercel.app for now) |

Not in scope yet: Radix UI (add when a real accessibility need appears), MDX (add when content workflow is needed), design tokens package (add before first shared component).

## Repository structure

```
zorich-lab/
├── apps/
│   └── web/                  # Main site — elenazorich.dev
├── packages/
│   ├── ui/                   # Shared React components (not yet created)
│   ├── tokens/               # Design tokens (not yet created)
│   └── tsconfig/             # Shared TypeScript config
├── playground/               # JS/TS exercises, course reinforcement
│   └── src/
│       ├── 01-types/         # Union types, type narrowing
│       ├── OOP/              # Classes, inheritance, encapsulation
│       └── dom/              # DOM experiments driven by playground exercises
├── docs/
├── turbo.json
└── package.json
```

## Learning path

**Phase 1: JS/TS fundamentals** (current)

The playground is the primary learning vehicle. Each course topic gets a folder and one or more exercises. The site (`apps/web`) grows alongside but is not the focus yet.

Course topics in progress:
- Types, unions, type narrowing
- OOP: objects, classes, inheritance, static, private/protected
- Advanced functions: decorators, call/apply/bind, arrow functions
- DOM: navigation, modification

**Phase 2: React fundamentals**

Only after JS/TS fundamentals are solid:
- Rendering, props, state
- Events, effects
- Component composition
- Fetch API with loading / error / empty / success states

**Phase 3: Components + portfolio**

Only after React fundamentals are comfortable:
- Design tokens (packages/tokens)
- Button, Input, Card components (packages/ui)
- `/ui` page in apps/web showing components
- `/challenges` page with TypeScript examples from the playground

## Current state

### Done
- Turborepo monorepo with pnpm workspaces
- Next.js 15 + TypeScript strict + Tailwind v4
- Shared tsconfig package
- Vite playground running at localhost:5173
- Playground: `01-types/union-types.ts` — discriminated union example
- Playground: `OOP/clock.ts` — Clock class with TypeScript types
- Playground: `OOP/extended-clock.ts` — ExtendedClock extending Clock, adds precision
- Placeholder home page (apps/web)
- ADR-001: Monorepo with Turborepo

### In progress
- Deploy to Vercel

### Next
- Continue JS/TS course topics in playground
- Fetch API exercise with loading, error, empty, success states
- First React component once fundamentals are solid

## Playground conventions

- One folder per course topic
- Folder names match the course module (e.g. `OOP/`, `01-types/`)
- Each file is a focused exercise, not a library
- `dom/experiment.ts` drives what renders in the playground stage

## Components (when the time comes)

Each component must have:
- TypeScript interface as source of truth
- All visual states (default, hover, focus, disabled, error)
- Keyboard accessibility
- Usage example in `/ui` page

## Pages (Phase 3)

- `/` — Home (name, title, links)
- `/ui` — Design system showcase
- `/challenges` — TypeScript exercises from the playground
