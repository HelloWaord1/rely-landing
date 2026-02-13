export default function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-primary">
          AI-менеджер для
          <br />
          физического бизнеса
        </h1>

        <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
          Релай звонит сотрудникам, контролирует процессы через камеры и дроны, формирует отчёты — круглосуточно, без ошибок и выходных.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#pricing"
            className="px-6 py-3 bg-text-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Начать бесплатно
          </a>
          <a
            href="#solution"
            className="px-6 py-3 border border-border text-text-primary font-medium rounded-lg hover:border-border-hover transition-colors text-sm"
          >
            Как это работает
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "24/7", label: "Контроль" },
            { value: "1 день", label: "На подключение" },
            { value: "−40%", label: "Потери" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-text-primary">{s.value}</div>
              <div className="text-xs text-text-tertiary mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
