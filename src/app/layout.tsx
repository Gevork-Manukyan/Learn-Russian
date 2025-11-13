import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Russian",
  description: "Learn Russian language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
