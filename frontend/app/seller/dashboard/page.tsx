export default function SellerDashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Tableau de bord Vendeur</h1>
      <p className="text-sm text-gray-600">Gérez vos produits, commandes et statistiques.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4">Ventes aujourd'hui</div>
        <div className="rounded-lg border bg-white p-4">Commandes en cours</div>
        <div className="rounded-lg border bg-white p-4">Produits actifs</div>
      </div>
    </section>
  );
}
