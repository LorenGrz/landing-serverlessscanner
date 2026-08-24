import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Serverless Scanner — Roadmap serverless accionable en minutos',
  description:
    'Serverless Scanner analiza tu infraestructura SaaS existente e identifica las oportunidades de mayor ROI para migrar a AWS serverless. Portfolio preview.',
  openGraph: {
    title: 'Serverless Scanner',
    description: 'Score de preparación serverless, ahorro estimado y roadmap de 30 días para tu stack.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-on-surface antialiased">{children}</body>
    </html>
  );
}
