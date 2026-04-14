import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { defaultMetadata } from "@/lib/site-config";
import { getJsonLd } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = getJsonLd();

  return (
    <html lang="en">
      <body className="font-sans text-[15px] md:text-base">
        <Header />
        <main className="overflow-x-hidden pt-24">{children}</main>
        <Footer />
        {jsonLd.map((entry, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
          />
        ))}
      </body>
    </html>
  );
}
