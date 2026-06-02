# React Patterns

Reference for patterns used in this project. Updated as new ones appear.

---

## 1. Props + Variants (Button)

Use `cva` (Class Variance Authority) to manage component variants cleanly.

```tsx
const button = cva('base-classes', {
  variants: {
    variant: {
      primary: 'bg-black text-white',
      ghost: 'bg-transparent border',
    },
    size: {
      sm: 'text-sm px-3 py-1',
      md: 'text-base px-4 py-2',
    },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})
```

**Angular analogy:** like `@Input()` with an enum, but composable.

---

## 2. forwardRef (Input)

Lets a parent component access the DOM node inside your component.
Required for forms, focus management, and third-party libraries.

```tsx
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <input ref={ref} {...props} />
  )
)
Input.displayName = 'Input'
```

**Angular analogy:** like exposing a `@ViewChild` from inside a child component.

---

## 3. Composition / Slot pattern (Card)

Instead of controlling everything through props, let the parent decide the structure.

```tsx
// Rigid — hard to customise
<Card title="Hello" footer="OK" />

// Composable — flexible
<Card>
  <Card.Header>Hello</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>OK</Card.Footer>
</Card>
```

**Angular analogy:** like `<ng-content select="[slot-name]">`.

---

## 4. Custom Hook as Service (coming in Month 2)

Extract stateful logic into a hook. The component stays presentation-only.

```tsx
function useGitHubProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  // fetch logic here
  return { projects, loading }
}
```

**Angular analogy:** like an injectable Service, but a plain function.

---

## Angular → React quick reference

| Angular | React |
|---|---|
| `@Component` | Function component |
| `@Input()` | Props |
| `@Output()` / EventEmitter | Callback prop (`onChange`) |
| `ngOnInit` | `useEffect(() => {}, [])` |
| `ngOnDestroy` | Return function inside `useEffect` |
| `*ngIf` | `{condition && <Component />}` |
| `*ngFor` | `{items.map(item => <Item />)}` |
| Service + DI | Custom hook |
| `ChangeDetectionStrategy.OnPush` | `React.memo` |
