export const homepageData = {
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
  dynamic_zone: [
    {
      __component: "dynamic-zone.hero",
        heading: "Navigate Business Complexity with Intelligence",
        sub_heading: "Transform your organization with strategic insights, data-driven research, and media partnerships that drive sustainable growth.",
      CTAs: [
        {
            text: "Schedule Consultation",
            URL: "/contact",
          variant: "primary"
        }
      ]
    },
    {
      __component: "dynamic-zone.features",
        heading: "Strategic Intelligence Services",
        sub_heading: "Scrolli delivers comprehensive business intelligence solutions designed to transform your organization's decision-making capabilities.",
      globe_card: {
          title: "Market Intelligence",
          description: "Deep-dive market analysis and competitive intelligence to drive strategic decisions.",
        span: "two"
      },
      ray_card: {
          title: "Data Analytics",
          description: "Advanced analytics and business intelligence solutions for data-driven insights.",
        span: "one",
        before_ray_items: {
            item_1: "500+ Studies",
            item_2: "2,500+ Reports",
            item_3: "50+ Industries"
          },
          after_ray_items: {
            item_1: "500+ Studies",
            item_2: "2,500+ Reports",
            item_3: "50+ Industries"
          }
        },
        graph_card: {
          title: "Strategic Dashboard",
          description: "Real-time insights and performance monitoring for strategic initiatives.",
          span: "one",
          highlighted_text: "+95% accuracy",
          top_items: {
            item_1: "1,200 Projects Completed",
            item_2: "98% Client Satisfaction",
            item_3: "50+ Global Markets"
          }
        },
        social_media_card: {
          title: "Media Partnerships",
          description: "Strategic media partnerships and thought leadership platforms.",
          span: "two",
          logos: [
            { name: "Forbes", url: "https://forbes.com" },
            { name: "Harvard Business Review", url: "https://hbr.org" },
            { name: "McKinsey", url: "https://mckinsey.com" },
            { name: "Deloitte", url: "https://deloitte.com" }
          ]
        }
      },
      {
        __component: "dynamic-zone.testimonials",
        heading: "Client Success Stories",
        sub_heading: "Hear from industry leaders who have transformed their organizations with Scrolli's strategic intelligence.",
        testimonials: [
          {
            text: "Scrolli's strategic intelligence transformed our decision-making process. Their insights helped us enter three new markets successfully.",
            user: {
              firstname: "Afsin",
              lastname: "Avci",
              job: "Strategic Advisor",
              image: {
                url: "https://inflownetwork.com/wp-content/uploads/2020/10/afsinavci-1-e1603639515828.png",
                alt: "Afsin Avci"
              },
              linkedin: "https://www.linkedin.com/in/afsinavci"
            }
          },
          {
            text: "The depth of analysis and actionable insights Scrolli provided exceeded our expectations. Truly exceptional strategic intelligence.",
            user: {
              firstname: "Ghassan",
              lastname: "Khalife",
              job: "Business Intelligence Expert",
              image: {
                url: "https://media.licdn.com/dms/image/v2/D4D03AQH6VJP1rBowBg/profile-displayphoto-shrink_200_200/B4DZT8kTxSHAAY-/0/1739404165005?e=2147483647&v=beta&t=We-3z2KqJFMCOyYdqu_xkID-ne_Opiw17-JQDubxjYk",
                alt: "Ghassan Khalife"
              },
              linkedin: "https://www.linkedin.com/in/ghassan-khalife-41149893"
            }
          },
          {
            text: "Scrolli's market intelligence helped us identify opportunities we never knew existed. Game-changing strategic insights.",
            user: {
              firstname: "Afsin",
              lastname: "Avci",
              job: "Strategic Advisor",
              image: {
                url: "https://inflownetwork.com/wp-content/uploads/2020/10/afsinavci-1-e1603639515828.png",
                alt: "Afsin Avci"
              },
              linkedin: "https://www.linkedin.com/in/afsinavci"
            }
          }
        ]
      },
      {
        __component: "dynamic-zone.how-it-works",
        heading: "Our Strategic Process",
        sub_heading: "Discover Scrolli's proven methodology: transforming complex business challenges into actionable strategic intelligence.",
        steps: [
          {
            title: "Discovery & Analysis",
            description: "Comprehensive analysis of your business landscape, challenges, and opportunities.",
            timeframe: "1-2 weeks"
          },
          {
            title: "Intelligence Gathering",
            description: "Advanced research and data collection using cutting-edge methodologies.",
            timeframe: "2-3 weeks"
          },
          {
            title: "Strategic Planning",
            description: "Development of actionable strategies and recommendations tailored to your goals.",
            timeframe: "1-2 weeks"
          },
          {
            title: "Implementation & Monitoring",
            description: "Support for strategy implementation with ongoing monitoring and optimization.",
            timeframe: "Ongoing"
          }
        ]
      },
      {
        __component: "dynamic-zone.brands",
        heading: "Trusted by Industry Leaders",
        sub_heading: "Scrolli is trusted by Fortune 500 companies and leading organizations across diverse industries.",
        logos: [
          { name: "Microsoft", url: "https://microsoft.com", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
          { name: "Amazon", url: "https://amazon.com", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
          { name: "Google", url: "https://google.com", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
          { name: "Apple", url: "https://apple.com", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
          { name: "Tesla", url: "https://tesla.com", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" },
          { name: "Meta", url: "https://meta.com", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
          { name: "Netflix", url: "https://netflix.com", image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
          { name: "Uber", url: "https://uber.com", image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" }
        ]
      },
      {
        __component: "dynamic-zone.pricing",
        heading: "Strategic Intelligence Packages",
        sub_heading: "Choose the intelligence package that aligns with your strategic objectives.",
        plans: [
          {
            name: "Business Intelligence",
            price: null,
            description: "Comprehensive intelligence solutions for established companies.",
            perks: [
              { text: "Advanced Market Research" },
              { text: "Competitive Analysis" },
              { text: "Strategic Planning" },
              { text: "Performance Monitoring" }
            ],
            additional_perks: [
              { text: "Quarterly Reviews" },
              { text: "Custom Dashboards" }
            ],
            CTA: { text: "Schedule Consultation" },
            featured: true
          }
        ]
      },
      {
        __component: "dynamic-zone.launches",
        heading: "Recent Strategic Initiatives",
        sub_heading: "Our latest strategic intelligence projects that transformed client organizations.",
        launches: [
          {
            title: "Market Entry Strategy for Global Tech Giant",
            description: "Comprehensive market analysis and entry strategy for European expansion.",
            image: {
              url: "/images/launches/tech-expansion.jpg",
              alt: "Tech Expansion Strategy"
            }
          },
          {
            title: "Competitive Intelligence for Fortune 500",
            description: "Advanced competitive analysis and strategic positioning recommendations.",
            image: {
              url: "/images/launches/competitive-intel.jpg",
              alt: "Competitive Intelligence"
            }
          },
          {
            title: "Strategic Partnership Development",
            description: "Identification and development of strategic partnerships across key markets.",
            image: {
              url: "/images/launches/partnerships.jpg",
              alt: "Strategic Partnerships"
            }
          }
        ]
      },
      {
        __component: "dynamic-zone.cta",
        heading: "Ready to Transform Your Strategic Intelligence?",
        sub_heading: "Partner with Scrolli to unlock the insights and strategic intelligence that drive sustainable growth and competitive advantage.",
        CTAs: [
          {
            text: "Schedule Consultation",
            URL: "/contact",
            variant: "primary"
          }
        ]
      }
    ]
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
    dynamic_zone: [
      {
        __component: "dynamic-zone.hero",
        heading: "İş Karmaşıklığını Zekayla Yönetin",
        sub_heading: "Organizasyonunuzu sürdürülebilir büyümeyi destekleyen stratejik içgörüler, veri odaklı araştırma ve medya ortaklıklarıyla dönüştürün.",
        CTAs: [
          {
            text: "Danışma Planla",
            URL: "/contact",
            variant: "primary"
          }
        ]
      },
      {
        __component: "dynamic-zone.features",
        heading: "Stratejik İstihbarat Hizmetleri",
        sub_heading: "Scrolli, organizasyonunuzun karar verme yeteneklerini dönüştürmek için tasarlanmış kapsamlı iş zekası çözümleri sunar.",
        globe_card: {
          title: "Pazar İstihbaratı",
          description: "Stratejik kararları yönlendirmek için derinlemesine pazar analizi ve rekabet istihbaratı.",
          span: "two"
        },
        ray_card: {
          title: "Veri Analitiği",
          description: "Veri odaklı içgörüler için gelişmiş analitik ve iş zekası çözümleri.",
          span: "one",
          before_ray_items: {
            item_1: "500+ Çalışma",
            item_2: "2,500+ Rapor",
            item_3: "50+ Sektör"
          },
          after_ray_items: {
            item_1: "500+ Çalışma",
            item_2: "2,500+ Rapor",
            item_3: "50+ Sektör"
          }
        },
        graph_card: {
          title: "Stratejik Dashboard",
          description: "Stratejik girişimler için gerçek zamanlı içgörüler ve performans izleme.",
          span: "one",
          highlighted_text: "+%95 doğruluk",
          top_items: {
            item_1: "1,200 Proje Tamamlandı",
            item_2: "%98 Müşteri Memnuniyeti",
            item_3: "50+ Küresel Pazar"
          }
        },
        social_media_card: {
          title: "Medya Ortaklıkları",
          description: "Stratejik medya ortaklıkları ve düşünce liderliği platformları.",
          span: "two",
          logos: [
            { name: "Forbes", url: "https://forbes.com" },
            { name: "Harvard Business Review", url: "https://hbr.org" },
            { name: "McKinsey", url: "https://mckinsey.com" },
            { name: "Deloitte", url: "https://deloitte.com" }
          ]
        }
      },
      {
        __component: "dynamic-zone.testimonials",
        heading: "Müşteri Başarı Hikayeleri",
        sub_heading: "Scrolli'nin stratejik istihbaratı ile organizasyonlarını dönüştüren sektör liderlerinden dinleyin.",
        testimonials: [
          {
            text: "Scrolli'nin stratejik istihbaratı karar verme sürecimizi dönüştürdü. İçgörüleri sayesinde üç yeni pazara başarıyla girdik.",
            user: {
              firstname: "Afsin",
              lastname: "Avci",
              job: "Stratejik Danışman",
              image: {
                url: "https://inflownetwork.com/wp-content/uploads/2020/10/afsinavci-1-e1603639515828.png",
                alt: "Afsin Avci"
              },
              linkedin: "https://www.linkedin.com/in/afsinavci"
            }
          },
          {
            text: "Scrolli'nin sağladığı analiz derinliği ve uygulanabilir içgörüler beklentilerimizi aştı. Gerçekten olağanüstü stratejik istihbarat.",
          user: {
              firstname: "Ghassan",
              lastname: "Khalife",
              job: "İş Zekası Uzmanı",
              image: {
                url: "https://media.licdn.com/dms/image/v2/D4D03AQH6VJP1rBowBg/profile-displayphoto-shrink_200_200/B4DZT8kTxSHAAY-/0/1739404165005?e=2147483647&v=beta&t=We-3z2KqJFMCOyYdqu_xkID-ne_Opiw17-JQDubxjYk",
                alt: "Ghassan Khalife"
              },
              linkedin: "https://www.linkedin.com/in/ghassan-khalife-41149893"
            }
          },
          {
            text: "Scrolli'nin pazar istihbaratı hiç bilmediğimiz fırsatları keşfetmemize yardımcı oldu. Oyun değiştiren stratejik içgörüler.",
          user: {
              firstname: "Afsin",
              lastname: "Avci",
              job: "Stratejik Danışman",
              image: {
                url: "https://inflownetwork.com/wp-content/uploads/2020/10/afsinavci-1-e1603639515828.png",
                alt: "Afsin Avci"
              },
              linkedin: "https://www.linkedin.com/in/afsinavci"
          }
        }
      ]
    },
    {
      __component: "dynamic-zone.how-it-works",
        heading: "Stratejik Sürecimiz",
        sub_heading: "Scrolli'nin kanıtlanmış metodolojisini keşfedin: karmaşık iş zorluklarını uygulanabilir stratejik istihbarata dönüştürme.",
      steps: [
        {
            title: "Keşif ve Analiz",
            description: "İş ortamınız, zorluklarınız ve fırsatlarınızın kapsamlı analizi.",
            timeframe: "1-2 hafta"
        },
        {
            title: "İstihbarat Toplama",
            description: "Son teknoloji metodolojiler kullanarak gelişmiş araştırma ve veri toplama.",
            timeframe: "2-3 hafta"
        },
        {
            title: "Stratejik Planlama",
            description: "Hedeflerinize özel uygulanabilir stratejiler ve öneriler geliştirme.",
            timeframe: "1-2 hafta"
        },
        {
            title: "Uygulama ve İzleme",
            description: "Devam eden izleme ve optimizasyon ile strateji uygulaması için destek.",
            timeframe: "Devam eden"
        }
      ]
    },
    {
      __component: "dynamic-zone.brands",
        heading: "Sektör Liderleri Tarafından Güveniliyor",
        sub_heading: "Scrolli, Fortune 500 şirketleri ve çeşitli sektörlerdeki önde gelen organizasyonlar tarafından güveniliyor.",
      logos: [
          { name: "Microsoft", url: "https://microsoft.com", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
          { name: "Amazon", url: "https://amazon.com", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
          { name: "Google", url: "https://google.com", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
          { name: "Apple", url: "https://apple.com", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
          { name: "Tesla", url: "https://tesla.com", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" },
          { name: "Meta", url: "https://meta.com", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
          { name: "Netflix", url: "https://netflix.com", image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
          { name: "Uber", url: "https://uber.com", image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" }
      ]
    },
    {
      __component: "dynamic-zone.pricing",
        heading: "Stratejik İstihbarat Paketleri",
        sub_heading: "Stratejik hedeflerinizle uyumlu istihbarat paketini seçin.",
      plans: [
          {
            name: "İş Zekası",
            price: null,
            description: "Kurulu şirketler için kapsamlı istihbarat çözümleri.",
          perks: [
              { text: "Gelişmiş Pazar Araştırması" },
              { text: "Rekabet Analizi" },
              { text: "Stratejik Planlama" },
              { text: "Performans İzleme" }
          ],
          additional_perks: [
              { text: "Üç Aylık Değerlendirmeler" },
              { text: "Özel Dashboardlar" }
            ],
            CTA: { text: "Danışma Planla" },
            featured: true
          }
      ]
    },
    {
      __component: "dynamic-zone.launches",
        heading: "Son Stratejik Girişimler",
        sub_heading: "Müşteri organizasyonlarını dönüştüren en son stratejik istihbarat projelerimiz.",
      launches: [
        {
            title: "Küresel Teknoloji Devi için Pazar Giriş Stratejisi",
            description: "Avrupa genişlemesi için kapsamlı pazar analizi ve giriş stratejisi.",
            image: {
              url: "/images/launches/tech-expansion.jpg",
              alt: "Teknoloji Genişleme Stratejisi"
            }
          },
          {
            title: "Fortune 500 için Rekabet İstihbaratı",
            description: "Gelişmiş rekabet analizi ve stratejik konumlandırma önerileri.",
            image: {
              url: "/images/launches/competitive-intel.jpg",
              alt: "Rekabet İstihbaratı"
            }
          },
          {
            title: "Stratejik Ortaklık Geliştirme",
            description: "Ana pazarlarda stratejik ortaklıkların belirlenmesi ve geliştirilmesi.",
            image: {
              url: "/images/launches/partnerships.jpg",
              alt: "Stratejik Ortaklıklar"
            }
        }
      ]
    },
    {
      __component: "dynamic-zone.cta",
        heading: "Stratejik İstihbaratınızı Dönüştürmeye Hazır mısınız?",
        sub_heading: "Sürdürülebilir büyüme ve rekabet avantajı sağlayan içgörüler ve stratejik istihbaratı keşfetmek için Scrolli ile ortak olun.",
      CTAs: [
        {
            text: "Danışma Planla",
          URL: "/contact",
          variant: "primary"
        }
      ]
    }
  ]
  }
};

// Backward compatibility - default to English
export default homepageData.en;