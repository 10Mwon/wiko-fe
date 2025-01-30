// PWA 세팅 Manifest 파일

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WIKO",
    short_name: "WIKO",
    description: "새로운 도전을 응원해요!",
    lang: "ko-KR",
    start_url: "/",
    display: "standalone",
    theme_color: "#6A51E6",
    background_color: "#6A51E6",
    icons: [
      {
        src: "/wTmp-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/wTmp-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
