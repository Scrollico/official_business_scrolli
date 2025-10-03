import { Metadata } from 'next';
import Script from 'next/script';

import { Container } from '@/components/container';
import { AmbientColor } from '@/components/decorations/ambient-color';
import { FeatureIconContainer } from '@/components/dynamic-zone/features/feature-icon-container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

export async function generateStaticParams() {
  // Return supported locales for static export
  return [
    { locale: 'en' },
    { locale: 'tr' }
  ];
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const metadata = generateMetadataObject({
    metaTitle: params.locale === 'tr' ? "İletişim - Scrolli" : "Contact - Scrolli",
    metaDescription: params.locale === 'tr' 
      ? "Scrolli ile iletişime geçin. Stratejik istihbarat ve iş zekası hizmetleri için bizimle iletişime geçin."
      : "Get in touch with Scrolli. Contact us for strategic intelligence and business intelligence services.",
    keywords: "contact, business intelligence, strategic intelligence, consultation"
  });
  return metadata;
}

export default async function Contact(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const isTurkish = params.locale === 'tr';

  return (
    <div className="relative overflow-hidden w-full">
      <AmbientColor />
      <Container className="pt-40 pb-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconMail className="h-6 w-6 text-white" />
        </FeatureIconContainer>
        <Heading as="h1" className="pt-4">
          {isTurkish ? "İletişim" : "Contact"}
        </Heading>
        <Subheading className="max-w-3xl mx-auto">
          {isTurkish 
            ? "Scrolli ile iletişime geçin. Stratejik istihbarat ve iş zekası hizmetleri için bizimle iletişime geçin."
            : "Get in touch with Scrolli. Contact us for strategic intelligence and business intelligence services."
          }
        </Subheading>


        {/* Calendly Integration */}
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-10 xl:px-4">
            {/* Left Side - Calendly Widget */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Calendly Widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/scrolli-info/30min" 
                style={{ minWidth: '320px', height: '700px' }}
              >
              </div>
              <Script 
                src="https://assets.calendly.com/assets/external/widget.js" 
                strategy="afterInteractive"
              />
            </div>

            {/* Right Side - Trust & Testimonials */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col justify-center">
              {/* Profile Images */}
              <div className="flex justify-center mb-8">
                <div className="flex -space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AA</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-600 border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">GK</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SM</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JD</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-green-600 border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MR</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 border-2 border-white/20 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LS</span>
                  </div>
                </div>
              </div>

              {/* Trust Statement */}
              <h2 className="text-3xl font-bold text-white text-center mb-6">
                {isTurkish 
                  ? "Scrolli binlerce iş lideri tarafından güveniliyor" 
                  : "Scrolli is trusted by thousands of business leaders"
                }
              </h2>

              {/* Call to Action */}
              <p className="text-neutral-400 text-center text-lg leading-relaxed">
                {isTurkish 
                  ? "Fikirlerini gerçeğe dönüştürmek için Scrolli'yi kullanan başarılı girişimcilerin arasına katılın."
                  : "Join the ranks of successful entrepreneurs who have used Scrolli to turn their ideas into reality."
                }
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-neutral-400">
                    {isTurkish ? "Proje" : "Projects"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-neutral-400">
                    {isTurkish ? "Memnuniyet" : "Satisfaction"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-neutral-400">
                    {isTurkish ? "Sektör" : "Industries"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
