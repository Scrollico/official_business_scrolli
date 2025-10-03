export const globalData = {
  en: {
    locale: "en",
    seo: {
      metaTitle: "Scrolli - Business Intelligence & Research Excellence",
      metaDescription: "Scrolli provides cutting-edge business intelligence, strategic research, and media partnerships to help companies navigate complex market dynamics and achieve sustainable growth.",
      metaImage: {
        url: "/images/scrolli.jpg",
        width: 1920,
        height: 967,
        alt: "Scrolli - Business Intelligence & Research Excellence"
      }
    },
    navbar: {
      logo: {
        company: "Scrolli",
        image: {
          url: "/logos/Primary-alternative3.png",
          width: 1024,
          height: 1024,
          alt: "Scrolli Logo"
        }
      },
      left_navbar_items: [
        { text: "Services", URL: "/#pricing" },
        { text: "Research", URL: "/research" },
        { text: "About", URL: "/about" },
        { text: "Contact", URL: "/contact" },
        { text: "FAQ", URL: "/faq" }
      ],
      right_navbar_items: [
        { text: "Schedule Consultation", URL: "/contact" }
      ]
    },
    footer: {
      description: "Scrolli is a leading business intelligence consultancy providing strategic research, market analysis, and media partnerships to drive organizational excellence.",
      copyright: "Copyright © 2025 Scrolli LTD",
      designed_developed_by: "Designed and Developed by Scrolli",
      built_with: "built with Next.js, Tailwind CSS, Framer Motion, Aceternity UI, and icons8",
      logo: {
        company: "Scrolli",
        image: {
          url: "/logos/Primary-alternative3.png",
          width: 1024,
          height: 1024,
          alt: "Scrolli Logo"
        }
      },
      internal_links: [
        { text: "Services", URL: "/services" },
        { text: "Research", URL: "/research" },
        { text: "About", URL: "/about" },
        { text: "Contact", URL: "/contact" },
        { text: "FAQ", URL: "/faq" }
      ],
      external_links: [
        { text: "GitHub", URL: "https://github.com/scrolli" },
        { text: "LinkedIn", URL: "https://linkedin.com/company/scrolli" },
        { text: "X", URL: "https://x.com/scrolli" }
      ],
      policy_links: [
        { text: "Privacy Policy", URL: "/privacy" },
        { text: "Terms of Service", URL: "/terms" },
        { text: "Refund Policy", URL: "/refund" }
      ],
      social_media_links: [
        { text: "X", URL: "https://x.com/scrolli", target: "_blank" },
        { text: "LinkedIn", URL: "https://linkedin.com/company/scrolli", target: "_blank" },
        { text: "GitHub", URL: "https://github.com/scrolli", target: "_blank" }
      ]
    }
  },
  tr: {
    locale: "tr",
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
    navbar: {
      logo: {
        company: "Scrolli",
        image: {
          url: "/logos/Primary-alternative3.png",
          width: 1024,
          height: 1024,
          alt: "Scrolli Logo"
        }
      },
      left_navbar_items: [
        { text: "Hizmetler", URL: "/#pricing" },
        { text: "Araştırma", URL: "/research" },
        { text: "Hakkımızda", URL: "/about" },
        { text: "İletişim", URL: "/contact" },
        { text: "SSS", URL: "/faq" }
      ],
      right_navbar_items: [
        { text: "Danışma Planla", URL: "/contact" }
      ]
    },
    footer: {
      description: "Scrolli, organizasyonel mükemmelliği yönlendirmek için stratejik araştırma, pazar analizi ve medya ortaklıkları sağlayan önde gelen bir iş zekası danışmanlığıdır.",
      copyright: "Telif Hakkı © 2024 Scrolli INC",
      designed_developed_by: "Scrolli ve Aceternity tarafından tasarlanıp geliştirilmiştir",
      built_with: "Next.js, Tailwind CSS, Framer Motion, Aceternity UI ve icons8 ile oluşturulmuştur",
      logo: {
        company: "Scrolli",
        image: {
          url: "/logos/Primary-alternative3.png",
          width: 1024,
          height: 1024,
          alt: "Scrolli Logo"
        }
      },
      internal_links: [
        { text: "Hizmetler", URL: "/services" },
        { text: "Araştırma", URL: "/research" },
        { text: "Hakkımızda", URL: "/about" },
        { text: "İletişim", URL: "/contact" },
        { text: "SSS", URL: "/faq" }
      ],
      external_links: [
        { text: "GitHub", URL: "https://github.com/scrolli" },
        { text: "LinkedIn", URL: "https://linkedin.com/company/scrolli" },
        { text: "X", URL: "https://x.com/scrolli" }
      ],
      policy_links: [
        { text: "Gizlilik Politikası", URL: "/privacy" },
        { text: "Kullanım Şartları", URL: "/terms" },
        { text: "İade Politikası", URL: "/refund" }
      ],
      social_media_links: [
        { text: "X", URL: "https://x.com/scrolli", target: "_blank" },
        { text: "LinkedIn", URL: "https://linkedin.com/company/scrolli", target: "_blank" },
        { text: "GitHub", URL: "https://github.com/scrolli", target: "_blank" }
      ]
    }
  }
};

// Backward compatibility - default to English
export default globalData.en;