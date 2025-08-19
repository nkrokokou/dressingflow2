import './globals.css';
import React from 'react';
import Nav from '../components/Nav';

export const metadata = {
  title: 'DressingFlow',
  description: 'Marketplace de mode collaborative',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Nav />
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
