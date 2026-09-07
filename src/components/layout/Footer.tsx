import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/lib/content";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X (Twitter)", href: "https://x.com" },
];

const legalLinks = ["Terms and Conditions", "Privacy Policy", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="Tobams Group home">
              <Image src="/images/logo-mark.svg" alt="" width={32} height={32} />
              <span className="text-sm font-bold tracking-wide text-white">TOBAMS GROUP</span>
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
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span className="text-xs font-semibold">{social.label.charAt(0)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
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

          <div>
            <h3 className="text-sm font-semibold text-white">Contact Information</h3>
            <address className="mt-4 flex flex-col gap-3 text-sm text-neutral-400 not-italic">
              <p>
                <span className="block text-white">Registered Offices</span>
                United Kingdom: 27451196 Registered by Company House Vine Cottage, 21b North
                Street, Romford, Essex, United Kingdom, RM1 4QA
                <br />
                Nigeria: RC 1048722 Registered by the Corporate Affairs Commission, 4, Musa Close,
                Anguwar Rimi
              </p>
              <a href="mailto:thebams@tobamsgroup.com" className="hover:text-white">
                thebams@tobamsgroup.com
              </a>
              <a href="tel:+447896607149" className="hover:text-white">
                +44 7896607149
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <p>Copyright &copy; Tobams Group. All rights reserved.</p>
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
