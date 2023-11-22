import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _TimesProps = {};

export type TimesProps = _TimesProps & Omit<ComponentPropsWithRef<"svg">, keyof _TimesProps>;

function Times({ className, ...props }: TimesProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={18}
			height={18}
			viewBox="0 0 18 18"
			fill="none"
			className={cn("group cursor-pointer", className)}
			{...props}
		>
			<path
				className="group-hover:stroke-primary stroke-secondary"
				d="M16.9948 1.00732L1.0061 16.996"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				className="group-hover:stroke-primary stroke-secondary"
				d="M17 17.0059L0.997925 1.00049"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Times;
