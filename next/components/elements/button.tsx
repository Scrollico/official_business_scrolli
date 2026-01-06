import { LinkProps } from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'simple' | 'outline' | 'primary' | 'muted';
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  href?: LinkProps['href'];
  onClick?: () => void;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  className,
  children,
  ...props
}) => {
  const variantClass =
    variant === 'simple'
      ? 'bg-secondary relative z-10 bg-transparent hover:border-secondary/50 hover:bg-secondary/10  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center'
      : variant === 'outline'
        ? 'bg-white relative z-10 hover:bg-secondary/90 hover:shadow-xl  text-black border border-black hover:text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center'
        : variant === 'primary'
          ? 'relative z-10 text-[#111827] font-medium rounded-md h-9 px-4 text-sm border-0 outline-none inline-flex items-center justify-center whitespace-nowrap transition-opacity duration-200 hover:opacity-80 disabled:pointer-events-none disabled:opacity-50'
          : variant === 'muted'
            ? 'relative z-10 text-[#111827] font-medium rounded-md h-9 px-4 text-sm border-0 outline-none inline-flex items-center justify-center whitespace-nowrap transition-opacity duration-200 hover:opacity-80 disabled:pointer-events-none disabled:opacity-50'
            : '';
  
  // Beige gradient style for primary and muted variants
  const beigeGradientStyle = (variant === 'primary' || variant === 'muted')
    ? {
        background: 'linear-gradient(to top, #D4CFB8, #F8F5E4, #FEFCF7)',
      }
    : undefined;
  
  const Element = Tag as any;

  return (
    <Element
      className={cn(
        'bg-secondary relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center ',
        variantClass,
        className
      )}
      style={beigeGradientStyle}
      {...props}
    >
      {children ?? `Get Started`}
    </Element>
  );
};
