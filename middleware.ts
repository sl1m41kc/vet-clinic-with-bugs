// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Получаем токен
  const token = await getToken({ req: request, secret: process.env.SECRET });
  // Если нет токена, перенаправляем на страницу авторизации
  if (!token)
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  // Получаем роль
  const role = String(token.role).toUpperCase();

  if (pathname.startsWith("/admin")) {
    if (role !== "ADMIN") return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    response.headers.set("X-Layout", "admin");
  } else {
    response.headers.set("X-Layout", "main");
  }

  return response;
}

// Укажите путь, для которого middleware должен срабатывать
export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
