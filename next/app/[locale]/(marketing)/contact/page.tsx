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
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

            {/* Right Side - Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {isTurkish ? "İletişim Bilgileri" : "Contact Information"}
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconMail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isTurkish ? "E-posta" : "Email"}
                  </h3>
                  <p className="text-neutral-400 mb-4">
                    info@scrolli.com
                  </p>
                  <a
                    href="mailto:info@scrolli.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    {isTurkish ? "E-posta Gönder" : "Send Email"}
                  </a>
                </div>

                {/* Phone */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconPhone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isTurkish ? "Telefon" : "Phone"}
                  </h3>
                  <p className="text-neutral-400 mb-4">
                    +1 (555) 123-4567
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    {isTurkish ? "Ara" : "Call"}
                  </a>
                </div>

                {/* Location */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconMapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {isTurkish ? "Konum" : "Location"}
                  </h3>
                  <p className="text-neutral-400 mb-4">
                    {isTurkish ? "İstanbul, Türkiye" : "Istanbul, Turkey"}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/example"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isTurkish ? "Haritada Görüntüle" : "View on Map"}
                  </a>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  {isTurkish ? "Hızlı İletişim" : "Quick Contact"}
                </h3>
                <p className="text-neutral-400 text-center text-sm">
                  {isTurkish 
                    ? "Randevu planlamak istemiyorsanız, doğrudan iletişime geçebilirsiniz."
                    : "If you prefer not to schedule, you can contact us directly."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
