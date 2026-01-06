"use client";

import { ShaderBackground } from "./infinite-hero";

export default function InfiniteBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <ShaderBackground className="h-full w-full" />
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_#374152_100%)]" />
        </div>
    );
}
