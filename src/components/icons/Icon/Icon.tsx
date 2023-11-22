import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

export type IconVariant = "primary" | "secondary";
type _IconProps = {
	variant?: IconVariant;
};

export type IconProps = _IconProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"svg">>, keyof _IconProps>;

function Icon({ className, children, variant = "primary", ...props }: IconProps) {
	return (
		<div className="flex items-center justify-center p-1">
			<svg
				className={cn(
					`hover:fill-primary cursor-pointer`,
					{
						"fill-primary": variant === "primary",
						"fill-secondary": variant === "secondary",
					},
					className
				)}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				{children}
			</svg>
		</div>
	);
}

export default Icon;
