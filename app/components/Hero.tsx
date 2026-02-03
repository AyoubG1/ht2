'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { siteConfig } from '../data/siteData';

const shots = siteConfig.screenshots.slice(0, 4);

export function Hero() {
  return (
    <section id="download" className="bg-hero-gradient px-6 pb-20 pt-16 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm uppercase tracking-[0.3em] text-neon">Rhythm runner</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{siteConfig.name}</h1>
            <p className="mt-4 text-base text-white/75 md:text-lg">{siteConfig.tagline}</p>
          </motion.div>
          <p className="max-w-xl text-sm text-white/70 md:text-base">{siteConfig.description}</p>
          <div className="flex flex-wrap gap-4">
            <Button href={siteConfig.cta.primary.href} ariaLabel={siteConfig.cta.primary.label}>
              {siteConfig.cta.primary.label}
            </Button>
            <Button href={siteConfig.cta.secondary.href} variant="secondary" ariaLabel={siteConfig.cta.secondary.label}>
              {siteConfig.cta.secondary.label}
            </Button>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neon" />
              <span>Offline classic mode</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-fuchsia" />
              <span>Seasonal events</span>
            </div>
          </div>
        </div>
        <motion.div
          className="relative mx-auto w-full max-w-sm rounded-[36px] border border-white/10 bg-panel/80 p-5 shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[28px] border border-white/10 bg-black/40 p-4">
            <div className="mb-4 flex items-center justify-between text-xs text-white/60">
              <span>Now playing</span>
              <span className="rounded-full bg-white/10 px-2 py-1">Live preview</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {shots.map((shot) => (
                <div key={shot.title} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    width={300}
                    height={500}
                    className="h-32 w-full object-cover"
                    loading="lazy"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
