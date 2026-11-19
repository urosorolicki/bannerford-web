type SymbolName = "tree" | "grain" | "hammer" | "saw" | "box" | "house" | "down" | "journal"

const paths: Record<SymbolName, React.ReactNode> = {
  tree: <><path d="M12 3 6 11h3l-5 7h16l-5-7h3L12 3Z"/><path d="M12 18v4"/></>,
  grain: <><path d="M12 22V6m0 12C7 18 5 15 5 12c4 0 7 2 7 6Zm0-4c0-4 3-6 7-6 0 4-3 6-7 6Zm0-4C8 10 6 7 6 4c4 0 6 3 6 6Zm0-3c0-3 2-5 5-5 0 3-2 5-5 5Z"/></>,
  hammer: <><path d="m13 11-8 9-2-2 8-9m-2-2 4-4 7 1 1 3-4 1-3 5-5-6Z"/></>,
  saw: <><path d="m5 16 10-11 4 4-10 11-4-4Zm12-9 2-3 3 3-3 2M6 15l2 2m1-5 2 2m1-5 2 2"/></>,
  box: <><path d="M4 7h16v13H4zM4 7l4-4h8l4 4M9 7v5h6V7"/></>,
  house: <><path d="m3 11 9-8 9 8M5 10v10h14V10m-9 10v-6h4v6"/></>,
  down: <path d="M12 4v15m-6-6 6 6 6-6"/>,
  journal: <><path d="M5 3h13a1 1 0 0 1 1 1v16H7a2 2 0 0 1-2-2V3Zm0 14h14M9 7h6m-6 4h6"/></>,
}

export function Symbol({ name, size = 24 }: { name: SymbolName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}
