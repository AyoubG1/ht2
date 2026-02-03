'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from './Section';
import { siteConfig } from '../data/siteData';
import { Modal } from './Modal';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? siteConfig.screenshots[active] : null;

  return (
    <Section
      id="gallery"
      title="Screenshots & gallery"
      subtitle="Explore the neon worlds, boss beats, and treasure rooms."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.screenshots.map((shot, index) => (
          <button
            key={shot.title}
            type="button"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            onClick={() => setActive(index)}
            aria-label={`Open screenshot ${shot.title}`}
          >
            <Image
              src={shot.src}
              alt={shot.title}
              width={640}
              height={360}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-sm text-white">{shot.title}</span>
          </button>
        ))}
      </div>

      <Modal isOpen={active !== null} onClose={() => setActive(null)}>
        {current ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">{current.title}</h3>
            <Image
              src={current.src}
              alt={current.title}
              width={960}
              height={540}
              className="w-full rounded-2xl object-cover"
              unoptimized
            />
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
