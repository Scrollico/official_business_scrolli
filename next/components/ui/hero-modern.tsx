"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const STYLE_ID = "hero3-animations";

export const HeroOrbitDeck = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof document === "undefined") return;
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.innerHTML = `
      @keyframes hero3-intro {
        0% { opacity: 0; transform: translate3d(0, 64px, 0) scale(0.98); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes hero3-glow {
        0%, 100% { opacity: 0.45; transform: translate3d(0,0,0); }
        50% { opacity: 0.9; transform: translate3d(0,-8px,0); }
      }
      @keyframes hero3-drift {
        0%, 100% { transform: translate3d(0,0,0) rotate(-3deg); }
        50% { transform: translate3d(0,-12px,0) rotate(3deg); }
      }
    `;
        document.head.appendChild(style);
        return () => {
            // Keep styles to avoid flash on re-render if needed, or remove.
            // style.remove();
        };
    }, []);

    useEffect(() => {
        setVisible(true);
    }, []);

    // Hardcoded Scrolli Dark Palette
    const palette = {
        surface: "bg-charcoal text-white",
        subtle: "text-secondary/70",
        border: "border-white/10",
        card: "bg-lightblack/50 backdrop-blur-md", // Translucent dark card
        accent: "bg-white/5",
        glow: "rgba(255,255,255,0.1)",
    };

    const images = {
        executive: "/images/mockups/executive daily.webp",
        market: "/images/mockups/market intelligence.webp",
        content: "/images/mockups/content studio.webp",
        settings: "/images/mockups/settings.webp",
    };

    return (
        <div className={`relative isolate min-h-screen w-full overflow-hidden ${palette.surface}`}>
            {/* Background Effects */}
            <div
                className="pointer-events-none absolute inset-0 -z-30 bg-charcoal"
            />
            <div
                className="pointer-events-none absolute inset-0 -z-20 opacity-30"
                style={{
                    backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* Ambient Glow */}
            <div className="pointer-events-none absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full" />

            <section
                className={`relative flex min-h-screen w-full flex-col gap-12 px-6 py-24 md:px-10 lg:px-16 xl:px-24 ${visible ? "motion-safe:animate-[hero3-intro_1s_cubic-bezier(.22,.68,0,1)_forwards]" : "opacity-0"
                    }`}
            >
                <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="space-y-6 max-w-3xl">
                        <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] ${palette.border} ${palette.accent}`}>
                            Scrolli AI
                        </div>
                        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl text-white">
                            AI Business Suite
                        </h1>
                        <p className={`max-w-2xl text-base md:text-lg ${palette.subtle}`}>
                            The command deck for leaders. Transform noise into narrative, data into decision, and insight into influence.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className={`flex flex-col px-5 py-3 rounded-2xl border ${palette.border} ${palette.card}`}>
                            <span className={`text-[11px] uppercase tracking-wider ${palette.subtle}`}>Status</span>
                            <span className="text-lg font-semibold tracking-tight text-green-400">Live</span>
                        </div>
                    </div>
                </header>

                {/* Custom BENTO Grid Layout for 4 Images */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">

                    {/* Main Feature: Executive Daily (Span 7) */}
                    <div className={`col-span-1 md:col-span-7 relative group overflow-hidden rounded-[32px] border ${palette.border} ${palette.card} h-[400px] md:h-[500px]`}>
                        <div className="absolute inset-x-0 top-0 p-6 z-20 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                            <h3 className="text-xs uppercase tracking-[0.35em] text-white">Executive Daily</h3>
                            <span className="text-white/60 text-xs">01</span>
                        </div>
                        <div className="relative w-full h-full">
                            <Image
                                src={images.executive}
                                alt="Executive Daily Interface"
                                fill
                                className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                            />
                            {/* Overlay effects */}
                            <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[32px] pointer-events-none" />
                        </div>
                    </div>

                    {/* Secondary Feature: Market Intelligence (Span 5) */}
                    <div className={`col-span-1 md:col-span-5 relative group overflow-hidden rounded-[32px] border ${palette.border} ${palette.card} h-[400px] md:h-[500px]`}>
                        <div className="absolute inset-x-0 top-0 p-6 z-20 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent">
                            <h3 className="text-xs uppercase tracking-[0.35em] text-white">Market Intelligence</h3>
                            <span className="text-white/60 text-xs">02</span>
                        </div>
                        <div className="relative w-full h-full">
                            <Image
                                src={images.market}
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
                                src={images.content}
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
                                src={images.settings}
                                alt="Settings Interface"
                                fill
                                className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                </div>

                <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-8">
                    <p className={`text-xs uppercase tracking-[0.2em] ${palette.subtle}`}>
                        Engineered for the truth
                    </p>
                    <p className={`text-xs uppercase tracking-[0.2em] ${palette.subtle}`}>
                        Powered by RAG
                    </p>
                </div>

            </section>
        </div>
    );
};

export default HeroOrbitDeck;
