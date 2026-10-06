import type { Product } from "@/types/catalog";

type ProductVisualProps = {
  product: Product;
};

export function ProductVisual({ product }: ProductVisualProps) {
  const hasRealImage = Boolean(product.image) && !product.image.startsWith("/placeholders/");

  if (hasRealImage) {
    return (
      <div className="border border-line bg-white p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-auto w-full max-w-md object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-square flex-col items-center justify-center border border-line bg-white px-8 py-10 text-center">
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" aria-hidden="true">
        <rect x="18" y="18" width="124" height="124" stroke="#0D1B2A" strokeOpacity="0.12" />
        <circle cx="78" cy="78" r="28" stroke="#0D1B2A" strokeWidth="3" />
        <path d="M98 98 128 128" stroke="#0D1B2A" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M66 80.5 76 90.5 94 68"
          stroke="#FF6A00"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="mt-2 text-sm font-medium tracking-tight text-navy">Prototypevisual</p>
      <p className="mt-1 max-w-xs text-xs leading-5 text-muted">
        Geen productfoto. Later wordt hier de echte productafbeelding getoond.
      </p>
    </div>
  );
}
