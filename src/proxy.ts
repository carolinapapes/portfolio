import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (hasLocale) return NextResponse.next();

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
