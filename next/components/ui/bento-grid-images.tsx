"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function BentoGridImages({
    images
}: {
    images?: {
        executive: string;
        market: string;
        content: string;
        settings: string;
    }
}) {
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (gridRef.current) gsap.set(gridRef.current, { opacity: 0, y: 50 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            });

            tl.to(gridRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        },
        { scope: gridRef }
    );

    // Hardcoded branding palette
    const palette = {
        border: "border-white/10",
        card: "bg-lightblack/50 backdrop-blur-md",
        subtle: "text-secondary/70",
    };

    const defaultImages = {
        executive: "/images/mockups/executive daily.webp",
        market: "/images/mockups/market intelligence.webp",
        content: "/images/mockups/content studio.webp",
        settings: "/images/mockups/settings.webp",
    };

    const activeImages = images || defaultImages;

    return (
        <section className="relative py-20 w-full flex justify-center px-6 md:px-10 lg:px-16 xl:px-24 bg-charcoal">
            {/* 2. Grid Layout Underneath */}
            <div ref={gridRef} className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Main Feature: Executive Daily (Span 7) */}
                <div className={`col-span-1 md:col-span-7 relative group overflow-hidden rounded-[32px] border ${palette.border} ${palette.card} h-[300px] md:h-[500px]`}>
                    <div className="absolute inset-x-0 top-0 p-6 z-20 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                        <h3 className="text-xs uppercase tracking-[0.35em] text-white">Executive Daily</h3>
                        <span className="text-white/60 text-xs">01</span>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src={activeImages.executive}
                            alt="Executive Daily Interface"
                            fill
                            className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[32px] pointer-events-none" />
                    </div>
                </div>

                {/* Secondary Feature: Market Intelligence (Span 5) */}
                <div className={`col-span-1 md:col-span-5 relative group overflow-hidden rounded-[32px] border ${palette.border} ${palette.card} h-[300px] md:h-[500px]`}>
                    <div className="absolute inset-x-0 top-0 p-6 z-20 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                        <h3 className="text-xs uppercase tracking-[0.35em] text-white">Market Intelligence</h3>
                        <span className="text-white/60 text-xs">02</span>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src={activeImages.market}
                            alt="Market Intelligence Interface"
                            fill
                            className="object-cover object-left-top transition duration-700 ease-out group-hover:scale-[1.02]"
                        />
                    </div>
                </div>

                {/* Third Feature: Content Studio (Span 6) */}
                <div className={`col-span-1 md:col-span-6 relative group overflow-hidden rounded-[32px] border ${palette.border} ${palette.card} h-[300px]`}>
                    <div className="absolute inset-x-0 top-0 p-6 z-20 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                        <h3 className="text-xs uppercase tracking-[0.35em] text-white">Content Studio</h3>
                        <span className="text-white/60 text-xs">03</span>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src={activeImages.content}
                            alt="Content Studio Interface"
                            fill
                            className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                        />
                    </div>
                </div>

                {/* Fourth Feature: Settings (Span 6) */}
                <div className={`col-span-1 md:col-span-6 relative group overflow-hidden rounded-[32px] border ${palette.border} ${palette.card} h-[300px]`}>
                    <div className="absolute inset-x-0 top-0 p-6 z-20 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                        <h3 className="text-xs uppercase tracking-[0.35em] text-white">Settings & Control</h3>
                        <span className="text-white/60 text-xs">04</span>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src={activeImages.settings}
                            alt="Settings Interface"
                            fill
                            className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
