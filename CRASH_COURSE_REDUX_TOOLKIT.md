Crash Course: Redux Toolkit

This repository already contains a working example that fetches data from the OpenSea API.

What I added in this change set:

- `src/features/counterSlice.ts` — a minimal counter slice using `createSlice`.
- `src/components/CounterExample.tsx` — a simple React component that uses `useSelector` and `useDispatch` to interact with the counter slice.
- Updated `src/app/store.ts` to include the `counter` reducer.

Quick usage:

1. Import and render the `CounterExample` component somewhere in your app (for example, in `App.tsx`):

```tsx
import CounterExample from './components/CounterExample';

function App() {
  return (
    <div>
      <CounterExample />
    </div>
  );
}
```

2. Run the app:

```bash
npm install
npm start
```

Notes and assumptions:
- The project uses TypeScript and React. I followed existing type patterns (`RootState` from `src/app/rootReducer` and `AppDispatch` from `src/app/store`).
- If you want, I can also wire the `CounterExample` into `App.tsx` for a ready-to-run demo.
