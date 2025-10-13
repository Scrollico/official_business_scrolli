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

  useEffect(() => {
    const src = 'https://assets.calendly.com/assets/external/widget.js';
    let scriptEl = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.src = src;
      scriptEl.async = true;
      document.head.appendChild(scriptEl);
    }

    let retries = 0;
    const maxRetries = 10;
    const retryDelayMs = 300;

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

    if ((scriptEl as any)?.readyState === 'complete') {
      tryInit();
    } else {
      scriptEl?.addEventListener('load', tryInit, { once: true });
      setTimeout(tryInit, retryDelayMs);
    }

    return () => {
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


