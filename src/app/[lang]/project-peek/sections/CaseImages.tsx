import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import CaseImage, { IphoneCaseImage } from "@/components/CaseImage";
import Button from "@/components/buttons/Button";
import CaseImages from "@/components/sections/CaseImagesSection";
import IphoneCaseSection from "@/components/sections/IphoneCaseSection";
import useFollowingCursorButton from "@/hooks/useFollowingCursorButton";
import PopupImg from "@/public/project-peek/case-images/Pop-up.png";
import CaseVideoWithoutButtonImg from "@/public/project-peek/case-images/case-video-without-button.png";
import ChooseYourPeekImg from "@/public/project-peek/case-images/choose-your-peek.png";
import IphoneBePreparedForTheFutureImg from "@/public/project-peek/case-images/iphone-be-prepared-for-the-future.png";
import IphoneChooseYourPeek2Img from "@/public/project-peek/case-images/iphone-choose-your-peek-2.png";
import IphoneChooseYourPeekImg from "@/public/project-peek/case-images/iphone-choose-your-peek.png";
import IphoneMenuImg from "@/public/project-peek/case-images/iphone-menu.png";
import IphonePeekSpeakerAndInformationImg from "@/public/project-peek/case-images/iphone-peek-speaker-and-information.png";
import IphonePickAnyColorImg from "@/public/project-peek/case-images/iphone-pick-any-color.png";
import PeekMenuImg from "@/public/project-peek/case-images/peek-menu.png";
import PickAnyColorImg from "@/public/project-peek/case-images/pick-any-color.png";
import SpeakerImg from "@/public/project-peek/case-images/speaker.png";
import YourCartImg from "@/public/project-peek/case-images/your-cart.png";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRef } from "react";
import CaseVideoPlayerModal from "../components/CaseVideoPlayerModal";
import { Locales } from "../../dictionaries";
import useDictionary from "@/hooks/useDictionary";

function PeekCaseImages({ lang }: { lang: Locales }) {
	const caseVideoImgRef = useRef<HTMLDivElement | null>(null);
	const [, setModalIsActive] = useAtom(modalIsActiveAtom);
	const dict = useDictionary(lang);
	useFollowingCursorButton({
		parentRef: caseVideoImgRef,
		buttonProps: {
			title: dict["Play video"],
			onClick: () => {
				setModalIsActive(true);
			},
		},
	});
	return (
		<>
			<CaseImages>
				<section>
					<div
						className={`bg-tertiary relative flex items-center
							 justify-center rounded-2xl sm:hidden`}
					>
						<Button
							style={{
								backdropFilter: "blur(16px)",
								color: "white",
							}}
							className="bg-tertiary absolute"
							onClick={() => setModalIsActive(true)}
						>
							{dict["Play video"]}
						</Button>
						<Image
							src={CaseVideoWithoutButtonImg}
							alt="Case video"
							className={"rounded-xl"}
							style={{ width: "100%" }}
						/>
					</div>
					<CaseImage
						ref={caseVideoImgRef}
						className="hidden p-0 sm:block 2xl:p-0"
						imageProps={{
							src: CaseVideoWithoutButtonImg,
							alt: "Case video",
						}}
					/>
				</section>
				<section>
					<CaseImage
						imageProps={{
							src: PickAnyColorImg,
							alt: "Pick any color with the app",
						}}
					/>
				</section>
				<IphoneCaseSection>
					<IphoneCaseImage
						imageProps={{
							src: IphoneBePreparedForTheFutureImg,
							alt: "Iphone be prepared for the future",
						}}
					/>
					<IphoneCaseImage
						imageProps={{
							src: IphonePickAnyColorImg,
							alt: "Iphone pick any color",
						}}
					/>
				</IphoneCaseSection>
				<section>
					<CaseImage
						imageProps={{
							src: ChooseYourPeekImg,
							alt: "Choose your peek",
						}}
					/>
				</section>
				<IphoneCaseSection>
					<IphoneCaseImage
						imageProps={{
							src: IphoneChooseYourPeekImg,
							alt: "Iphone choose your peek",
						}}
					/>
					<IphoneCaseImage
						imageProps={{
							src: IphoneChooseYourPeek2Img,
							alt: "Iphone choose your peek part 2",
						}}
					/>
				</IphoneCaseSection>
				<section>
					<CaseImage
						imageProps={{
							src: PeekMenuImg,
							alt: "Peek menu",
						}}
					/>
				</section>
				<IphoneCaseSection>
					<IphoneCaseImage
						imageProps={{
							src: SpeakerImg,
							alt: "Speaker",
						}}
					/>
					<IphoneCaseImage
						imageProps={{
							src: IphoneMenuImg,
							alt: "Iphone peek menu",
						}}
					/>
				</IphoneCaseSection>
				<section>
					<CaseImage
						imageProps={{
							src: YourCartImg,
							alt: "Your cart",
						}}
					/>
				</section>
				<IphoneCaseSection>
					<IphoneCaseImage
						imageProps={{
							src: IphonePeekSpeakerAndInformationImg,
							alt: "Iphone peek speaker and information",
						}}
					/>
					<IphoneCaseImage
						imageProps={{
							src: PopupImg,
							alt: "Pop up",
						}}
					/>
				</IphoneCaseSection>
			</CaseImages>
			<CaseVideoPlayerModal />
		</>
	);
}

export default PeekCaseImages;
