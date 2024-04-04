import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// { charset: 'utf-8' },
// { name: 'viewport', content: 'width=device-width, initial-scale=1' },
// { hid: 'description', name: 'description', content: '發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。' },
// { hid: 'og:title', property: 'og:title', content: '台灣數位串流有限公司' },
// { hid: 'og:description', property: 'og:description', content: '發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。' },
// { hid: 'og:url', property: 'og:url', content: 'https://www.twds.com.tw/' },
// { hid: 'og:image', property: 'og:image', content: 'https://www.twds.com.tw/og.jpg' },
// { hid: 'og:type', property: 'og:type', content: 'website' },
export const metadata: Metadata = {
  icons: ["/logo/twds.png"],
  title: "台灣數位串流有限公司",
  description:
    "發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。",
  openGraph: {
    title: "台灣數位串流有限公司",
    description:
      "發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。",
    url: "https://www.twds.com.tw/",
    images: "https://www.twds.com.tw/img/og.jpg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="UA-155852877-1" />
    </html>
  );
}
