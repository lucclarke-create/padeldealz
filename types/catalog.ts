export type ProductCategory = "racket" | "shoes" | "balls" | "bag" | "accessories";

export type StockStatus = "in_stock" | "limited" | "out_of_stock";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  /** Neutral placeholder path until real product photos exist. */
  image: string;
  specs: Record<string, string>;
};

export type Shop = {
  id: string;
  name: string;
  country: string;
  rating: number;
  reviewCount: number;
  trustLabel?: string;
};

export type Offer = {
  id: string;
  productId: string;
  shopId: string;
  price: number;
  shippingCost: number;
  currency: "EUR";
  stockStatus: StockStatus;
  deliveryEstimate: string;
  discountCode?: string;
  url: string;
  lastUpdated: string;
};

export type PopularDeal = {
  product: Product;
  shop: Shop;
  offer: Offer;
  totalPrice: number;
};

export type OfferView = {
  offer: Offer;
  shop: Shop;
  totalPrice: number;
  isBest: boolean;
};
