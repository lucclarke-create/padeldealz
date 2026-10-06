import { OfferCard } from "@/components/comparison/OfferCard";
import { OfferTable } from "@/components/comparison/OfferTable";
import type { OfferView } from "@/types/catalog";

export function OfferComparison({ offers }: { offers: OfferView[] }) {
  if (offers.length === 0) {
    return <p className="text-sm text-muted">Er zijn nog geen aanbiedingen voor dit product.</p>;
  }

  return (
    <>
      <OfferTable offers={offers} />
      <ul className="grid gap-4 lg:hidden">
        {offers.map((view) => (
          <li key={view.offer.id}>
            <OfferCard view={view} />
          </li>
        ))}
      </ul>
    </>
  );
}
