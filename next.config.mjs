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
    domains: ["islamicart.up.railway.app"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
