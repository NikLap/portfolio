import CaseCard from "@/components/CaseCard";
import useFollowingCursorButton from "@/hooks/useFollowingCursorButton";
import MainCaseSectionCaseImg from "@/public/main-case-section_case.png";
import { cn } from "@/utils/component-utils";
import { getLocaleHref } from "@/utils/locale-utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentPropsWithRef, useRef } from "react";
import { Locales } from "../dictionaries";
import useDictionary from "@/hooks/useDictionary";

type _MainCaseSectionProps = {
	lang: Locales;
};

export type MainCaseSectionProps = _MainCaseSectionProps &
	Omit<ComponentPropsWithRef<"section">, keyof _MainCaseSectionProps>;

function MainCaseSection({ className, lang, ...props }: MainCaseSectionProps) {
	const parentRef = useRef<HTMLImageElement | null>(null);
	const router = useRouter();
	const dict = useDictionary(lang);
	useFollowingCursorButton({
		parentRef: parentRef,
		buttonProps: {
			title: dict["See this work"],
			onClick: () => {
				router.push(getLocaleHref("/project-peek"));
			},
		},
	});

	return (
		<section className={cn(`relative flex lg:px-12`, className)} {...props}>
			<CaseCard
				className="lg:hidden"
				title="PEEK"
				href={getLocaleHref("/project-peek")}
				src={MainCaseSectionCaseImg}
			/>
			<Image
				ref={parentRef}
				className="hidden rounded-2xl lg:block"
				src={MainCaseSectionCaseImg}
				alt={"Main case section"}
				style={{
					width: "100%",
				}}
			/>
		</section>
	);
}

export default MainCaseSection;
