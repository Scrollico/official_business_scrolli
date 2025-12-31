import React from 'react';

import { cn } from '@/lib/utils';

export const Card = ({
  className,
  children,
  hasVignette = false,
}: {
  className?: string;
  children: React.ReactNode;
  hasVignette?: boolean;
}) => {
  return (
    <div
      className={cn(
        'p-8 rounded-3xl border border-[rgba(255,255,255,0.10)] bg-[rgba(75,85,99,0.40)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group relative',
        className
      )}
    >
      {hasVignette && (
        <div className="absolute inset-0 rounded-3xl pointer-events-none z-50" style={{
          background: `
            radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 100%),
            linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)
          `,
          boxShadow: `
            inset 0 0 20px rgba(0,0,0,0.2),
            inset 0 0 40px rgba(0,0,0,0.1),
            0 0 20px rgba(0,0,0,0.3)
          `
        }} />
      )}
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn('text-lg font-semibold text-white py-2', className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn('text-sm font-normal text-neutral-400 max-w-sm', className)}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        'h-[20rem] rounded-xl z-40',
        className,
        showGradient &&
          ' bg-[rgba(75,85,99,0.40)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]'
      )}
    >
      {children}
    </div>
  );
};
