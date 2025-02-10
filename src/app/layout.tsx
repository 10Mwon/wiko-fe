import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Lexend, Noto_Sans } from "next/font/google";
import { cookies } from "next/headers";
import SplashScreen from "../components/splashScreen/SplashScreen";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
});
const NotoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WIKO",
  description: "",
  icons: {
    icon: "/wTmp-192x192.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userLanguage = (await cookies()).get("NEXT_LOCALE")?.value || "ko";
  let messages;
  try {
    messages = (await import(`./messages/${userLanguage}.json`)).default;
  } catch (e) {
    console.log(e);
  }
  return (
    <html lang="en">
      <body className={`${lexend.className} ${NotoSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={userLanguage}>
          <SplashScreen />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
