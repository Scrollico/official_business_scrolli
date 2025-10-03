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


        {/* Contact Form & Trust Section */}
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-10 xl:px-4">
            {/* Left Side - Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                {isTurkish ? "İletişim" : "Contact Us"}
              </h2>
              <p className="text-neutral-400 mb-8">
                {isTurkish 
                  ? "Bizimle iletişime geçin, size en kısa sürede dönüş yapalım."
                  : "Please reach out to us and we will get back to you at the speed of light."
                }
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                    {isTurkish ? "Ad Soyad" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    defaultValue="Manu Arora"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {isTurkish ? "E-posta Adresi" : "Email address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue="hello@scrolli.com"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    {isTurkish ? "Şirket" : "Company"}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    defaultValue="Scrolli"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    {isTurkish ? "Mesaj" : "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={isTurkish ? "Mesajınızı buraya yazın" : "Enter your message here"}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors duration-300"
                >
                  {isTurkish ? "Gönder" : "Submit"}
                </button>
              </form>
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
