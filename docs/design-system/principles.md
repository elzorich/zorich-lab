# Design System Principles

## Token-first

Every value that appears more than once becomes a token.
Colors, spacing, border radius, font sizes — defined once in `packages/tokens`, used everywhere.

```ts
// packages/tokens/src/colors.ts
export const colors = {
  primary: 'var(--color-primary)',
  muted: 'var(--color-muted)',
} as const
```

## Primitives before styled components

Build unstyled, accessible behavior first (via Radix UI).
Add Tailwind styles on top. Never the other way around.

Radix handles: focus trapping, keyboard navigation, aria roles.
You handle: colors, spacing, motion.

## Every component has states

Before a component is "done" it must handle:
- Default
- Hover
- Focus (keyboard-visible, never hidden)
- Disabled
- Error (where applicable)
- Loading (where applicable)

## Accessibility is not optional

- All interactive elements reachable by keyboard
- Focus ring always visible
- Correct aria roles and labels
- Test with Tab key before marking done

## Component checklist

- [ ] TypeScript interface defined
- [ ] All states handled visually
- [ ] Keyboard accessible
- [ ] Shown in `/ui` page with usage example
- [ ] One design decision documented
