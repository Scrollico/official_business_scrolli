'use client';

import React from 'react';

import { cn } from '@/lib/utils';

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  /**
   * 0.1 - slower
   * 1.0 - faster
   */
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn('h-full relative bg-white w-full', containerClassName)}>
      <div className="h-full w-full">
        {/* Temporarily disabled Three.js component */}
        <div className="h-full w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

// Three.js components temporarily disabled due to React version compatibility issues
