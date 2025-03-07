import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'farmui.vercel.app',
        pathname: '/dashboard.png',
     
      }
    ]
  }
};

export default nextConfig;