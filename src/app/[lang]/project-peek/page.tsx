"use client";

import ProjectFooter from "@/components/Project/ProjectFooter";
import { cn } from "@/utils/component-utils";
import CaseImages from "./sections/CaseImages";
import HeroSection from "./sections/HeroSection";
import useFooter from "@/hooks/useFooter";
import FooterImg from "@/public/project-peek/footer-image.png";
import { Locales } from "../dictionaries";

function Page({ params: { lang } }: { params: { lang: Locales } }) {
	useFooter({ disable: true });
	return (
		<div className={cn(``)}>
			<HeroSection lang={lang} />
			<CaseImages lang={lang} />
			<ProjectFooter lang={lang} imageSrc={FooterImg} nextProjectHref="/project-yandex" />
		</div>
	);
}

export default Page;
