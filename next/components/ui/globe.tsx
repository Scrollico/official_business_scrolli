'use client';

import React from 'react';

// Temporarily disabled Three.js components due to React version compatibility
// This is a placeholder component

export const Globe = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
        <div className="text-white/60 text-sm">Globe Component</div>
      </div>
    </div>
  );
};

export default Globe;