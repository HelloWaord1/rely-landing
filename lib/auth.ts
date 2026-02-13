"use client";

export interface User {
  company: string;
  phone: string;
  email: string;
  password: string;
}

export function register(user: User): boolean {
  const existing = localStorage.getItem("rely_users");
  const users: User[] = existing ? JSON.parse(existing) : [];
  if (users.find((u) => u.email === user.email)) return false;
  users.push(user);
  localStorage.setItem("rely_users", JSON.stringify(users));
  localStorage.setItem("rely_session", JSON.stringify({ email: user.email, company: user.company }));
  return true;
}

export function login(email: string, password: string): boolean {
  const existing = localStorage.getItem("rely_users");
  const users: User[] = existing ? JSON.parse(existing) : [];
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return false;
  localStorage.setItem("rely_session", JSON.stringify({ email: user.email, company: user.company }));
  return true;
}

export function logout() {
  localStorage.removeItem("rely_session");
}

export function getSession(): { email: string; company: string } | null {
  if (typeof window === "undefined") return null;
  const s = localStorage.getItem("rely_session");
  return s ? JSON.parse(s) : null;
}
