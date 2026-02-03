import { Section } from './Section';
import { siteConfig } from '../data/siteData';
import { Card } from './Card';

export function Roadmap() {
  return (
    <Section id="roadmap" title="Roadmap" subtitle="The beats we're shipping next.">
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.roadmap.map((item) => (
          <Card key={item.title} className="bg-panel/70">
            <p className="text-xs uppercase text-neon">{item.timeline}</p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-white/70">{item.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
