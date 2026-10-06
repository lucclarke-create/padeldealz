import { shops } from "@/lib/data/shops";

export function ShopStrip() {
  return (
    <section id="webshops" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Webshops in dit prototype</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Fictieve retailers om vergelijking, land en beoordeling te tonen. Geen echte shops.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shops.map((shop) => (
            <li key={shop.id} className="border border-line px-4 py-4">
              <p className="font-medium">{shop.name}</p>
              <p className="mt-1 text-sm text-muted">
                {shop.country} · {shop.rating.toFixed(1)} · {shop.reviewCount} reviews
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
