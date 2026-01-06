import { Metadata } from 'next';
import Link from 'next/link';
import { TbBrain, TbCalendar, TbChartBar, TbPencil, TbSettings } from 'react-icons/tb';

import { Button } from '@/components/elements/button';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { FeatureIconContainer } from '@/components/dynamic-zone/features/feature-icon-container';
import InfiniteBackground from '@/components/ui/infinite-background';
import { AmbientColor } from '@/components/decorations/ambient-color';
import { getAIBusinessSuiteData } from '@/lib/data/ai-business-suite';
import { generateMetadataObject } from '@/lib/shared/metadata';

export async function generateMetadata(props: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const params = await props.params;
    const pageData = getAIBusinessSuiteData(params.locale);
    const metadata = generateMetadataObject(pageData.seo, params.locale, '/services/ai-business-suite');
    return metadata;
}

const iconMap: Record<string, React.ReactNode> = {
    calendar: <TbCalendar className="h-6 w-6 text-white" />,
    chart: <TbChartBar className="h-6 w-6 text-white" />,
    pen: <TbPencil className="h-6 w-6 text-white" />,
    settings: <TbSettings className="h-6 w-6 text-white" />,
};

export default async function AIBusinessSuitePage(props: {
    params: Promise<{ locale: string }>;
}) {
    const params = await props.params;
    const { locale } = params;
    const data = getAIBusinessSuiteData(locale);

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center bg-charcoal">
                <InfiniteBackground />
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight">
                        {data.hero.headline}
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-secondary/80 font-light">
                        {data.hero.subheadline}
                    </p>
                    <p className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        {data.hero.body}
                    </p>
                    <div className="mt-8">
                        <Button as={Link} href={data.hero.cta.url} variant="primary" target="_blank">
                            {data.hero.cta.text}
                        </Button>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent z-10 pointer-events-none" />
            </section>

            {/* Decision Section */}
            <section className="relative py-20 md:py-32 bg-charcoal">
                <AmbientColor />
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <FeatureIconContainer className="flex justify-center items-center overflow-hidden mx-auto">
                        <TbBrain className="h-6 w-6 text-white" />
                    </FeatureIconContainer>
                    <Heading className="pt-4">{data.decision.heading}</Heading>
                    <Subheading className="max-w-3xl mx-auto">{data.decision.body}</Subheading>

                    <h3 className="mt-16 text-2xl md:text-3xl font-semibold text-white">
                        {data.decision.subheading}
                    </h3>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.decision.pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-elevated/50 border border-white/10 backdrop-blur-sm"
                            >
                                <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                                <p className="mt-2 text-muted">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-20 md:py-32 bg-lightblack">
                <div className="max-w-6xl mx-auto px-6">
                    <Heading className="text-center">{data.features.heading}</Heading>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.features.items.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-charcoal border border-white/10 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5"
                            >
                                <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
                                    {iconMap[feature.icon] || <TbSettings className="h-6 w-6 text-white" />}
                                </FeatureIconContainer>
                                <h4 className="mt-4 text-xl font-bold text-white">{feature.title}</h4>
                                <p className="mt-1 text-sm text-secondary/70 italic">"{feature.tagline}"</p>
                                <p className="mt-3 text-muted">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RAG Section */}
            <section className="relative py-20 md:py-32 bg-charcoal">
                <AmbientColor />
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FeatureIconContainer className="flex justify-center items-center overflow-hidden mx-auto">
                        <TbBrain className="h-6 w-6 text-white" />
                    </FeatureIconContainer>
                    <Heading className="pt-4">{data.rag.heading}</Heading>
                    <Subheading>{data.rag.subheading}</Subheading>

                    <div className="mt-10 text-left text-muted leading-relaxed whitespace-pre-line max-w-3xl mx-auto">
                        {data.rag.body}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-20 md:py-32 bg-lightblack">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Heading>{locale === 'tr' ? 'Başlamaya Hazır mısınız?' : 'Ready to Get Started?'}</Heading>
                    <Subheading>
                        {locale === 'tr'
                            ? 'Scrolli AI Business Suite ile belirsizlikte stratejik netlik yakalayın.'
                            : 'Gain strategic clarity in uncertainty with Scrolli AI Business Suite.'}
                    </Subheading>
                    <div className="mt-8">
                        <Button as={Link} href={data.hero.cta.url} variant="primary" target="_blank">
                            {data.hero.cta.text}
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
