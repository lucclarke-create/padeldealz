import { formatReviewCount } from "@/lib/format/currency";
import { getCountryDisplay } from "@/lib/format/country";
import type { Shop } from "@/types/catalog";
import { RatingStars } from "@/components/ui/RatingStars";

export function ShopRating({ shop }: { shop: Shop }) {
  const country = getCountryDisplay(shop.country);

  return (
    <div className="space-y-1">
      <p className="font-medium text-navy">{shop.name}</p>
      <p className="text-xs text-muted">
        {country.flag ? `${country.flag} ` : ""}
        {country.name}
      </p>
    </div>
  );
}

export function TrustBlock({ shop, uid }: { shop: Shop; uid: string }) {
  return (
    <div className="space-y-1">
      <RatingStars rating={shop.rating} uid={uid} />
      <p className="text-sm font-medium tabular-nums">{shop.rating.toFixed(1)}</p>
      <p className="text-xs text-muted">{formatReviewCount(shop.reviewCount)} reviews</p>
    </div>
  );
}

export function DiscountBadge({ code }: { code?: string }) {
  if (!code) {
    return <span className="text-muted">—</span>;
  }

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <span className="text-[10px] font-medium uppercase tracking-wide text-muted">
        Kortingscode
      </span>
      <span className="border border-orange/40 bg-white px-2 py-0.5 text-xs font-medium tracking-wide text-navy">
        {code}
      </span>
    </span>
  );
}

export function BestDealBadge() {
  return (
    <span className="inline-flex items-center border border-orange px-2 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-orange">
      BESTE DEAL
    </span>
  );
}
