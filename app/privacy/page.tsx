import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <header className="border-b border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Melody <span className="text-neon">Dash</span>
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            Back to home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-white/70">
          This is a placeholder privacy policy for Melody Dash. Replace this content with your official
          privacy documentation before launch.
        </p>
        <section className="mt-8 space-y-4 text-sm text-white/70">
          <p>
            We respect your privacy. Melody Dash only collects the minimum information required to
            deliver gameplay services, leaderboard rankings, and account support.
          </p>
          <p>
            Data may include device identifiers, gameplay statistics, and crash logs. We do not sell
            personal information to third parties.
          </p>
          <p>
            Contact us at privacy@melodydash.game for questions about this policy.
          </p>
        </section>
      </main>
    </div>
  );
}
