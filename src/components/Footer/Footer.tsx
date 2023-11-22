"use client";

import footerIsActiveAtom from "@/atoms/footerIsActiveAtom";
import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import Copyable from "@/components/Copyable";
import DevSign from "@/components/DevSign";
import SocialLinks from "@/components/SocialLinks";
import Button from "@/components/buttons/Button";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { toast } from "react-hot-toast";
import ContactModal from "../Modals/ContactModal";
import useDictionary from "@/hooks/useDictionary";
import { Locales } from "@/app/[lang]/dictionaries";

type _FooterProps = {
	lang: Locales;
};

export type FooterProps = _FooterProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"footer">>, keyof _FooterProps>;

function Footer({ lang, className, children, ...props }: FooterProps) {
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	const [footerIsActive] = useAtom(footerIsActiveAtom);
	const {
		pages: {
			main: { ContactForm },
		},
	} = useDictionary(lang);
	const handleCopyClick = () => toast.success("Copied");

	return !!footerIsActive ? (
		<>
			<footer
				id="footer"
				className={cn(`flex flex-col justify-center gap-32 lg:gap-[360px]`, className)}
				{...props}
			>
				<div className="flex flex-col items-center gap-6">
					<Copyable onClick={handleCopyClick}>
						<h1 className="text-primary text-[32px] !leading-[150%] underline lg:text-[88px]">
							hello@itsgeorge.pro
						</h1>
					</Copyable>
					<Button onClick={() => setModalIsActive(true)}>{ContactForm}</Button>
				</div>
				<div className="hidden items-center justify-between px-12 py-8 lg:flex">
					<SocialLinks className="gap-8" />
					<DevSign lang={lang} />
					<div className="text-secondary text-sm">© 2023 George Palkin</div>
				</div>
				<div className="flex flex-col items-center gap-10 px-4 py-8 lg:hidden lg:flex-row lg:gap-0">
					<SocialLinks className="gap-8" />
					<div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
						<DevSign lang={lang} />
						<div className="text-secondary text-sm">© 2023 George Palkin</div>
					</div>
				</div>
			</footer>
			<ContactModal />
		</>
	) : null;
}

export default Footer;
