'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { Cover } from '../decorations/cover';
import InfiniteBackground from '../ui/infinite-background';
import { Button } from '../elements/button';
import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';

export const Hero = ({
  heading,
  sub_heading,
  CTAs,
  locale,
}: {
  heading: string;
  sub_heading: string;
  CTAs: any[];
  locale: string;
}) => {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center bg-charcoal">
      <InfiniteBackground />
      <Heading
        as="h1"
        className="text-3xl md:text-4xl lg:text-7xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10  py-4"
      >
        {heading.substring(0, heading.lastIndexOf(' '))}{' '}
        <Cover>{heading.split(' ').pop()}</Cover>
      </Heading>
      <Subheading className="text-center mt-2 md:mt-6 text-base md:text-xl text-muted  max-w-3xl mx-auto relative z-10">
        {sub_heading}
      </Subheading>
      <div className="flex space-x-2 items-center mt-8 relative z-10">
        {CTAs &&
          CTAs.map((cta, index) => (
            <Button
              key={`cta-${index}`}
              as={Link}
              href={`${cta.URL?.startsWith('http') ? '' : `/${locale}`}${cta.URL?.startsWith('/') ? cta.URL : `/${cta.URL || ''}`}`}
              {...(cta.variant && { variant: cta.variant })}
            >
              {cta.text}
            </Button>
          ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-80 w-full bg-gradient-to-t from-charcoal to-transparent z-10 pointer-events-none" />
    </div>
  );
};
