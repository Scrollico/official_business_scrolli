'use client';

import React from 'react';
import { TbLocationBolt } from 'react-icons/tb';

import { AmbientColor } from '../../decorations/ambient-color';
import { Heading } from '../../elements/heading';
import { Subheading } from '../../elements/subheading';
import { FeatureIconContainer } from '../features/feature-icon-container';
import { TestimonialsSlider } from './slider';
import { TestimonialsMarquee } from './testimonials-marquee';

export const Testimonials = ({
  heading,
  sub_heading,
  testimonials,
}: {
  heading: string;
  sub_heading: string;
  testimonials: object;
}) => {
  return (
    <div className="relative">
      <AmbientColor />
      <div className="pb-20">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <TbLocationBolt className="h-6 w-6 text-white" />
        </FeatureIconContainer>
        <Heading className="pt-4">{heading}</Heading>
        <Subheading>{sub_heading}</Subheading>
      </div>

      {/* Show only the top slider (avatar + quote). Hide the marquee. */}
      {testimonials && (
        <div className="relative md:py-20 pb-20">
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      )}

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-charcoal to-transparent"></div>
    </div>
  );
};
