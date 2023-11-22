import ProjectHeroSection from "@/components/Project/ProjectHeroSection";
import LogotypeImg from "@/public/project-ruble-brothers/Logotype.svg";
import Image from "next/image";
import { Locales } from "../../dictionaries";
import useDictionary from "@/hooks/useDictionary";

function HeroSection({ lang }: { lang: Locales }) {
	const { pages } = useDictionary(lang);
	return (
		<ProjectHeroSection
			lang={lang}
			image={
				<Image
					priority
					alt="Logotype"
					src={LogotypeImg}
					style={{
						width: "100%",
					}}
				/>
			}
			description={<>{pages["project-ruble-brothers"].description}</>}
		/>
	);
}

export default HeroSection;
