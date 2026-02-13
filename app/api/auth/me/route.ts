import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "../../../../lib/jwt";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("rely_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  return NextResponse.json({ email: payload.email, company: payload.company });
}
