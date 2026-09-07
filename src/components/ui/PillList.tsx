type PillIcon = "check" | "star";

function Icon({ icon }: { icon: PillIcon }) {
  if (icon === "check") {
    return (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L10 1.5z" />
    </svg>
  );
}

export default function PillList({
  items,
  icon,
  columns = 2,
}: {
  items: string[];
  icon: PillIcon;
  columns?: 1 | 2;
}) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-white/15"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose text-white">
            <Icon icon={icon} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
