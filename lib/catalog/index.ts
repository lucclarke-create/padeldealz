import { offers } from "@/lib/data/offers";
import { products } from "@/lib/data/products";
import { shops } from "@/lib/data/shops";
import type { Offer, OfferView, PopularDeal, Product, Shop } from "@/types/catalog";

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getShopById(shopId: string): Shop | undefined {
  return shops.find((shop) => shop.id === shopId);
}

export function getOfferTotal(offer: Offer): number {
  return offer.price + offer.shippingCost;
}

export function isOfferAvailable(offer: Offer): boolean {
  return offer.stockStatus !== "out_of_stock";
}

export function getOffersForProduct(productId: string): Offer[] {
  return offers
    .filter((offer) => offer.productId === productId)
    .slice()
    .sort((a, b) => {
      const availability = Number(isOfferAvailable(b)) - Number(isOfferAvailable(a));
      if (availability !== 0) return availability;
      return getOfferTotal(a) - getOfferTotal(b);
    });
}

export function searchProducts(query: string): Product[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return products.filter((product) => {
    const haystack = `${product.name} ${product.brand} ${product.slug}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

export function getBestOfferForProduct(productId: string): Offer | undefined {
  return getOffersForProduct(productId).find(isOfferAvailable);
}

export function getOfferViewsForProduct(productId: string): OfferView[] {
  const bestId = getBestOfferForProduct(productId)?.id;

  return getOffersForProduct(productId).flatMap((offer) => {
    const shop = getShopById(offer.shopId);
    if (!shop) return [];

    return [
      {
        offer,
        shop,
        totalPrice: getOfferTotal(offer),
        isBest: offer.id === bestId,
      },
    ];
  });
}

export function getSearchHref(query: string): string | null {
  const normalized = query.trim();
  if (!normalized) return null;

  const results = searchProducts(normalized);
  if (results.length === 1) {
    return `/product/${results[0].slug}`;
  }

  return `/?q=${encodeURIComponent(normalized)}`;
}

export function getPopularDeals(limit = 8): PopularDeal[] {
  const deals: PopularDeal[] = [];

  for (const product of products) {
    const offer = getBestOfferForProduct(product.id);
    if (!offer) continue;

    const shop = getShopById(offer.shopId);
    if (!shop) continue;

    deals.push({
      product,
      shop,
      offer,
      totalPrice: getOfferTotal(offer),
    });
  }

  return deals.sort((a, b) => a.totalPrice - b.totalPrice).slice(0, limit);
}
