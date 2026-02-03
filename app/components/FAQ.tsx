import { Section } from './Section';
import { siteConfig } from '../data/siteData';
import { Accordion } from './Accordion';

export function FAQ() {
  return (
    <Section id="faq" title="Questions, answered" subtitle="Everything you need to know before your first dash.">
      <Accordion items={siteConfig.faq} />
    </Section>
  );
}
