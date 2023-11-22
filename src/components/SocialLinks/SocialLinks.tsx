import type { Link as TLink } from "@/app/menu";
import { Behance, Dribble, Telegram } from "@/components/icons";
import { cn } from "@/utils/component-utils";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

type SocialLink = TLink & {
	icon: React.ReactNode;
};
const SOCIAL_LINKS: Array<SocialLink> = [
	{
		title: "Telegram",
		href: "https://t.me/itsgeorgepng",
		icon: <Telegram variant="secondary" />,
		target: "_blank",
	},
	{
		title: "Behance",
		href: "https://www.behance.net/itsgeorge",
		icon: <Behance variant="secondary" />,
		target: "_blank",
	},
	{
		title: "Dribbble",
		href: "https://dribbble.com/itsgeorge",
		icon: <Dribble variant="secondary" />,
		target: "_blank",
	},
];

type _SocialLinksProps = {};

export type SocialLinksProps = _SocialLinksProps &
	Omit<ComponentPropsWithRef<"ul">, keyof _SocialLinksProps>;

function SocialLinks({ className, ...props }: SocialLinksProps) {
	return (
		<ul className={cn(`flex gap-6`, className)} {...props}>
			{SOCIAL_LINKS.map(({ href, title, target, icon }) => (
				<li key={title}>
					<Link rel="noreferrer noopener" target={target} href={href}>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default SocialLinks;
