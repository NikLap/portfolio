import modalIsActiveAtom from "@/atoms/modalIsActiveAtom";
import VideoPlayerModal from "@/components/VideoPlayerModal";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

function CaseVideoPlayerModal() {
	const videoPlayerRef = useRef<any>();
	const [modalIsActive] = useAtom(modalIsActiveAtom);
	useEffect(() => {
		if (!modalIsActive && !!videoPlayerRef.current) {
			videoPlayerRef.current.seekTo(0, "seconds");
		}
	}, [modalIsActive]);
	return (
		<VideoPlayerModal
			ref={videoPlayerRef}
			url={"../../../../../case-video.mp4"}
			controls
			playing={modalIsActive}
		/>
	);
}

export default CaseVideoPlayerModal;
