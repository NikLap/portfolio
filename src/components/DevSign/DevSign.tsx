import { Locales } from "@/app/[lang]/dictionaries";
import Button from "@/components/buttons/Button";
import useDictionary from "@/hooks/useDictionary";
import Link from "next/link";

const PORTFOLIO_LINK = process.env.NEXT_PUBLIC_DEV_SIGN_URL!;

function DevSign({ lang }: { lang: Locales }) {
	const { DevelopedByDavidKimmich } = useDictionary(lang);
	return (
		<Link target="_blank" href={PORTFOLIO_LINK}>
			<Button className="px-4 py-[6px] text-xs sm:py-[6px] sm:text-xs">
				{DevelopedByDavidKimmich}
			</Button>
		</Link>
	);
}

export default DevSign;
