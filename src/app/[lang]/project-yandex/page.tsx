"use client";

import ProjectFooter from "@/components/Project/ProjectFooter";
import { cn } from "@/utils/component-utils";
import CaseImages from "./sections/CaseImages";
import HeroSection from "./sections/HeroSection";
import useFooter from "@/hooks/useFooter";
import FooterImg from "@/public/project-yandex/footer-image.png";
import { Locales } from "../dictionaries";

function Page({ params: { lang } }: { params: { lang: Locales } }) {
	useFooter({ disable: true });
	return (
		<div className={cn(``)}>
			<HeroSection lang={lang} />
			<CaseImages />
			<ProjectFooter
				lang={lang}
				imageSrc={FooterImg}
				nextProjectHref="/project-ruble-brothers"
			/>
		</div>
	);
}

export default Page;
