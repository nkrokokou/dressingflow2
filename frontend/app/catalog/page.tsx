export default function CatalogPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Catalogue</h1>
      <p className="text-sm text-gray-600">Découvrez les articles populaires et les nouvelles arrivées.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* TODO: replace placeholders with real product cards */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-white p-4">Produit #{i + 1}</div>
        ))}
      </div>
    </section>
  );
}
