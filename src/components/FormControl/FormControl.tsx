import { cn } from "@/utils/component-utils";
import { ComponentPropsWithRef, PropsWithChildren, ReactElement, cloneElement } from "react";

type _FormControlProps = {
	errorMessage?: string | string[];
};

export type FormControlProps = _FormControlProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _FormControlProps>;

function FormControl({ className, children, errorMessage, ...props }: FormControlProps) {
	return (
		<div className={cn(`flex flex-col items-start gap-1`, className)} {...props}>
			{cloneElement(children as ReactElement, {
				hasError: !!errorMessage,
			})}
			{errorMessage instanceof String && (
				<>
					<div className="pl-2 text-sm text-red-500">{errorMessage}</div>
				</>
			)}
			{errorMessage instanceof Array && (
				<>
					<div className="pl-2 text-sm text-red-500">
						{errorMessage.map((msg) => (
							<div key={msg}>{msg}</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default FormControl;
