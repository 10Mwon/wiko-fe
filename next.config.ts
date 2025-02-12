import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos", "cdn.pixabay.com", "imgs.albamon.kr"],
  },
};

export default withNextIntl(nextConfig);
