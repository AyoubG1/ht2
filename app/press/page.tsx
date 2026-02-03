import Link from 'next/link';
import { PressKit } from '../components/PressKit';

export default function PressPage() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <header className="border-b border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Melody <span className="text-neon">Dash</span>
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            Back to home
          </Link>
        </div>
      </header>
      <main>
        <PressKit />
      </main>
    </div>
  );
}
