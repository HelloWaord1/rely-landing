"use client";
import { useEffect, useState } from "react";
import { getSession } from "../../lib/auth";

const stats = [
  { label: "Сотрудников", value: "0", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Задач", value: "0", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { label: "Звонков сегодня", value: "0", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { label: "Выполнено", value: "0%", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const steps = [
  { num: "1", title: "Добавьте сотрудников", desc: "Внесите контакты и должности вашей команды" },
  { num: "2", title: "Создайте первую задачу", desc: "Опишите задачу и назначьте ответственного" },
  { num: "3", title: "Настройте расписание звонков", desc: "Релай будет звонить сотрудникам по расписанию" },
];

export default function DashboardHome() {
  const [company, setCompany] = useState("");

  useEffect(() => {
    getSession().then((s) => { if (s) setCompany(s.company); });
  }, []);

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Добро пожаловать в Релай</h1>
        <p className="text-sm text-text-secondary mt-1">{company} — ваш AI-менеджер готов к работе</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-surface-secondary flex items-center justify-center">
                <svg className="w-5 h-5 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
            </div>
            <div className="text-2xl font-bold text-text-primary">{s.value}</div>
            <div className="text-xs text-text-tertiary mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold text-text-primary mb-1">Начните работу</h2>
        <p className="text-sm text-text-secondary mb-5">Три шага для запуска AI-менеджера</p>
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-border-hover transition-colors">
              <div className="w-8 h-8 rounded-full bg-surface-secondary border border-border flex items-center justify-center text-sm font-semibold text-text-primary shrink-0">{step.num}</div>
              <div>
                <div className="text-sm font-medium text-text-primary">{step.title}</div>
                <div className="text-sm text-text-secondary mt-0.5">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
