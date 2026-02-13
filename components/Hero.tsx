"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
        <div className="orb orb-delay-1 absolute top-1/3 right-1/4 w-80 h-80 bg-accent-purple/15 rounded-full blur-3xl" />
        <div className="orb orb-delay-2 absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-raised border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-sm text-text-secondary">Новое поколение управления бизнесом</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          AI-менеджер, который
          <br />
          <span className="gradient-text">управляет реальным</span>
          <br />
          бизнесом
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Rely звонит сотрудникам, контролирует процессы через камеры и дроны,
          составляет отчёты и работает 24/7 — без выходных, отпусков и ошибок
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all glow-brand text-lg"
          >
            Попробовать бесплатно
          </a>
          <a
            href="#solution"
            className="px-8 py-4 bg-surface-raised border border-border text-text-primary font-semibold rounded-xl hover:bg-surface-overlay transition-all text-lg"
          >
            Как это работает
          </a>
        </div>

        {/* Animated visualization */}
        <div className="mt-20 relative">
          <div className="relative mx-auto w-full max-w-2xl h-64 sm:h-80">
            {/* Central node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand/20 border-2 border-brand rounded-2xl flex items-center justify-center z-10">
              <span className="text-2xl font-bold gradient-text">R</span>
              <div className="absolute inset-0 rounded-2xl ping-ring border border-brand/40" />
              <div className="absolute inset-0 rounded-2xl ping-ring ping-ring-delay border border-brand/20" />
            </div>

            {/* Connected nodes */}
            {[
              { x: "15%", y: "20%", icon: "📞", label: "Звонки" },
              { x: "75%", y: "15%", icon: "📹", label: "Камеры" },
              { x: "85%", y: "65%", icon: "🚁", label: "Дроны" },
              { x: "10%", y: "70%", icon: "📊", label: "Отчёты" },
              { x: "50%", y: "5%", icon: "🧠", label: "AI" },
              { x: "50%", y: "90%", icon: "👷", label: "Команда" },
            ].map((node, i) => (
              <div
                key={i}
                className="absolute flex flex-col items-center gap-1 orb"
                style={{
                  left: node.x,
                  top: node.y,
                  animationDelay: `${-i * 1.3}s`,
                  animationDuration: "6s",
                }}
              >
                <div className="w-12 h-12 bg-surface-raised border border-border rounded-xl flex items-center justify-center text-xl">
                  {node.icon}
                </div>
                <span className="text-xs text-text-secondary">{node.label}</span>
              </div>
            ))}

            {/* Connection lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(99,102,241,0)" />
                  <stop offset="50%" stopColor="rgba(99,102,241,0.3)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                </linearGradient>
              </defs>
              {[
                { x1: "50%", y1: "50%", x2: "18%", y2: "24%" },
                { x1: "50%", y1: "50%", x2: "78%", y2: "19%" },
                { x1: "50%", y1: "50%", x2: "88%", y2: "69%" },
                { x1: "50%", y1: "50%", x2: "13%", y2: "74%" },
                { x1: "50%", y1: "50%", x2: "53%", y2: "9%" },
                { x1: "50%", y1: "50%", x2: "53%", y2: "93%" },
              ].map((line, i) => (
                <line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
