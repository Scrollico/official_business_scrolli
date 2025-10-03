import React, { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const IconContainer: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center h-16 w-16 rounded-lg border-2 bg-white/10 backdrop-blur-sm relative',
        'border-white/30',
        'shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)_inset,0px_4px_12px_-4px_rgba(0,0,0,0.3)]',
        'flex-shrink-0',
        'hover:scale-105 hover:bg-white/20 transition-all duration-300 mx-4',
        'hover:shadow-[0px_0px_30px_0px_rgba(255,255,255,0.2)_inset,0px_8px_20px_-8px_rgba(0,0,0,0.4)]',
        className
      )}
      {...props}
    >
      <div className="h-8 w-8 rounded-md overflow-hidden">{children}</div>
    </div>
  );
};
