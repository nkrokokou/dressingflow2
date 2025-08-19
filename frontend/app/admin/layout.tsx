import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-56px)] grid grid-cols-12 gap-4">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 rounded-lg border bg-white p-4 h-max sticky top-4">
        <h2 className="text-sm font-semibold mb-3">Admin</h2>
        <nav className="space-y-2 text-sm">
          <Link className="block hover:underline" href="/admin/dashboard">Dashboard</Link>
          <Link className="block hover:underline" href="/admin/users">Utilisateurs</Link>
          <Link className="block hover:underline" href="/admin/vendors">Vendeurs</Link>
          <Link className="block hover:underline" href="/admin/reports">Signalements</Link>
          <Link className="block hover:underline" href="/admin/settings">Paramètres</Link>
        </nav>
      </aside>
      <section className="col-span-12 md:col-span-9 lg:col-span-10 space-y-4">
        {children}
      </section>
    </div>
  );
}
