import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SignalSpark - Decentralized Trading Signals on BSC",
  description: "Empowering signal providers and enriching signal consumption on Binance Smart Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg text-text-primary antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
