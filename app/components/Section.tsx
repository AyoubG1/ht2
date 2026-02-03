import type { ReactNode } from 'react';
import clsx from 'clsx';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx('px-6 py-16 md:px-10', className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        {title ? (
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
            {subtitle ? <p className="mt-2 text-sm text-white/70 md:text-base">{subtitle}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
