import type { ReactNode } from 'react';
import clsx from 'clsx';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'relative rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]',
        className
      )}
    >
      {children}
    </div>
  );
}
