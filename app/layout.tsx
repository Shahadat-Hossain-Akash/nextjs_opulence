import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";

const nb = localFont({
    src: [
        {
            path: './../public/fonts/nb.ttf',
            style: 'normal'
        }
    ],
    variable: '--font-nb'
},)

export const metadata: Metadata = {
    title: "Opulence",
    description: "Keep track of your expenses"
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${nb.variable} font-sans`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
