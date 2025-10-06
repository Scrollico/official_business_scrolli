'use client';

import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';
import { StrapiImage } from '@/components/ui/strapi-image';

export const Brands = ({
  heading,
  sub_heading,
  logos,
}: {
  heading: string;
  sub_heading: string;
  logos: any[];
}) => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading className="pt-4">{heading}</Heading>
      <Subheading className="max-w-3xl mx-auto">{sub_heading}</Subheading>

      <div className="flex gap-8 flex-wrap justify-center md:gap-20 relative h-full w-full mt-20">
        {logos.map((logo, idx) => {
          // Check if logo should be white (NOJU, TRAI, or HANSPACE) or original colors (others)
          const isWhiteLogo = logo?.name?.toLowerCase() === 'noju' || logo?.name?.toLowerCase() === 'trai' || logo?.name?.toLowerCase() === 'hanspace';
          
          return (
            <div
              key={logo.name || `logo-${idx}`}
              className="relative"
            >
              <StrapiImage
                src={logo?.image || '/logos/Primary-alternative3.png'}
                alt={logo?.name || 'Logo'}
                width={400}
                height={400}
                className={`md:h-12 md:w-32 h-8 w-24 object-contain transition-opacity ${
                  isWhiteLogo 
                    ? 'brightness-0 invert opacity-80 hover:opacity-100' 
                    : 'opacity-100 hover:opacity-80'
                }`}
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
