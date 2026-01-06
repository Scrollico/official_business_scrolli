import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

export const Logo = ({ image, locale }: { image?: any; locale?: string }) => {
  return (
    <Link
      href={`/${locale || 'en'}`}
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-white relative z-20"
    >
      <Image
        src="/logos/Primary-alternative3.png"
        alt="Scrolli Logo"
        width={140}
        height={36}
        className="h-8 w-auto object-contain"
        unoptimized={true}
        priority={true}
      />
    </Link>
  );
};
