import { strapiImage } from '../strapi/strapiImage';

export function generateMetadataObject(seo: any, locale?: string, pathname?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrolli.co';
  
  // Generate alternate links for hreflang
  const alternates = {
    canonical: `${baseUrl}/${locale}${pathname || ''}`,
    languages: {
      'en': `${baseUrl}/en${pathname || ''}`,
      'tr': `${baseUrl}/tr${pathname || ''}`,
    },
  };

  return {
    title: seo?.metaTitle || 'Default Title',
    description: seo?.metaDescription || 'Default Description',
    alternates,
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || 'Default OG Title',
      description:
        seo?.ogDescription || seo?.metaDescription || 'Default OG Description',
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
      locale: locale || 'en',
      alternateLocale: ['en', 'tr'],
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || seo?.metaTitle || 'Default Twitter Title',
      description:
        seo?.twitterDescription ||
        seo?.metaDescription ||
        'Default Twitter Description',
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}
