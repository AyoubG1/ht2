import Link from 'next/link';
import { siteConfig } from '../data/siteData';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Melody Dash</p>
          <p className="mt-2 text-sm text-white/60">Rhythm runner for mobile.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          {siteConfig.socials.map((social) => (
            <a key={social.label} href={social.href} className="hover:text-white">
              {social.label}
            </a>
          ))}
          <Link href="/press" className="hover:text-white">
            Press
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
      <p className="mt-6 text-xs text-white/50">© 2025 Melody Dash. All rights reserved.</p>
    </footer>
  );
}
