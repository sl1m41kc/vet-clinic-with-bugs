// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // Получаем роль
  const token = await getToken({ req: request, secret: process.env.SECRET });
  const role = String(token?.role).toUpperCase();

  if(pathname.startsWith('/api/admin')) {
    if (role !== 'ADMIN') return NextResponse.json({ message: 'Access Denied: You are not an admin.' }, { status: 403 });
  }

  if (pathname.startsWith('/admin')) {
    if (role !== 'ADMIN')
      return NextResponse.redirect(new URL('/login', request.url));
    response.headers.set('X-Layout', 'admin');
  } else if (pathname.startsWith('/login')) {
    if (role === 'ADMIN')
      return NextResponse.redirect(new URL('/admin/price', request.url));
    response.headers.set('X-Layout', 'login');
  } else {
    response.headers.set('X-Layout', 'main');
  }

  return response;
}

// Укажите путь, для которого middleware должен срабатывать
export const config = {
  matcher: [
    '/api/:path*', // Добавляем проверку для всех API маршрутов
    '/((?!_next|static|favicon.ico).*)', // Проверка для всех остальных маршрутов
  ],
};