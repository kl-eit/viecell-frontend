/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: "https",
        hostname: "admin.viecells.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;