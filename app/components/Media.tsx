import { Section } from './Section';
import { siteConfig } from '../data/siteData';

export function Media() {
  return (
    <Section id="media" title="Media" subtitle="Watch the official trailer and feel the rhythm.">
      <div className="aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${siteConfig.trailer.videoId}`}
          title={siteConfig.trailer.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Section>
  );
}
