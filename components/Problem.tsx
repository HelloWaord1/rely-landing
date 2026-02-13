import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "120 000 ₽", label: "Средняя зарплата менеджера в месяц", sub: "Не считая налогов и бонусов" },
  { value: "34%", label: "Времени тратится на рутину", sub: "Контроль, отчёты, звонки" },
  { value: "8 часов", label: "Максимум работы в день", sub: "Человек не может 24/7" },
  { value: "47%", label: "Задач выполняются с ошибками", sub: "Человеческий фактор" },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent-orange uppercase tracking-wider">Проблема</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Менеджеры — самое слабое звено вашего бизнеса
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Физический бизнес зависит от людей: менеджеры болеют, увольняются,
              ошибаются и не могут работать круглосуточно. А роботы — слишком дорогие.
              Между людьми и роботами есть Rely.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="fade-up p-6 bg-surface-raised border border-border rounded-2xl text-center hover:border-accent-orange/30 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent-orange mb-2">
                  {s.value}
                </div>
                <div className="text-text-primary font-medium mb-1">{s.label}</div>
                <div className="text-sm text-text-secondary">{s.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <div className="p-8 bg-surface-raised border border-border rounded-2xl text-center">
            <p className="text-xl sm:text-2xl text-text-secondary">
              Итого: один менеджер обходится в{" "}
              <span className="text-text-primary font-bold">~2 000 000 ₽/год</span>
              , работает <span className="text-text-primary font-bold">8 часов</span> из 24
              и допускает <span className="text-text-primary font-bold">сотни ошибок</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
