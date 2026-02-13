export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Rely</span>
            <span className="text-violet-400">.</span>
          </span>
          <a
            href="https://t.me/Yava_Working"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center pt-20 pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            Now in Early Access
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            AI Manager
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              for Your Business
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Personal AI that calls employees, controls processes, and manages
            your business 24/7. No robots needed.
          </p>
          <a
            href="https://t.me/Yava_Working"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25 text-lg"
          >
            Get a Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-16 tracking-tight">
            What Rely Does
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📞",
                title: "Voice Calls",
                desc: "AI calls your employees, checks task progress, and reports back. Real phone calls, not chatbots.",
              },
              {
                icon: "⚡",
                title: "Process Control",
                desc: "24/7 monitoring of business processes. Automated escalation, smart scheduling, zero downtime.",
              },
              {
                icon: "🛸",
                title: "Drones & IoT",
                desc: "Phase 2: Physical presence through drone integration and IoT sensors for warehouses and sites.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-500/[0.03] transition-all"
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Ready to automate management?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg">
            Join early access. We set up your AI manager in under a week.
          </p>
          <a
            href="https://t.me/Yava_Working"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-all text-lg"
          >
            Получить демо →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-zinc-500">
          <span>Rely © 2026</span>
          <a href="https://t.me/Yava_Working" className="hover:text-zinc-300 transition-colors">
            @Yava_Working
          </a>
        </div>
      </footer>
    </main>
  );
}
