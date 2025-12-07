'use client';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '../elements/button';
import ShootingStars from '@/components/decorations/shooting-star';
import StarBackground from '@/components/decorations/star-background';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

export function FormNextToSection({
  heading,
  sub_heading,
  form,
  section,
  social_media_icon_links,
}: {
  heading: string;
  sub_heading: string;
  form: any;
  section: any;
  social_media_icon_links: any;
}) {
  useEffect(() => {
    // Load Calendly script idempotently
    const src = 'https://assets.calendly.com/assets/external/widget.js';
    const existing = document.querySelector(`script[src="${src}"]`);
    if (!existing) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    }
    return () => {
      // Keep Calendly script cached; don't remove on unmount to speed re-entry
    };
  }, []);

  const socials = [
    {
      title: 'twitter',
      href: 'https://twitter.com/scrolli',
      icon: (
        <IconBrandX className="h-5 w-5 text-muted  hover:text-neutral-100" />
      ),
    },
    {
      title: 'github',
      href: 'https://github.com/Scrollico/official_business_scrolli/tree/main',
      icon: (
        <IconBrandGithub className="h-5 w-5 text-muted  hover:text-neutral-100" />
      ),
    },
    {
      title: 'linkedin',
      href: 'https://linkedin.com/company/scrolli',
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-muted  hover:text-neutral-100" />
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-6 lg:py-20 lg:flex-none mt-20">
        <div className="mx-auto w-full max-w-xl h-[calc(100vh-8rem)]">
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 p-2 h-full">
            <div
              className="calendly-inline-widget h-full"
              data-url="https://calendly.com/scrolli-info/30min?hide_gdpr_banner=1&primary_color=6c66e5"
              style={{ minWidth: '320px', height: '100%' }}
            ></div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 py-4 mt-6">
            {socials.map((social) => (
              <Link href={social.href} target="_blank" key={social.title}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full z-10 hidden md:flex border-l border-charcoal overflow-hidden bg-neutral-900 items-center justify-center">
        <StarBackground />
        <ShootingStars />
        <div className="max-w-sm mx-auto text-center">
          <h2 className="font-semibold text-xl text-white mb-4">
            {section?.heading || "Why Choose Scrolli?"}
          </h2>
          <div className="space-y-4 text-neutral-300">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Fortune 500 trusted intelligence partner</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>98% client satisfaction rate</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>50+ industries served</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Strategic consulting expertise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
