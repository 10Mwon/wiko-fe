import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "rootimpact7.s3.ap-northeast-2.amazonaws.com",
      "cdn.pixabay.com",
      "imgs.albamon.kr",
    ],
  },
};

export default withNextIntl(nextConfig);
