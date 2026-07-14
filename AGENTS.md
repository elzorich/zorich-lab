# Codex project guidance

This repository is a pnpm workspace managed with Turborepo.

## Setup

- Use the Node.js version provided by the development container.
- Enable Corepack and install dependencies with `pnpm install --frozen-lockfile`.
- Never commit secrets or local `.env*` files.

## Useful commands

- `pnpm dev` — run workspace development servers.
- `pnpm --filter @zorich-lab/web dev` — run the Next.js app on port 3000.
- `pnpm --filter @zorich-lab/playground dev` — run the Vite playground on port 5173.
- `pnpm build` — build all packages that define a build script.
- `pnpm lint` — lint all packages that define a lint script.

## Working conventions

- Preserve unrelated changes already present in the working tree.
- Prefer focused changes and report the validation commands that were run.
- Do not edit generated files unless the task specifically requires it.
