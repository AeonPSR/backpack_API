import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Test Next ",
  description: "A lil test of Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
