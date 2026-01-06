'use client';

import { IconCheck, IconPlus, IconReceipt2 } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { Container } from '../container';
import { Button } from '../elements/button';
import { Heading } from '../elements/heading';
import { Subheading } from '../elements/subheading';
import { FeatureIconContainer } from './features/feature-icon-container';
import { cn } from '@/lib/utils';

type Perks = {
  [key: string]: string;
};

type CTA = {
  [key: string]: string;
};

type Plan = {
  name: string;
  price: number;
  perks: Perks[];
  additional_perks: Perks[];
  description: string;
  number: string;
  featured?: boolean;
  CTA?: CTA | undefined;
};

export const Pricing = ({
  heading,
  sub_heading,
  plans,
}: {
  heading: string;
  sub_heading: string;
  plans: any[];
}) => {
  return (
    <div id="pricing" className="pt-40">
      <Container>
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconReceipt2 className="h-6 w-6 text-[#111827]" />
        </FeatureIconContainer>
        <Heading className="pt-4">{heading}</Heading>
        <Subheading className="max-w-3xl mx-auto">{sub_heading}</Subheading>
        <div className="flex justify-center py-20">
          {plans.map((plan) => (
            <Card key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const Card = ({ plan }: { plan: Plan }) => {
  return (
    <div
      className={cn(
        'p-4 md:p-4 rounded-3xl bg-elevated border-2 border-borderLight max-w-md',
        plan.featured && 'border-neutral-50 bg-neutral-100'
      )}
    >
      <div
        className={cn(
          'p-4 bg-neutral-700 rounded-2xl shadow-[0px_-1px_0px_0px_var(--borderLight)]',
          plan.featured && 'bg-white shadow-aceternity'
        )}
      >
        <div className="flex justify-between items-center">
          <p className={cn('font-medium', plan.featured && 'text-black')}>
            {plan.name}
          </p>
          {plan.featured && (
            <div
              className={cn(
                'font-medium text-xs px-3 py-1 rounded-full relative bg-elevated'
              )}
            >
              <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              Featured
            </div>
          )}
        </div>
        <div className="mt-8">
          <p className={cn('text-lg font-medium text-neutral-400', plan.featured && 'text-neutral-600')}>
            {plan.description}
          </p>
          {plan.price && (
            <p className={cn('text-3xl font-bold text-white mt-4', plan.featured && 'text-black')}>
              ${plan.price.toLocaleString()}
            </p>
          )}
          {!plan.price && (
            <p className={cn('text-3xl font-bold text-white mt-4', plan.featured && 'text-black')}>
              Custom Pricing
            </p>
          )}
        </div>
        <Button
          as={Link}
          href="/contact"
          variant="primary"
          className="w-full mt-10 mb-4"
        >
          {plan.CTA?.text || 'Schedule Consultation'}
        </Button>
      </div>
      <div className="mt-1 p-4">
        {plan.perks.map((feature, idx) => (
          <Step featured={plan.featured} key={idx}>
            {feature.text}
          </Step>
        ))}
      </div>
      {plan.additional_perks && plan.additional_perks.length > 0 && (
        <Divider featured={plan.featured} />
      )}
      <div className="p-4">
        {plan.additional_perks?.map((feature, idx) => (
          <Step featured={plan.featured} additional key={idx}>
            {feature.text}
          </Step>
        ))}
      </div>
    </div>
  );
};

const Step = ({
  children,
  additional,
  featured,
}: {
  children: React.ReactNode;
  additional?: boolean;
  featured?: boolean;
}) => {
  return (
    <div className="flex items-start justify-start gap-2 my-4">
      <div
        className={cn(
          'h-4 w-4 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5',
          additional ? 'bg-indigo-600' : 'bg-neutral-700'
        )}
      >
        <IconCheck className="h-3 w-3 [stroke-width:4px] text-neutral-300" />
      </div>
      <div
        className={cn(
          'font-medium text-white text-sm',
          featured && 'text-black'
        )}
      >
        {children}
      </div>
    </div>
  );
};

const Divider = ({ featured }: { featured?: boolean }) => {
  return (
    <div className="relative">
      <div
        className={cn('w-full h-px bg-neutral-950', featured && 'bg-white')}
      />
      <div
        className={cn(
          'w-full h-px bg-borderLight',
          featured && 'bg-neutral-200'
        )}
      />
      <div
        className={cn(
          'absolute inset-0 h-5 w-5 m-auto rounded-xl bg-elevated shadow-[0px_-1px_0px_0px_var(--borderLight)] flex items-center justify-center',
          featured && 'bg-white shadow-aceternity'
        )}
      >
        <IconPlus
          className={cn(
            'h-3 w-3 [stroke-width:4px] text-neutral-300',
            featured && 'text-black'
          )}
        />
      </div>
    </div>
  );
};
