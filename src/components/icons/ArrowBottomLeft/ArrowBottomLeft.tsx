import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef } from "react";

type _ArrowBottomLeftProps = {};

export type ArrowBottomLeftProps = _ArrowBottomLeftProps &
	Omit<ComponentPropsWithRef<"svg">, keyof _ArrowBottomLeftProps>;

function ArrowBottomLeft({ className, ...props }: ArrowBottomLeftProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={80}
			height={80}
			viewBox="0 0 80 80"
			fill="none"
			className={cn("group cursor-pointer", className)}
			{...props}
		>
			<path
				className="group-hover:stroke-primary stroke-tertiary"
				d="M21.4893 58.5917L56.8446 23.2363"
				stroke="#808080"
				strokeWidth={4}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				className="group-hover:stroke-primary stroke-tertiary"
				d="M49.9485 58.5316L21.4898 58.5929L21.5487 30.1318"
				stroke="#808080"
				strokeWidth={4}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default ArrowBottomLeft;
