import { globalData } from './global';
import { homepageData } from './homepage';

// Mock data for articles (you can expand this with real content)
export const articlesData = [
  {
    id: 1,
    slug: "strategic-intelligence-framework",
    title: "Strategic Intelligence Framework for Modern Organizations",
    description: "Learn how to implement a comprehensive strategic intelligence framework to drive organizational success.",
    content: "This is a comprehensive guide on how to implement strategic intelligence frameworks...",
    createdAt: "2024-08-07T10:40:21.837Z",
    updatedAt: "2024-09-25T09:02:37.707Z",
    publishedAt: "2024-09-25T09:02:37.755Z",
    locale: "en",
    dynamic_zone: [],
    image: {
      url: "/images/blog/strategic-intelligence.jpg",
      alternativeText: "Strategic Intelligence Framework"
    },
    categories: [
      { name: "Strategic Intelligence" }
    ],
    seo: {
      metaTitle: "Strategic Intelligence Framework - Scrolli Research",
      metaDescription: "Learn how to implement a comprehensive strategic intelligence framework to drive organizational success.",
      metaImage: {
        url: "/images/blog/strategic-intelligence.jpg",
        alt: "Strategic Intelligence Framework"
      }
    }
  },
  {
    id: 2,
    slug: "market-analysis-best-practices",
    title: "Market Analysis Best Practices for Business Intelligence",
    description: "Discover advanced methodologies for conducting market analysis and competitive intelligence.",
    content: "In this article, we'll explore advanced methodologies for market analysis...",
    createdAt: "2024-08-07T10:40:21.837Z",
    updatedAt: "2024-09-25T09:02:37.707Z",
    publishedAt: "2024-09-25T09:02:37.755Z",
    locale: "en",
    dynamic_zone: [],
    image: {
      url: "/images/blog/market-analysis.jpg",
      alternativeText: "Market Analysis Best Practices"
    },
    categories: [
      { name: "Market Analysis" }
    ],
    seo: {
      metaTitle: "Market Analysis Best Practices - Scrolli Research",
      metaDescription: "Discover advanced methodologies for conducting market analysis and competitive intelligence.",
      metaImage: {
        url: "/images/blog/market-analysis.jpg",
        alt: "Market Analysis Best Practices"
      }
    }
  }
];

// Mock data for services
export const productsData = [
  {
    id: 1,
    slug: "strategic-intelligence-suite",
    name: "Strategic Intelligence Suite",
    price: 15000,
    description: "Comprehensive strategic intelligence platform with advanced analytics, market research, and competitive intelligence capabilities.",
    featured: false,
    createdAt: "2024-08-07T14:37:26.800Z",
    updatedAt: "2024-09-12T10:40:42.599Z",
    publishedAt: "2024-09-12T10:40:42.626Z"
  },
  {
    id: 2,
    slug: "business-intelligence-pro",
    name: "Business Intelligence Pro",
    price: 5000,
    description: "Professional business intelligence service with market analysis, strategic consulting, and data-driven insights for growing organizations.",
    featured: true,
    createdAt: "2024-08-07T14:33:49.508Z",
    updatedAt: "2024-09-12T10:40:52.601Z",
    publishedAt: "2024-09-12T10:40:52.666Z"
  }
];

// Mock data for pages
export const pagesData = [
  {
    id: 1,
    slug: "homepage",
    seo: homepageData.en.seo,
    dynamic_zone: homepageData.en.dynamic_zone,
    locale: "en"
  },
  {
    id: 6,
    slug: "faq",
    seo: {
      metaTitle: "FAQ - Scrolli Strategic Intelligence",
      metaDescription: "Frequently asked questions about Scrolli's services, research, process, and engagement.",
      metaImage: { url: "/images/scrolli.jpg", alt: "Scrolli FAQ" }
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.faq",
        heading: "Frequently Asked Questions",
        sub_heading: "Answers about our intelligence services, process, and engagement.",
        faqs: [
          { question: "What is Scrolli?", answer: "Scrolli is a strategic intelligence studio providing market research, competitive analysis, and decision-grade insights for executives and investors." },
          { question: "Who is Scrolli for?", answer: "Decision-makers at startups, scaleups, and enterprises who need clarity for bets, expansion, or GTM." },
          { question: "What deliverables do you provide?", answer: "Executive briefs, dashboards, deep-dive reports, market maps, investment memos, and on-demand advisory." },
          { question: "How fast can we start?", answer: "Typically within 3–5 business days after scoping. Urgent programs can start sooner." },
          { question: "How do we engage?", answer: "Project-based or ongoing partnerships. Book a discovery call to craft the right engagement." }
        ]
      },
      {
        __component: "dynamic-zone.cta",
        heading: "Still have questions?",
        sub_heading: "Book a 30‑minute discovery call with our team.",
        CTAs: [
          { text: "Schedule Consultation", URL: "/contact", variant: "primary" }
        ]
      }
    ],
    locale: "en"
  },
  {
    id: 2,
    slug: "pricing",
    seo: {
      metaTitle: "Strategic Intelligence Packages - Scrolli",
      metaDescription: "Choose the perfect intelligence package for your strategic needs with Scrolli's flexible pricing options.",
      metaImage: {
        url: "/images/pricing.jpg",
        alt: "Scrolli Pricing"
      }
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.pricing",
        heading: "Strategic Intelligence Packages",
        sub_heading: "Choose the intelligence package that aligns with your strategic objectives.",
        plans: (homepageData.en.dynamic_zone.find(zone => zone.__component === "dynamic-zone.pricing") as any)?.plans || []
      }
    ],
    locale: "en"
  },
  {
    id: 3,
    slug: "contact",
    seo: {
      metaTitle: "Contact Us - Scrolli Strategic Intelligence",
      metaDescription: "Get in touch with Scrolli for strategic intelligence, business consulting, and research services. Schedule a consultation today.",
      metaImage: {
        url: "/images/contact.jpg",
        alt: "Contact Scrolli"
      }
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.form-next-to-section",
        heading: "Schedule a Strategic Consultation",
        sub_heading: "Book a consultation with our business intelligence experts to discuss your strategic challenges and opportunities.",
        form: {
          inputs: [
            {
              type: "text",
              name: "Full Name",
              placeholder: "Enter your full name"
            },
            {
              type: "email",
              name: "Email address",
              placeholder: "Enter your email address"
            },
            {
              type: "text",
              name: "Company",
              placeholder: "Enter your company name"
            },
            {
              type: "textarea",
              name: "Message",
              placeholder: "Tell us about your strategic challenges and how we can help"
            },
            {
              type: "submit",
              name: "Schedule Consultation"
            }
          ]
        },
        section: {
          heading: "Why Choose Scrolli?",
          sub_heading: "Professional business intelligence services trusted by industry leaders worldwide."
        }
      }
    ],
    locale: "en"
  },
  // Turkish translations
  {
    id: 4,
    slug: "homepage",
    seo: {
      metaTitle: "Scrolli - İş Zekası ve Araştırma Mükemmelliği",
      metaDescription: "Scrolli, şirketlerin karmaşık pazar dinamiklerini yönetmesine ve sürdürülebilir büyüme elde etmesine yardımcı olmak için son teknoloji iş zekası, stratejik araştırma ve medya ortaklıkları sunar.",
      metaImage: {
        url: "/images/scrolli.jpg",
        width: 1920,
        height: 967,
        alt: "Scrolli - İş Zekası ve Araştırma Mükemmelliği"
      }
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.hero",
        heading: "İş Karmaşıklığını Zekayla Yönetin",
        sub_heading: "Organizasyonunuzu sürdürülebilir büyümeyi destekleyen stratejik içgörüler, veri odaklı araştırma ve medya ortaklıklarıyla dönüştürün.",
        CTAs: [
          {
            text: "Konsültasyon Planla",
            URL: "/contact",
            variant: "primary"
          },
          {
            text: "Hizmetleri Keşfet",
            URL: "#services",
            variant: "simple"
          }
        ]
      }
    ],
    locale: "tr"
  },
  {
    id: 5,
    slug: "contact",
    seo: {
      metaTitle: "İletişim - Scrolli Stratejik İstihbarat",
      metaDescription: "Stratejik istihbarat, iş danışmanlığı ve araştırma hizmetleri için Scrolli ile iletişime geçin. Bugün konsültasyon planlayın.",
      metaImage: {
        url: "/images/contact.jpg",
        alt: "Scrolli ile İletişim"
      }
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.form-next-to-section",
        heading: "Stratejik Danışma Planlayın",
        sub_heading: "Stratejik zorluklarınızı ve fırsatlarınızı tartışmak için iş zekası uzmanlarımızla bir konsültasyon planlayın.",
        form: {
          inputs: [
            {
              type: "text",
              name: "Ad Soyad",
              placeholder: "Adınızı ve soyadınızı girin"
            },
            {
              type: "email",
              name: "E-posta adresi",
              placeholder: "E-posta adresinizi girin"
            },
            {
              type: "text",
              name: "Şirket",
              placeholder: "Şirket adınızı girin"
            },
            {
              type: "textarea",
              name: "Mesaj",
              placeholder: "Stratejik zorluklarınızı ve nasıl yardımcı olabileceğimizi anlatın"
            },
            {
              type: "submit",
              name: "Danışma Planla"
            }
          ]
        },
        section: {
          heading: "Neden Scrolli?",
          sub_heading: "Dünya çapında sektör liderleri tarafından güvenilen profesyonel iş zekası hizmetleri."
        }
      }
    ],
    locale: "tr"
  }
];

// Data fetcher functions that replace Strapi API calls
export async function getGlobalData(locale: string = 'en') {
  return globalData[locale as keyof typeof globalData] || globalData.en;
}

export async function getHomepageData(locale: string = 'en') {
  return homepageData[locale as keyof typeof homepageData] || homepageData.en;
}

export async function getPageData(slug: string, locale: string = 'en') {
  const page = pagesData.find(p => p.slug === slug && p.locale === locale);
  return page || null;
}

export async function getArticleData(slug: string, locale: string = 'en') {
  const article = articlesData.find(a => a.slug === slug && a.locale === locale);
  return article || null;
}

export async function getArticlesData(locale: string = 'en') {
  return articlesData.filter(a => a.locale === locale);
}

export async function getProductData(slug: string) {
  const product = productsData.find(p => p.slug === slug);
  return product || null;
}

export async function getProductsData() {
  return productsData;
}

// Helper function to get SEO data
export function getSEOData(data: any) {
  if (data?.seo) {
    return {
      title: data.seo.metaTitle,
      description: data.seo.metaDescription,
      openGraph: {
        title: data.seo.metaTitle,
        description: data.seo.metaDescription,
        images: data.seo.metaImage ? [
          {
            url: data.seo.metaImage.url,
            width: data.seo.metaImage.width,
            height: data.seo.metaImage.height,
            alt: data.seo.metaImage.alt,
          }
        ] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: data.seo.metaTitle,
        description: data.seo.metaDescription,
        images: data.seo.metaImage ? [data.seo.metaImage.url] : [],
      },
    };
  }
  
  return {
    title: 'Scrolli - Business Intelligence & Research Excellence',
    description: 'Scrolli provides cutting-edge business intelligence, strategic research, and media partnerships to help companies navigate complex market dynamics.',
  };
}

