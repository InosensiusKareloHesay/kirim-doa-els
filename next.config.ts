import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/kirim-doa-els',
  assetPrefix: '/kirim-doa-els/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
