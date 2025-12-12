import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // Add your Strapi host here (or production domain)
  },
};

export default nextConfig;
