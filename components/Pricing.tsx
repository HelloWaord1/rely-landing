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
    cta: "Начать бесплатно",
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
    desc: "Для крупных предприятий с особыми требованиями",
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
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent-green uppercase tracking-wider">Тарифы</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Прозрачные цены
            </h2>
            <p className="text-lg text-text-secondary">
              14 дней бесплатно на любом тарифе. Без привязки карты.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((p, i) => (
              <div
                key={i}
                className={`fade-up relative p-8 rounded-2xl border transition-all ${
                  p.popular
                    ? "pricing-popular border-brand/40 scale-[1.02]"
                    : "bg-surface-raised border-border"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-white text-xs font-semibold rounded-full">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-text-secondary text-sm mb-6">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-text-secondary"> ₽{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span className="text-accent-green mt-0.5">✓</span>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:info@rely.ai"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    p.popular
                      ? "bg-brand text-white hover:bg-brand-dark glow-brand"
                      : "bg-surface-overlay border border-border text-text-primary hover:bg-surface-raised"
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
