import { DealCta } from "@/components/comparison/DealCta";
import {
  BestDealBadge,
  DiscountBadge,
  ShopRating,
  TrustBlock,
} from "@/components/comparison/OfferMeta";
import { formatEuro, formatShipping } from "@/lib/format/currency";
import { getStockClassName, getStockLabel } from "@/lib/format/labels";
import { isOfferAvailable } from "@/lib/catalog";
import type { OfferView } from "@/types/catalog";

type OfferCardProps = {
  view: OfferView;
};

export function OfferCard({ view }: OfferCardProps) {
  const { offer, shop, totalPrice, isBest } = view;

  return (
    <article
      className={`border bg-white p-5 ${
        isBest ? "border-orange/50" : "border-line"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <ShopRating shop={shop} />
        {isBest ? <BestDealBadge /> : null}
      </div>

      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-muted">Prijs</dt>
          <dd className="tabular-nums text-muted">{formatEuro(offer.price)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-muted">Verzending</dt>
          <dd>{formatShipping(offer.shippingCost)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t border-line pt-3">
          <dt className="font-medium">Totaal</dt>
          <dd className="text-lg font-semibold tabular-nums">{formatEuro(totalPrice)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-muted">Voorraad</dt>
          <dd className={getStockClassName(offer.stockStatus)}>{getStockLabel(offer.stockStatus)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-muted">Levertijd</dt>
          <dd>{offer.deliveryEstimate}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted">Betrouwbaarheid</dt>
          <dd className="text-right">
            <TrustBlock shop={shop} uid={`${offer.id}-card`} />
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted">Kortingscode</dt>
          <dd>
            <DiscountBadge code={offer.discountCode} />
          </dd>
        </div>
      </dl>

      <div className="mt-5">
        <DealCta
          href={offer.url}
          external
          disabled={!isOfferAvailable(offer)}
          className="w-full"
        />
      </div>
    </article>
  );
}
