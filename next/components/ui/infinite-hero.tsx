"use client";

import { useGSAP } from "@gsap/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useMemo, useRef } from "react";
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

    const isVisible = uniforms.u_visible.value as boolean;

    useFrame((state) => {
        if (meshRef.current && isVisible) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
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
      if (!u_visible) {
        gl_FragColor = vec4(0.216, 0.255, 0.322, 1.0);
        return;
      }
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
            u_visible: { value: true },
            ...uniforms,
        }),
        [uniforms],
    );

    shaderUniforms.u_visible.value = uniforms.u_visible?.value ?? true;

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
    ctas
}: {
    children?: React.ReactNode,
    title?: string,
    description?: string,
    ctas?: React.ReactNode
}) {
    const rootRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useMemo(() => {
        let visible = true;
        return [visible, (v: boolean) => visible = v] as const;
    }, []);

    const [visibleState, setVisibleState] = React.useState(true);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisibleState(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (rootRef.current) {
            observer.observe(rootRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useGSAP(
        () => {
            const ctasElements = ctaRef.current ? Array.from(ctaRef.current.children) : [];

            // Animation for text (Optimized: removed blur filters as they are slow)
            if (h1Ref.current) gsap.set(h1Ref.current, { opacity: 0, y: 24 });
            if (pRef.current) gsap.set(pRef.current, { opacity: 0, y: 16 });
            if (ctasElements.length) gsap.set(ctasElements, { opacity: 0, y: 16 });

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
            tl.to(
                h1Ref.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                },
                0.3,
            )
                .to(
                    pRef.current,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                    },
                    "-=0.3",
                )
                .to(ctasElements, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.2");

        },
        { scope: rootRef },
    );

    return (
        <div
            ref={rootRef}
            className="relative h-svh w-full overflow-hidden bg-charcoal text-white"
        >
            <div className="absolute inset-0" ref={bgRef}>
                <ShaderBackground
                    className="h-full w-full"
                    uniforms={{ u_visible: { value: visibleState } }}
                />
            </div>

            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_#374152_100%)]" />

            <div className="relative z-10 flex h-svh w-full items-center justify-center px-6">
                {children ? children : (
                    <div className="text-center">
                        <h1
                            ref={h1Ref}
                            className="mx-auto max-w-2xl lg:max-w-4xl text-[clamp(2.25rem,6vw,4rem)] font-extralight leading-[0.95] tracking-tight"
                        >
                            {title || "The road dissolves in light, the horizon remains unseen."}
                        </h1>
                        <p
                            ref={pRef}
                            className="mx-auto mt-4 max-w-2xl md:text-balance text-sm/6 md:text-base/7 font-light tracking-tight text-white/70"
                        >
                            {description || "Minimal structures fade into a vast horizon where presence and absence merge. A quiet tension invites the eye to wander without end."}
                        </p>

                        <div
                            ref={ctaRef}
                            className="mt-8 flex flex-row items-center justify-center gap-4"
                        >
                            {ctas ? ctas : (
                                <>
                                    <button
                                        type="button"
                                        className="group relative overflow-hidden border border-white/30 bg-gradient-to-r from-white/20 to-white/10 px-4 py-2 text-sm rounded-lg font-medium tracking-wide text-white backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-white/50 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 cursor-pointer"
                                    >
                                        Learn more
                                    </button>

                                    <button
                                        type="button"
                                        className="group relative px-4 py-2 text-sm font-medium tracking-wide text-white/90 transition-[filter,color] duration-500 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer"
                                    >
                                        View portfolio
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export { ShaderBackground };
