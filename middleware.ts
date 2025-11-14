import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname.startsWith('/admin')) {
    const auth = req.cookies.get('admin_auth');
    if (!auth || auth.value !== process.env.ADMIN_SECRET) {
      url.pathname = '/admin-login';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
