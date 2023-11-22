import { Locales } from "@/app/[lang]/dictionaries";
import { DEFAULT_LOCALE, LOCALES } from "@/middleware";

export const useCurrentLocale = () => getCurrentLocale();

export const getCurrentLocale = (): Locales => {
	if (typeof window === "undefined") return DEFAULT_LOCALE;
	return LOCALES.find(
		(locale) =>
			window.location.pathname.startsWith(`/${locale}/`) ||
			window.location.pathname.startsWith(`/${locale}`)
	)!;
};

export const getLocaleHref = (href: `/${string}`): string => {
	return `/${getCurrentLocale()}${href}`;
};
