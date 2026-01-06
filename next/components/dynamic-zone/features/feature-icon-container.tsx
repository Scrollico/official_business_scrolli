import React from 'react';

import { cn } from '@/lib/utils';

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className=" [perspective:400px] [transform-style:preserve-3d]">
      <div
        className={cn(
          'h-14 w-14 p-[2px] rounded-md mx-auto relative'
        )}
        style={{
          transform: 'rotateX(25deg)',
          transformOrigin: 'center',
          background: 'linear-gradient(to top, #D4CFB8, #F8F5E4, #FEFCF7)',
        }}
      >
        <div
          className={cn(
            'rounded-[5px] h-full w-full relative z-20 flex items-center justify-center',
            className
          )}
          style={{
            background: 'linear-gradient(to top, #F8F5E4, #FEFCF7)',
          }}
        >
          {children}
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-[#D4CFB8] opacity-30 rounded-full blur-lg h-4 w-full mx-auto z-30"></div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-[#D4CFB8] to-transparent h-px w-[60%] mx-auto"></div>
      </div>
    </div>
  );
};
