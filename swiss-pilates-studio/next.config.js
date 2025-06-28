/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['fr', 'de', 'it', 'en'],
    defaultLocale: 'fr',
    localeDetection: true,
  },
  experimental: {
    typedRoutes: true,
  },
}

module.exports = nextConfig