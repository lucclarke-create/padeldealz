import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferComparison } from "@/components/comparison/OfferComparison";
import { BestPriceBlock } from "@/components/product/BestPriceBlock";
import { ComparisonExplainer } from "@/components/product/ComparisonExplainer";
import { ProductHeader } from "@/components/product/ProductHeader";
import { ProductVisual } from "@/components/product/ProductVisual";
import { getOfferViewsForProduct, getProductBySlug } from "@/lib/catalog";

type ProductPageProps = PageProps<"/product/[slug]">;

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product niet gevonden" };
  }

  return {
    title: {
      absolute: `${product.name} vergelijken | PadelDealz`,
    },
    description: `Vergelijk prijzen en aanbiedingen voor de ${product.name} bij verschillende padelshops.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const offerViews = getOfferViewsForProduct(product.id);
  const best = offerViews.find((view) => view.isBest);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <ProductVisual product={product} />
        <div className="space-y-8">
          <ProductHeader product={product} />
          <BestPriceBlock offerCount={offerViews.length} best={best} />
        </div>
      </div>

      <section className="mt-16 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Prijsvergelijking</h2>
          <p className="mt-2 text-sm text-muted">
            Totaal = productprijs + verzendkosten. Gesorteerd op beschikbaarheid en laagste totaalprijs.
          </p>
        </div>
        <OfferComparison offers={offerViews} />
      </section>

      <div className="mt-16 pb-8">
        <ComparisonExplainer />
      </div>
    </main>
  );
}
