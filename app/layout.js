import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
