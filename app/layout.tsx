import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Релай — AI-менеджер для физических бизнесов",
  description:
    "AI-менеджер для складов, производства и строительства. Голосовые звонки сотрудникам, контроль через камеры и дроны, автоматические отчёты 24/7.",
  keywords:
    "AI менеджер, управление бизнесом, автоматизация, склад, производство, строительство",
  openGraph: {
    title: "Релай — AI-менеджер для физических бизнесов",
    description:
      "AI-менеджер: голосовые звонки, контроль 24/7, камеры и дроны.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
