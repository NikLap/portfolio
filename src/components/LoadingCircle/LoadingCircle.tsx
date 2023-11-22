"use client";

import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { cn } from "@/utils/component-utils";

type _LoadingCircleProps = {};

export type LoadingCircleProps = _LoadingCircleProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"span">>, keyof _LoadingCircleProps>;

function LoadingCircle({ className, children, ...props }: LoadingCircleProps) {
	return (
		<span
			className={cn(
				`loading-circle
                border-black after:border-black 
                dark:border-white after:dark:border-white`,
				className
			)}
			{...props}
		></span>
	);
}

export default LoadingCircle;
