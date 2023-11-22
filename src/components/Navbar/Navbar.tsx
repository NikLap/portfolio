"use client";

import { Locales } from "@/app/[lang]/dictionaries";
import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import Logo from "@/components/Logo";
import ButtonLanguage from "@/components/buttons/ButtonLanguage";
import useDictionary from "@/hooks/useDictionary";
import { cn } from "@/utils/component-utils";
import { useAtom } from "jotai";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

type _NavbarProps = {
	lang: Locales;
};

export type NavbarProps = _NavbarProps &
	Omit<PropsWithChildren<ComponentPropsWithRef<"nav">>, keyof _NavbarProps>;

function Navbar({ lang, className, children, ...props }: NavbarProps) {
	const [menuIsActive, setMenuIsActive] = useAtom(menuIsActiveAtom);
	const {
		Navbar: { Menu, Close },
	} = useDictionary(lang);
	const menuTitle = !menuIsActive ? Menu : Close;
	return (
		<nav className={cn(`fixed z-50 w-full p-4 md:px-12 md:py-8`, className)} {...props}>
			<div className="flex w-full justify-between">
				<div className="flex items-center gap-6 lg:gap-8">
					<Logo lang={lang} />
					<ButtonLanguage lang={lang} />
				</div>
				<div
					onClick={() => setMenuIsActive((isActive) => !isActive)}
					className="text-primary cursor-pointer text-base md:text-lg"
				>
					{menuTitle}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
