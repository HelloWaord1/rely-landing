"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#problem", label: "Проблема" },
  { href: "#solution", label: "Решение" },
  { href: "#features", label: "Возможности" },
  { href: "#usecases", label: "Для кого" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="text-lg font-bold text-text-primary tracking-tight">
            Релай
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/login"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Войти
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-text-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Регистрация
            </Link>
          </div>

          <button
            className="md:hidden text-text-secondary"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
              Войти
            </Link>
            <Link href="/register" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-text-primary">
              Регистрация
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
