import { forwardRef, useEffect, useState } from "react";
import type { ReactPlayerProps } from "react-player";
import ReactPlayer from "react-player";
import Modal from "../Modal";

const VideoPlayerModal = forwardRef<any, ReactPlayerProps>(function VideoPlayerModal(props, ref) {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);
	return (
		<Modal
			useCloseIcon
			className={`max-h-[184px] max-w-[328px] overflow-hidden p-0 
				sm:max-h-none sm:max-w-none 2xl:max-h-[500px] 2xl:max-w-[888px]`}
		>
			{hasWindow && <ReactPlayer ref={ref} width={"100%"} height={"100%"} {...props} />}
		</Modal>
	);
});

export default VideoPlayerModal;
