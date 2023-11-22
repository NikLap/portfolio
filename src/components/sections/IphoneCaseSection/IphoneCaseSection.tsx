import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _IphoneCaseSectionProps = {};

export type IphoneCaseSectionProps = _IphoneCaseSectionProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"section">>, keyof _IphoneCaseSectionProps>;

function IphoneCaseSection({ className, children, ...props }: IphoneCaseSectionProps) {
	return (
		<section className={cn(`flex gap-2 lg:gap-12`, className)} {...props}>
			{children}
		</section>
	);
}

export default IphoneCaseSection;
