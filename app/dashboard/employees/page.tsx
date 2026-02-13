export default function EmployeesPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Сотрудники</h1>
      <div className="bg-surface border border-border rounded-lg p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p className="text-sm text-text-secondary">Пока пусто</p>
        <p className="text-xs text-text-tertiary mt-1">Добавьте первого сотрудника</p>
      </div>
    </div>
  );
}
