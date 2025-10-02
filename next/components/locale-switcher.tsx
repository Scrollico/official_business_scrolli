'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname(); // Current path
  const segments = pathname.split('/'); // Split path into segments

  // Available locales
  const locales = ['en', 'tr'];

  // Generate localized path for each locale
  const generateLocalizedPath = (locale: string): string => {
    if (!pathname) return `/${locale}`; // Default to root path for the locale

    // Handle homepage (e.g., "/en" -> "/tr")
    if (segments.length <= 2) {
      return `/${locale}`;
    }

    // Fallback to replace only the locale
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex gap-2 p-1 rounded-md">
      {!pathname.includes('/products/') &&
        locales.map((locale) => (
          <Link key={locale} href={generateLocalizedPath(locale)}>
            <div
              className={cn(
                'flex cursor-pointer items-center justify-center text-sm leading-[110%] w-8 py-1 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_var(--neutral-600)_inset] transition duration-200',
                locale === currentLocale
                  ? 'bg-neutral-800 text-white shadow-[0px_1px_0px_0px_var(--neutral-600)_inset]'
                  : ''
              )}
            >
              {locale}
            </div>
          </Link>
        ))}
    </div>
  );
}
