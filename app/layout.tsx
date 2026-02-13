import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rely — AI Manager for Your Business",
  description: "Personal AI that calls employees, controls processes, and manages your business 24/7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
