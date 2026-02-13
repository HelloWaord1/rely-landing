import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Готовы автоматизировать управление?
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              Начните бесплатный 14-дневный период прямо сейчас.
              Без привязки карты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@rely.ai"
                className="px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all glow-brand text-lg"
              >
                Попробовать бесплатно
              </a>
              <a
                href="mailto:info@rely.ai"
                className="px-8 py-4 bg-surface-raised border border-border text-text-primary font-semibold rounded-xl hover:bg-surface-overlay transition-all text-lg"
              >
                Записаться на демо
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <div className="text-xl font-bold gradient-text">Rely</div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="mailto:info@rely.ai" className="hover:text-text-primary transition-colors">
              info@rely.ai
            </a>
            <span>© Rely {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
