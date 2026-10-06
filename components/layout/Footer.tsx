import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const footerLinks = [
  { href: "/#deals", label: "Deals" },
  { href: "/#webshops", label: "Webshops" },
  { href: "/#hoe-het-werkt", label: "Hoe het werkt" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <div className="text-white [&_span]:text-white [&_svg]:text-white">
            <Logo size="header" />
          </div>
          <p className="max-w-md text-sm leading-6 text-white/70">
            Vind jouw deal. Vergelijk. Vertrouw. Bespaar. PadelDealz zoekt dezelfde
            producten bij meerdere padelshops, zodat jij de beste totale prijs ziet.
          </p>
        </div>

        <nav className="flex flex-col gap-3 md:items-end" aria-label="Footer">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs leading-5 text-white/50 sm:px-6">
          Prijzen, voorraad, levertijden en webshops in dit prototype zijn ter
          illustratie. Er zijn nog geen echte productfeeds of affiliate-links.
        </p>
      </div>
    </footer>
  );
}
