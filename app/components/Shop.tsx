import { Section } from './Section';
import { Card } from './Card';

export function Shop() {
  return (
    <Section id="shop" title="Treasures shop" subtitle="Keys unlock chests filled with upgrades, coins, and rare skins.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="bg-panel/70">
          <h3 className="text-lg font-semibold">Treasures explained</h3>
          <p className="mt-3 text-sm text-white/70">
            Complete runs to collect keys. Exchange keys for chests in the Treasures shop, then reveal
            coins, emeralds, and limited-time cosmetics. Higher-tier chests appear as your combo streak grows.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>• Bronze chest: Coins + common skins</li>
            <li>• Neon chest: Emeralds + rare trails</li>
            <li>• Prism chest: Legendary skins + sound packs</li>
          </ul>
        </Card>
        <Card className="bg-panel/70">
          <h3 className="text-lg font-semibold">Why it matters</h3>
          <p className="mt-3 text-sm text-white/70">
            Treasures power your progression loop. The more you play to the beat, the better the rewards
            and the more styles you can equip for your next dash.
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
            Tip: Save keys for limited-time chest drops during events.
          </div>
        </Card>
      </div>
    </Section>
  );
}
