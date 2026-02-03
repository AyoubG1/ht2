import { Section } from './Section';
import { Card } from './Card';
import { siteConfig } from '../data/siteData';

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Loved by rhythm runners"
      subtitle="Players keep coming back for the soundtrack, flow, and neon vibes."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-panel/70">
            <p className="text-sm text-white/80">{testimonial.quote}</p>
            <div className="mt-4 text-xs text-white/60">
              <strong className="text-white">{testimonial.name}</strong>
              <span className="ml-2">{testimonial.title}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
