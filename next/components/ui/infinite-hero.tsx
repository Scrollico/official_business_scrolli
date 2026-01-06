"use client";

import { useGSAP } from "@gsap/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useMemo, useRef } from "react";
import Image from "next/image";
import * as THREE from "three";

// SplitText is a GSAP Premium plugin. 
// We'll use a simple implementation for the animation to avoid dependency issues.

interface ShaderPlaneProps {
    vertexShader: string;
    fragmentShader: string;
    uniforms: { [key: string]: { value: unknown } };
}

function ShaderPlane({
    vertexShader,
    fragmentShader,
    uniforms,
}: ShaderPlaneProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const { size } = useThree();

    const localTime = useRef(0);

    useFrame((state, delta) => {
        if (meshRef.current) {
            localTime.current += delta;
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.u_time.value = localTime.current * 0.5;
            material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
                depthTest={false}
                depthWrite={false}
            />
        </mesh>
    );
}

interface ShaderBackgroundProps {
    vertexShader?: string;
    fragmentShader?: string;
    uniforms?: { [key: string]: { value: unknown } };
    className?: string;
}

function ShaderBackground({
    vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
    gl_Position = vec4(position, 1.0);
    }
  `,
    fragmentShader = `
    precision mediump float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform bool u_visible;

    #define STEP 64
    #define EPS .01

    float smin( float a, float b, float k )
    {
        float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
        return mix( b, a, h ) - k*h*(1.0-h);
    }

    const mat2 m = mat2(.8,.6,-.6,.8);

    float noise( in vec2 x )
    {
      return sin(1.5*x.x)*sin(1.5*x.y);
    }

    float fbm6( vec2 p )
    {
        float f = 0.0;
        f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;
        f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;
        f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;
        f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;
        f += 0.015625*(0.5+0.5*noise( p ));
        return f/0.96875;
    }


    mat2 getRot(float a)
    {
        float sa = sin(a), ca = cos(a);
        return mat2(ca,-sa,sa,ca);
    }


    vec3 _position;

    float sphere(vec3 center, float radius)
    {
        return distance(_position,center) - radius;
    }

    float swingPlane(float height)
    {
        vec3 pos = _position + vec3(0.,0.,u_time * 5.5);
        float def =  fbm6(pos.xz * .25) * 0.5;
        
        float way = pow(abs(pos.x) * 34. ,2.5) *.0000125;
        def *= way;
        
        float ch = height + def;
        return max(pos.y - ch,0.);
    }

    float map(vec3 pos)
    {
        _position = pos;
        
        float dist;
        dist = swingPlane(0.);
        
        float sminFactor = 5.25;
        dist = smin(dist,sphere(vec3(0.,-15.,80.),60.),sminFactor);
        return dist;
    }


    vec3 getNormal(vec3 pos)
    {
        vec3 nor = vec3(0.);
        vec3 vv = vec3(0.,1.,-1.)*.01;
        nor.x = map(pos + vv.zxx) - map(pos + vv.yxx);
        nor.y = map(pos + vv.xzx) - map(pos + vv.xyx);
        nor.z = map(pos + vv.xxz) - map(pos + vv.xxy);
        nor /= 2.;
        return normalize(nor);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      vec2 uv = (fragCoord.xy-.5*u_resolution.xy)/u_resolution.y;
        
        vec3 rayOrigin = vec3(uv + vec2(0.,6.), -1. );
        
        vec3 rayDir = normalize(vec3(uv , 1.));
        
        rayDir.zy = getRot(.15) * rayDir.zy;
        
        vec3 position = rayOrigin;
        
        
        float curDist;
        int nbStep = 0;
        
        for(; nbStep < STEP;++nbStep)
        {
            curDist = map(position); // Removed iChannel0 texture lookup
            
            if(curDist < EPS)
                break;
            position += rayDir * curDist * .5;
        }
        
        float f;
                
        float dist = distance(rayOrigin,position);
        f = dist /(98.);
        f = float(nbStep) / float(STEP);
        
        f *= .9;
        
        // Brand colors matching the system
        // Charcoal: #374152 (0.216, 0.255, 0.322)
        // Lightblack: #1C1C1C (0.11, 0.11, 0.11)
        // Secondary: #E6E6E6 (0.902, 0.902, 0.902)
        
        vec3 colorBg = vec3(0.216, 0.255, 0.322); // #374152 (charcoal)
        vec3 colorMid = vec3(0.11, 0.11, 0.11); // #1C1C1C (lightblack)
        vec3 colorHighlight = vec3(0.902, 0.902, 0.902); // #E6E6E6 (secondary)
        
        vec3 col = mix(colorBg, colorMid, f);
        col = mix(col, colorHighlight, pow(f, 6.0) * 0.4);
                
        fragColor = vec4(col,1.0);
    }
    void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
    }
  `,
    uniforms = {},
    className = "w-full h-full",
}: ShaderBackgroundProps) {
    const shaderUniforms = useMemo(
        () => ({
            u_time: { value: 0 },
            u_resolution: { value: new THREE.Vector3(1, 1, 1) },
            ...uniforms,
        }),
        [uniforms],
    );

    return (
        <div className={className}>
            <Canvas
                className={className}
                dpr={[1, 1.5]}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <ShaderPlane
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={shaderUniforms}
                />
            </Canvas>
        </div>
    );
}

export default function InfiniteHero({
    children,
    title,
    description,
    ctas,
    images
}: {
    children?: React.ReactNode,
    title?: string,
    description?: string,
    ctas?: React.ReactNode,
    images?: {
        executive: string;
        market: string;
        content: string;
        settings: string;
    }
}) {
    const rootRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);


    useGSAP(
        () => {
            // Initial states
            if (textRef.current) gsap.set(textRef.current, { opacity: 0, y: 30 });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
            }, 0.2);

        },
        { scope: rootRef },
    );

    // Hardcoded branding palette
    const palette = {
        border: "border-white/10",
        card: "bg-lightblack/50 backdrop-blur-md",
        subtle: "text-secondary/70",
    };

    return (
        <div
            ref={rootRef}
            className="relative h-svh w-full overflow-hidden bg-charcoal text-white"
        >
            <div className="absolute inset-0 z-0" ref={bgRef}>
                <ShaderBackground
                    className="h-full w-full"
                />
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_#374152_100%)]" />

            <div className="relative z-10 flex h-svh w-full items-center justify-center px-6">

                {/* 1. Header Section (Title/Desc) */}
                <div ref={textRef} className="w-full max-w-7xl flex flex-col items-center text-center gap-6">
                    <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] ${palette.border} bg-white/5`}>
                        Scrolli AI
                    </div>
                    <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {title || "AI Business Suite"}
                    </h1>
                    <p className={`max-w-2xl text-base md:text-lg ${palette.subtle}`}>
                        {description || "The command deck for leaders. Transform noise into narrative, data into decision, and insight into influence."}
                    </p>

                    {/* Optional CTAs */}
                    {ctas && (
                        <div className="flex gap-4 mt-4">
                            {ctas}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export { ShaderBackground };
