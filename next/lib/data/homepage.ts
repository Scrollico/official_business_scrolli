export const homepageData = {
  en: {
    locale: 'en',
    seo: {
      metaTitle: 'Scrolli - Business Intelligence & Research Excellence',
      metaDescription:
        'Scrolli provides cutting-edge business intelligence, strategic research, and media partnerships to help companies navigate complex market dynamics and achieve sustainable growth.',
      metaImage: {
        url: '/images/scrolli.jpg',
        width: 1920,
        height: 967,
        alt: 'Scrolli - Business Intelligence & Research Excellence',
      },
    },
    dynamic_zone: [
      {
        __component: 'dynamic-zone.hero',
        heading:
          'Navigate Business Uncertainty with In-Depth Intelligence',
        sub_heading:
          "Transform your organization with AI-powered intelligence, premium media projects, and strategic communication offered by Scrolli, Türkiye's in-depth news media.",
        CTAs: [
          {
            text: 'Get a free 30‑minute strategy call',
            URL: '/contact',
            variant: 'primary',
          },
        ],
      },
      {
        __component: 'dynamic-zone.how-it-works',
        heading: 'Our 360° Strategic Services',
        sub_heading:
          "Discover Scrolli's proven methodology: transforming complex business challenges into actionable strategic intelligence.",
        steps: [
          {
            title: 'Alara AI: Strategic Intelligence',
            description:
              "Real-time curation, executive-grade insights, and AI-powered dashboard that help you see what's next",
            timeframe: 'Ongoing',
          },
          {
            title: 'Strategic Communication Partnership',
            description:
              'Scrolli provides impact-driven strategic communication partnership for corporates driving influence and trust among decision-makers.',
            timeframe: 'Project-based',
          },
          {
            title: 'Content Development Solutions',
            description:
              'Through our brand studio, ScrolliCollabs, we design original storytelling projects, series, and interactive narratives, delivering stories that elevate your brand voice.',
            timeframe: 'Custom',
          },
        ],
      },
      {
        __component: 'dynamic-zone.features',
        heading: 'Strategic Intelligence Services',
        sub_heading:
          "Scrolli delivers comprehensive business intelligence solutions designed to transform your organization's decision-making capabilities.",
        globe_card: {
          title: 'Executive Daily',
          description:
            'AI-curated daily briefings, personalized podcasts, and one-click exports to keep executives ahead every morning.',
          span: 'two',
        },
        ray_card: {
          title: 'AI Content Studio',
          description:
            'Generate executive-grade content tailored to the right channel in seconds.',
          span: 'one',
          highlighted_text: '+95% accuracy',
          top_items: {
            item_1: '1,200 Projects Completed',
            item_2: '98% Client Satisfaction',
            item_3: '50+ Global Markets',
          },
        },
        graph_card: {
          title: 'Market Intelligence',
          description:
            'Advanced trend tracking, early signal detection, and predictive scenario modeling to guide strategic decisions.',
          span: 'one',
          before_ray_items: {
            item_1:
              'Ship stuck in Suez Canal due to steering malfunction, delays began.',
            item_2: 'Fed signals potential rate cuts in Q2 2024',
            item_3: 'AI chip shortage affects 15% of tech companies',
          },
          after_ray_items: {
            item_1:
              'Recommendation: Consider supply chain disruptions, quickly review alternative transport routes.',
            item_2:
              'Investment Insight: Prepare for market volatility, consider defensive stocks',
            item_3:
              'Strategy: Diversify supplier base, explore alternative chip manufacturers',
          },
        },
        social_media_card: {
          title: 'Trusted AI Infrastructure',
          description:
            'A continuously evolving AI foundation, enhanced with RAG-based systems to prevent disinformation, ensure reliability, and deliver verified intelligence.',
          span: 'two',
          logos: [
            { name: 'Forbes', url: 'https://forbes.com' },
            { name: 'Harvard Business Review', url: 'https://hbr.org' },
            { name: 'McKinsey', url: 'https://mckinsey.com' },
            { name: 'Deloitte', url: 'https://deloitte.com' },
          ],
        },
      },
      {
        __component: 'dynamic-zone.testimonials',
        heading: 'Client Success Stories',
        sub_heading:
          "Hear from industry leaders who have transformed their organizations with Scrolli's strategic intelligence.",
        testimonials: [
          {
            text: '“ScrolliCollabs delivers real value for brands and agencies,  a studio that truly understands the power of storytelling.”',
            user: {
              firstname: 'Afşın',
              lastname: 'Avcı',
              job: 'Co-founder - INFLOW Network',
              image: {
                url: 'https://inflownetwork.com/wp-content/uploads/2020/10/afsinavci-1-e1603639515828.png',
                alt: 'Afşın Avcı',
              },
              linkedin: 'https://www.linkedin.com/in/afsinavci',
            },
          },
          {
            text: '“Our global partnership with Scrolli shows its strength as a media partner that creates real business impact.”',
            user: {
              firstname: 'Ghassan',
              lastname: 'Khalife',
              job: 'Co-founder - NOJU',
              image: {
                url: 'https://media.licdn.com/dms/image/v2/D4D03AQH6VJP1rBowBg/profile-displayphoto-shrink_200_200/B4DZT8kTxSHAAY-/0/1739404165005?e=2147483647&v=beta&t=We-3z2KqJFMCOyYdqu_xkID-ne_Opiw17-JQDubxjYk',
                alt: 'Ghassan Khalife',
              },
              linkedin: 'https://www.linkedin.com/in/ghassan-khalife-41149893',
            },
          },
        ],
      },
      {
        __component: 'dynamic-zone.brands',
        heading: 'Trusted by Industry Leaders',
        sub_heading:
          "Scrolli's Business Solutions are trusted by global enterprises, policy makers, and innovation leaders.",
        logos: [
          {
            name: 'NOJU',
            image: '/logos/partners/noju.png',
          },
          {
            name: 'IGA',
            image: '/logos/partners/iga.svg.png',
          },
          {
            name: 'HANSPACE',
            image: '/logos/partners/hanspace.svg',
          },
          {
            name: 'PRESULT',
            image: '/logos/partners/presult.svg',
          },
          {
            name: 'TRAI',
            image: '/logos/partners/trai.png.webp',
          },
        ],
      },
      {
        __component: 'dynamic-zone.pricing',
        heading: 'Strategic Intelligence Packages',
        sub_heading:
          'Choose the intelligence package that aligns with your strategic objectives.',
        plans: [
          {
            name: 'Business Intelligence',
            price: null,
            description:
              'Comprehensive intelligence solutions for established companies.',
            perks: [
              { text: 'Advanced Market Research' },
              { text: 'Competitive Analysis' },
              { text: 'Strategic Planning' },
              { text: 'Performance Monitoring' },
            ],
            additional_perks: [
              { text: 'Quarterly Reviews' },
              { text: 'Custom Dashboards' },
            ],
            CTA: { text: 'Get a free 30‑minute strategy call' },
            featured: true,
          },
        ],
      },
      {
        __component: 'dynamic-zone.launches',
        heading: 'Why Partner with Scrolli?',
        sub_heading: '',
        launches: [
          {
            mission_number: '01',
            title: 'Intelligence Meets Strategy',
            description:
              'Our foundation blends advanced research and AI with strategic insight — helping leaders make data-driven, confident decisions.',
          },
          {
            mission_number: '02',
            title: 'Trusted Corporate Partner',
            description:
              'We work side by side with corporates, agencies, and institutions, offering strategic communication partnership built on credibility and impact.',
          },
          {
            mission_number: '03',
            title: 'Creative Precision',
            description:
              'Through ScrolliCollabs, our creative studio, we deliver premium storytelling projects and editorial experiences that strengthen reputation and influence.',
          },
        ],
      },
      {
        __component: 'dynamic-zone.cta',
        heading: 'Ready to Elevate Your Strategic Intelligence?',
        sub_heading:
          'Partner with Scrolli to transform insight into influence and sustainable growth.',
        CTAs: [
          {
            text: 'Get a free 30‑minute strategy call',
            URL: '/contact',
            variant: 'primary',
          },
        ],
      },
    ],
  },
  tr: {
    locale: 'tr',
    seo: {
      metaTitle: 'Scrolli - İş Zekası ve Araştırma Mükemmelliği',
      metaDescription:
        'Scrolli, şirketlerin karmaşık pazar dinamiklerini yönetmesine ve sürdürülebilir büyüme elde etmesine yardımcı olmak için son teknoloji iş zekası, stratejik araştırma ve medya ortaklıkları sunar.',
      metaImage: {
        url: '/images/scrolli.jpg',
        width: 1920,
        height: 967,
        alt: 'Scrolli - İş Zekası ve Araştırma Mükemmelliği',
      },
    },
    dynamic_zone: [
      {
        __component: 'dynamic-zone.hero',
        heading: 'İş Belirsizliğini Derinlemesine İstihbaratla Yönetin',
        sub_heading:
          "Organizasyonunuzu Türkiye'nin derinlemesine haber medyası Scrolli tarafından sunulan AI destekli istihbarat, premium medya projeleri ve stratejik iletişimle dönüştürün.",
        CTAs: [
          {
            text: 'Ücretsiz Strateji Görüşmesi',
            URL: '/contact',
            variant: 'primary',
          },
        ],
      },
      {
        __component: 'dynamic-zone.how-it-works',
        heading: '360° Stratejik Hizmetlerimiz',
        sub_heading:
          "Scrolli'nin kanıtlanmış metodolojisini keşfedin: karmaşık iş zorluklarını uygulanabilir stratejik istihbarata dönüştürme.",
        steps: [
          {
            title: 'Alara AI: Stratejik İstihbarat',
            description:
              'Gerçek zamanlı küratörlük, yönetici düzeyinde içgörüler ve geleceği görmenize yardımcı olan AI destekli dashboard.',
            timeframe: 'Devam eden',
          },
          {
            title: 'Stratejik İletişim Ortaklığı',
            description:
              'Scrolli, karar vericiler arasında etki ve güven oluşturan şirketler için etki odaklı stratejik iletişim ortaklığı sağlar.',
            timeframe: 'Proje bazlı',
          },
          {
            title: 'İçerik Geliştirme Çözümleri',
            description:
              'Marka stüdyomuz ScrolliCollabs aracılığıyla, marka sesinizi yükselten hikayeler sunan özgün anlatı projeleri, seriler ve etkileşimli anlatılar tasarlıyoruz.',
            timeframe: 'Özelleştirilmiş',
          },
        ],
      },
      {
        __component: 'dynamic-zone.features',
        heading: 'Stratejik İstihbarat Hizmetleri',
        sub_heading:
          'Scrolli, organizasyonunuzun karar verme yeteneklerini dönüştürmek için tasarlanmış kapsamlı iş zekası çözümleri sunar.',
        globe_card: {
          title: 'Executive Daily',
          description:
            'Yöneticileri her sabah önde tutmak için AI küratörlüğünde günlük brifingler, kişiselleştirilmiş podcastler ve tek tıkla dışa aktarma.',
          span: 'two',
        },
        ray_card: {
          title: 'AI Content Studio',
          description:
            'Saniyeler içinde doğru kanala uygun yönetici düzeyinde içerik üretin.',
          span: 'one',
          highlighted_text: '+%95 doğruluk',
          top_items: {
            item_1: '1,200 Proje Tamamlandı',
            item_2: '%98 Müşteri Memnuniyeti',
            item_3: '50+ Küresel Pazar',
          },
          contentTypes: [
            { id: 'article', label: 'Makale' },
            { id: 'newsletter', label: 'Bülten' },
          ],
          channels: [
            { id: 'linkedin', label: 'LinkedIn' },
            { id: 'email', label: 'E-posta' },
          ],
          contentOptions: [
            { id: 'generate', label: 'İçerik Üret' },
            { id: 'select-articles', label: 'Makale Seç' },
          ],
        },
        graph_card: {
          title: 'Market Intelligence',
          description:
            'Stratejik kararları yönlendirmek için gelişmiş trend takibi, erken sinyal tespiti ve tahmine dayalı senaryo modelleme.',
          subtitle: 'Gelişmiş trend takibi ve sinyal tespiti',
          span: 'one',
          before_ray_items: {
            item_1:
              "Süveyş Kanalı'nda gemi dümen arızasıyla sıkıştı, gecikmeler başladı.",
            item_2: "Fed Q2 2024'te potansiyel faiz indirimi sinyali veriyor",
            item_3: "AI çip kıtlığı teknoloji şirketlerinin %15'ini etkiliyor",
          },
          after_ray_items: {
            item_1:
              'Öneri: Tedarik zinciri kesintileri düşünülmeli, alternatif taşımacılık rotaları hızla gözden geçirilmeli.',
            item_2:
              'Yatırım İçgörüsü: Pazar volatilitesi için hazırlık yapın, savunma hisselerini değerlendirin',
            item_3:
              'Strateji: Tedarikçi tabanını çeşitlendirin, alternatif çip üreticilerini keşfedin',
          },
        },
        social_media_card: {
          title: 'Güvenilir AI Altyapısı',
          description:
            'Dezenformasyonu önlemek, güvenilirliği sağlamak ve doğrulanmış istihbarat sunmak için RAG tabanlı sistemlerle geliştirilmiş sürekli evrimleşen AI altyapısı.',
          span: 'two',
          logos: [
            { name: 'Forbes', url: 'https://forbes.com' },
            { name: 'Harvard Business Review', url: 'https://hbr.org' },
            { name: 'McKinsey', url: 'https://mckinsey.com' },
            { name: 'Deloitte', url: 'https://deloitte.com' },
          ],
        },
      },
      {
        __component: 'dynamic-zone.testimonials',
        heading: 'Müşteri Başarı Hikayeleri',
        sub_heading:
          "Scrolli'nin stratejik istihbaratı ile organizasyonlarını dönüştüren sektör liderlerinden dinleyin.",
        testimonials: [
          {
            text: '"Scrolli\'nin stratejik istihbaratı karar verme sürecimizi dönüştürdü. İçgörüleri sayesinde üç yeni pazara başarıyla girdik."',
            user: {
              firstname: 'Afşın',
              lastname: 'Avcı',
              job: 'Co-founder - INFLOW Network',
              image: {
                url: 'https://inflownetwork.com/wp-content/uploads/2020/10/afsinavci-1-e1603639515828.png',
                alt: 'Afşın Avcı',
              },
              linkedin: 'https://www.linkedin.com/in/afsinavci',
            },
          },
          {
            text: '"Scrolli\'nin sağladığı analiz derinliği ve uygulanabilir içgörüler beklentilerimizi aştı. Gerçekten olağanüstü stratejik istihbarat."',
            user: {
              firstname: 'Ghassan',
              lastname: 'Khalife',
              job: 'Co-founder - NOJU',
              image: {
                url: 'https://media.licdn.com/dms/image/v2/D4D03AQH6VJP1rBowBg/profile-displayphoto-shrink_200_200/B4DZT8kTxSHAAY-/0/1739404165005?e=2147483647&v=beta&t=We-3z2KqJFMCOyYdqu_xkID-ne_Opiw17-JQDubxjYk',
                alt: 'Ghassan Khalife',
              },
              linkedin: 'https://www.linkedin.com/in/ghassan-khalife-41149893',
            },
          },
        ],
      },
      {
        __component: 'dynamic-zone.brands',
        heading: '5. Sektör Liderleri Tarafından Güveniliyor',
        sub_heading:
          "Scrolli'nin İş Çözümleri küresel işletmeler, politika yapıcılar ve inovasyon liderleri tarafından güveniliyor.",
        logos: [
          { name: 'NOJU', image: '/logos/partners/noju.png' },
          { name: 'IGA', image: '/logos/partners/iga.svg.png' },
          { name: 'HANSPACE', image: '/logos/partners/hanspace.svg' },
          { name: 'PRESULT', image: '/logos/partners/presult.svg' },
          { name: 'TRAI', image: '/logos/partners/trai.png.webp' },
        ],
      },
      {
        __component: 'dynamic-zone.pricing',
        heading: 'Stratejik İstihbarat Paketleri',
        sub_heading:
          'Stratejik hedeflerinizle uyumlu istihbarat paketini seçin.',
        plans: [
          {
            name: 'İş Zekası',
            price: null,
            description: 'Kurulu şirketler için kapsamlı istihbarat çözümleri.',
            perks: [
              { text: 'Gelişmiş Pazar Araştırması' },
              { text: 'Rekabet Analizi' },
              { text: 'Stratejik Planlama' },
              { text: 'Performans İzleme' },
            ],
            additional_perks: [
              { text: 'Üç Aylık Değerlendirmeler' },
              { text: 'Özel Dashboardlar' },
            ],
            CTA: { text: 'Ücretsiz Strateji Görüşmesi' },
            featured: true,
          },
        ],
      },
      {
        __component: 'dynamic-zone.launches',
        heading: 'Scrolli ile Neden Ortak Olmalısınız?',
        sub_heading: '',
        launches: [
          {
            mission_number: '01',
            title: 'İstihbarat Strateji ile Buluşuyor',
            description:
              "Temelimiz, ileri düzey araştırma ve AI'yı stratejik içgörü ile harmanlar — liderlerin veri odaklı, kendinden emin kararlar almasına yardımcı olur.",
          },
          {
            mission_number: '02',
            title: 'Güvenilir Kurumsal Ortak',
            description:
              'Kurumsal şirketler, ajanslar ve kurumlarla yan yana çalışıyor, güvenilirlik ve etki üzerine kurulu stratejik iletişim ortaklığı sunuyoruz.',
          },
          {
            mission_number: '03',
            title: 'Yaratıcı Hassasiyet',
            description:
              'Yaratıcı stüdyomuz ScrolliCollabs aracılığıyla, itibarı ve etkiyi güçlendiren premium hikaye anlatımı projeleri ve editöryal deneyimler sunuyoruz.',
          },
        ],
      },
      {
        __component: 'dynamic-zone.cta',
        heading: 'Stratejik İstihbaratınızı Yükseltmeye Hazır mısınız?',
        sub_heading:
          'İçgörüyü etkiye ve sürdürülebilir büyümeye dönüştürmek için Scrolli ile ortak olun.',
        CTAs: [
          {
            text: 'Ücretsiz Strateji Görüşmesi',
            URL: '/contact',
            variant: 'primary',
          },
        ],
      },
    ],
  },
};

// Backward compatibility - default to English
export default homepageData.en;
