import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/lib/content";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.4.46.6.24 1.1.56 1.6 1.06.5.5.82 1 1.06 1.6.24.6.4 1.3.46 2.4.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.06 1.1-.22 1.8-.46 2.4a4.3 4.3 0 0 1-1.06 1.6 4.3 4.3 0 0 1-1.6 1.06c-.6.24-1.3.4-2.4.46-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1.1-.06-1.8-.22-2.4-.46a4.3 4.3 0 0 1-1.6-1.06 4.3 4.3 0 0 1-1.06-1.6c-.24-.6-.4-1.3-.46-2.4C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.06-1.1.22-1.8.46-2.4.24-.6.56-1.1 1.06-1.6.5-.5 1-.82 1.6-1.06.6-.24 1.3-.4 2.4-.46C9 2.2 9.3 2.2 12 2.2Zm0 1.8c-2.65 0-2.96 0-4 .06-.9.04-1.4.19-1.72.32-.43.17-.74.37-1.07.7-.33.33-.53.64-.7 1.07-.13.32-.28.82-.32 1.72-.06 1.04-.06 1.35-.06 4s0 2.96.06 4c.04.9.19 1.4.32 1.72.17.43.37.74.7 1.07.33.33.64.53 1.07.7.32.13.82.28 1.72.32 1.04.06 1.35.06 4 .06s2.96 0 4-.06c.9-.04 1.4-.19 1.72-.32.43-.17.74-.37 1.07-.7.33-.33.53-.64.7-1.07.13-.32.28-.82.32-1.72.06-1.04.06-1.35.06-4s0-2.96-.06-4c-.04-.9-.19-1.4-.32-1.72a2.9 2.9 0 0 0-.7-1.07 2.9 2.9 0 0 0-1.07-.7c-.32-.13-.82-.28-1.72-.32-1.04-.06-1.35-.06-4-.06Zm0 3.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm4.36-2.02a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    path: "M18.9 3H22l-7.6 8.7L23 21h-6.6l-5.2-6.4L5.2 21H2l8.1-9.3L1.7 3h6.8l4.7 5.9L18.9 3Zm-1.15 16.1h1.7L7.35 4.8H5.53L17.75 19.1Z",
  },
];

const legalLinks = ["Terms and Conditions", "Privacy Policy", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <Link href="/" className="flex items-center" aria-label="Tobams Group home">
              <Image src="/images/logo.png" alt="Tobams Group" width={120} height={39} />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent
              development in Africa, specialising in talent acquisition, internships, and skill
              development with a global perspective.
            </p>
            <ul className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-maroon-900 hover:bg-rose hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="min-w-0">
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-neutral-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white">Contact Information</h3>
            <address className="mt-4 flex flex-col gap-3 text-sm text-neutral-400 not-italic">
              <p>
                <span className="block text-white">Registered Offices</span>
                <span className="text-rose">United Kingdom</span>
                <br />
                07451196 (Registered by Company House)
                <br />
                Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
              <p>
                <span className="text-rose">Nigeria</span>
                <br />
                RC 1048722 (Registered by the Corporate Affairs Commission)
                <br />
                4, Muaz Close, Angwar-Rimi
              </p>
              <a href="mailto:theteam@tobamsgroup.com" className="hover:text-white">
                theteam@tobamsgroup.com
              </a>
              <a href="tel:+447886600748" className="hover:text-white">
                +44 7886 600748
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <p>Copyright &copy; Tobams Group, 2024. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
