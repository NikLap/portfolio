import CaseImage, { IphoneCaseImage } from "@/components/CaseImage";
import CaseImages from "@/components/sections/CaseImagesSection";
import IphoneCaseSection from "@/components/sections/IphoneCaseSection";
import BankImg from "@/public/project-ruble-brothers/case-images/bank.png";
import BenefitsPageImg from "@/public/project-ruble-brothers/case-images/benefits-page.png";
import DescriptionPageImg from "@/public/project-ruble-brothers/case-images/description-page.png";
import IphoneBenefitsPage2Img from "@/public/project-ruble-brothers/case-images/iphone-benefits-page-2.png";
import IphoneBenefitsPageImg from "@/public/project-ruble-brothers/case-images/iphone-benefits-page.png";
import IphoneDescriptionPageImg from "@/public/project-ruble-brothers/case-images/iphone-description-page.png";
import IphoneLandingPage2Img from "@/public/project-ruble-brothers/case-images/iphone-landing-page-2.png";
import IphoneLandingPageImg from "@/public/project-ruble-brothers/case-images/iphone-landing-page.png";
import LandingPageImg from "@/public/project-ruble-brothers/case-images/landing-page.png";

function RubleBrothersCaseImages() {
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
						src: BankImg,
						alt: "Bank",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphoneDescriptionPageImg,
						alt: "Iphone description page",
					}}
				/>
			</IphoneCaseSection>
			<section>
				<CaseImage
					imageProps={{
						className: "rounded-xl",
						src: BenefitsPageImg,
						alt: "Benefits",
					}}
				/>
			</section>
			<IphoneCaseSection>
				<IphoneCaseImage
					imageProps={{
						src: IphoneBenefitsPageImg,
						alt: "Iphone benefits page",
					}}
				/>
				<IphoneCaseImage
					imageProps={{
						src: IphoneBenefitsPage2Img,
						alt: "Iphone benefits page 2",
					}}
				/>
			</IphoneCaseSection>
		</CaseImages>
	);
}

export default RubleBrothersCaseImages;
