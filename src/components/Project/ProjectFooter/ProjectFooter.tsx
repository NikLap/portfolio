import { Locales } from "@/app/[lang]/dictionaries";
import ArrowBottomLeft from "@/components/icons/ArrowBottomLeft";
import useDictionary from "@/hooks/useDictionary";
import { cn } from "@/utils/component-utils";
import { getLocaleHref } from "@/utils/locale-utils";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

type _ProjectFooterProps = {
	imageSrc: ImageProps["src"];
	nextProjectHref: string;
	lang: Locales;
};

type ProjectFooterProps = _ProjectFooterProps &
	Omit<ComponentPropsWithRef<"footer">, keyof _ProjectFooterProps>;

function ProjectFooter({
	className,
	nextProjectHref,
	imageSrc,
	lang,
	...props
}: ProjectFooterProps) {
	const { projectFooter } = useDictionary(lang);
	return (
		<footer className={cn(`pt-[256px] md:px-12 md:pt-[440px]`, className)} {...props}>
			<Link
				href={getLocaleHref(nextProjectHref as `/${string}`)}
				className="group flex cursor-pointer flex-col gap-4 md:gap-6"
			>
				<div className="group flex items-center justify-between gap-4 px-4 md:px-0">
					<h1 className="text-[32px] !leading-[130%] md:text-9xl">
						{projectFooter["Next Project"]}
					</h1>
					<div className="flex flex-col justify-end">
						<ArrowBottomLeft className="h-10 w-10 md:h-20 md:w-20" />
					</div>
				</div>
				<div className="relative h-[160px] md:h-[640px]">
					<Image
						className="rounded-tl-2xl rounded-tr-2xl object-cover"
						fill
						src={imageSrc}
						alt="Next project footer image"
					/>
				</div>
			</Link>
		</footer>
	);
}

export default ProjectFooter;
