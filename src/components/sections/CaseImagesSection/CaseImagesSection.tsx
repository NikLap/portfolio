import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _CaseImagesSectionProps = {};

export type CaseImagesSectionProps = _CaseImagesSectionProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _CaseImagesSectionProps>;

function CaseImagesSection({ className, children, ...props }: CaseImagesSectionProps) {
	return (
		<div className={cn(`flex flex-col gap-2 lg:gap-12 lg:px-12`, className)} {...props}>
			{children}
		</div>
	);
}

export default CaseImagesSection;
