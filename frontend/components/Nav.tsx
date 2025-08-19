"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4 text-sm">
        <Link href="/" className="font-semibold">DressingFlow</Link>
        <div className="ml-auto flex items-center gap-3">
          <Link href="/catalog" className="hover:underline">Catalogue</Link>
          <Link href="/seller/dashboard" className="hover:underline">Espace Vendeur</Link>
          <Link href="/admin/dashboard" className="hover:underline">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
