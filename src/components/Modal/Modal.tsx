"use client";

import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TimesIcon from "@/components/icons/Times";

type _ModalProps = {
	useCloseIcon?: boolean;
};

export type ModalProps = _ModalProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"div">>, keyof _ModalProps>;

function Modal({ className, children, useCloseIcon, ...props }: ModalProps) {
	const [modalIsActive, setModalIsActive] = useAtom(modalIsActiveAtom);
	const [domIsReady, setDomIsReady] = useState(false);

	useEffect(() => {
		setDomIsReady(true);
	}, []);

	return (
		!!domIsReady &&
		createPortal(
			<>
				{!!useCloseIcon && (
					<>
						<div className="absolute right-6 top-6">
							<TimesIcon onClick={() => setModalIsActive(false)} />
						</div>
					</>
				)}
				<div
					className={cn(
						`border-1 absolute z-50 m-4 scale-0 transform rounded-2xl border border-[#111] bg-[#050505]
				pb-8 pl-8 pr-8 pt-6 transition-transform duration-500 ease-in-out md:m-0`,
						{
							"scale-100": !!modalIsActive,
						},
						className
					)}
					{...props}
				>
					{children}
				</div>
			</>,
			document.getElementById("modal-portal")!
		)
	);
}

export default Modal;
