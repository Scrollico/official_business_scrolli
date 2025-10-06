import { Metadata } from 'next';

import { FAQ } from '@/components/dynamic-zone/faq';

export const metadata: Metadata = {
  title: 'SSS - Scrolli',
  description: 'Scrolli hizmetleri hakkında sık sorulan sorular',
};

// FAQ data for Turkish
const turkishFAQs = [
  {
    question: 'Scrolli\'nin hizmetleri nelerdir?',
    answer: 'Scrolli, AI destekli stratejik istihbarat, pazar analizi, içerik geliştirme ve stratejik iletişim hizmetleri sunar. Executive Daily, AI Content Studio, Market Intelligence ve Trusted AI Infrastructure gibi kapsamlı çözümlerimiz bulunmaktadır.'
  },
  {
    question: 'Hangi sektörlerde hizmet veriyorsunuz?',
    answer: 'Teknoloji, finans, enerji, sağlık, perakende, üretim ve daha birçok sektörde hizmet veriyoruz. Küresel işletmeler, politika yapıcılar ve inovasyon liderleri tarafından güveniliyoruz.'
  },
  {
    question: 'AI Content Studio nasıl çalışır?',
    answer: 'AI Content Studio, saniyeler içinde doğru kanala uygun yönetici düzeyinde içerik üretir. Makale ve bülten formatlarında, LinkedIn ve e-posta kanalları için özelleştirilmiş içerik oluşturabilirsiniz.'
  },
  {
    question: 'Market Intelligence hizmetiniz nedir?',
    answer: 'Gelişmiş trend takibi, erken sinyal tespiti ve tahmine dayalı senaryo modelleme ile stratejik kararlarınızı yönlendirir. Gerçek zamanlı pazar analizi ve sektörel içgörüler sunarız.'
  },
  {
    question: 'Executive Daily nasıl çalışır?',
    answer: 'Yöneticileri her sabah önde tutmak için AI küratörlüğünde günlük brifingler, kişiselleştirilmiş podcastler ve tek tıkla dışa aktarma özelliği sunar.'
  },
  {
    question: 'Güvenilir AI Altyapısı nedir?',
    answer: 'Dezenformasyonu önlemek, güvenilirliği sağlamak ve doğrulanmış istihbarat sunmak için RAG tabanlı sistemlerle geliştirilmiş sürekli evrimleşen AI altyapısıdır.'
  },
  {
    question: 'Hizmetleriniz için fiyatlandırma nasıl?',
    answer: 'Stratejik hedeflerinizle uyumlu istihbarat paketleri sunuyoruz. Kurulu şirketler için kapsamlı istihbarat çözümlerimiz custom pricing ile belirlenir. Detaylı bilgi için ücretsiz strateji görüşmesi alabilirsiniz.'
  },
  {
    question: 'Nasıl iletişime geçebilirim?',
    answer: 'Ücretsiz 30 dakikalık strateji görüşmesi için iletişim sayfamızdan bize ulaşabilirsiniz. Ayrıca Alara AI platformumuzu da inceleyebilirsiniz.'
  }
];

// FAQ data for English
const englishFAQs = [
  {
    question: 'What services does Scrolli offer?',
    answer: 'Scrolli provides AI-powered strategic intelligence, market analysis, content development, and strategic communication services. We offer comprehensive solutions including Executive Daily, AI Content Studio, Market Intelligence, and Trusted AI Infrastructure.'
  },
  {
    question: 'Which industries do you serve?',
    answer: 'We serve technology, finance, energy, healthcare, retail, manufacturing, and many other sectors. We are trusted by global enterprises, policy makers, and innovation leaders.'
  },
  {
    question: 'How does AI Content Studio work?',
    answer: 'AI Content Studio generates executive-grade content tailored to the right channel in seconds. You can create customized content in article and newsletter formats for LinkedIn and email channels.'
  },
  {
    question: 'What is your Market Intelligence service?',
    answer: 'Advanced trend tracking, early signal detection, and predictive scenario modeling to guide strategic decisions. We provide real-time market analysis and industry insights.'
  },
  {
    question: 'How does Executive Daily work?',
    answer: 'AI-curated daily briefings, personalized podcasts, and one-click exports to keep executives ahead every morning.'
  },
  {
    question: 'What is Trusted AI Infrastructure?',
    answer: 'A continuously evolving AI foundation, enhanced with RAG-based systems to prevent disinformation, ensure reliability, and deliver verified intelligence.'
  },
  {
    question: 'How is pricing structured for your services?',
    answer: 'We offer intelligence packages that align with your strategic objectives. Our comprehensive intelligence solutions for established companies are custom-priced. You can get a free strategy call for detailed information.'
  },
  {
    question: 'How can I get in touch?',
    answer: 'You can reach us through our contact page for a free 30-minute strategy call. You can also explore our Alara AI platform.'
  }
];

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  const isTurkish = locale === 'tr';
  const faqs = isTurkish ? turkishFAQs : englishFAQs;
  
  const heading = isTurkish ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions';
  const subHeading = isTurkish 
    ? 'Scrolli hizmetleri hakkında merak ettiğiniz her şey'
    : 'Everything you need to know about Scrolli services';

  return (
    <div className="min-h-screen bg-charcoal">
      <FAQ 
        heading={heading}
        sub_heading={subHeading}
        faqs={faqs}
      />
    </div>
  );
}
