import { Locales } from "@/app/[lang]/dictionaries";
import menuIsActiveAtom from "@/atoms/menuIsActiveAtom";
import LogoImg from "@/public/Logo.svg";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

function Logo({ lang }: { lang: Locales }) {
	const [, setMenuIsActive] = useAtom(menuIsActiveAtom);
	return (
		<Link
			className="h-6 w-6 md:h-8 md:w-8"
			rel="noreferrer noopener"
			onClick={() => setMenuIsActive(false)}
			href={`/${lang}`}
		>
			<Image className="cursor-pointer" src={LogoImg} alt="Logo" priority />
		</Link>
	);
}

export default Logo;
