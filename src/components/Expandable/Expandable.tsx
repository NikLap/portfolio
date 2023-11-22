"use client";

import ArrowDownCircle from "@/components/icons/ArrowDownCircle";
import useToggle from "@/hooks/useToggle";
import { cn } from "@/utils/component-utils";
import autoAnimate from "@formkit/auto-animate";
import classNames from "classnames";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _ExpandableProps = {
	title: string;
	description: string;
};

export type ExpandableProps = _ExpandableProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ExpandableProps>;

function Expandable({ className, children, title, description, ...props }: ExpandableProps) {
	const [isExpanded, , toggleIsExpanded] = useToggle(false);

	return (
		<div
			ref={(ref) => ref && autoAnimate(ref)}
			onClick={toggleIsExpanded}
			className={cn(
				`expandable border-1 border-tertiary
				hover:border-primary group z-10 flex
				cursor-pointer flex-col gap-4
				rounded-lg border p-4 md:w-[576px] md:p-6 md:text-xl`,
				className
			)}
			{...props}
		>
			<div className="flex items-center justify-between gap-8">
				<h1>{title}</h1>
				<ArrowDownCircle
					className={classNames({
						"rotate-180": isExpanded,
					})}
				/>
			</div>
			{isExpanded && (
				<>
					<p className="text-secondary text-sm !leading-[160%] md:text-lg">
						{description}
					</p>
				</>
			)}
		</div>
	);
}

export default Expandable;
