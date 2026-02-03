import { siteConfig } from '../data/siteData';
import { Card } from './Card';
import { Section } from './Section';

const icons = ['🎧', '⚡', '🗺️', '🗝️', '💎', '🎨'];

export function Features() {
  return (
    <Section
      id="features"
      title="Features that keep the beat alive"
      subtitle="Fast, polished, and built around rhythm-driven progression."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.features.map((feature, index) => (
          <Card key={feature.title} className="flex flex-col gap-4">
            <span className="text-2xl">{icons[index]}</span>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/70">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
