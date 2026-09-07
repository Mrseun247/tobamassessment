function BoltIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.3 1.2 3.5 11.3a.6.6 0 0 0 .5 1h4.6l-1.2 6.5a.6.6 0 0 0 1.1.4l7.8-10.1a.6.6 0 0 0-.5-1h-4.6l1.2-6.5a.6.6 0 0 0-1.1-.4Z" />
    </svg>
  );
}

export default function BulletList({
  items,
  columns = 1,
  variant = "bolt",
  toneClassName = "text-brand-purple",
}: {
  items: string[];
  columns?: 1 | 2 | 3;
  variant?: "bolt" | "dot";
  toneClassName?: string;
}) {
  const columnsClass = columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "grid-cols-1";

  return (
    <ul className={`grid gap-x-6 gap-y-3 ${columnsClass}`}>
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-2.5 text-sm text-neutral-700">
          {variant === "bolt" ? (
            <BoltIcon className={`mt-0.5 h-4 w-4 shrink-0 ${toneClassName}`} />
          ) : (
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${toneClassName} bg-current`} aria-hidden="true" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
