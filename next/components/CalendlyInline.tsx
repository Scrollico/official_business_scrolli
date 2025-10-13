'use client';

import { useEffect, useRef } from 'react';

type CalendlyInlineProps = {
  url: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function CalendlyInline({ url, style, className }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      if (Calendly && containerRef.current) {
        try {
          Calendly.initInlineWidget({
            url,
            parentElement: containerRef.current,
          });
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
    <div
      ref={containerRef}
      className={className ? className : 'calendly-inline-widget'}
      data-url={url}
      style={style}
      suppressHydrationWarning
    />
  );
}


