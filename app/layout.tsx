import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rely — AI-менеджер для физических бизнесов",
  description:
    "Персональный AI-менеджер, который звонит сотрудникам, контролирует процессы 24/7, подключается к дронам и камерам. Для складов, производства и строительства.",
  keywords:
    "AI менеджер, управление бизнесом, автоматизация, склад, производство, строительство, голосовые звонки, дроны",
  openGraph: {
    title: "Rely — AI-менеджер для физических бизнесов",
    description:
      "Персональный AI-менеджер: голосовые звонки, контроль 24/7, дроны и камеры.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
