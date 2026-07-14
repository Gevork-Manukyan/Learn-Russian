import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learnrussian.gevorkmanukyan.com"),
  title: "Learn Russian · Flashcards",
  description: "Practice Russian vocabulary with elegant flashcards",
  openGraph: {
    title: "Learn Russian · Flashcards",
    description: "Practice Russian vocabulary with elegant flashcards",
    url: "https://learnrussian.gevorkmanukyan.com",
    siteName: "Learn Russian",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
