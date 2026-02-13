import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "120 000 ₽", label: "Средняя зарплата менеджера", sub: "Без учёта налогов и бонусов" },
  { value: "34%", label: "Времени на рутину", sub: "Контроль, отчёты, звонки" },
  { value: "8 ч", label: "Рабочий день", sub: "Человек не может работать 24/7" },
  { value: "47%", label: "Задач с ошибками", sub: "Человеческий фактор" },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-surface-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-widest mb-3">Проблема</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Менеджеры — узкое место бизнеса
            </h2>
            <p className="mt-4 text-text-secondary">
              Физический бизнес зависит от людей. Люди болеют, увольняются, ошибаются и не могут работать круглосуточно. Роботы — слишком дорогие. Между ними — Релай.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="fade-up p-5 bg-surface border border-border rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-text-primary mb-1">{s.value}</div>
                <div className="text-sm font-medium text-text-primary mb-1">{s.label}</div>
                <div className="text-xs text-text-tertiary">{s.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <div className="p-6 bg-surface border border-border rounded-lg text-center">
            <p className="text-text-secondary">
              Итого: один менеджер обходится в{" "}
              <span className="font-semibold text-text-primary">~2 000 000 ₽/год</span>
              , работает <span className="font-semibold text-text-primary">8 часов</span> из 24
              и допускает <span className="font-semibold text-text-primary">сотни ошибок</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
