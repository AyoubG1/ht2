'use client';

import { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = /\S+@\S+\.\S+/.test(email);
    setStatus(isValid ? 'success' : 'error');
  };

  return (
    <Section
      id="newsletter"
      title="Stay in the loop"
      subtitle="Get launch updates, new tracks, and exclusive drops."
    >
      <form
        className="flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-panel/70 p-6 md:flex-row md:items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          aria-label="Email address"
          placeholder="Enter your email"
          className="w-full rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon focus:outline-none"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== 'idle') {
              setStatus('idle');
            }
          }}
        />
        <Button
          as="button"
          type="submit"
          ariaLabel="Submit email"
          className="w-full justify-center md:w-auto"
          variant="primary"
        >
          Notify me
        </Button>
        {status === 'success' ? (
          <span className="text-xs text-aqua">Thanks! Check your inbox soon.</span>
        ) : null}
        {status === 'error' ? (
          <span className="text-xs text-fuchsia">Please enter a valid email address.</span>
        ) : null}
      </form>
    </Section>
  );
}
