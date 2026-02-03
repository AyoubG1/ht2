'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from './Button';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#gameplay', label: 'Gameplay' },
  { href: '#modes', label: 'Modes' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' }
];

export function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, hasMounted]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-lg font-semibold">
          Melody <span className="text-neon">Dash</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={clsx(
              'rounded-full border border-white/15 px-3 py-2 text-xs text-white/80 transition hover:text-white',
              darkMode ? 'bg-white/10' : 'bg-transparent'
            )}
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
          <div className="hidden sm:block">
            <Button href="#download" variant="primary" ariaLabel="Download Melody Dash">
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
