"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Как быстро можно подключить Rely?",
    a: "Базовая настройка занимает 1 рабочий день. Полная адаптация под ваши процессы — от 3 до 7 дней в зависимости от сложности бизнеса.",
  },
  {
    q: "Сотрудники поймут, что с ними говорит AI?",
    a: "Rely использует продвинутый синтез речи, неотличимый от живого голоса. Система ведёт естественный диалог, понимает контекст и отвечает на вопросы.",
  },
  {
    q: "Какие камеры и дроны поддерживаются?",
    a: "Rely интегрируется с большинством IP-камер (ONVIF, RTSP) и дронами DJI. Также поддерживаются кастомные интеграции через API.",
  },
  {
    q: "Насколько безопасны данные?",
    a: "Все данные шифруются, хранятся на серверах в России (152-ФЗ). Для корпоративных клиентов доступна on-premise установка.",
  },
  {
    q: "Можно ли попробовать бесплатно?",
    a: "Да, 14 дней бесплатного периода на любом тарифе. Без привязки карты, без обязательств.",
  },
  {
    q: "Rely заменит всех менеджеров?",
    a: "Rely не заменяет людей — он усиливает их. Рутинные задачи (контроль, звонки, отчёты) берёт на себя AI, а ваши менеджеры фокусируются на стратегии.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-raised transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{q}</span>
        <span className={`text-2xl text-text-secondary transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-text-secondary leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Частые вопросы
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="fade-up">
                <FAQItem q={f.q} a={f.a} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
