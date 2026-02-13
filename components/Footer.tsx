import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="py-20 sm:py-28 bg-surface-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Готовы автоматизировать управление?
            </h2>
            <p className="text-text-secondary mb-8">
              14 дней бесплатно. Без привязки карты.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@rely.ai"
                className="px-6 py-3 bg-text-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Попробовать бесплатно
              </a>
              <a
                href="mailto:info@rely.ai"
                className="px-6 py-3 border border-border text-text-primary font-medium rounded-lg hover:border-border-hover transition-colors text-sm"
              >
                Записаться на демо
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border gap-4">
          <div className="text-sm font-semibold text-text-primary">
            Релай <span className="text-text-tertiary font-normal ml-1">Rely</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-text-tertiary">
            <a href="mailto:info@rely.ai" className="hover:text-text-secondary transition-colors">
              info@rely.ai
            </a>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
