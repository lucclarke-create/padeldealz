"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { SearchBar } from "@/components/search/SearchBar";

const navItems = [
  { href: "/#deals", label: "Deals" },
  { href: "/#webshops", label: "Webshops" },
  { href: "/#hoe-het-werkt", label: "Hoe het werkt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Logo size="header" />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hoofd">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-navy/80 outline-none transition-colors hover:text-navy focus-visible:ring-2 focus-visible:ring-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden max-w-md flex-1 md:block">
          <SearchBar id="padeldealz-search-header" size="compact" />
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center border border-line text-navy outline-none focus-visible:ring-2 focus-visible:ring-orange md:ml-0 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          <MenuIcon open={open} />
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white px-4 py-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobiel">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-sm text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 md:hidden">
            <SearchBar id="padeldealz-search-mobile" size="compact" />
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {open ? (
        <path d="M4 4 14 14M14 4 4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}
