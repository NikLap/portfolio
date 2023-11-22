import Expandable from "@/components/Expandable";
import useDictionary from "@/hooks/useDictionary";
import HeavyWavesImg from "@/public/Heavy Waves.svg";
import SpiralTwoImg from "@/public/Spiral 2.svg";
import TransparencyImg from "@/public/Transparency.svg";
import { cn } from "@/utils/component-utils";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";
import { Locales } from "@/app/[lang]/dictionaries";

type _FaqSectionProps = {
	lang: Locales;
};

export type FaqSectionProps = _FaqSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _FaqSectionProps>;

function FaqSection({ lang: currentLocale, className, children, ...props }: FaqSectionProps) {
	const {
		pages: {
			main: { faqs, faqsTitle },
		},
	} = useDictionary(currentLocale);
	return (
		<>
			<section
				id="faqs"
				className={cn(
					`relative flex flex-col items-center justify-center gap-10
					overflow-hidden px-4 py-[256px] lg:px-0 lg:py-[440px]`,
					className
				)}
				{...props}
			>
				<h1 className="text-4xl !leading-[150%] lg:text-7xl">{faqsTitle}</h1>
				<ul className="flex flex-col gap-4">
					{faqs.map(({ title, description }) => (
						<li key={title}>
							<Expandable title={title} description={description} />
						</li>
					))}
				</ul>
				<Image
					className="absolute -right-4 top-[132px] h-20 w-16 lg:left-[340.833px] lg:top-[295.074px] lg:h-[123px] lg:w-[108px]"
					src={SpiralTwoImg}
					alt="spiral 2"
				/>
				<Image
					className="absolute right-20 top-[900px] h-20 w-20 lg:right-[204px] lg:top-[800px] lg:h-32 lg:w-32"
					src={TransparencyImg}
					alt="Transparency"
				/>
				<Image
					className="absolute left-6 top-11 h-14 w-20 lg:left-[206.074px] lg:top-[1180px] lg:h-[84px] lg:w-[118px]"
					src={HeavyWavesImg}
					alt="Heavy waves"
				/>
			</section>
		</>
	);
}

export default FaqSection;
