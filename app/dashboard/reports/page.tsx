export default function ReportsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Отчёты</h1>
      <div className="bg-surface border border-border rounded-lg p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <p className="text-sm text-text-secondary">Пока пусто</p>
        <p className="text-xs text-text-tertiary mt-1">Данные появятся после первых звонков</p>
      </div>
    </div>
  );
}
