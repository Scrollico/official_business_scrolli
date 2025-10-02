import React from 'react';

import ClientSlugHandler from '../../ClientSlugHandler';
import { BlogLayout } from '@/components/blog-layout';
import { getArticleData } from '@/lib/data';

export default async function SingleArticlePage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const params = await props.params;
  const article = await getArticleData(params.slug, params.locale);

  if (!article) {
    return <div>Blog not found</div>;
  }

  const localizedSlugs = { [params.locale]: params.slug };

  return (
    <BlogLayout article={article} locale={params.locale}>
      <ClientSlugHandler localizedSlugs={localizedSlugs} />
      <div className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </BlogLayout>
  );
}
