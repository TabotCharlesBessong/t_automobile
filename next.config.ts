import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  // eslint: {
  //   // Ignore ESLint errors during build
  //   ignoreDuringBuilds: true,
  // },
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
