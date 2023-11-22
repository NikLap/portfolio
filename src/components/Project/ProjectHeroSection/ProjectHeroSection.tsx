import { Locales } from "@/app/[lang]/dictionaries";
import Button from "@/components/buttons/Button";
import useDictionary from "@/hooks/useDictionary";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _ProjectHeroSectionProps = {
	image: React.ReactNode;
	description: React.ReactNode;
	lang: Locales;
};

export type ProjectHeroSectionProps = _ProjectHeroSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _ProjectHeroSectionProps>;

function ProjectHeroSection({
	className,
	image,
	description,
	lang,
	...props
}: ProjectHeroSectionProps) {
	const dict = useDictionary(lang);
	return (
		<section
			className={cn(
				`flex h-screen flex-col justify-between px-4 pb-10 pt-20 lg:px-12 lg:pt-28`,
				className
			)}
			{...props}
		>
			{image}
			<div className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
				<p className="max-w-[576px] text-sm sm:text-lg">{description}</p>
				<div className="flex flex-col justify-end">
					<Button disabled>{dict["Visit the website"]}</Button>
				</div>
			</div>
		</section>
	);
}

export default ProjectHeroSection;
