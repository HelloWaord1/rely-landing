import ScrollReveal from "./ScrollReveal";

const cases = [
  {
    icon: "🏭",
    title: "Склады",
    tasks: [
      "Контроль приёмки и отгрузки",
      "Инвентаризация через дроны",
      "Координация смен и бригад",
      "Мониторинг температурного режима",
    ],
    result: "Сокращение потерь на 40%",
  },
  {
    icon: "⚙️",
    title: "Производство",
    tasks: [
      "Контроль выполнения планов",
      "Мониторинг оборудования",
      "Управление сменами",
      "Отслеживание качества",
    ],
    result: "Рост производительности на 35%",
  },
  {
    icon: "🏗️",
    title: "Строительство",
    tasks: [
      "Контроль сроков и этапов",
      "Облёт объектов дронами",
      "Координация подрядчиков",
      "Контроль техники безопасности",
    ],
    result: "Соблюдение сроков в 95% случаев",
  },
  {
    icon: "🚛",
    title: "Логистика",
    tasks: [
      "Оптимизация маршрутов",
      "Контроль водителей",
      "Мониторинг доставок",
      "Управление автопарком",
    ],
    result: "Экономия на логистике 25%",
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent-purple uppercase tracking-wider">Применение</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Для любого физического бизнеса
            </h2>
            <p className="text-lg text-text-secondary">
              Rely адаптируется под специфику вашей отрасли
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <div
                key={i}
                className="fade-up feature-card p-8 bg-surface-raised border border-border rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{c.icon}</span>
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {c.tasks.map((t, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-brand-light mt-0.5">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <span className="text-accent-green font-semibold">{c.result}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
