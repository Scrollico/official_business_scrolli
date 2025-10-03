import { Metadata } from 'next';

import ClientSlugHandler from '../ClientSlugHandler';
import PageContent from '@/lib/shared/PageContent';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { getPageData } from '@/lib/data';

export async function generateStaticParams() {
  // Return empty array for static export - no dynamic pages
  return [];
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const pageData = await getPageData(params.slug, params.locale);

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo, params.locale);
  return metadata;
}

export default async function Page(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const params = await props.params;
  const pageData = await getPageData(params.slug, params.locale);

  const localizedSlugs = { [params.locale]: params.slug };

  return (
    <>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <PageContent pageData={pageData} />
    </>
  );
}
