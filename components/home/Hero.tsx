import { SearchBar } from "@/components/search/SearchBar";

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-wide text-orange">PadelDealz</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Vind jouw deal.
          </h1>
          <p className="max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Je weet al welk product je wilt. Wij zoeken bij padelshops naar de beste
            totale prijs — inclusief verzending.
          </p>
        </div>

        <div className="max-w-2xl">
          <SearchBar id="padeldealz-search-hero" size="hero" />
        </div>

        <p className="text-sm tracking-wide text-white/55">Vergelijk. Vertrouw. Bespaar.</p>
      </div>
    </section>
  );
}
