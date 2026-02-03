import { Section } from './Section';
import { Card } from './Card';
import { siteConfig } from '../data/siteData';

export function Modes() {
  return (
    <Section id="modes" title="Two ways to dash" subtitle="Swap between endless rhythm loops and curated adventures.">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="gradient-border bg-panel/70">
          <h3 className="text-lg font-semibold text-neon">{siteConfig.modes.classic.title}</h3>
          <p className="mt-3 text-sm text-white/70">{siteConfig.modes.classic.description}</p>
        </Card>
        <Card className="gradient-border bg-panel/70">
          <h3 className="text-lg font-semibold text-fuchsia">{siteConfig.modes.adventure.title}</h3>
          <p className="mt-3 text-sm text-white/70">{siteConfig.modes.adventure.description}</p>
        </Card>
      </div>
    </Section>
  );
}
