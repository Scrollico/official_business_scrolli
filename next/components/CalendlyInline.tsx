'use client';

import { useEffect, useRef, useState } from 'react';

type CalendlyInlineProps = {
  url: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function CalendlyInline({ url, style, className }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [initialized, setInitialized] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Use Intersection Observer to start loading when component is about to be visible
    const startLoading = () => {
      const src = 'https://assets.calendly.com/assets/external/widget.js';
      let scriptEl = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
      
      // Check if Calendly is already available (script already loaded)
      // @ts-expect-error Calendly global provided by external script
      const Calendly = (window as any).Calendly;
      if (Calendly && containerRef.current && !initialized) {
        try {
          Calendly.initInlineWidget({
            url,
            parentElement: containerRef.current,
          });
          setInitialized(true);
          return;
        } catch {}
      }

      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.src = src;
        scriptEl.async = true;
        // Add fetchpriority for faster loading
        scriptEl.setAttribute('fetchpriority', 'high');
        document.head.appendChild(scriptEl);
      }

      let retries = 0;
      const maxRetries = 15;
      const retryDelayMs = 100; // Reduced from 300ms to 100ms for faster retries

      const tryInit = () => {
        // @ts-expect-error Calendly global provided by external script
        const Calendly = (window as any).Calendly;
        if (Calendly && containerRef.current && !initialized) {
          try {
            Calendly.initInlineWidget({
              url,
              parentElement: containerRef.current,
            });
            setInitialized(true);
            return;
          } catch {}
        }
        if (!initialized && retries < maxRetries) {
          retries += 1;
          setTimeout(tryInit, retryDelayMs);
        }
      };

      // Try immediately if script is already loaded
      if ((scriptEl as any)?.readyState === 'complete' || Calendly) {
        tryInit();
      } else {
        scriptEl?.addEventListener('load', tryInit, { once: true });
        // Start trying immediately instead of waiting
        tryInit();
      }
    };

    // Check if component is already visible, if so start loading immediately
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
      
      if (isVisible) {
        // Component is already visible or about to be visible, start loading immediately
        startLoading();
      } else if (typeof IntersectionObserver !== 'undefined') {
        // Use Intersection Observer to start loading when component is about to be visible
        observerRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !initialized) {
                startLoading();
                // Stop observing once we start loading
                if (observerRef.current && containerRef.current) {
                  observerRef.current.unobserve(containerRef.current);
                }
              }
            });
          },
          {
            rootMargin: '200px', // Start loading 200px before component is visible
            threshold: 0.01,
          }
        );

        observerRef.current.observe(containerRef.current);
      } else {
        // Fallback: start loading immediately if IntersectionObserver is not available
        startLoading();
      }
    } else {
      // Fallback: start loading immediately
      startLoading();
    }

    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
      // keep script cached
    };
  }, [url, initialized]);

  return (
    <div
      ref={containerRef}
      className={className ? className : 'calendly-inline-widget'}
      data-url={url}
      style={style}
      suppressHydrationWarning
    >
      {!initialized && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse w-10 h-10 rounded-full bg-neutral-800" />
        </div>
      )}
    </div>
  );
}


