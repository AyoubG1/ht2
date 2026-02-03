import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Melody Dash — Rhythm runner for mobile',
  description: 'Dodge the cubes. Sync with the beat. Experience neon-fueled rhythm running in Melody Dash.',
  openGraph: {
    title: 'Melody Dash — Rhythm runner for mobile',
    description: 'Dodge the cubes. Sync with the beat.',
    images: ['/opengraph-placeholder.svg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
