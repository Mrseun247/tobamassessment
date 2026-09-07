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
        <Link href="/" className="flex items-center shrink-0" aria-label="Tobams Group home">
          <Image src="/images/logo.png" alt="Tobams Group" width={132} height={43} priority />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={`flex items-center gap-1 pb-1 transition-colors hover:text-brand-purple ${
                    link.active
                      ? "border-b-2 border-brand-purple font-semibold text-brand-purple"
                      : ""
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M5.2 7.2a1 1 0 0 1 1.4 0L10 10.6l3.4-3.4a1 1 0 1 1 1.4 1.4l-4.1 4.1a1 1 0 0 1-1.4 0L5.2 8.6a1 1 0 0 1 0-1.4Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#account"
            className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-maroon-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 1.5c-3 0-6.5 1.5-6.5 4.25V17h13v-1.25c0-2.75-3.5-4.25-6.5-4.25Z" />
            </svg>
            Account
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5.2 7.2a1 1 0 0 1 1.4 0L10 10.6l3.4-3.4a1 1 0 1 1 1.4 1.4l-4.1 4.1a1 1 0 0 1-1.4 0L5.2 8.6a1 1 0 0 1 0-1.4Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
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
                  className={`flex items-center justify-between rounded-md px-3 py-2.5 transition-colors hover:bg-pink-tint hover:text-brand-purple ${
                    link.active ? "font-semibold text-brand-purple" : ""
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M5.2 7.2a1 1 0 0 1 1.4 0L10 10.6l3.4-3.4a1 1 0 1 1 1.4 1.4l-4.1 4.1a1 1 0 0 1-1.4 0L5.2 8.6a1 1 0 0 1 0-1.4Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="#account"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-maroon-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 1.5c-3 0-6.5 1.5-6.5 4.25V17h13v-1.25c0-2.75-3.5-4.25-6.5-4.25Z" />
              </svg>
              Account
            </Link>
            <Button href="#assessment" variant="solid-rose" className="w-full">
              Take Assessment
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
