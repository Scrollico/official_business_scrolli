"use client";

import { cn } from '@/lib/utils'
import { Brain, TrendingUp, ShieldCheck } from 'lucide-react'
import { ReactNode } from 'react'

interface FeaturesProps {
    data: {
        heading: string;
        body: string;
        subheading: string;
        pillars: {
            title: string;
            description: string;
        }[];
    }
}

export function Features({ data }: FeaturesProps) {
    return (
        <section className="bg-charcoal py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20">
                    <div
                        className="mb-6 p-2.5 rounded-lg shadow-sm flex items-center justify-center"
                        style={{ background: 'linear-gradient(to top, #D4CFB8, #F8F5E4, #FEFCF7)' }}
                    >
                        <Brain className="size-6 text-[#111827]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        {data.heading}
                    </h2>
                    <p className="max-w-2xl text-white text-base md:text-lg leading-relaxed mb-6 opacity-80">
                        {data.body}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-white/50">
                        {data.subheading}
                    </h3>
                </div>

                {/* 3-Column Edgy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Predict Card - Using 'Join' Logic */}
                    <FeatureCard>
                        <CardHeading
                            icon={TrendingUp}
                            title={data.pillars[0]?.title || "Predict"}
                            description={data.pillars[0]?.description || ""}
                        />
                        <div className="mt-auto px-8 pb-10 flex justify-center">
                            <CircularUI
                                label="Data Intersection"
                                circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                            />
                        </div>
                    </FeatureCard>

                    {/* Decide Card - Using 'Exclusion' Logic */}
                    <FeatureCard>
                        <CardHeading
                            icon={Brain}
                            title={data.pillars[1]?.title || "Decide"}
                            description={data.pillars[1]?.description || ""}
                        />
                        <div className="mt-auto px-8 pb-10 flex justify-center">
                            <CircularUI
                                label="Noise Filtering"
                                circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                            />
                        </div>
                    </FeatureCard>

                    {/* Lead Card - Using 'Inclusion/Symmetry' Logic */}
                    <FeatureCard>
                        <CardHeading
                            icon={ShieldCheck}
                            title={data.pillars[2]?.title || "Lead"}
                            description={data.pillars[2]?.description || ""}
                        />
                        <div className="mt-auto px-8 pb-10 flex justify-center">
                            <div className="flex gap-4">
                                <CircularUI
                                    label="Inclusion"
                                    circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                                />
                                <CircularUI
                                    label="Symmetry"
                                    circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                                />
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

const FeatureCard = ({ children, className }: { children: ReactNode, className?: string }) => (
    <div className={cn(
        'group relative bg-transparent border border-white/10 transition-all hover:border-white/30 h-full flex flex-col min-h-[380px]',
        className
    )}>
        <CardDecorator />
        {children}
    </div>
)

const CardDecorator = () => (
    <>
        <span className="absolute -left-px -top-px block size-3 border-l-2 border-t-2 border-white"></span>
        <span className="absolute -right-px -top-px block size-3 border-r-2 border-t-2 border-white"></span>
        <span className="absolute -bottom-px -left-px block size-3 border-b-2 border-l-2 border-white"></span>
        <span className="absolute -bottom-px -right-px block size-3 border-b-2 border-r-2 border-white"></span>
    </>
)

const CardHeading = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="p-8">
        <span className="text-white flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase mb-8 opacity-90">
            <Icon className="size-3.5 text-blue-400" />
            {title}
        </span>
        <p className="text-xl lg:text-2xl font-semibold text-white leading-tight">{description}</p>
    </div>
)

const CircularUI = ({ label, circles, className }: { label: string, circles: any[], className?: string }) => (
    <div className={cn("flex flex-col items-center", className)}>
        <div className="size-fit rounded-xl border border-white/10 p-px bg-white/[0.02]">
            <div className="relative flex aspect-square w-fit items-center -space-x-4 p-4">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-8 rounded-full border shadow-2xl sm:size-10', {
                            'bg-transparent border-white/20': circle.pattern === 'none',
                            'border-white/40 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'border',
                            'border-white/60 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.25),rgba(255,255,255,0.25)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'primary',
                            'border-blue-400 bg-[repeating-linear-gradient(-45deg,rgba(59,130,246,0.5),rgba(59,130,246,0.5)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'blue',
                        })}></div>
                ))}
            </div>
        </div>
        <span className="text-white mt-3 block text-center text-[10px] font-bold uppercase tracking-widest opacity-60">{label}</span>
    </div>
)
