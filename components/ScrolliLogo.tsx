
import React from 'react';

interface ScrolliLogoProps {
  className?: string;
}

/**
 * ScrolliLogo component that renders the brand icon.
 * Updated to a slightly larger but still refined scale.
 */
export const ScrolliLogo: React.FC<ScrolliLogoProps> = ({ className = "h-9" }) => (
  <div className="flex items-center justify-center">
    <img 
      src="https://i.ibb.co/F4kJfRY2/image.png" 
      alt="Scrolli Icon" 
      className={`${className} w-auto object-contain transition-opacity duration-500 hover:opacity-80`}
      style={{ display: 'block' }}
      onError={(e) => {
        const img = e.currentTarget;
        // If the direct link fails, fallback to the previous known good icon.
        if (img.src !== "https://i.ibb.co/ymp4m42X/image.png") {
           img.src = "https://i.ibb.co/ymp4m42X/image.png";
        } else {
          img.style.display = 'none';
          const parent = img.parentElement;
          if (parent && !parent.querySelector('.logo-fallback')) {
            const fallback = document.createElement('div');
            fallback.className = 'logo-fallback flex flex-col gap-0.5 items-center justify-center';
            fallback.innerHTML = `
              <div class="w-4 h-0.5 bg-white"></div>
              <div class="w-4 h-0.5 bg-white/60"></div>
              <div class="w-4 h-0.5 bg-white/30"></div>
            `;
            parent.appendChild(fallback);
          }
        }
      }}
    />
  </div>
);

export default ScrolliLogo;
