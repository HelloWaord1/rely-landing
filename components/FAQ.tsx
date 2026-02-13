"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Как быстро можно подключить Релай?",
    a: "Базовая настройка — 1 рабочий день. Полная адаптация под ваши процессы — от 3 до 7 дней в зависимости от сложности.",
  },
  {
    q: "Сотрудники поймут, что с ними говорит AI?",
    a: "Релай использует продвинутый синтез речи. Система ведёт естественный диалог, понимает контекст и отвечает на уточняющие вопросы.",
  },
  {
    q: "Какие камеры и дроны поддерживаются?",
    a: "IP-камеры (ONVIF, RTSP) и дроны DJI. Для других устройств — кастомные интеграции через API.",
  },
  {
    q: "Насколько безопасны данные?",
    a: "Шифрование, хранение на серверах в России (152-ФЗ). Для корпоративных клиентов — on-premise установка.",
  },
  {
    q: "Можно ли попробовать бесплатно?",
    a: "Да, 14 дней на любом тарифе. Без привязки карты.",
  },
  {
    q: "Релай заменит всех менеджеров?",
    a: "Нет. Релай берёт на себя рутину — контроль, звонки, отчёты. Ваши менеджеры фокусируются на стратегии и нестандартных задачах.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium pr-4">{q}</span>
        <svg
          className={`w-4 h-4 shrink-0 text-text-tertiary transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <p className="pb-4 text-sm text-text-secondary leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Частые вопросы
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
