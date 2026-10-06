import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PopularDeals } from "@/components/home/PopularDeals";
import { SearchFeedback } from "@/components/home/SearchFeedback";
import { ShopStrip } from "@/components/home/ShopStrip";

export default async function Home({ searchParams }: PageProps<"/">) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";

  return (
    <main className="flex-1">
      <Hero />
      <SearchFeedback query={query} />
      <PopularDeals />
      <HowItWorks />
      <ShopStrip />
    </main>
  );
}
