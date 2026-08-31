import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@yantra/engine'],
  reactStrictMode: true,
};

export default nextConfig;
