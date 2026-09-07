function BoltIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.3 1.2 3.5 11.3a.6.6 0 0 0 .5 1h4.6l-1.2 6.5a.6.6 0 0 0 1.1.4l7.8-10.1a.6.6 0 0 0-.5-1h-4.6l1.2-6.5a.6.6 0 0 0-1.1-.4Z" />
    </svg>
  );
}

export default function PillList({
  items,
  variant,
  columns = 2,
}: {
  items: string[];
  variant: "card" | "row";
  columns?: 1 | 2;
}) {
  if (variant === "row") {
    return (
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-lg bg-white/15 px-5 py-3.5 text-sm font-medium text-white"
          >
            <BoltIcon className="h-4 w-4 shrink-0 text-white" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex min-w-0 items-center gap-2.5 rounded-xl bg-white px-4 py-3.5 text-sm font-medium text-neutral-700"
        >
          <BoltIcon className="h-4 w-4 shrink-0 text-brand-purple" />
          {item}
        </li>
      ))}
    </ul>
  );
}
