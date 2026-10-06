import Link from "next/link";
import { searchProducts } from "@/lib/catalog";

type SearchFeedbackProps = {
  query: string;
};

export function SearchFeedback({ query }: SearchFeedbackProps) {
  if (!query) return null;

  const results = searchProducts(query);

  return (
    <section className="border-b border-line bg-line/40" aria-live="polite">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {results.length === 0 ? (
          <p className="text-sm text-muted">
            Geen producten gevonden voor “{query}”. Probeer een modelnaam, zoals
            Bullpadel Vertex 05.
          </p>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted">
              {results.length} {results.length === 1 ? "resultaat" : "resultaten"} voor “
              {query}”
            </p>
            <ul className="flex flex-col gap-2">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.slug}`}
                    className="text-sm font-medium text-navy outline-none hover:text-orange focus-visible:ring-2 focus-visible:ring-orange"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
