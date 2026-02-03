import { Section } from './Section';
import { siteConfig } from '../data/siteData';
import { Card } from './Card';

export function Changelog() {
  return (
    <Section id="changelog" title="Changelog" subtitle="Latest updates from the Melody Dash studio.">
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.changelog.map((item) => (
          <Card key={item.title} className="bg-panel/70">
            <p className="text-xs uppercase text-aqua">{item.date}</p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-white/70">{item.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
