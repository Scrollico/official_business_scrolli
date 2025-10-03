import { Metadata } from 'next';

import ClientSlugHandler from './ClientSlugHandler';
import PageContent from '@/lib/shared/PageContent';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { getHomepageData, getSEOData } from '@/lib/data';

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

  const pageData = await getHomepageData(params.locale);
  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo, params.locale);
  return metadata;
}

export default async function HomePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const pageData = await getHomepageData(params.locale);

  const localizedSlugs = { [params.locale]: '' };

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <PageContent pageData={pageData} />
    </>
  );
}
