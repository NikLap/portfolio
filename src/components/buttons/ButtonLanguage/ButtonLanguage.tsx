import { Locales } from "@/app/[lang]/dictionaries";
import { ENGLISH_LOCALE, RUSSIAN_LOCALE } from "@/middleware";
import EnFlag from "@/public/en-flag.svg";
import RuFlag from "@/public/ru-flag.svg";
import { cn } from "@/utils/component-utils";
import Image, { ImageProps } from "next/image";

type _ButtonLanguageProps = {
	lang: Locales;
};

export type ButtonLanguageProps = _ButtonLanguageProps &
	Omit<ImageProps, keyof _ButtonLanguageProps | "src" | "alt">;

function ButtonLanguage({ lang: currentLocale, className, ...props }: ButtonLanguageProps) {
	const isEnglishLocale = currentLocale === ENGLISH_LOCALE;

	const switchLocale = () => {
		window.location.pathname = window.location.pathname.replace(
			`/${isEnglishLocale ? ENGLISH_LOCALE : RUSSIAN_LOCALE}`,
			isEnglishLocale ? RUSSIAN_LOCALE : ENGLISH_LOCALE
		);
	};

	return (
		<Image
			onClick={switchLocale}
			className={cn(
				"cursor-pointer opacity-30 transition-opacity duration-300 hover:opacity-100",
				className
			)}
			src={isEnglishLocale ? RuFlag : EnFlag}
			alt="language switch"
			{...props}
		/>
	);
}

export default ButtonLanguage;
