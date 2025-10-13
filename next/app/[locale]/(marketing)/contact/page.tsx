import { Metadata } from 'next';
import Script from 'next/script';

import { Container } from '@/components/container';
import { AmbientColor } from '@/components/decorations/ambient-color';
import { FeatureIconContainer } from '@/components/dynamic-zone/features/feature-icon-container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import Prism from '@/components/ui/prism';
import CalendlyInline from '@/components/CalendlyInline';

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
    <div className="relative overflow-hidden w-full min-h-screen">
      <AmbientColor />
      
      {/* Full Viewport Split Screen: Calendly Left, Content Right */}
      <div className="w-full min-h-screen pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Calendly Widget (client-only to avoid hydration mismatch) */}
          <div className="min-h-screen bg-black flex items-center justify-center">
            <CalendlyInline
              url="https://calendly.com/scrolli-info/30min"
              style={{ minWidth: '90%', height: '120vh' }}
            />
          </div>

          {/* Right Side - Call Expectations */}
          <div className="min-h-screen flex flex-col justify-center items-center text-center relative bg-black pt-20">
            {/* Prism Background */}
            <div className="absolute inset-0">
              <Prism
                animationType="rotate"
                timeScale={0.3}
                height={2.5}
                baseWidth={4.0}
                scale={2.8}
                hueShift={0.2}
                colorFrequency={0.8}
                noise={0.3}
                glow={0.8}
              />
            </div>
            
            <div className="relative z-10 px-8 py-8">
              <h2 className="text-4xl font-bold text-white mb-12">
                {isTurkish 
                  ? "Bu Görüşmede Neler Bekleyebilirsiniz?" 
                  : "What to Expect from This Call"
                }
              </h2>
              
              <div className="space-y-6 max-w-lg pb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 text-lg">
                    {isTurkish 
                      ? "İş zekası ihtiyaçlarınızın analizi"
                      : "Analysis of your business intelligence needs"
                    }
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 text-lg">
                    {isTurkish 
                      ? "Özelleştirilmiş çözüm önerileri"
                      : "Customized solution recommendations"
                    }
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 text-lg">
                    {isTurkish 
                      ? "Uygulama roadmap'i ve maliyet tahmini"
                      : "Implementation roadmap and cost estimate"
                    }
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300 text-lg">
                    {isTurkish 
                      ? "Soru-cevap oturumu"
                      : "Q&A session"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
