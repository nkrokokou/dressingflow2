import ProductGrid from "@/components/ProductGrid";
import type { Product } from "@/components/ProductCard";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("/api/products", {
    // With Next.js App Router, fetch is cached by default in server components.
    // We want fresh data while developing.
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function CatalogPage() {
  const products = await getProducts();
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Catalogue</h1>
      <p className="text-sm text-gray-600">Découvrez les articles populaires et les nouvelles arrivées.</p>
      <ProductGrid products={products} />
    </section>
  );
}
