import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/server')) {
    const response = await fetch('http://localhost:3001/users');

    const data = await response.json();

    return NextResponse.json(data);
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  // приватные роуты
  matcher: ['/legacy', '/server/:path*'],
};
