import type { ProductCategory, StockStatus } from "@/types/catalog";

export function getCategoryLabel(category: ProductCategory): string {
  const labels: Record<ProductCategory, string> = {
    racket: "Rackets",
    shoes: "Schoenen",
    balls: "Ballen",
    bag: "Tassen",
    accessories: "Accessoires",
  };

  return labels[category];
}

export function getStockLabel(status: StockStatus): string {
  const labels: Record<StockStatus, string> = {
    in_stock: "Op voorraad",
    limited: "Beperkte voorraad",
    out_of_stock: "Uitverkocht",
  };

  return labels[status];
}

export function getStockClassName(status: StockStatus): string {
  const classes: Record<StockStatus, string> = {
    in_stock: "text-navy",
    limited: "text-orange",
    out_of_stock: "text-muted",
  };

  return classes[status];
}
