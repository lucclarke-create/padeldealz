import { DealCta } from "@/components/comparison/DealCta";
import { getPopularDeals } from "@/lib/catalog";
import { formatEuro } from "@/lib/format/currency";

export function PopularDeals() {
  const deals = getPopularDeals(8);

  return (
    <section id="deals" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Populaire deals</h2>
            <p className="mt-2 text-sm text-muted">
              Laagste totaalprijs per product, op basis van dummy-data.
            </p>
          </div>
        </div>

        {deals.length === 0 ? (
          <p className="text-sm text-muted">Er zijn nog geen deals om te tonen.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => (
              <li
                key={deal.product.id}
                className="flex flex-col border border-line bg-white p-4"
              >
                <div className="relative mb-4 aspect-square overflow-hidden bg-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={deal.product.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {deal.product.brand}
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{deal.product.name}</h3>
                <p className="mt-3 text-xl font-semibold">
                  vanaf {formatEuro(deal.totalPrice)}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {deal.shop.name} · {deal.shop.country} · incl. verzending
                </p>
                <div className="mt-5">
                  <DealCta href={`/product/${deal.product.slug}`} className="w-full" />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
