"use client";

import { Copy } from "@/components/icons";
import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren, useRef } from "react";

type _CopyableProps = {
	onClick?(copiedText: string): void;
};

export type CopyableProps = _CopyableProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _CopyableProps>;

function Copyable({ className, children, onClick, ...props }: CopyableProps) {
	const childrenRef = useRef<HTMLDivElement | null>(null);
	const handleClick = () => {
		const copiedText = childrenRef.current!.innerText;
		navigator.clipboard.writeText(childrenRef.current!.innerText);
		onClick?.(copiedText);
	};
	return (
		<div
			onClick={handleClick}
			className={cn(`group flex cursor-pointer select-none gap-2`, className)}
			{...props}
		>
			<div ref={childrenRef}>{children}</div>
			<div className="hidden items-start pt-4 lg:flex">
				<Copy />
			</div>
		</div>
	);
}

export default Copyable;
