"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "../../lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ company: "", phone: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.company || !form.email || !form.password) {
      setError("Заполните все обязательные поля");
      return;
    }
    setLoading(true);
    try {
      await register(form);
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-xl font-bold text-text-primary tracking-tight">Релай</Link>
          <h1 className="mt-6 text-2xl font-bold text-text-primary">Создайте аккаунт</h1>
          <p className="mt-2 text-sm text-text-secondary">Начните управлять бизнесом с AI</p>
        </div>

        <form onSubmit={handle} className="space-y-4">
          {error && <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">Название компании *</label>
            <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-text-primary transition-colors" placeholder="ООО Ваша Компания" />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">Телефон</label>
            <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-text-primary transition-colors" placeholder="+7 (999) 123-45-67" />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-text-primary transition-colors" placeholder="you@company.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">Пароль *</label>
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-text-primary transition-colors" placeholder="Минимум 6 символов" />
          </div>

          <button type="submit" disabled={loading} className="w-full py-2.5 bg-text-primary text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity mt-2 disabled:opacity-50">
            {loading ? "Создание..." : "Создать аккаунт"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Уже есть аккаунт?{" "}
          <Link href="/login" className="text-text-primary font-medium hover:underline">Войти</Link>
        </p>
      </div>
    </div>
  );
}
