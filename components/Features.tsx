import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "📞",
    title: "Голосовые звонки",
    desc: "Rely звонит сотрудникам по реальному телефону: напоминания о задачах, сбор отчётов, контроль выполнения. Голос неотличим от живого менеджера.",
    color: "text-accent-green",
    border: "hover:border-accent-green/30",
  },
  {
    icon: "🎯",
    title: "AI контроль процессов",
    desc: "Система отслеживает все бизнес-процессы в реальном времени: дедлайны, KPI, загрузка сотрудников. Проблемы обнаруживаются до того, как станут критичными.",
    color: "text-brand-light",
    border: "hover:border-brand/30",
  },
  {
    icon: "🚁",
    title: "Дроны и камеры",
    desc: "Подключение к камерам наблюдения и дронам для физического контроля: инвентаризация, безопасность, мониторинг территории — всё автоматически.",
    color: "text-accent-purple",
    border: "hover:border-accent-purple/30",
  },
  {
    icon: "📊",
    title: "Автоматические отчёты",
    desc: "Ежедневные, еженедельные и месячные отчёты формируются сами. Визуализация данных, тренды, аномалии — всё в одном дашборде.",
    color: "text-accent-blue",
    border: "hover:border-accent-blue/30",
  },
  {
    icon: "🧬",
    title: "Самообучение",
    desc: "Rely анализирует результаты каждого действия и постоянно улучшает свои решения. Чем дольше работает — тем эффективнее становится.",
    color: "text-accent-orange",
    border: "hover:border-accent-orange/30",
  },
  {
    icon: "⚡",
    title: "24/7 без перерывов",
    desc: "Не болеет, не увольняется, не устаёт. Rely работает круглосуточно, 365 дней в году, обрабатывая тысячи задач одновременно.",
    color: "text-accent-green",
    border: "hover:border-accent-green/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-brand-light uppercase tracking-wider">Возможности</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Всё, что нужно для управления
            </h2>
            <p className="text-lg text-text-secondary">
              Полный набор инструментов для автоматизации менеджмента
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`fade-up feature-card p-8 bg-surface-raised border border-border rounded-2xl ${f.border} transition-all`}
              >
                <div className={`text-4xl mb-4`}>{f.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${f.color}`}>{f.title}</h3>
                <p className="text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
