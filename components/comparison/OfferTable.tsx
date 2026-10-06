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

type OfferTableProps = {
  offers: OfferView[];
};

export function OfferTable({ offers }: OfferTableProps) {
  return (
    <div className="hidden overflow-hidden border border-line lg:block">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-white text-xs font-medium uppercase tracking-wide text-muted">
          <tr className="border-b border-line">
            <th className="px-4 py-3 font-medium">Webshop</th>
            <th className="px-4 py-3 font-medium">Prijs</th>
            <th className="px-4 py-3 font-medium">Verzending</th>
            <th className="px-4 py-3 font-medium">Totaal</th>
            <th className="px-4 py-3 font-medium">Voorraad</th>
            <th className="px-4 py-3 font-medium">Levertijd</th>
            <th className="px-4 py-3 font-medium">Betrouwbaarheid</th>
            <th className="px-4 py-3 font-medium">Kortingscode</th>
            <th className="px-4 py-3 font-medium">
              <span className="sr-only">Actie</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((view) => (
            <tr
              key={view.offer.id}
              className={`border-b border-line last:border-b-0 ${
                view.isBest ? "bg-line/50" : "bg-white"
              }`}
            >
              <td className={`px-4 py-5 align-top ${view.isBest ? "border-l-2 border-l-orange" : "border-l-2 border-l-transparent"}`}>
                <div className="space-y-2">
                  {view.isBest ? <BestDealBadge /> : null}
                  <ShopRating shop={view.shop} />
                </div>
              </td>
              <td className="px-4 py-5 align-top tabular-nums text-muted">
                {formatEuro(view.offer.price)}
              </td>
              <td className="px-4 py-5 align-top">{formatShipping(view.offer.shippingCost)}</td>
              <td className="px-4 py-5 align-top text-base font-semibold tabular-nums">
                {formatEuro(view.totalPrice)}
              </td>
              <td className={`px-4 py-5 align-top ${getStockClassName(view.offer.stockStatus)}`}>
                {getStockLabel(view.offer.stockStatus)}
              </td>
              <td className="px-4 py-5 align-top text-muted">{view.offer.deliveryEstimate}</td>
              <td className="px-4 py-5 align-top">
                <TrustBlock shop={view.shop} uid={`${view.offer.id}-table`} />
              </td>
              <td className="px-4 py-5 align-top">
                <DiscountBadge code={view.offer.discountCode} />
              </td>
              <td className="px-4 py-5 align-top">
                <DealCta
                  href={view.offer.url}
                  external
                  disabled={!isOfferAvailable(view.offer)}
                  className="whitespace-nowrap"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
