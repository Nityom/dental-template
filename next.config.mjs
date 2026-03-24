/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/book-appointment',
        has: [{ type: 'host', value: 'ksdentalclinics.com' }],
        destination: 'https://book.ksdentalclinics.com',
        permanent: true,
      },
      {
        source: '/book-appointment',
        has: [{ type: 'host', value: 'www.ksdentalclinics.com' }],
        destination: 'https://book.ksdentalclinics.com',
        permanent: true,
      },
      {
        source: '/see',
        has: [{ type: 'host', value: 'ksdentalclinics.com' }],
        destination: 'https://book.ksdentalclinics.com/see',
        permanent: true,
      },
      {
        source: '/see',
        has: [{ type: 'host', value: 'www.ksdentalclinics.com' }],
        destination: 'https://book.ksdentalclinics.com/see',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    return config;
  },
};
export default nextConfig;