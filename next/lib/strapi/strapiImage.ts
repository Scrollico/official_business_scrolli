import { unstable_noStore as noStore } from 'next/cache';

export function strapiImage(url: string): string {
  noStore();
  if (url.startsWith('/')) {
    return url; // Use relative paths directly for static site
  }
  return url;
}
