import { Section } from './Section';
import { siteConfig } from '../data/siteData';
import { Card } from './Card';

export function Gameplay() {
  return (
    <Section
      id="gameplay"
      title="Gameplay flow"
      subtitle="Every run follows a simple rhythm loop that grows more intense the longer you survive."
      className="bg-panel/20"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="gradient-border bg-panel/70">
          <h3 className="text-xl font-semibold">How it works</h3>
          <p className="mt-3 text-sm text-white/70">
            Obstacles pulse in from the left. Swipe to dodge, jump, and slide while the soundtrack adapts
            to your combo streak. Collect keys to unlock treasures and upgrade your dash hero.
          </p>
        </Card>
        <div className="grid gap-4">
          {siteConfig.howToPlay.map((step, index) => (
            <Card key={step.title} className="bg-panel/70">
              <div className="flex items-start gap-3">
                <span className="text-sm font-semibold text-neon">0{index + 1}</span>
                <div>
                  <h4 className="text-base font-semibold">{step.title}</h4>
                  <p className="mt-2 text-sm text-white/70">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
