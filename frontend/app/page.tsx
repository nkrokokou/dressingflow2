export default function HomePage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">DressingFlow</h1>
      <p className="mt-2 text-gray-600">Marketplace de mode: Espace Client, Vendeur et Admin.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <section className="p-4 rounded-lg bg-white shadow">
          <h2 className="font-semibold">Espace Client</h2>
          <p className="text-sm text-gray-600">Découverte, panier multi-vendeurs, suivi commande.</p>
        </section>
        <section className="p-4 rounded-lg bg-white shadow">
          <h2 className="font-semibold">Espace Vendeur</h2>
          <p className="text-sm text-gray-600">Publier des produits, gérer commandes, stats.</p>
        </section>
        <section className="p-4 rounded-lg bg-white shadow">
          <h2 className="font-semibold">Espace Admin</h2>
          <p className="text-sm text-gray-600">Gestion rôles, modération, configuration.</p>
        </section>
      </div>
    </main>
  );
}
