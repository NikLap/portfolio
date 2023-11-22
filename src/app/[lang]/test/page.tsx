"use client";

import Copyable from "@/components/Copyable";
import useFollowingCursorButtonStyles from "@/hooks/useFollowingCursorButton";
import useFooter from "@/hooks/useFooter";
import { cn } from "@/utils/component-utils";
import { useRef } from "react";
import toast from "react-hot-toast";

function Page(props) {
	useFooter({ disable: true });
	const boxRef = useRef<HTMLDivElement | null>(null);
	useFollowingCursorButtonStyles({
		parentRef: boxRef,
		buttonProps: {
			title: "huhu",
			onClick: () => {
				toast.success("Yay");
			},
		},
	});
	return (
		<div
			className={cn(
				`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform`
			)}
		>
			<Copyable>test</Copyable>
			<div
				ref={boxRef}
				className={cn(`ml-20 mt-60 h-[500px] w-[500px] border-2 border-green-500`)}
			></div>
		</div>
	);
}

export default Page;
