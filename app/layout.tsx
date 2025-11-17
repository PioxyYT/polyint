import type { ReactNode } from 'react';
import { NavTabs } from './components/NavTabs';

export const metadata = {
  title: 'POLYINT',
  description: 'Interface Next.js basique',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
          background: 'radial-gradient(circle at 20% 20%, rgba(103, 72, 255, 0.15), transparent 55%), radial-gradient(circle at 80% 0%, rgba(199, 161, 255, 0.2), transparent 60%), linear-gradient(140deg, #0b0516 0%, #120922 40%, #1a102f 100%)',
          color: '#f4f1ff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header
          style={{
            padding: '2.5rem 0 1.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <NavTabs />
        </header>
        <div style={{ flex: 1, width: '100%' }}>{children}</div>
      </body>
    </html>
  );
}


