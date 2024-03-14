import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nb = localFont({
  src: [
    {
      path: './../public/fonts/nb.ttf',
      style: 'normal'
    },
  ],
  variable: '--font-nb'
},)

export const metadata: Metadata = {
  title: "Opulence",
  description: "Keep track of your expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nb.variable} font-sans`}>{children}</body>
    </html>
  );
}
