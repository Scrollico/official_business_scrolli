import { IconShoppingCartUp } from '@tabler/icons-react';
import { Metadata } from 'next';

import ClientSlugHandler from '../ClientSlugHandler';
import { Container } from '@/components/container';
import { AmbientColor } from '@/components/decorations/ambient-color';
import { FeatureIconContainer } from '@/components/dynamic-zone/features/feature-icon-container';
import { Heading } from '@/components/elements/heading';
import { Subheading } from '@/components/elements/subheading';
import { Featured } from '@/components/products/featured';
import { ProductItems } from '@/components/products/product-items';
import { generateMetadataObject } from '@/lib/shared/metadata';

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
    metaTitle: "Products - Scrolli",
    metaDescription: "Explore Scrolli's comprehensive business intelligence products and solutions.",
    keywords: "business intelligence, products, solutions, analytics"
  });
  return metadata;
}

export default async function Products(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  // Static data for products page
  const productPage = {
    heading: params.locale === 'tr' ? "Ürünlerimiz" : "Our Products",
    sub_heading: params.locale === 'tr' 
      ? "Scrolli'nin kapsamlı iş zekası ürünleri ve çözümlerini keşfedin."
      : "Explore Scrolli's comprehensive business intelligence products and solutions."
  };

  const localizedSlugs = { [params.locale]: 'products' };

  // Mock products data
  const products = {
    data: [
      {
        id: 1,
        name: params.locale === 'tr' ? "İş Zekası Paketi" : "Business Intelligence Package",
        description: params.locale === 'tr' 
          ? "Kurulu şirketler için kapsamlı istihbarat çözümleri."
          : "Comprehensive intelligence solutions for established companies.",
        featured: true,
        price: null
      }
    ]
  };

  const featured = products.data.filter(
    (product: { featured: boolean }) => product.featured
  );

  return (
    <div className="relative overflow-hidden w-full">
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <AmbientColor />
      <Container className="pt-40 pb-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconShoppingCartUp className="h-6 w-6 text-white" />
        </FeatureIconContainer>
        <Heading as="h1" className="pt-4">
          {productPage.heading}
        </Heading>
        <Subheading className="max-w-3xl mx-auto">
          {productPage.sub_heading}
        </Subheading>
        <Featured products={featured} locale={params.locale} />
        <ProductItems products={products.data} locale={params.locale} />
      </Container>
    </div>
  );
}
