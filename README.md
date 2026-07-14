# zorich-lab

A personal laboratory for UI Engineering and Design Systems.

**Live:** [elenazorich.dev](https://elenazorich.dev) (coming soon — staging at zorich-lab.vercel.app)  
**Design System:** elenazorich.dev/ui

## What's here

| Path | Purpose |
|---|---|
| `apps/web` | Portfolio site — Next.js 15 |
| `packages/ui` | Shared component library |
| `packages/tokens` | Design tokens |
| `docs/` | Architecture decisions, learning notes, principles |

## Running locally

```bash
pnpm install
pnpm dev
```

## Coding from a phone or tablet

GitHub is the source of truth for moving work between devices. Commit and push
before switching devices, and pull the latest branch before resuming locally.

### Hands-on editing with GitHub Codespaces

1. Open this repository on GitHub from the mobile browser.
2. Choose **Code → Codespaces → Create codespace on the current branch**.
3. Let the development container finish `pnpm install`.
4. Run either the site or the playground:

   ```bash
   pnpm --filter @zorich-lab/web dev
   pnpm --filter @zorich-lab/playground dev
   ```

5. Open the forwarded port when Codespaces shows its notification.
6. Commit and push the work before returning to another environment.

Port 3000 is configured for the Next.js app and port 5173 for the Vite
playground. A tablet with a hardware keyboard provides the best mobile editing
experience.

### Delegating work to Codex Cloud

Connect this GitHub repository in Codex, select the branch containing the latest
work, and start a cloud task. Codex checks out that branch in an independent
container, follows `AGENTS.md`, runs the relevant checks, and returns a diff that
can be reviewed or turned into a pull request.

### Controlling the laptop with Codex Remote

Codex Remote in the ChatGPT mobile app can start or continue tasks on the
desktop host and can show diffs, command output, and approval requests. The host
computer must remain awake, online, signed in, and running the ChatGPT desktop
app. Use Codespaces or Codex Cloud when the laptop will be unavailable.

## Docs

- [Project Vision](docs/project-vision.md)
- [Specification](docs/specification.md)
- [Architecture Decisions](docs/architecture/decisions/)
- [Design System Principles](docs/design-system/principles.md)
- [React Patterns](docs/react-learning/patterns.md)
