import type { Metadata } from "next";
import { Lexend, Noto_Sans } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} ${NotoSans.className} antialiased`}>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
