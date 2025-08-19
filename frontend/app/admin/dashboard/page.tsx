export default function AdminDashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin - Dashboard</h1>
      <p className="text-sm text-gray-600">Surveillez l'activité de la plateforme et modérez les contenus.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4">Utilisateurs</div>
        <div className="rounded-lg border bg-white p-4">Vendeurs</div>
        <div className="rounded-lg border bg-white p-4">Signalements</div>
      </div>
    </section>
  );
}
