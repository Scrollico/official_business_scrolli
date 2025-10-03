import { Metadata } from 'next';

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconMail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {isTurkish ? "E-posta" : "Email"}
            </h3>
            <p className="text-neutral-400">
              info@scrolli.com
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconPhone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {isTurkish ? "Telefon" : "Phone"}
            </h3>
            <p className="text-neutral-400">
              +1 (555) 123-4567
            </p>
          </div>

          {/* Location */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconMapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {isTurkish ? "Konum" : "Location"}
            </h3>
            <p className="text-neutral-400">
              {isTurkish ? "İstanbul, Türkiye" : "Istanbul, Turkey"}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {isTurkish ? "Bizimle İletişime Geçin" : "Get In Touch"}
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    {isTurkish ? "Ad" : "Name"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isTurkish ? "Adınız" : "Your name"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    {isTurkish ? "E-posta" : "Email"}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isTurkish ? "E-posta adresiniz" : "Your email"}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  {isTurkish ? "Konu" : "Subject"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={isTurkish ? "Mesaj konusu" : "Message subject"}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  {isTurkish ? "Mesaj" : "Message"}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder={isTurkish ? "Mesajınızı yazın..." : "Write your message..."}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {isTurkish ? "Mesaj Gönder" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
