import './globals.css';
import type { Metadata } from 'next';
import Header from './frontend/components/Header';

export const metadata: Metadata = {
  title: 'Career Planner AI',
  description: 'AI-Driven Career Path Planner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-mono">
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}