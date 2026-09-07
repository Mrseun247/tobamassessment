import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "solid-purple" | "solid-rose" | "outline-purple" | "solid-white";

const variantClasses: Record<ButtonVariant, string> = {
  "solid-purple":
    "bg-brand-purple text-white hover:bg-maroon-600 focus-visible:outline-brand-purple",
  "solid-rose": "bg-rose text-white hover:bg-rose-dark focus-visible:outline-rose",
  "outline-purple":
    "border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white focus-visible:outline-brand-purple",
  "solid-white": "bg-white text-brand-purple hover:bg-neutral-100 focus-visible:outline-white",
};

export default function Button({
  href,
  children,
  variant = "solid-purple",
  className = "",
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M6 14 14 6M14 6H8M14 6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
    </Link>
  );
}
