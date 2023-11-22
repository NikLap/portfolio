import { cn } from "@/utils/component-utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { ArrowRight } from "../icons";

export type _CaseCardProps = {
	title: string;
	src: StaticImageData;
	href: string;
};

export type CaseCardProps = _CaseCardProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"a">>, keyof _CaseCardProps>;

function CaseCard({ className, children, title, src, href, ...props }: CaseCardProps) {
	return (
		<Link
			className={cn(
				`group flex flex-1 cursor-pointer flex-col items-start gap-2 md:gap-4`,
				className
			)}
			href={href}
			{...props}
		>
			<Image
				className="aspect-square transform rounded-xl object-cover md:aspect-auto md:rounded-2xl md:object-fill"
				src={src}
				alt={"case card"}
			/>
			<h3
				className="group-hover:text-primary text-tertiary flex cursor-pointer items-center gap-2
							pl-3 text-lg transition-all duration-150 md:pl-0 md:text-2xl"
			>
				{title}
				<ArrowRight className="h-6 w-6 -rotate-45 md:h-8 md:w-8 [&>path]:transition-all" />
			</h3>
		</Link>
	);
}

export default CaseCard;
