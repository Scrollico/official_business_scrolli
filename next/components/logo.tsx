import { Link } from 'next-view-transitions';
import React from 'react';

import { BlurImage } from './blur-image';
// Removed Strapi dependency
import { Image } from '@/types/types';
import logoWhite from '@/public/logos/scrolli-logo.png';

export const Logo = ({ image, locale }: { image?: Image; locale?: string }) => {
  // Force the logo to use the provided Strapi URL, bypassing CMS field
  const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}uploads/logos/Primary-alternative3.png` || (logoWhite as unknown as string);

  return (
    <Link
      href={`/${locale || 'en'}`}
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black   relative z-20"
    >
      <BlurImage
        src={imageUrl}
        alt={(image && image.alternativeText) || 'Scrolli Logo'}
        width={140}
        height={36}
        className="h-8 w-auto object-contain"
        unoptimized
      />
    </Link>
  );
};
