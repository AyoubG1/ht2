import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon';

const variants = {
  primary: 'bg-gradient-to-r from-neon to-fuchsia text-white shadow-glow hover:opacity-90',
  secondary: 'border border-white/20 text-white hover:border-white/50',
  ghost: 'text-white/80 hover:text-white'
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
  as?: 'link' | 'button';
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
};

export function Button({
  href = '#',
  variant = 'primary',
  children,
  ariaLabel,
  className,
  as = 'link',
  type = 'button',
  onClick
}: ButtonProps) {
  if (as === 'button') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={clsx(baseStyles, variants[variant], className)}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(baseStyles, variants[variant], className)}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
