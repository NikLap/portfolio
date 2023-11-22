import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";

type _TextareaProps = {
	hasError?: boolean;
};

export type TextareaProps = _TextareaProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"textarea">>, keyof _TextareaProps>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
	{ className, children, hasError, ...props }: TextareaProps,
	ref
) {
	return (
		<textarea
			ref={ref}
			className={cn(
				`text-tertiary bg-secondary text-primary focus:placeholder:text-primary placeholder:text-tertiary
                rounded-lg px-4 py-3 outline-1 outline-white hover:outline focus:outline`,
				{
					"text-red-500 placeholder:text-red-500": !!hasError,
				},
				className
			)}
			{...props}
		/>
	);
});

export default Textarea;
