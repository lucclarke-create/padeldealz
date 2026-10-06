import Link from "next/link";
import { getCategoryLabel } from "@/lib/format/labels";
import type { Product } from "@/types/catalog";

type ProductHeaderProps = {
  product: Product;
};

export function ProductHeader({ product }: ProductHeaderProps) {
  const specEntries = Object.entries(product.specs).slice(0, 4);

  return (
    <div className="space-y-6">
      <nav aria-label="Broodkruimel" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="outline-none hover:text-navy focus-visible:ring-2 focus-visible:ring-orange">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{getCategoryLabel(product.category)}</li>
          <li aria-hidden="true">/</li>
          <li className="text-navy">{product.name}</li>
        </ol>
      </nav>

      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-muted">{product.brand}</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
        <p className="max-w-xl text-base leading-7 text-muted">
          Vergelijk de actuele prijzen van {product.name} bij verschillende padelshops.
        </p>
      </div>

      {specEntries.length > 0 ? (
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          {specEntries.map(([label, value]) => (
            <div key={label} className="border-t border-line pt-3">
              <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
              <dd className="mt-1 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
