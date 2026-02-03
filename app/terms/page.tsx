import Link from 'next/link';

export default function TermsPage() {
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
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-sm text-white/70">
          This is a placeholder terms of service page for Melody Dash. Replace this text with your
          legal terms before launch.
        </p>
        <section className="mt-8 space-y-4 text-sm text-white/70">
          <p>
            By downloading or playing Melody Dash, you agree to comply with the community guidelines
            and respect other players. In-game purchases are optional and non-refundable.
          </p>
          <p>
            Melody Dash may update these terms as the game evolves. Continued use of the service
            constitutes acceptance of the updated terms.
          </p>
          <p>
            Contact us at support@melodydash.game for account-related questions.
          </p>
        </section>
      </main>
    </div>
  );
}
