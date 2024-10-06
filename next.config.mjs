/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

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
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "islamicart.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      enable: true,
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
    NEXT_PUBLIC_API_URL_MARQUE: process.env.NEXT_PUBLIC_API_URL_MARQUE,
    NEXT_PUBLIC_API_URL_PROYEK: process.env.NEXT_PUBLIC_API_URL_PROYEK,
    NEXT_PUBLIC_API_URL_BLOG: process.env.NEXT_PUBLIC_API_URL_BLOG,
    NEXT_PUBLIC_API_URL_PORTOFOLIO: process.env.NEXT_PUBLIC_API_URL_PORTOFOLIO,
    NEXT_PUBLIC_API_APP_SCRIPT: process.env.NEXT_PUBLIC_API_APP_SCRIPT,
    NEXT_PUBLIC_SITE_VERIFICATION: process.env.NEXT_PUBLIC_SITE_VERIFICATION,
  },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default bundleAnalyzer(nextConfig);
