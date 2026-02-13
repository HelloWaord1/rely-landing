"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "../../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Заполните все поля");
      return;
    }
    const ok = login(email, password);
    if (!ok) {
      setError("Неверный email или пароль");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-xl font-bold text-text-primary tracking-tight">
            Релай
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-text-primary">Вход в систему</h1>
          <p className="mt-2 text-sm text-text-secondary">Введите данные для входа</p>
        </div>

        <form onSubmit={handle} className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">{error}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-text-primary transition-colors"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:border-text-primary transition-colors"
              placeholder="Ваш пароль"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-text-primary text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity mt-2"
          >
            Войти
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Нет аккаунта?{" "}
          <Link href="/register" className="text-text-primary font-medium hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}
