import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 1000,
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'tr',
  },
};

export default nextConfig;
