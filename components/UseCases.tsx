import ScrollReveal from "./ScrollReveal";

const cases = [
  {
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
    <section id="usecases" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-widest mb-3">Применение</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Для любого физического бизнеса
            </h2>
            <p className="mt-4 text-text-secondary">
              Релай адаптируется под специфику вашей отрасли
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((c, i) => (
              <div
                key={i}
                className="fade-up p-6 border border-border rounded-lg hover:border-border-hover transition-colors"
              >
                <h3 className="text-base font-semibold mb-4">{c.title}</h3>
                <ul className="space-y-2 mb-5">
                  {c.tasks.map((t, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 mt-0.5 text-accent-green shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent-green">{c.result}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
