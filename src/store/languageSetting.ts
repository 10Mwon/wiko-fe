export interface LanguageSetting {
  nation: string;
  image: string;
  code: string; // 언어 코드 추가
}

export const languageSetting: LanguageSetting[] = [
  {
    nation: "한국어",
    image: "/assets/nations/korea.png",
    code: "ko",
  },
  {
    nation: "English",
    image: "/assets/nations/us.png",
    code: "en",
  },
  {
    nation: "Tiếng Việt",
    image: "/assets/nations/vietnam.png",
    code: "vi",
  },
  {
    nation: "قازاق ٴتىلى",
    image: "/assets/nations/kazakhstan.png",
    code: "kk",
  },
  {
    nation: "中文",
    image: "/assets/nations/china.png",
    code: "zh",
  },
  {
    nation: "ภาษาไทย",
    image: "/assets/nations/thailand.png",
    code: "th",
  },
  {
    nation: "اۉزبېک تیلی",
    image: "/assets/nations/uzbekistan.png",
    code: "uz",
  },
  {
    nation: "Filipino",
    image: "/assets/nations/philippines.png",
    code: "fil",
  },
];
