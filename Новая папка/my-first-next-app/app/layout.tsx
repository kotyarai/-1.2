import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мой первый блог на Next.js",
  description: "Учебный проект по изучению Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            My Next Blog
          </Link>

          <nav aria-label="Основная навигация">
            <Link href="/">Главная</Link>
            <Link href="/about">О проекте</Link>
            <Link href="/blog/nextjs-vvedenie">Блог</Link>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          © 2026 Мой первый проект на Next.js
        </footer>
      </body>
    </html>
  );
}
