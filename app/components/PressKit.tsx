import { Section } from './Section';
import { siteConfig } from '../data/siteData';
import { Card } from './Card';

export function PressKit() {
  return (
    <Section title="Press kit" subtitle="Everything you need to cover Melody Dash." className="pt-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="bg-panel/70">
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="mt-3 text-sm text-white/70">{siteConfig.pressKit.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {siteConfig.pressKit.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </Card>
        <Card className="bg-panel/70">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="mt-3 text-sm text-white/70">
            Press inquiries: <a href={`mailto:${siteConfig.pressKit.contactEmail}`} className="text-neon">{siteConfig.pressKit.contactEmail}</a>
          </p>
          <div className="mt-5">
            <p className="text-sm font-semibold">Download assets</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {siteConfig.pressKit.assets.map((asset) => (
                <li key={asset.label}>
                  <a href={asset.href} className="text-white/80 hover:text-white">
                    {asset.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="bg-panel/70">
          <h4 className="text-sm font-semibold">Logo placeholders</h4>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-dashed border-white/20 text-xs text-white/40">
              Logo Dark
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-dashed border-white/20 text-xs text-white/40">
              Logo Light
            </div>
          </div>
        </Card>
        <Card className="bg-panel/70">
          <h4 className="text-sm font-semibold">Screenshots</h4>
          <p className="mt-3 text-sm text-white/70">Preview-ready captures will live here once final art is available.</p>
        </Card>
      </div>
    </Section>
  );
}
