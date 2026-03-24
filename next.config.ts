import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  turbopack: {
    root: '.',
  },
  /* config options here */
};

export default nextConfig;
