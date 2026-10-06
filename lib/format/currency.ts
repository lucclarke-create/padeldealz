export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export function formatShipping(cost: number): string {
  return cost === 0 ? "Gratis" : formatEuro(cost);
}

export function formatReviewCount(count: number): string {
  return new Intl.NumberFormat("nl-NL").format(count);
}
