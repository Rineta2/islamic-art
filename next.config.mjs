/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "cdn.magloft.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "islamicart.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      enable: true,
    },
  },
};

import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default bundleAnalyzer(nextConfig);
