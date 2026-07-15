import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Learn Russian · Flashcards";
const description = "Practice Russian vocabulary with elegant flashcards";

export const metadata: Metadata = {
  metadataBase: new URL("https://learnrussian.gevorkmanukyan.com"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "https://learnrussian.gevorkmanukyan.com",
    siteName: "Learn Russian",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="flex min-h-screen flex-col">
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
