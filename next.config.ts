import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "admin.viecells.com"],
  },
};

export default nextConfig;
