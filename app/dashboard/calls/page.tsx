export default function CallsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Звонки</h1>
      <div className="bg-surface border border-border rounded-lg p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <p className="text-sm text-text-secondary">Пока пусто</p>
        <p className="text-xs text-text-tertiary mt-1">Настройте первый звонок</p>
      </div>
    </div>
  );
}
