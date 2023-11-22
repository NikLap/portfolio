import { Metadata } from "next/types";
import config from "@/app/[lang]/config";

const { BASE_URL } = config;

export const metadata: Metadata = {
	title: "Peek",
	description:
		"Revolutionizing design and function, the project showcases a cutting-edge smart speaker concept. During this project I designed an adaptive website, 3D models and animations that transport users into an immersive visual realm.",
	keywords: ["design", "cutting-edge", "smart speaker", "3D models", "peek"],
	metadataBase: new URL(BASE_URL),
};

function Layout({ children }: { children: React.ReactNode }) {
	return children;
}

export default Layout;
