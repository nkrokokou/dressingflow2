import './globals.css';
import React from 'react';

export const metadata = {
  title: 'DressingFlow',
  description: 'Marketplace de mode collaborative',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
