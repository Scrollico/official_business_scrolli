'use client';

import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { ReactNode, useCallback } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  href: never;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: string;
};

export function NavbarItem({
  children,
  href,
  active,
  target,
  className,
}: Props) {
  const pathname = usePathname();

  const handlePrewarm = useCallback(() => {
    if (typeof href === 'string' && href.includes('/contact')) {
      const src = 'https://assets.calendly.com/assets/external/widget.js';
      const existing = document.querySelector(`script[src="${src}"]`);
      if (!existing) {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        document.head.appendChild(s);
      }
    }
  }, [href]);

  return (
    <Link
      href={href}
      onMouseEnter={handlePrewarm}
      onFocus={handlePrewarm}
      className={cn(
        'flex items-center justify-center  text-sm leading-[110%] px-4 py-2 rounded-md  hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200',
        (active || pathname?.includes(href)) && 'bg-transparent text-white',
        className
      )}
      target={target}
    >
      {children}
    </Link>
  );
}
