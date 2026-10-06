"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { getSearchHref } from "@/lib/catalog";

type SearchBarProps = {
  id?: string;
  size?: "compact" | "hero";
  defaultValue?: string;
  onSearch?: (query: string) => void;
};

export function SearchBar({
  id = "padeldealz-search",
  size = "compact",
  defaultValue = "",
  onSearch,
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);
  const isHero = size === "hero";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    onSearch?.(trimmed);

    const href = getSearchHref(trimmed);
    if (href) router.push(href);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`flex w-full min-w-0 items-stretch overflow-hidden rounded-md border border-line bg-white ${
        isHero ? "h-14 shadow-none" : "h-10"
      }`}
    >
      <label htmlFor={id} className="sr-only">
        Zoek een product
      </label>
      <input
        id={id}
        name="q"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Bijv. Bullpadel Vertex 05"
        autoComplete="off"
        className={`min-w-0 flex-1 bg-white px-3 text-navy outline-none placeholder:text-muted ${
          isHero ? "text-base" : "text-sm"
        }`}
      />
      <button
        type="submit"
        className={`shrink-0 bg-orange px-4 font-medium text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
          isHero ? "text-sm sm:px-6" : "text-sm"
        }`}
      >
        Zoeken
      </button>
    </form>
  );
}
