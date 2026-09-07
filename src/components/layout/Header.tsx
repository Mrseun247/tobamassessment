"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Tobams Group home">
          <Image src="/images/logo-mark.svg" alt="" width={36} height={36} priority />
          <span className="text-sm font-bold tracking-wide text-maroon-900">
            TOBAMS GROUP
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={`pb-1 transition-colors hover:text-brand-purple ${
                    link.active
                      ? "border-b-2 border-maroon-900 font-semibold text-maroon-900"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#consultation" variant="outline-purple">
            Book a Consultation
          </Button>
          <Button href="#assessment" variant="solid-rose">
            Take Assessment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-maroon-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-neutral-100 px-4 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-4 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-3 py-2.5 transition-colors hover:bg-pink-tint hover:text-brand-purple ${
                    link.active ? "font-semibold text-maroon-900" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Button href="#consultation" variant="outline-purple" className="w-full">
              Book a Consultation
            </Button>
            <Button href="#assessment" variant="solid-rose" className="w-full">
              Take Assessment
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
