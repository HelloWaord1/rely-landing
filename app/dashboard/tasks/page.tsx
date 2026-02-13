export default function TasksPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Задачи</h1>
      <div className="bg-surface border border-border rounded-lg p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <p className="text-sm text-text-secondary">Пока пусто</p>
        <p className="text-xs text-text-tertiary mt-1">Создайте первую задачу</p>
      </div>
    </div>
  );
}
