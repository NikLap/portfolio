import { NextRequest } from "next/server";

export const ENGLISH_LOCALE = "en";
export const RUSSIAN_LOCALE = "ru";
export const DEFAULT_LOCALE = ENGLISH_LOCALE;
export const LOCALES = [DEFAULT_LOCALE, RUSSIAN_LOCALE] as const;

function getLocale(request: NextRequest) {
	return request.headers["Accept-Language"] || DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = LOCALES.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return Response.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next|api).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
