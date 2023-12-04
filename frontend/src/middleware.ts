// pages/_middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';

export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get('cookie') || '');
  const token = cookies.accessToken;

  const exactProtectedRoutes = ['/'];
  const protectedRoutes = ['/workspace', '/settings'];

  const isProtectedRoute =
    exactProtectedRoutes.includes(req.nextUrl.pathname) ||
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

  if (!token && isProtectedRoute) {
    return NextResponse.redirect('http://localhost:3000/login');
  }

  return NextResponse.next();
}
