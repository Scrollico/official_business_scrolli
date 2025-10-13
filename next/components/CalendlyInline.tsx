'use client';

import { useEffect, useRef } from 'react';

type CalendlyInlineProps = {
  url: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function CalendlyInline({ url, style, className }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    const src = 'https://assets.calendly.com/assets/external/widget.js';
    let scriptEl = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.src = src;
      scriptEl.async = true;
      document.head.appendChild(scriptEl);
    }

    // Ensure Calendly initializes after script is present
    const tryInit = () => {
      // @ts-expect-error Calendly global provided by external script
      const Calendly = (window as any).Calendly;
      if (Calendly && containerRef.current && !hasLoadedRef.current) {
        try {
          Calendly.initInlineWidget({
            url,
            parentElement: containerRef.current,
          });
          hasLoadedRef.current = true;
        } catch {}
      }
    };

    if (scriptEl?.readyState === 'complete') {
      tryInit();
    } else {
      scriptEl?.addEventListener('load', tryInit, { once: true });
    }

    return () => {
      // Leave script cached; Calendly manages iframes itself
    };
  }, [url]);

  return (
    <div ref={containerRef} className={className ? className : ''} style={style} suppressHydrationWarning>
      {/* Skeleton while Calendly initializes */}
      {!hasLoadedRef.current && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse w-10 h-10 rounded-full bg-neutral-800" />
        </div>
      )}
    </div>
  );
}


