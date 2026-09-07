export default function BulletList({
  items,
  columns = 1,
  toneClassName = "text-brand-purple",
}: {
  items: string[];
  columns?: 1 | 2;
  toneClassName?: string;
}) {
  return (
    <ul
      className={`grid gap-x-8 gap-y-3 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
          <span className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 ${toneClassName} bg-current`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
