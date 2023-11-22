import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _ArrowRightProps = {};

export type ArrowRightProps = _ArrowRightProps &
	Omit<ComponentPropsWithRef<"svg">, keyof _ArrowRightProps>;

function ArrowRight({ className, ...props }: ArrowRightProps) {
	return (
		<svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("group cursor-pointer", className)}
			{...props}
		>
			<path
				className="group-hover:stroke-primary stroke-tertiary"
				d="M26.3334 15.6343H6.33337"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				className="group-hover:stroke-primary stroke-tertiary"
				d="M18.267 7.60172L26.3336 15.6337L18.267 23.6671"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default ArrowRight;
