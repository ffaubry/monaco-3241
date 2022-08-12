# Monaco 0.34.0 issues

## Getting Started

```bash
npm install
npm start
```

A new developement server will serve the app under localhost:3333.

Hover on the error in the script and notice that an an overflow widget will show details about the error.

## How to reproduce issue [#3241](https://github.com/microsoft/monaco-editor/issues/3241)

In the file src/components/editor-container.tsx, uncomment the line 7 `shadow: true`.

```typescript
@Component({
  tag: 'editor-container',
  styleUrl: 'editor-container.css',
  // Comment or uncomment the line below to reproduce the issue 3241
  // shadow: true,
})
```

The component will rebuild and leverage the shadow dom.

You will notice that the on-error overflow widget will stop showing when hovering on the error in the script.

