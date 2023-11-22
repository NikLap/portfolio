"use client";

import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import Times from "@/components/icons/Times";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _ModalHeaderProps = {
	onClose?(): void;
};

export type ModalHeaderProps = _ModalHeaderProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"h1">>, keyof _ModalHeaderProps>;

function ModalHeader({ className, children, ...props }: ModalHeaderProps) {
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	const handleClose = () => {
		props.onClose?.();
		setModalIsActive(false);
	};
	return (
		<h1
			className={cn(`flex items-center justify-between text-2xl md:min-w-[576px]`, className)}
			{...props}
		>
			{children}
			<Times onClick={handleClose} />
		</h1>
	);
}

export { ModalHeader };
