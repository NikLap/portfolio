import CaseImage, { IphoneCaseImage } from "@/components/CaseImage";
import CaseImages from "@/components/sections/CaseImagesSection";
import IphoneCaseSection from "@/components/sections/IphoneCaseSection";
import DescriptionPageImg from "@/public/project-yandex/case-images/description-page.png";
import DownloadPageImg from "@/public/project-yandex/case-images/download-page.png";
import IphoneDescriptionPage2Img from "@/public/project-yandex/case-images/iphone-description-page-2.png";
import IphoneDescriptionPageImg from "@/public/project-yandex/case-images/iphone-description-page.png";
import IphoneDownloadPage2Img from "@/public/project-yandex/case-images/iphone-download-page-2.png";
import IphoneDownloadPageImg from "@/public/project-yandex/case-images/iphone-download-page.png";
import IphoneLandingPage2Img from "@/public/project-yandex/case-images/iphone-landing-page-2.png";
import IphoneLandingPageImg from "@/public/project-yandex/case-images/iphone-landing-page.png";
import LandingPageImg from "@/public/project-yandex/case-images/landing-page.png";

function YandexCaseImages() {
	return (
		<CaseImages>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: LandingPageImg,
						alt: "Landing page",
					}}
				/>
			</section>
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: IphoneLandingPageImg,
						alt: "Iphone landing page",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphoneLandingPage2Img,
						alt: "Iphone landing page part 2",
					}}
				/>
			</IphoneCaseSection>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: DescriptionPageImg,
						alt: "Description page",
					}}
				/>
			</section>
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: IphoneDescriptionPageImg,
						alt: "Iphone description page",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphoneDescriptionPage2Img,
						alt: "Iphone description page 2",
					}}
				/>
			</IphoneCaseSection>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: DownloadPageImg,
						alt: "Download page",
					}}
				/>
			</section>
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: IphoneDownloadPageImg,
						alt: "Iphone download page",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphoneDownloadPage2Img,
						alt: "Iphone download page 2",
					}}
				/>
			</IphoneCaseSection>
		</CaseImages>
	);
}

export default YandexCaseImages;
