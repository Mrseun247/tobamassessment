import type { ReactNode } from "react";

export default function Badge({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "bg-white/10 text-white ring-1 ring-inset ring-white/20"
      : "bg-white text-brand-purple ring-1 ring-inset ring-brand-purple/20";

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
