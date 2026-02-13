import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Подключение",
    desc: "Интеграция за 1 день. Опишите задачи и добавьте контакты сотрудников — всё.",
  },
  {
    num: "02",
    title: "Обучение",
    desc: "AI изучает ваш бизнес: графики, KPI, типичные проблемы. Через неделю знает процессы лучше нового менеджера.",
  },
  {
    num: "03",
    title: "Управление",
    desc: "Релай звонит сотрудникам, контролирует задачи через камеры и дроны, формирует отчёты в реальном времени.",
  },
  {
    num: "04",
    title: "Оптимизация",
    desc: "Система учится каждый день: анализирует результаты, находит узкие места, предлагает улучшения.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-widest mb-3">Решение</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Как работает Релай
            </h2>
            <p className="mt-4 text-text-secondary">
              От подключения до полного управления — 4 шага
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i}>
              <div className="p-5 border border-border rounded-lg h-full hover:border-border-hover transition-colors">
                <span className="text-xs font-mono text-text-tertiary">{step.num}</span>
                <h3 className="text-base font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
