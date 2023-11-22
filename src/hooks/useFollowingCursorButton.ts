import { MutableRefObject, useEffect, useRef } from "react";

type Options = {
	parentRef: MutableRefObject<HTMLElement | null>;
	buttonProps: {
		title: string;
		onClick?: GlobalEventHandlers["onclick"];
	};
};

const setInitialStyles = (button: HTMLButtonElement, parentElement: HTMLElement) => {
	button.classList.add("bg-tertiary");
	const buttonStyle = button.style;
	parentElement.style.cursor = "none";
	buttonStyle.display = "none";
	buttonStyle.cursor = "none";
	buttonStyle.zIndex = "30";
	buttonStyle.position = "absolute";
	buttonStyle.transitionDuration = "0s";
	buttonStyle.backdropFilter = "blur(16px)";
	buttonStyle.color = "white";
};

const updateButtonPosition = (
	e: MouseEvent,
	button: HTMLButtonElement,
	parentElement: HTMLElement
) => {
	const rect = parentElement.getBoundingClientRect()!;
	const isWithinParent =
		e.clientX < rect.right &&
		e.clientX > rect.left &&
		e.clientY < rect.bottom &&
		e.clientY > rect.top;
	if (!isWithinParent) {
		setInitialStyles(button, parentElement);
		return;
	}
	const mouseX = e.clientX;
	const mouseY = e.pageY;
	const transform = `translate(-50%, -50%) translate(${mouseX}px, ${mouseY}px)`;
	button.style.visibility = "visible";
	button.style.transform = transform;
	button.style.display = "block";
};

const useFollowingCursorButton = ({ parentRef, buttonProps }: Options) => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleMouseMove = (e: MouseEvent) => {
		if (!buttonRef.current || !parentRef.current) return;
		updateButtonPosition(e, buttonRef.current!, parentRef.current!);
	};

	useEffect(() => {
		const button = document.getElementById("button-cursor")! as HTMLButtonElement;
		buttonRef.current = button;
		button.innerText = buttonProps.title;
		button.onclick = buttonProps.onClick || null;
		setInitialStyles(button, parentRef.current!);

		window!.addEventListener("mousemove", handleMouseMove);

		return () => {
			window!.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
};

export default useFollowingCursorButton;
