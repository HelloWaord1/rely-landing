import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Старт",
    price: "29 900",
    period: "/мес",
    desc: "Для малого бизнеса с одним объектом",
    features: [
      "До 20 сотрудников",
      "100 голосовых звонков/мес",
      "Базовые отчёты",
      "1 камера",
      "Email поддержка",
    ],
    cta: "Попробовать бесплатно",
    popular: false,
  },
  {
    name: "Бизнес",
    price: "79 900",
    period: "/мес",
    desc: "Для растущих компаний с несколькими объектами",
    features: [
      "До 100 сотрудников",
      "Безлимитные звонки",
      "Продвинутая аналитика",
      "До 10 камер + 2 дрона",
      "Приоритетная поддержка",
      "API доступ",
      "Кастомные отчёты",
    ],
    cta: "Попробовать бесплатно",
    popular: true,
  },
  {
    name: "Корпорация",
    price: "По запросу",
    period: "",
    desc: "Для крупных предприятий",
    features: [
      "Безлимит сотрудников",
      "Безлимитные звонки",
      "Выделенный AI-агент",
      "Неограниченно камер и дронов",
      "Персональный менеджер",
      "SLA 99.9%",
      "On-premise установка",
      "Кастомные интеграции",
    ],
    cta: "Связаться с нами",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-surface-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-widest mb-3">Тарифы</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Прозрачные цены
            </h2>
            <p className="mt-4 text-text-secondary">
              Без привязки карты. Отмена в любой момент.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-accent-green/10 border border-accent-green/20 rounded-lg">
              <span className="text-sm font-semibold text-accent-green">Первый месяц — бесплатно на всех тарифах</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {plans.map((p, i) => (
              <div
                key={i}
                className={`fade-up relative p-6 rounded-lg border transition-colors ${
                  p.popular
                    ? "bg-surface border-text-primary"
                    : "bg-surface border-border hover:border-border-hover"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-text-primary text-white text-xs font-medium rounded-full">
                    Популярный
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-text-tertiary mb-4">{p.desc}</p>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{p.price}</span>
                  {p.period && <span className="text-text-tertiary"> ₽{p.period}</span>}
                </div>
                <p className="text-xs font-medium text-accent-green mb-5">30 дней бесплатно</p>
                <ul className="space-y-2.5 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 mt-0.5 text-accent-green shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@rely.ai"
                  className={`block text-center py-2.5 px-5 rounded-lg text-sm font-medium transition-all ${
                    p.popular
                      ? "bg-text-primary text-white hover:opacity-90"
                      : "border border-border text-text-primary hover:border-border-hover"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
