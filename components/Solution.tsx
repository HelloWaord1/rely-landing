import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Подключение",
    desc: "Интегрируем Rely в ваши процессы за 1 день. Без сложных настроек — достаточно описать задачи и добавить контакты сотрудников.",
    icon: "🔌",
  },
  {
    num: "02",
    title: "Обучение",
    desc: "AI изучает ваш бизнес: графики, KPI, типичные проблемы. Через неделю Rely знает ваш бизнес лучше любого нового менеджера.",
    icon: "🧠",
  },
  {
    num: "03",
    title: "Управление",
    desc: "Rely звонит сотрудникам, контролирует выполнение задач через камеры и дроны, формирует отчёты в реальном времени.",
    icon: "📞",
  },
  {
    num: "04",
    title: "Оптимизация",
    desc: "Система постоянно учится: анализирует результаты, находит узкие места и предлагает улучшения. Каждый день — эффективнее.",
    icon: "📈",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-brand-light uppercase tracking-wider">Решение</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Как работает Rely
            </h2>
            <p className="text-lg text-text-secondary">
              От подключения до полного управления — за 4 простых шага
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i}>
              <div className="relative p-6 bg-surface-raised border border-border rounded-2xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-sm font-mono text-brand-light">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-center text-text-secondary/30">
                    →
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
