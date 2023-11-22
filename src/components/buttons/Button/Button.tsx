"use client";

import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";

type _ButtonProps = {
	isHovering?: boolean;
	disableActive?: boolean;
	disableHover?: boolean;
};

export type ButtonProps = _ButtonProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"button">>, keyof _ButtonProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ className, children, isHovering, disableActive, disableHover, ...props }: ButtonProps,
	ref
) {
	return (
		<button
			ref={ref}
			className={cn(
				`bg-secondary disabled:hover:bg-secondary disabled:hover:text-secondary
				transform select-none
				rounded-full px-8
				py-2 text-sm transition-transform duration-150 disabled:cursor-not-allowed
				disabled:hover:font-normal
				disabled:hover:shadow-none disabled:active:scale-100 sm:py-3 sm:text-lg`,
				{
					"text-primary bg-primary shadow-[0px_12px_64px_0px_rgba(96,83,248,0.48)]":
						isHovering,
					"active:scale-95 active:font-thin active:shadow-none": !disableActive,
					"hover:text-primary hover:bg-primary hover:font-thin hover:shadow-[0px_12px_64px_0px_rgba(96,83,248,0.48)]":
						!disableHover,
				},
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
});

export default Button;
