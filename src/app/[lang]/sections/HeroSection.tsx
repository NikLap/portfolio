import Button from "@/components/buttons/Button";
import useDictionary from "@/hooks/useDictionary";
import { ENGLISH_LOCALE } from "@/middleware";
import HeroSectionSmileImg from "@/public/hero-section_1st-row_smile.svg";
import HeroSectionSwitchImg from "@/public/hero-section_2nd-row_switch.svg";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { Locales } from "@/app/[lang]/dictionaries";

type _HeroSectionProps = {
	lang: Locales;
};

export type HeroSectionProps = _HeroSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _HeroSectionProps>;

function HeroSection({ lang: currentLocale, className, ...props }: HeroSectionProps) {
	const isEnglishLocale = currentLocale === ENGLISH_LOCALE;
	const {
		pages: {
			main: { StartAProject },
		},
	} = useDictionary(currentLocale);

	return (
		<section
			className={cn(
				`relative flex flex-col items-center justify-center gap-6 px-4 pb-16 pt-32 xl:min-h-screen
                 xl:px-0 xl:py-0`,
				className
			)}
			{...props}
		>
			<div
				className="flex flex-col items-start justify-center 
                            text-3xl !leading-[130%] tracking-[-1.28px] xl:text-9xl"
			>
				<h1>
					{!!isEnglishLocale && (
						<>
							Crafting <i className="pr-2 xl:pr-4">friendly</i> and
						</>
					)}
					{!isEnglishLocale && <>Создаю уникальные</>}
				</h1>
				<h1 className="flex items-center gap-3 pl-4 xl:gap-12">
					<Image
						className="xl:hidden"
						width={26}
						height={26}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSmileImg}
						alt="smile"
					/>
					<Image
						className="hidden pt-4 xl:inline"
						width={98}
						height={98}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSmileImg}
						alt="smile"
					/>
					<div>
						{!!isEnglishLocale && (
							<>
								<i className="pr-2 xl:pr-4">intuitive</i> interfaces
							</>
						)}
						{!isEnglishLocale && <>и конверсионные</>}
					</div>
				</h1>
				<h1 className="flex items-center gap-3 xl:gap-12">
					<div>
						{!!isEnglishLocale && (
							<>
								with <i className="pr-2 xl:pr-4">creative</i> flair
							</>
						)}
						{!isEnglishLocale && <>дизайн-проекты</>}
					</div>
					<Image
						className="pt-2 xl:hidden"
						width={46}
						height={22}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSwitchImg}
						alt="switch"
					/>
					<Image
						className="hidden pt-6 xl:inline"
						width={170}
						height={80}
						style={{
							filter: "drop-shadow(0px 12px 64px rgba(96, 83, 248, 0.64))",
						}}
						src={HeroSectionSwitchImg}
						alt="switch"
					/>
				</h1>
			</div>
			<Link href={"#footer"}>
				<Button>{StartAProject}</Button>
			</Link>
		</section>
	);
}

export default HeroSection;
