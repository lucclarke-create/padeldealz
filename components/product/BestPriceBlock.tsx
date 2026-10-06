import { DealCta } from "@/components/comparison/DealCta";
import { formatEuro } from "@/lib/format/currency";
import { isOfferAvailable } from "@/lib/catalog";
import type { OfferView } from "@/types/catalog";

type BestPriceBlockProps = {
  offerCount: number;
  best?: OfferView;
};

export function BestPriceBlock({ offerCount, best }: BestPriceBlockProps) {
  return (
    <aside className="border border-line bg-white p-6">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Beste deal vanaf</p>
      {best ? (
        <>
          <p className="mt-3 text-4xl font-semibold tracking-tight tabular-nums">
            {formatEuro(best.totalPrice)}
          </p>
          <p className="mt-1 text-sm text-muted">incl. verzending · {best.shop.name}</p>
          <p className="mt-4 text-sm text-navy">
            {offerCount} {offerCount === 1 ? "aanbieding gevonden" : "aanbiedingen gevonden"}
          </p>
          <div className="mt-5">
            <DealCta
              href={best.offer.url}
              external
              disabled={!isOfferAvailable(best.offer)}
              className="w-full sm:w-auto"
            />
          </div>
        </>
      ) : (
        <p className="mt-3 text-sm text-muted">Geen beschikbare aanbieding in dit prototype.</p>
      )}
      <p className="mt-5 text-xs leading-5 text-muted">
        Prototype — prijzen en aanbiedingen zijn fictief.
      </p>
    </aside>
  );
}
