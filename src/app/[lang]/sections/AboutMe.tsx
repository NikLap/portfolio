import Button from "@/components/buttons/Button";
import DawnImg from "@/public/Dawn.svg";
import SpiralOneImg from "@/public/Spiral 1.svg";
import SpiralThreeImg from "@/public/Spiral 3.svg";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { ABOUT_ME_HREF } from "../menu";
import useDictionary from "@/hooks/useDictionary";
import { Locales } from "@/app/[lang]/dictionaries";

type _AboutMeSectionProps = {
	lang: Locales;
};

export type AboutMeSectionProps = _AboutMeSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _AboutMeSectionProps>;

function AboutMeSection({ lang: currentLocale, className, ...props }: AboutMeSectionProps) {
	const {
		pages: {
			main: { AboutMeSectionDescription, MoreAboutMe },
		},
	} = useDictionary(currentLocale);
	return (
		<section
			className={cn(
				`relative flex flex-col items-center gap-6 overflow-hidden
                 px-4 py-[256px] xl:min-h-screen xl:px-[360px]
				 xl:py-[440px]`,
				className
			)}
			{...props}
		>
			<h1 className="text-center text-2xl !leading-[150%] tracking-[-0.36px] xl:text-7xl">
				{AboutMeSectionDescription}
			</h1>
			<Link rel="noreferrer noopener" target={"_blank"} href={ABOUT_ME_HREF}>
				<Button className="w-fit">{MoreAboutMe}</Button>
			</Link>
			<Image
				className="absolute left-4 top-10 h-20 w-[38px] xl:left-[169.024px] xl:top-[151.968px] xl:h-[156px] xl:w-[127px]"
				src={SpiralThreeImg}
				alt="spiral 3"
			/>
			<Image
				className="absolute -right-6 top-[144px] h-[70px] w-16 xl:right-[48px] xl:top-[379px] xl:h-[125px] xl:w-[132px]"
				src={SpiralOneImg}
				alt="spiral 1"
			/>
			<Image
				className="absolute bottom-10 left-20 h-20 w-20 xl:bottom-[128px] xl:left-[560px] xl:h-32 xl:w-32"
				src={DawnImg}
				alt="dawn"
			/>
		</section>
	);
}

export default AboutMeSection;
