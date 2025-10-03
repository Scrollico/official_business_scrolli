/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'media.licdn.com' },
      { hostname: 'static.licdn.com' },
      { hostname: 'cdn.licdn.com' },
      { hostname: 'via.placeholder.com' },
      { hostname: 'inflownetwork.com' },
      { hostname: 'upload.wikimedia.org' }
    ],
  },
  pageExtensions: ['ts', 'tsx'],
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
